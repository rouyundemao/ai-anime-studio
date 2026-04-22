@echo off
chcp 65001 >nul
echo ========================================
echo   Install Dependencies (Fixed)
echo ========================================
echo.
echo Switched to sqlite3 (no compilation needed)
echo.

echo Step 1: Installing root dependencies...
cd /d "%~dp0"
call npm install
echo.

echo Step 2: Installing frontend dependencies...
cd frontend
call npm install
echo.

echo Step 3: Installing backend dependencies...
cd ..\backend
call npm install
echo.

echo ========================================
echo   All dependencies installed!
echo ========================================
echo.
echo You can now run start.bat to start the servers
echo.
pause