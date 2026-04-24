import React from 'react'
import { Link } from 'react-router-dom'
import { useHashScroll } from '../hooks/useHashScroll'
import BrandLogo from '../components/BrandLogo'

const resourceCategories = [
  {
    id: 'ai-tools',
    title: 'AI 工具资源',
    icon: '🤖',
    color: 'from-[#6B5FA0] to-[#8B7AB8]',
    description: '即梦、可灵、海螺、Midjourney 等顶级工具完整使用指南',
    count: 7,
    badge: '最常用',
    badgeColor: 'bg-[#8B7AB8]/15 text-[#6B5FA0]',
    items: ['即梦 AI · Seedance 2.0', '可灵 AI · Kling 3.0', '海螺 AI · Hailuo', 'ComfyUI 本地部署', 'Vidu · 生数科技', '通义万相 3.0', 'Midjourney V7']
  },
  {
    id: 'materials',
    title: '高质量素材库',
    icon: '🖼️',
    color: 'from-[#8B7AB8] to-[#C2649C]',
    description: '场景、人物、道具、特效四大类精选素材，附带使用规范',
    count: 4,
    badge: '免费可用',
    badgeColor: 'bg-emerald-50 text-emerald-700',
    items: ['场景素材', '人物素材', '道具素材', '特效素材']
  },
  {
    id: 'audio',
    title: '音频资源库',
    icon: '🎵',
    color: 'from-[#C2649C] to-[#C23B22]',
    description: '背景音乐、音效、配音素材与音乐创作工具完整指南',
    count: 4,
    badge: '版权安全',
    badgeColor: 'bg-blue-50 text-blue-700',
    items: ['背景音乐', '音效库', '配音素材', '音乐创作工具']
  },
  {
    id: 'design',
    title: '设计资源库',
    icon: '🎨',
    color: 'from-[#C23B22] to-[#A82C16]',
    description: '配色方案、字体库、模板与排版指南，让画面更专业',
    count: 4,
    badge: '设计必备',
    badgeColor: 'bg-rose-50 text-rose-700',
    items: ['配色方案', '字体库', '模板库', '排版指南']
  },
  {
    id: 'prompts',
    title: '提示词库',
    icon: '📝',
    color: 'from-[#504782] to-[#6B5FA0]',
    description: '人物、场景、风格、情感四类提示词，即拿即用',
    count: 4,
    badge: '即拿即用',
    badgeColor: 'bg-violet-50 text-violet-700',
    items: ['人物提示词', '场景提示词', '风格提示词', '情感提示词']
  },
  {
    id: 'documents',
    title: '技术文档库',
    icon: '📚',
    color: 'from-[#3A3161] to-[#504782]',
    description: 'AI 工具手册、视频制作、音频处理等专业技术文档',
    count: 4,
    badge: '深度参考',
    badgeColor: 'bg-gray-100 text-gray-600',
    items: ['AI 工具手册', '视频制作文档', '音频处理文档', '编程技术文档']
  },
  {
    id: 'learning',
    title: '学习资料库',
    icon: '🎓',
    color: 'from-[#8B7AB8] to-[#C23B22]',
    description: '艺术史、电影语言、动漫创作与 AI 技术系统化学习路径',
    count: 4,
    badge: '系统进阶',
    badgeColor: 'bg-amber-50 text-amber-700',
    items: ['艺术史资料', '电影语言资料', '动漫创作资料', 'AI 技术资料']
  }
]

// 精选推荐资源
const featuredResources = [
  { id: 'ai-tools', name: '即梦 AI 完整指南', desc: '从零上手 Seedance 2.0，含参数配置与案例', icon: '🤖', tag: '图片 · 视频' },
  { id: 'ai-tools', name: 'ComfyUI 本地部署', desc: 'LoRA 训练 + 工作流配置完整教程', icon: '⚙️', tag: '进阶必读' },
  { id: 'prompts', name: '人物提示词精选', desc: '古风 · 现代 · 赛博朋克角色模板', icon: '👤', tag: '即拿即用' },
  { id: 'audio', name: 'AI 配乐工具对比', desc: 'Suno · Udio · 天工音乐横向评测', icon: '🎵', tag: '配乐首选' },
]

const stats = [
  { value: '7', label: '资源分类' },
  { value: '27', label: '详细资源条目' },
  { value: '80+', label: '实战案例' },
  { value: '持续', label: '更新维护' },
]

