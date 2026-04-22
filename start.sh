#!/bin/bash
echo "========================================"
echo "  AI 动漫工作室 - 一键启动脚本"
echo "========================================"
echo ""

echo "[1/3] 检查 Node.js..."
if ! command -v node &> /dev/null; then
    echo "[错误] 未安装 Node.js，请先安装 Node.js 20+"
    exit 1
fi
echo "[OK] Node.js 已安装: $(node --version)"

echo ""
echo "[2/3] 安装依赖..."
cd "$(dirname "$0")"

if [ ! -d "node_modules" ]; then
    echo "安装根项目依赖..."
    npm install
fi

cd frontend
if [ ! -d "node_modules" ]; then
    echo "安装前端依赖..."
    npm install
fi

cd ../backend
if [ ! -d "node_modules" ]; then
    echo "安装后端依赖..."
    npm install
fi

cd ..
echo "[OK] 依赖安装完成"

echo ""
echo "[3/3] 启动开发服务器..."
echo "========================================"
echo "  前端: http://localhost:3000"
echo "  后端: http://localhost:4000"
echo "========================================"
echo ""
echo "正在启动... (按 Ctrl+C 停止)"
echo ""

npm run dev