# 轻语绘梦 · QingyuDreams

> 专业的 AI 动漫制作全流程知识平台 — 让灵感低语，让 AI 绘梦

[![brand](https://img.shields.io/badge/brand-轻语绘梦-8B7AB8)](.)
[![version](https://img.shields.io/badge/version-2.0-C23B22)](.)
[![standard](https://img.shields.io/badge/industry--standard-2026-FBBF24)](.)

---

## ✨ 产品定位

**轻语绘梦** 是一套面向专业 AI 动漫创作者的**产品级知识平台**。

不是零散教程的集合，而是一套可复用、可量化、可商用的工作流方法论。

### 📌 核心价值

| 维度 | 说明 |
|---|---|
| 🎯 **产品级方法论** | 8 大模块体系化 · 六步标准化生产 · 可量化的检查清单 |
| ✨ **通用 Prompt 库** | 250+ 模型无关的提示词，跨工具即拿即用 |
| 🛠️ **工具链评测** | 50+ AI 工具横向对比，按场景而非按品牌选型 |
| 💎 **可商用产物** | 从一致性角色到电影级镜头，每个交付物都能直接发行 |

### 👥 适用人群

- 独立动画 / 短片创作者
- 内容创业 / IP 孵化团队
- 漫剧 / 微短剧 / MV / 广告片制作
- 角色设计师 / 概念插画师
- AIGC 工程师 / Prompt 工程师
- 院校师生 / 自学进阶者

---

## 🎨 8 大模块

| # | 模块 | 关键词 | 难度 |
|---|---|---|---|
| 1 | 🎨 艺术理念 | 美学坐标系 · 东方 × 西方 · 电影语言 | 入门 |
| 2 | 📖 故事创作 | 三幕式 · 救猫咪 · 钩子公式 | 入门 |
| 3 | 👤 角色设计 | 一致性方案 · Lora · IP-Adapter | 进阶 |
| 4 | 🌍 世界构建 | 风格指南 · 场景库 · 道具库 | 进阶 |
| 5 | 🖼️ 画面生成 | Midjourney · 即梦 · 通义万相 · ComfyUI | 进阶 |
| 6 | 🎬 动画生成 | Sora · Veo · Kling · Seedance · Runway | 高阶 |
| 7 | ✨ 后期合成 | 剪辑 · 调色 · 配音 · BGM · 字幕 | 高阶 |
| 8 | 🚀 发行运营 | 平台策略 · 付费投流 · IP 变现 | 高阶 |

---

## 🚀 技术栈

### 前端
- **React 18** · Vite 5 · TypeScript
- **TailwindCSS 3** · Zustand · React Router 6
- **MDX** · Gray-Matter

### 后端
- **Node.js 20** · Express 4
- **SQLite3**（Better-SQLite3）

---

## 📁 项目结构

```
qingyu-dreams/
├── frontend/               # 前端 (React + Vite)
│   ├── src/
│   │   ├── components/     # UI 组件（含品牌 BrandLogo）
│   │   ├── pages/          # 8 大模块 + 课程 / 资源 / 工具 / 工作流
│   │   ├── stores/         # Zustand 状态
│   │   └── context/        # 主题与应用上下文
│   └── public/
│       └── logo-qingyu.svg # 品牌 Logo
├── backend/                # 后端 (Express + SQLite)
├── content/                # MDX 内容
│   ├── tutorials/
│   └── reports/
└── package.json
```

---

## 🛠️ 开发指南

### 环境要求
- Node.js 20+
- npm 10+

### 启动
```bash
# 安装依赖
npm install

# 启动开发服务器（前后端并发）
npm run dev

# 构建生产版本
npm run build

# 启动生产后端
npm start
```

开发模式下：
- 前端: `http://localhost:5173`
- 后端: `http://localhost:4000`

---

## 🎨 品牌视觉

| 元素 | 规范 |
|---|---|
| 品牌主色 | 薄雾紫 `#8B7AB8` |
| 品牌辅色 | 朱砂红 `#C23B22` |
| 品牌过渡 | 桃色 `#C2649C` |
| 底色 | 宣纸米白 `#F5F0E8` |
| Logo | 月牙（轻语）+ 笔锋（绘梦）+ 星点（灵感） |

Logo 文件：`frontend/public/logo-qingyu.svg`
Logo 组件：`frontend/src/components/BrandLogo.tsx`

---

## 📜 版权与使用

© 2026 轻语绘梦 · QingyuDreams. All rights reserved.

本平台以东方美学为底、现代数字艺术为驱动，致力于打造专业、开放、可复用的 AI 动漫创作知识基础设施。
