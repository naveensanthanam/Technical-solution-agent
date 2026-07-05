@echo off
echo Starting TechDoc backend server...
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies...
  npm install
)
node backend/server.js
exit /b %ERRORLEVEL%
