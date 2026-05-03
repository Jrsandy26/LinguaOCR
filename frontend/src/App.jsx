import { useState, useRef, useEffect } from 'react';
import { UploadCloud, FileText, CheckCircle, XCircle, FileArchive, Download, X } from 'lucide-react';
import './index.css';

function App() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState("READY"); // READY, UPLOADING, PROCESSING, COMPLETED, ERROR
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("");
  const [logs, setLogs] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [translatedFileName, setTranslatedFileName] = useState("");
  
  const fileInputRef = useRef(null);
  const abortControllerRef = useRef(null);

  const addLog = (msg) => {
    setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), msg }]);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const validateAndSetFile = (selectedFile) => {
    setFile(selectedFile);
    setStatus("READY");
    setProgress(0);
    setLogs([]);
    setDownloadUrl(null);
    setStage("");
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024, sizes = ['Bytes', 'KB', 'MB', 'GB'], i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const [jobId, setJobId] = useState(null);
  const [detectedLang, setDetectedLang] = useState("");

  const handleCancel = async () => {
    if (jobId) {
      try {
        await fetch(`http://localhost:8000/cancel/${jobId}`, { method: 'POST' });
        addLog("Cancellation request sent to server...");
      } catch (e) {
        console.error("Cancel error:", e);
      }
    }
    
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const processFile = async () => {
    setStatus("UPLOADING");
    setStage("Uploading document...");
    setProgress(5);
    setLogs([]);
    setDetectedLang("");
    addLog(`Started processing ${file.name}`);

    abortControllerRef.current = new AbortController();
    
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Step 1: Upload and get Job ID
      const uploadRes = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
        signal: abortControllerRef.current.signal
      });

      if (!uploadRes.ok) throw new Error("Upload failed");
      const { job_id } = await uploadRes.json();
      setJobId(job_id);
      addLog(`Job created: ${job_id}`);

      // Step 2: Stream progress
      setStatus("PROCESSING");
      const response = await fetch(`http://localhost:8000/stream/${job_id}`, {
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) throw new Error("Stream connection failed");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let buffer = "";

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          buffer += decoder.decode(value, { stream: true });
          const messages = buffer.split('\\n\\n');
          buffer = messages.pop();
          
          for (const msg of messages) {
            if (msg.startsWith('data: ')) {
              try {
                const data = JSON.parse(msg.replace('data: ', ''));
                if (data.log) addLog(data.log);
                if (data.progress !== undefined) setProgress(data.progress);
                if (data.stage) setStage(data.stage);
                if (data.detected_lang) setDetectedLang(data.detected_lang);
                if (data.status === "CANCELLED") {
                   setStatus("ERROR");
                   setStage("Cancelled");
                   done = true;
                }
                if (data.status === "COMPLETED") {
                  setStatus("COMPLETED");
                  setStage("Finished");
                  setDownloadUrl(`http://localhost:8000/download/${job_id}`);
                  setTranslatedFileName(`Translated_${file.name.replace('.md', '.docx').replace('.pdf', '.docx')}`);
                  done = true;
                }
                if (data.error) throw new Error(data.error);
              } catch (e) {
                console.error("SSE Parse Error:", e);
              }
            }
          }
        }
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        setStatus("ERROR");
        setStage("Aborted");
      } else {
        console.error(error);
        addLog(`Error: ${error.message}`);
        setStatus("ERROR");
        setStage("Failed");
      }
    }
  };

  const renderStatusBadge = () => {
    switch(status) {
      case "READY": return <span className="status-badge status-ready">Ready</span>;
      case "UPLOADING":
      case "PROCESSING": return <span className="status-badge status-processing">Processing</span>;
      case "COMPLETED": return <span className="status-badge status-completed">Completed</span>;
      case "ERROR": return <span className="status-badge status-error">Error</span>;
      default: return null;
    }
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>LinguaOCR 🚀</h1>
        <p>AI Document Translation System</p>
      </header>

      {!file ? (
        <div 
          className={`upload-zone ${isDragging ? 'drag-active' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <UploadCloud size={64} className="upload-icon" />
          <h3>Drag & Drop your document here</h3>
          <p style={{color: 'var(--text-muted)'}}>Supports PDF and Markdown (.md)</p>
          <button className="btn btn-primary" style={{marginTop: '1rem'}} onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>
            Browse Files
          </button>
          <input 
            type="file" 
            style={{display: 'none'}} 
            ref={fileInputRef} 
            onChange={handleFileChange}
            accept=".pdf,.md"
          />
        </div>
      ) : (
        <div className="file-info-card">
          <div className="file-details">
            <div className="file-meta">
              <FileText size={40} color="var(--primary-color)" />
              <div className="file-meta-text">
                <span className="file-name">{file.name}</span>
                <span className="file-size">{formatBytes(file.size)}</span>
                {detectedLang && (
                  <span style={{fontSize: '0.75rem', color: 'var(--primary-color)', fontWeight: '600'}}>
                    Detected: {detectedLang.toUpperCase()}
                  </span>
                )}
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              {renderStatusBadge()}
              {status === "READY" && (
                <button style={{background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer'}} onClick={() => setFile(null)}>
                  <X size={24} />
                </button>
              )}
            </div>
          </div>

          {(status === "PROCESSING" || status === "UPLOADING" || status === "COMPLETED" || status === "ERROR") && (
            <>
              <div className="progress-section">
                <div className="progress-header">
                  <span>{stage}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: `${progress}%`, backgroundColor: status === 'ERROR' ? 'var(--error-color)' : status === 'COMPLETED' ? 'var(--success-color)' : 'var(--primary-color)' }}></div>
                </div>
              </div>

              <div className="logs-panel">
                {logs.map((log, i) => (
                  <div className="log-entry" key={i}>
                    <span className="log-time">[{log.time}]</span>
                    <span>{log.msg}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {status === "COMPLETED" && (
            <div className="result-section">
              <CheckCircle size={48} color="var(--success-color)" />
              <h3>Translation Successful!</h3>
              <a href={downloadUrl} download={translatedFileName} className="btn btn-success" style={{textDecoration: 'none'}}>
                <Download size={20} /> Download Translated Document
              </a>
              <button className="btn" style={{background: 'transparent', color: 'var(--text-muted)'}} onClick={() => validateAndSetFile(null)}>
                Process Another File
              </button>
            </div>
          )}

          {(status === "READY" || status === "PROCESSING" || status === "UPLOADING" || status === "ERROR") && (
            <div className="action-buttons">
              {status === "READY" || status === "ERROR" ? (
                <button className="btn btn-primary" onClick={processFile}>
                  Upload & Convert
                </button>
              ) : null}
              
              {(status === "PROCESSING" || status === "UPLOADING") && (
                <>
                  <button className="btn btn-primary" disabled>
                    <div className="loader"></div> Processing...
                  </button>
                  <button className="btn btn-danger" onClick={handleCancel}>
                    <XCircle size={20} /> Stop Processing
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
