# LinguaOCR 🚀

LinguaOCR is a high-performance, full-stack document translation system designed to convert complex documents (PDF/Markdown) from one language to another (e.g., Japanese to English) while meticulously preserving formatting, images, and tables.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![FastAPI](https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

---

## 🏛 Architecture

The project follows a modern decoupled architecture:

### 1. Frontend (React + Vite)
- **Glassmorphism UI**: A premium, modern interface with smooth animations and responsive design.
- **Real-time Monitoring**: Uses **Server-Sent Events (SSE)** to stream live logs and progress percentages from the backend.
- **Job Management**: Allows users to upload documents, track progress, cancel tasks, and download results.

### 2. Backend (FastAPI)
- **Asynchronous Task Queue**: Handles document processing in background threads to keep the UI responsive.
- **RESTful API**: Endpoints for file uploading, job status streaming, task cancellation, and file retrieval.
- **Memory Management**: Efficiently manages job states and temporary processing directories.

### 3. Translation Engine (Python)
- **OCR Integration Support**: Processes Markdown outputs from high-end OCR engines (like PaddleOCR).
- **Intelligent Parsing**: Line-by-line analysis that distinguishes between headings, paragraphs, and HTML-embedded tables/images.
- **Dynamic Translation**: Uses `deep-translator` with rate-limiting protection to avoid API bans.
- **Document Reconstruction**: Uses `python-docx` to rebuild the translated content into a native Microsoft Word format, ensuring tables and images are correctly aligned.

---

## 🛠 How It Works

1.  **Upload**: The user uploads a `.md` or `.pdf` file through the React dashboard.
2.  **Detection**: The backend detects the source language and initializes a translation job.
3.  **Parsing**: The system reads the document and identifies structural elements (Tables, Images, Headings).
4.  **Translation**: Each text segment is translated while preserving inline tags and formatting.
5.  **Reconstruction**:
    -   **Images**: Automatically downloaded and embedded into the Word document.
    -   **Tables**: HTML tables are parsed and recreated as native Word tables.
6.  **Progress Streaming**: The frontend receives continuous updates (logs and percentages) via SSE.
7.  **Download**: Once the job reaches 100%, a download button appears for the final `.docx` file.

---

## 🚀 Setup & Installation

### Prerequisites
- Python 3.10+
- Node.js 18+
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Jrsandy26/LinguaOCR.git
cd LinguaOCR
```

### 2. Backend Setup
```bash
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
cd backend
uvicorn server:app --reload --port 8000
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`.

---

### or push an existing repository from the command line
```bash
git remote add origin https://github.com/Jrsandy26/LinguaOCR.git
git branch -M main
git push -u origin main

```

## 📦 Requirements

The core Python libraries used include:
- `fastapi` & `uvicorn`: API framework.
- `python-docx`: DOCX generation.
- `deep-translator`: Google Translate API integration.
- `beautifulsoup4`: HTML parsing for tables.
- `langdetect`: Automatic source language detection.
- `requests`: Image downloading.

---

## 📝 License
This project is licensed under the MIT License.
