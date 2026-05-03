import os
import json
import uuid
import tempfile
import shutil
import asyncio
from typing import Dict, Any
from collections import deque
from fastapi import FastAPI, UploadFile, File, BackgroundTasks, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse, FileResponse
from translate_script import process_markdown_to_docx_stream

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory store for job states
# job_id -> { status, progress, stage, logs, output_path, cancel_requested }
JOBS: Dict[str, Any] = {}

def run_translation_task(job_id: str, input_path: str, output_path: str):
    """Background task that runs the translation pipeline."""
    job = JOBS[job_id]
    
    try:
        def check_cancellation():
            return job.get("cancel_requested", False)
            
        for status in process_markdown_to_docx_stream(input_path, output_path, cancel_check=check_cancellation):
            if job.get("cancel_requested", False):
                job["status"] = "CANCELLED"
                job["logs"].append({"log": "Task cancelled by user.", "stage": "Cancelled"})
                break
                
            # Update job state
            if "stage" in status: job["stage"] = status["stage"]
            if "progress" in status: job["progress"] = status["progress"]
            if "log" in status: job["logs"].append(status)
            if "detected_lang" in status: job["detected_lang"] = status["detected_lang"]
            
            # Simple way to signal completion in the stream logic
            if status.get("progress") == 100:
                job["status"] = "COMPLETED"
                job["output_path"] = output_path
                
    except Exception as e:
        job["status"] = "ERROR"
        job["logs"].append({"log": f"Error: {str(e)}", "stage": "Failed"})
        print(f"Error in job {job_id}: {e}")

@app.get("/")
async def root():
    return {"status": "Backend is running"}

@app.post("/upload")
async def upload_file(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    job_id = str(uuid.uuid4())
    temp_dir = tempfile.mkdtemp()
    input_path = os.path.join(temp_dir, file.filename)
    output_filename = f"Translated_{file.filename.replace('.md', '.docx').replace('.pdf', '.docx')}"
    output_path = os.path.join(temp_dir, output_filename)
    
    with open(input_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    JOBS[job_id] = {
        "status": "PROCESSING",
        "progress": 0,
        "stage": "Initialized",
        "logs": deque(maxlen=100),
        "output_path": None,
        "output_filename": output_filename,
        "cancel_requested": False,
        "filename": file.filename
    }
    
    background_tasks.add_task(run_translation_task, job_id, input_path, output_path)
    
    return {"job_id": job_id}

@app.get("/stream/{job_id}")
async def stream_job(job_id: str):
    if job_id not in JOBS:
        raise HTTPException(status_code=404, detail="Job not found")

    async def event_generator():
        job = JOBS[job_id]
        last_log_idx = 0
        
        while True:
            # Send any new logs
            while last_log_idx < len(job["logs"]):
                log_entry = job["logs"][last_log_idx]
                # Inject current state into every log for the frontend
                log_entry["progress"] = job["progress"]
                log_entry["stage"] = job["stage"]
                log_entry["status"] = job["status"]
                if "detected_lang" in job: log_entry["detected_lang"] = job["detected_lang"]
                
                yield f"data: {json.dumps(log_entry)}\n\n"
                last_log_idx += 1
            
            if job["status"] in ["COMPLETED", "ERROR", "CANCELLED"]:
                # Send a final signal if needed, but the loop ends
                break
                
            await asyncio.sleep(0.5)

    return StreamingResponse(event_generator(), media_type="text/event-stream")

@app.post("/cancel/{job_id}")
async def cancel_job(job_id: str):
    if job_id in JOBS:
        JOBS[job_id]["cancel_requested"] = True
        return {"message": "Cancellation requested"}
    raise HTTPException(status_code=404, detail="Job not found")

@app.get("/download/{job_id}")
async def download_job(job_id: str):
    if job_id in JOBS and JOBS[job_id]["status"] == "COMPLETED":
        job = JOBS[job_id]
        return FileResponse(
            path=job["output_path"],
            filename=job["output_filename"],
            media_type='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        )
    raise HTTPException(status_code=404, detail="File not ready or job not found")