function Resources() {
  useHashScroll()
  
  return (
    <div className="space-y-10">
      {/* 页头 */}
      <section className="relative text-center py-14 md:py-18 overflow-hidden rounded-3xl bg-gradient-to-br from-[#F5F0E8] via-white to-[#F0EAFB]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B7AB8]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C23B22]/08 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C2649C]/05 rounded-full blur-3xl pointer-events-none" />

<<<<<<< HEAD
        <div className="relative z-10 px-4">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#8B7AB8]/25 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-sm">
            <BrandLogo size={18} showText={false} />
            <span className="text-gray-600">资源中心 · Resources</span>
            <span className="w-1 h-1 rounded-full bg-[#8B7AB8]/40" />
            <span className="text-[#8B7AB8]">2026 最新整理</span>
          </div>
=======
      {/* 资源分类网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {resourceCategories.map(category => (
          <Link
            key={category.id}
            to={`/resources/${category.id}`}
            data-hash={category.id}
            className="card overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
          >
            {/* 头部 */}
            <div className={`bg-gradient-to-br ${category.color} p-6 text-white`}>
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-sm opacity-90">{category.description}</p>
            </div>
            
            {/* 内容 */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {category.count} 个资源
                </span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </div>
              
              {/* 子项目列表 */}
              <div className="space-y-2">
                {category.items.slice(0, 3).map(item => (
                  <div key={item} className="flex items-center text-gray-600 text-sm">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                    {item}
                  </div>
                ))}
                {category.items.length > 3 && (
                  <div className="text-gray-500 text-sm">
                    +{category.items.length - 3} 更多
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
>>>>>>> a7728e4 (修复：搜索跳转精准化 🎯)

          <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#1F1A3D] tracking-tight">
            创作资源库
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            做好一部 AI 动漫需要的一切，按类整理好放在这里。<br className="hidden md:block" />
            每条资源附带使用指南、参数配置与成品案例。
          </p>

          {/* 统计数字 */}
          <div className="inline-flex items-center gap-8 bg-white/70 backdrop-blur border border-white/60 shadow-md px-8 py-4 rounded-2xl">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black bg-gradient-to-r from-[#8B7AB8] to-[#C23B22] bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 精选推荐 */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <span className="w-1 h-5 rounded-full bg-gradient-to-b from-[#8B7AB8] to-[#C23B22]" />
          <h2 className="text-lg font-bold text-[#1F1A3D]">精选推荐</h2>
          <span className="text-xs text-gray-400 font-normal">最近更新 · 使用最多</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredResources.map((r, i) => (
            <Link
              key={i}
              to={`/resources/${r.id}`}
              className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#8B7AB8]/30 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{r.icon}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#8B7AB8]/10 text-[#6B5FA0]">{r.tag}</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-[#6B5FA0] transition-colors">{r.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 全部分类 */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <span className="w-1 h-5 rounded-full bg-gradient-to-b from-[#8B7AB8] to-[#C23B22]" />
          <h2 className="text-lg font-bold text-[#1F1A3D]">全部分类</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {resourceCategories.map(category => (
            <Link
              key={category.id}
              to={`/resources/${category.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#8B7AB8]/30 hover:shadow-xl transition-all duration-300"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)' }}
            >
              {/* 渐变头部 */}
              <div className={`bg-gradient-to-br ${category.color} p-5`}>
                <div className="flex items-start justify-between">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300 inline-block">{category.icon}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white/90`}>
                    {category.count} 项
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mt-3 mb-1">{category.title}</h3>
                <p className="text-xs text-white/80 leading-relaxed line-clamp-2">{category.description}</p>
              </div>

              {/* 内容区 */}
              <div className="p-4">
                {/* 标签 */}
                <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${category.badgeColor} mb-3`}>
                  {category.badge}
                </span>

                {/* 子项目 */}
                <div className="space-y-1.5">
                  {category.items.slice(0, 3).map(item => (
                    <div key={item} className="flex items-center gap-2 text-gray-600 text-xs">
                      <span className="w-1 h-1 rounded-full bg-[#8B7AB8]/50 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                  {category.items.length > 3 && (
                    <div className="text-[11px] text-gray-400 pl-3">
                      +{category.items.length - 3} 个资源
                    </div>
                  )}
                </div>

                {/* 进入按钮 */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">查看详情</span>
                  <span className="w-7 h-7 rounded-full bg-gray-50 group-hover:bg-[#8B7AB8]/10 flex items-center justify-center transition-colors duration-200">
                    <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#8B7AB8] group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 使用方式 */}
      <section className="rounded-3xl overflow-hidden border border-gray-100" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)' }}>
        <div className="bg-gradient-to-r from-[#F8F6FF] to-[#FDF8F6] px-8 pt-8 pb-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#1F1A3D] mb-1">💡 如何高效使用资源中心</h2>
          <p className="text-sm text-gray-500">三步把资源变成你的生产力</p>
        </div>
        <div className="bg-white p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                gradient: 'from-[#8B7AB8] to-[#6B5FA0]',
                title: '先定场景',
                desc: '从你要做的内容（角色设计 / 场景出图 / 视频片段）出发，再进入对应分类'
              },
              {
                step: '02',
                gradient: 'from-[#C2649C] to-[#A44B82]',
                title: '复制即用',
                desc: '所有 Prompt / 参数 / 命令都支持一键复制，到工具里直接粘贴即可'
              },
              {
                step: '03',
                gradient: 'from-[#C23B22] to-[#A82C16]',
                title: '记录变体',
                desc: '把生效的修改版本存进自己的 Notion / Prompt 库，沉淀属于你的创作资产'
              }
            ].map(({ step, gradient, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources
