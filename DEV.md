# AI 动漫工作室 - 开发指南

## 快速开始

### 1. 安装依赖
```bash
cd ai-anime-studio
npm install
cd frontend && npm install
cd ../backend && npm install
```

### 2. 启动开发服务器
```bash
# 方式一：同时启动前后端
npm run dev

# 方式二：分别启动
npm run dev:frontend  # 前端: http://localhost:3000
npm run dev:backend   # 后端: http://localhost:4000
```

### 3. 构建生产版本
```bash
npm run build
```

## 项目结构

```
ai-anime-studio/
├── frontend/          # React 前端
│   ├── src/
│   │   ├── components/  # 组件
│   │   ├── pages/       # 页面
│   │   ├── stores/      # 状态管理
│   │   └── App.tsx
│   └── package.json
│
├── backend/           # Express 后端
│   ├── src/
│   │   ├── routes/      # API 路由
│   │   ├── database/    # SQLite 数据库
│   │   └── server.js
│   └── package.json
│
├── content/           # MDX 内容
│   ├── tutorials/      # 教程内容
│   └── guides/         # 指南内容
│
└── package.json       # 根项目配置
```

## API 接口

### 教程 API
- `GET /api/tutorials` - 获取所有教程
- `GET /api/tutorials/:id` - 获取单个教程
- `POST /api/tutorials` - 创建教程
- `PUT /api/tutorials/:id` - 更新教程
- `DELETE /api/tutorials/:id` - 删除教程

### 资源 API
- `GET /api/resources` - 获取所有资源
- `POST /api/resources/:id/download` - 增加下载次数

### 工具 API
- `GET /api/tools` - 获取所有工具
- `GET /api/tools/:id` - 获取单个工具

## 内容管理

所有教程内容使用 MDX 格式编写，存放在 `content/tutorials/` 目录。

### MDX 文件格式

```mdx
---
title: 教程标题
category: 分类
tags: [标签1, 标签2]
duration: 时长
createdAt: 创建日期
author: 作者
---

# 教程内容

正文内容...

## 章节

内容...

:::tip
提示内容
:::
```

## 技术栈

### 前端
- React 18 + TypeScript
- Vite 5
- TailwindCSS 3
- Zustand
- React Router 6

### 后端
- Node.js 20
- Express 4
- SQLite3
- Better-SQLite3

## 个人使用说明

本项目为个人使用项目，主要功能：

1. 教程内容管理
2. 资源素材库
3. AI 工具推荐
4. 个人学习记录

数据库使用 SQLite，无需额外配置，数据存储在 `backend/data/` 目录。