# TechDoc

This workspace is now organized as a frontend/backend repo.

## Structure

- `frontend/` — static web application files (`index.html`, `styles.css`, `app.js`)
- `backend/` — Node/Express server that serves the frontend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the backend server:
   ```bash
   npm start
   ```
3. Open `http://localhost:8080` in your browser.

## Local development

The backend serves the frontend automatically. The current server includes a health endpoint at `/api/health`.

## GitHub push

If you want to connect this repo to GitHub, first install Git locally:

1. Download and install Git for Windows: https://git-scm.com/download/win
2. Open PowerShell in this repository folder:
   ```powershell
   cd "c:\Users\DELL\OneDrive\Documents\Desktop\Techdoc 3.0 - Copy (2)"
   ```

### Option 1: Use the helper script

Run:

```bat
push-to-github.bat
```

The script will ask for your GitHub username and repository name if you do not provide a remote URL.

### Option 2: Provide your GitHub repo directly

```bat
push-to-github.bat https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### Manual Git commands

If you prefer manual commands, use:

```bash
git init
git add .
git commit -m "Initial TechDoc frontend/backend structure"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your actual GitHub username and repository name.
