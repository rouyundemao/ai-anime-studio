import React from 'react'
import { Link } from 'react-router-dom'

const modules = [
  {
    id: 'module1',
    title: '艺术理念',
    subtitle: '东方美学与西方美学融合',
    category: '核心理念',
    duration: '深度研习',
    description: '建立动漫美学体系，理解东方美学与西方美学的完美融合，掌握留白艺术、意境营造、韵律节奏等核心美学原则。优化：增加行业最新趋势、六步标准化流程、工具对比分析。',
    color: 'from-primary-500 to-primary-700',
    icon: '🎨',
    path: '/module-1'
  },
  {
    id: 'module2',
    title: '故事创作艺术',
    subtitle: '电影级剧本结构与人物弧光',
    category: '故事创作',
    duration: '深度创作',
    description: '电影级剧本结构设计，人物弧光打造，情感节奏把控。掌握三幕式结构、英雄之旅、救猫咪等经典剧本模型。优化：增加音乐漫剧新手切入点、灵感捕捉与故事内核。',
    color: 'from-purple-500 to-pink-500',
    icon: '📖',
    path: '/module-2'
  },
  {
    id: 'module3',
    title: '角色设计体系',
    subtitle: '五官美学与风格统一',
    category: '角色设计',
    duration: '精细打磨',
    description: '五官美学体系，发型服装设计，风格统一性控制。掌握三庭五眼、五官比例、服装体系等专业知识。优化：增加多视角参考图、ComfyUI 高级控制、角色一致性技术。',
    color: 'from-blue-500 to-cyan-500',
    icon: '👤',
    path: '/module-3'
  },
  {
    id: 'module4',
    title: '世界构建方法',
    subtitle: '地理生态与文明体系',
    category: '世界观',
    duration: '宏大构建',
    description: '地理生态设定，文明文化创造，历史神话体系。构建完整的架空世界，让故事拥有深厚的土壤。优化：增加场景设计与布局、VR 实时调整、环境音效设计。',
    color: 'from-green-500 to-emerald-500',
    icon: '🌍',
    path: '/module-4'
  },
  {
    id: 'module5',
    title: '画面生成',
    subtitle: '电影级画面与三层光影',
    category: '画面制作',
    duration: '极致追求',
    description: '电影级画面构建，三层光影设计，细节精度控制。掌握构图法则、光影设计、电影级调色等专业技能。优化：增加即梦 Seedance 2.0、Kling 高质量视频生成工具。',
    color: 'from-red-500 to-orange-500',
    icon: '🖼️',
    path: '/module-5'
  },
  {
    id: 'module6',
    title: '动画生成',
    subtitle: '物理真实感与情感表现',
    category: '动画制作',
    duration: '精细调控',
    description: '物理真实感动画，情感动画表现，艺术化运动表达。掌握动画十二原则、情感表达技巧、电影级节奏控制。优化：增加运动捕捉技术、帧数自动化、豆包 TTS 2.0 微表情控制。',
    color: 'from-purple-500 to-indigo-500',
    icon: '🎬',
    path: '/module-6'
  },
  {
    id: 'module7',
    title: '混合媒体艺术',
    subtitle: '水墨数字融合与电影后期',
    category: '后期制作',
    duration: '艺术探索',
    description: '水墨与数字融合，手绘与AI结合，电影级后期制作。掌握水墨风格、手绘AI结合、电影后期全流程。优化：增加发布与推广策略、AI数据分析、商业化变现路径。',
    color: 'from-cyan-500 to-teal-500',
    icon: '✨',
    path: '/module-7'
  },
  {
    id: 'module8',
    title: '六步标准化工作流',
    subtitle: '2026 年最新行业标准',
    category: '工作流程',
    duration: '完整流程',
    description: '基于 2026 年 4 月最新行业标准的六步标准化 AI 动漫制作流程。包含构思与剧本创作、角色设计、场景设计与布局、动画制作、后期制作、发布与推广六大步骤。',
    color: 'from-purple-500 to-indigo-500',
    icon: '🎬',
    path: '/module-8'
  }
]

function Tutorials() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">🎨 AI 幻梦工作室</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          八大模块，系统化学习 AI 动漫创作<br/>
          <span className="text-lg text-gray-500">艺术驱动，技术赋能 — 创作精致美丽的绝境</span>
        </p>
      </div>

      {/* 模块列表 */}
      <div className="space-y-6">
        {modules.map((module, index) => (
          <Link 
            key={module.id}
            to={module.path}
            className="block card overflow-hidden hover:shadow-2xl transition-all duration-300 group"
          >
            <div className={`bg-gradient-to-r ${module.color} p-8 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-5xl flex items-center">{module.icon}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-white/30 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        模块 {index + 1}
                      </span>
                      <span className="text-white/80 text-sm">{module.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{module.title}</h3>
                    <p className="text-white/90">{module.subtitle}</p>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <div className="text-3xl font-bold">{index + 1}</div>
                  <div className="text-white/70 text-sm">/ {modules.length}</div>
                </div>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                {module.description}
              </p>
            </div>
            
            <div className="p-6 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">⏱️ {module.duration}</span>
                </div>
                <span className="bg-white text-gray-800 font-bold py-2 px-6 rounded-lg group-hover:bg-gray-800 group-hover:text-white transition-colors">
                  进入学习 →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 学习路径说明 */}
      <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">📚 建议学习路径</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/module-1" 
              className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              1️⃣ 顶级艺术理念
            </Link>
            <span className="text-gray-400 self-center">→</span>
            <Link 
              to="/module-2" 
              className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              2️⃣ 故事创作艺术
            </Link>
            <span className="text-gray-400 self-center">→</span>
            <Link 
              to="/module-3" 
              className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              3️⃣ 角色设计体系
            </Link>
            <span className="text-gray-400 self-center">→</span>
            <Link 
              to="/module-4" 
              className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              4️⃣ 世界构建方法
            </Link>
            <span className="text-gray-400 self-center">→</span>
            <Link 
              to="/module-5" 
              className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              5️⃣ 顶级画面生成
            </Link>
            <span className="text-gray-400 self-center">→</span>
            <Link 
              to="/module-6" 
              className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              6️⃣ 顶级动画生成
            </Link>
            <span className="text-gray-400 self-center">→</span>
            <Link 
              to="/module-7" 
              className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              7️⃣ 混合媒体艺术
            </Link>
            <span className="text-gray-400 self-center">→</span>
            <Link 
              to="/module-8" 
              className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              8️⃣ 六步标准化工作流
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutorials