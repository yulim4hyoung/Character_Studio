@echo off
setlocal

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed or is not available in PATH.
  echo Please install Node.js first: https://nodejs.org/
  pause
  exit /b 1
)

start "" "http://localhost:5173"
node server\index.js

pause
