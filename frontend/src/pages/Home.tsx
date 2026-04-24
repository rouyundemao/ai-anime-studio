import React from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../components/BrandLogo'
import { NavIcon } from '../components/NavIcons'

// 8 大模块（产品级标题）
const steps = [
  {
    number: 1,
    title: '艺术理念',
    description: '建立通用 AI 动漫的美学坐标系：东方留白 × 西方戏剧张力 × 电影语言',
    subtitle: '美学是灵魂',
    time: '深度研习',
    tools: '艺术史 · 美学理论 · 电影语言',
    key: '风格定调',
    icon: 'palette' as const
  },
  {
    number: 2,
    title: '故事创作',
    description: '从灵感火花到可拍剧本：三幕式 · 救猫咪 · 英雄之旅 · 漫剧/微短剧节奏',
    subtitle: '故事是核心',
    time: '深度创作',
    tools: '剧本结构 · 人物弧光 · 情感曲线',
    key: '动人共鸣',
    icon: 'book' as const
  },
  {
    number: 3,
    title: '角色设计',
    description: '可商用的角色一致性：三视图 / 表情 / 服装 / Lora / IP-Adapter / Reference',
    subtitle: '人物是标识',
    time: '精细打磨',
    tools: '三视图 · Lora 训练 · IP-Adapter',
    key: '一致可复用',
    icon: 'user' as const
  },
  {
    number: 4,
    title: '世界构建',
    description: '世界观地图 · 文明文化 · 历史神话 · 视觉风格指南，让作品有沉浸感',
    subtitle: '世界是舞台',
    time: '宏大构建',
    tools: '世界观 · 风格指南 · 场景库',
    key: '沉浸丰富',
    icon: 'globe' as const
  },
  {
    number: 5,
    title: '画面生成',
    description: 'Midjourney V7 · 即梦 4.5 · 通义万相 3 · SD 3 · ComfyUI 工作流全覆盖',
    subtitle: '画面是呈现',
    time: '极致追求',
    tools: 'Midjourney · 即梦 · 通义万相 · ComfyUI',
    key: '电影质感',
    icon: 'image' as const
  },
  {
    number: 6,
    title: '动画生成',
    description: 'Sora 2 · Veo 3.1 · Kling 3 · Seedance 2 · Runway Gen-4 · 多模型对比与组合策略',
    subtitle: '动画是生命',
    time: '精细调控',
    tools: 'Sora · Veo · Kling · Seedance · Runway',
    key: '丝滑流畅',
    icon: 'film' as const
  },
  {
    number: 7,
    title: '后期合成',
    description: 'AI 配音 + BGM + 调色 + 字幕：剪映 / DaVinci / After Effects 联动工作流',
    subtitle: '合成是收尾',
    time: '精修打磨',
    tools: '剪映 · DaVinci · AE · Suno',
    key: '成片标准',
    icon: 'sparkles' as const
  },
  {
    number: 8,
    title: '发行运营',
    description: '抖音 · 小红书 · YouTube · B 站发行策略 · 付费投流 · IP 变现路径',
    subtitle: '运营是放大',
    time: '商业闭环',
    tools: '平台规则 · 投流 · IP 商业化',
    key: '可变现',
    icon: 'rocket' as const
  }
]

// 核心价值主张
const valueProps = [
  {
    title: '产品级方法论',
    description: '不止教程，是一套可复用的工作流标准',
    details: ['8 大模块体系化', '六步标准化生产', '可量化的检查清单', '可复盘的版本管理'],
    icon: 'target' as const,
    accent: 'from-[#8B7AB8] to-[#5B4B89]'
  },
  {
    title: '通用 Prompt 库',
    description: '250+ 模型无关的提示词，跨工具即拿即用',
    details: ['通用结构模板', '8 大风格分类', '负向 Prompt 套件', '中英文双版本'],
    icon: 'sparkles' as const,
    accent: 'from-[#C2649C] to-[#8B3A6E]'
  },
  {
    title: '工具链对比',
    description: '50+ AI 工具横向评测，按场景而非按品牌选型',
    details: ['速度 / 画质 / 成本三维评分', '中文 vs 英文表现', '版权与商用合规', '替代方案矩阵'],
    icon: 'tools' as const,
    accent: 'from-[#C23B22] to-[#8A1F0E]'
  },
  {
    title: '可商用产物',
    description: '从一致性角色到电影级镜头，每个交付物都能直接发行',
    details: ['角色一致性方案', '电影级调色 LUT', '版权清单与授权', '平台发行规范'],
    icon: 'diamond' as const,
    accent: 'from-[#FBBF24] to-[#B45309]'
  }
]

