@echo off
cd /d "%~dp0"

REM Check for Git
where git >nul 2>nul
if errorlevel 1 (
    echo Git is not installed or not in PATH.
    echo Install Git from https://git-scm.com/downloads and run this script again.
    pause
    exit /b 1
)

set REMOTE_URL=%~1
if "%REMOTE_URL%"=="" (
    echo No remote URL provided.
    set /p USERNAME=Enter your GitHub username: 
    if "%USERNAME%"=="" (
        echo Username cannot be empty.
        pause
        exit /b 1
    )
    set /p REPO=Enter your repository name: 
    if "%REPO%"=="" (
        echo Repository name cannot be empty.
        pause
        exit /b 1
    )
    set REMOTE_URL=https://github.com/%USERNAME%/%REPO%.git
)

echo Using remote: %REMOTE_URL%

echo Initializing Git repository...
git init















echo Adding files...
git add .

echo Committing...
git commit -m "Initial TechDoc frontend/backend structure"

echo Setting branch to main...
git branch -M main

echo Configuring remote...
git remote remove origin 2>nul
git remote add origin %REMOTE_URL%

echo Pushing to GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo Git push failed. Check your credentials, branch name, or remote URL.
    pause
    exit /b 1
)

echo.

echo Push complete.
pause
