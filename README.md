# AI Anime Studio - AI 动漫制作全流程平台

> 个人使用的 AI 动漫创作全流程管理平台

## 🚀 技术栈

### 前端
- **React 18** - 最新 React 版本
- **Vite 5** - 极速构建工具
- **TypeScript** - 类型安全
- **TailwindCSS 3** - 原子化 CSS
- **Zustand** - 轻量状态管理
- **React Router 6** - 路由管理
- **MDX** - Markdown + JSX 内容格式

### 后端
- **Node.js 20** - LTS 版本
- **Express 4** - Web 框架
- **SQLite3** - 轻量数据库
- **Better-SQLite3** - 同步 SQLite 客户端
- **JWT** - 身份认证
- **CORS** - 跨域支持

### 内容管理
- **MDX** - 可扩展的 Markdown
- **Gray-Matter** - Frontmatter 解析
- **Remark** - Markdown 处理

## 📁 项目结构

```
ai-anime-studio/
├── frontend/           # 前端项目
│   ├── src/
│   │   ├── components/ # 组件
│   │   ├── pages/      # 页面
│   │   ├── stores/     # 状态管理
│   │   ├── hooks/      # 自定义 Hooks
│   │   ├── utils/      # 工具函数
│   │   └── App.tsx
│   ├── public/
│   └── package.json
├── backend/            # 后端项目
│   ├── src/
│   │   ├── routes/     # 路由
│   │   ├── middleware/ # 中间件
│   │   ├── database/   # 数据库
│   │   └── server.js
│   └── package.json
├── content/            # MDX 内容
│   ├── tutorials/      # 教程
│   ├── guides/         # 指南
│   └── resources/      # 资源
├── assets/             # 静态资源
└── package.json
```

## 🛠️ 开发指南

### 环境要求
- Node.js 20+
- npm 10+

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 📝 内容管理

所有内容文件使用 MDX 格式，支持：
- Markdown 语法
- JSX 组件嵌入
- Frontmatter 元数据
- 代码高亮

### 内容示例
```mdx
---
title: 教程标题
category: tutorials
tags: [标签 1, 标签 2]
createdAt: 2026-04-22
---

# 教程内容

正文内容...
```

## 🔑 特性

- ✅ 前后端分离架构
- ✅ 响应式设计
- ✅ 内容管理系统
- ✅ 教程分类管理
- ✅ 标签搜索
- ✅ 本地数据库
- ✅ 快速开发体验