// 数据指标
const metrics = [
  { value: '8', label: '模块体系', desc: '从美学到发行' },
  { value: '250+', label: '通用 Prompt', desc: '跨模型可用' },
  { value: '50+', label: '工具评测', desc: '按场景选型' },
  { value: '6', label: '标准化步骤', desc: '可复用工作流' }
]

// 适用人群
const audiences = [
  { icon: '🎬', title: '独立动画 / 短片创作者', desc: '从 0 到一部完整 AI 动画短片' },
  { icon: '📱', title: '内容创业 / IP 孵化团队', desc: '低成本批量产出系列化内容' },
  { icon: '🎭', title: '漫剧 / 微短剧制作', desc: '快速验证剧本到成片' },
  { icon: '✏️', title: '角色设计师 / 概念画师', desc: '把灵感稳定落地为可复用资产' },
  { icon: '⚙️', title: 'AIGC / Prompt 工程师', desc: '掌握跨模型的工程化方法' },
  { icon: '🎓', title: '院校师生 / 自学者', desc: '系统化课程，循序渐进' }
]

function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-24 overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E8] via-white to-[#F0EAFB] rounded-[2rem]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B7AB8]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C23B22]/15 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* 品牌徽章 */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#8B7AB8]/30 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-[#8B7AB8]/10">
            <BrandLogo size={24} showText={false} />
            <span className="text-gray-700">轻语绘梦 · QingyuDreams</span>
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-gradient-to-r from-[#8B7AB8] to-[#C23B22] text-white font-bold tracking-wider">2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight px-4">
            让灵感<span className="bg-gradient-to-r from-[#8B7AB8] via-[#C2649C] to-[#C23B22] bg-clip-text text-transparent">低语</span>
            <span className="mx-3 md:mx-4 text-gray-300">·</span>
            让 AI <span className="bg-gradient-to-r from-[#C23B22] via-[#C2649C] to-[#8B7AB8] bg-clip-text text-transparent">绘梦</span>
          </h1>

          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-3 px-4">
            专业的 <strong className="text-gray-800">AI 动漫制作全流程平台</strong>
          </p>
          <p className="text-sm md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed mb-8 px-4">
            8 大模块 · 250+ 通用 Prompt · 50+ 工具评测 · 六步标准化生产流程
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-10 px-4">
            <Link
              to="/module-1"
              className="group relative bg-gradient-to-r from-[#8B7AB8] to-[#C23B22] text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#8B7AB8]/30 hover:scale-105 min-w-[260px] text-center overflow-hidden"
            >
              <span className="relative z-10">🎨 开启创作之旅</span>
            </Link>
            <Link
              to="/prompt-library"
              className="group bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-[#8B7AB8]/40 min-w-[260px] text-center"
            >
              ✨ 浏览 Prompt 库
            </Link>
            <Link
              to="/workflow"
              className="bg-white/60 hover:bg-white text-gray-700 font-semibold py-4 px-8 rounded-2xl text-base transition-all duration-300 border border-gray-200 min-w-[200px] text-center"
            >
              查看生产流程 →
            </Link>
          </div>

          {/* 数据指标条 */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 hover:border-[#8B7AB8]/30 transition-colors">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#8B7AB8] to-[#C23B22] bg-clip-text text-transparent">{m.value}</div>
                <div className="text-sm font-bold text-gray-700 mt-1">{m.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 价值主张 */}
      <section>
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block text-xs font-semibold text-[#8B7AB8] tracking-widest uppercase mb-2">Why QingyuDreams</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">为什么选择轻语绘梦</h2>
          <p className="text-base md:text-xl text-gray-500 max-w-3xl mx-auto">
            不只是教程合集，而是一套可复用、可量化、可商用的产品级方法论
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${feature.accent} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative">
                <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.accent} items-center justify-center mb-5 shadow-lg`}>
                  <NavIcon type={feature.icon} size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start">
                      <span className="text-[#8B7AB8] mr-2 mt-0.5">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8 大模块 */}
      <section>
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block text-xs font-semibold text-[#8B7AB8] tracking-widest uppercase mb-2">Curriculum</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">8 大模块 · 全流程覆盖</h2>
          <p className="text-base md:text-xl text-gray-500 max-w-3xl mx-auto">
            从美学定调到发行变现，每一步都有标准化方法和可复用资产
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step) => (
            <Link
              key={step.number}
              to={`/module-${step.number}`}
              className="group relative bg-white rounded-3xl p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#8B7AB8]/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0EAFB] via-white to-[#FBE8E2] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="w-12 h-12 mb-2 transform group-hover:scale-110 transition-all duration-500">
                      <NavIcon type={step.icon} size={48} />
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-[#8B7AB8] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#C23B22] mb-1">{step.subtitle}</p>
                  </div>
                  <span className="bg-gradient-to-br from-[#8B7AB8] to-[#C23B22] text-white font-bold w-9 h-9 rounded-xl flex items-center justify-center shadow-md text-sm">
                    {step.number}
                  </span>
                </div>
                <p className="text-gray-600 mb-3 leading-relaxed text-xs line-clamp-2 min-h-[32px]">{step.description}</p>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center text-gray-500">
                    <span className="font-semibold mr-1.5">🛠️</span>
                    <span className="truncate">{step.tools}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-gradient-to-r from-[#F0EAFB] to-[#FBE8E2] text-[#C23B22] px-2.5 py-0.5 rounded-full text-xs font-semibold">⭐ {step.key}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 创作理念 */}
      <section className="relative bg-gradient-to-br from-[#F5F0E8] via-[#F0EAFB] to-[#FBE8E2] rounded-[2rem] p-6 md:p-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B7AB8]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C23B22]/15 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block text-xs font-semibold text-[#8B7AB8] tracking-widest uppercase mb-2">Our Philosophy</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">东方美学 × 现代数字艺术</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              我们相信，最好的 AI 动漫，是用全球技术讲东方故事
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="group bg-white/85 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-lg border border-[#8B7AB8]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B7AB8] to-[#5B4B89] rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                  🎋
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">东方美学（基底）</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🎋</span>
                  <div>
                    <strong className="text-gray-800">留白艺术</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">以空取胜，计白当黑，给观众留下想象空间</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🌸</span>
                  <div>
                    <strong className="text-gray-800">意境营造</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">情景交融，虚实相生，言有尽而意无穷</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🎵</span>
                  <div>
                    <strong className="text-gray-800">气韵节奏</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">气韵生动，随物赋形，动静相宜</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="group bg-white/85 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-lg border border-[#C23B22]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C23B22] to-[#8A1F0E] rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                  🎬
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">现代电影语言（驱动）</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🎭</span>
                  <div>
                    <strong className="text-gray-800">三幕剧戏剧张力</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">建立—对抗—解决，节拍清晰，情感递进</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">📐</span>
                  <div>
                    <strong className="text-gray-800">镜头与构图</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">黄金分割、三分法、引导线、景深控制</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🎞️</span>
                  <div>
                    <strong className="text-gray-800">蒙太奇与节奏</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">镜头组接、声画对位、节奏把控</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 适用人群 */}
      <section>
        <div className="text-center mb-10">
          <div className="inline-block text-xs font-semibold text-[#8B7AB8] tracking-widest uppercase mb-2">Who It's For</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">谁在使用轻语绘梦</h2>
          <p className="text-base md:text-xl text-gray-500 max-w-3xl mx-auto">
            从初学者到专业团队，这里都能找到属于你的工作流
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((a) => (
            <div key={a.title} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#8B7AB8]/40 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{a.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800">{a.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-center py-12 md:py-16 overflow-hidden rounded-[2rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B7AB8] via-[#C2649C] to-[#C23B22]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">从今天开始，把灵感绘成梦境</h2>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto opacity-95 leading-relaxed">
            无论你是第一次接触 AI 动漫，还是正在打造自己的 IP，<br className="hidden md:block" />
            轻语绘梦都能给你一条清晰可执行的路径。
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
            <Link
              to="/module-1"
              className="bg-white text-[#8B7AB8] font-bold py-3 px-8 md:py-4 md:px-12 rounded-2xl text-base md:text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 min-w-[200px]"
            >
              🎨 开始第 1 章
            </Link>
            <Link
              to="/workflow"
              className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-2xl text-base md:text-xl transition-all duration-300 min-w-[200px] border border-white/30"
            >
              📊 查看完整工作流
            </Link>
            <Link
              to="/prompt-library"
              className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-2xl text-base md:text-xl transition-all duration-300 min-w-[200px] border border-white/30"
            >
              ✨ Prompt 库
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
