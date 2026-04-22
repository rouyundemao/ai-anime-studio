@echo off
chcp 65001 >nul
echo ========================================
echo   AI 动漫工作室 - 详细启动脚本
echo ========================================
echo.

echo [检查 1/6] Node.js 环境...
node --version
if errorlevel 1 (
    echo.
    echo [❌ 错误] 未检测到 Node.js
    echo.
    echo 请按以下步骤安装 Node.js:
    echo 1. 访问 https://nodejs.org/
    echo 2. 下载 LTS 版本 (推荐 20.x)
    echo 3. 安装完成后重新运行此脚本
    echo.
    pause
    exit /b 1
)
echo [✅] Node.js 已安装
echo.

echo [检查 2/6] npm 环境...
npm --version
if errorlevel 1 (
    echo [❌ 错误] npm 未找到
    echo 请重新安装 Node.js
    pause
    exit /b 1
)
echo [✅] npm 已安装
echo.

echo [检查 3/6] 项目路径...
cd /d "%~dp0"
echo 当前目录: %CD%
if not exist "package.json" (
    echo [❌ 错误] 未找到 package.json
    echo 请确保在项目根目录运行此脚本
    pause
    exit /b 1
)
echo [✅] 项目路径正确
echo.

echo [检查 4/6] 前端目录...
if not exist "frontend\package.json" (
    echo [❌ 错误] 未找到 frontend\package.json
    echo 请检查项目结构是否完整
    pause
    exit /b 1
)
echo [✅] 前端目录存在
echo.

echo [检查 5/6] 后端目录...
if not exist "backend\package.json" (
    echo [❌ 错误] 未找到 backend\package.json
    echo 请检查项目结构是否完整
    pause
    exit /b 1
)
echo [✅] 后端目录存在
echo.

echo [检查 6/6] 是否已安装依赖...
if not exist "node_modules" (
    echo [⚠️]  根目录依赖未安装，开始安装...
    call npm install
    if errorlevel 1 (
        echo [❌ 错误] 依赖安装失败
        echo 请检查网络连接或尝试使用国内镜像:
        echo npm config set registry https://registry.npmmirror.com
        pause
        exit /b 1
    )
    echo [✅] 根目录依赖安装完成
)

cd frontend
if not exist "node_modules" (
    echo [⚠️]  前端依赖未安装，开始安装...
    call npm install
    if errorlevel 1 (
        echo [❌ 错误] 前端依赖安装失败
        pause
        exit /b 1
    )
    echo [✅] 前端依赖安装完成
)

cd ..\backend
if not exist "node_modules" (
    echo [⚠️]  后端依赖未安装，开始安装...
    call npm install
    if errorlevel 1 (
        echo [❌ 错误] 后端依赖安装失败
        echo.
        echo 提示: 如果安装失败，可能需要安装编译工具
        echo Windows 用户可以安装 windows-build-tools:
        echo npm install --global windows-build-tools
        pause
        exit /b 1
    )
    echo [✅] 后端依赖安装完成
)

cd ..
echo [✅] 所有依赖检查完成
echo.

echo ========================================
echo   准备启动开发服务器
echo ========================================
echo.
echo 访问地址:
echo   前端: http://localhost:3000
echo   后端: http://localhost:4000
echo.
echo 按 Ctrl+C 停止服务器
echo.
echo 正在启动...
echo.

call npm run dev

pause