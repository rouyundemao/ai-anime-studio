@echo off
chcp 65001 >nul
echo ========================================
echo   AI Anime Studio - Startup Script
echo ========================================
echo.

echo [1/5] Installing root dependencies...
cd /d "%~dp0"
if not exist "node_modules" (
    call npm install
)
echo [OK] Root dependencies installed
echo.

echo [2/5] Installing frontend dependencies...
cd frontend
if not exist "node_modules" (
    call npm install
)
echo [OK] Frontend dependencies installed
echo.

echo [3/5] Installing backend dependencies...
cd ..\backend
if not exist "node_modules" (
    call npm install
)
echo [OK] Backend dependencies installed
echo.

echo [4/5] Starting backend server...
cd ..
start "AI Anime Backend" cmd /k "cd /d %CD%\backend && npm run dev"
timeout /t 3 /nobreak >nul
echo [OK] Backend started on http://localhost:4000
echo.

echo [5/5] Starting frontend server...
start "AI Anime Frontend" cmd /k "cd /d %CD%\frontend && npm run dev"
echo [OK] Frontend started on http://localhost:3000
echo.

echo ========================================
echo   Servers Started Successfully!
echo ========================================
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:4000
echo.
echo Close this window to keep servers running
echo or press Ctrl+C in each server window to stop.
echo.
pause