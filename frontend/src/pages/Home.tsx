import React from 'react'
import { Link } from 'react-router-dom'

const steps = [
  {
    number: 1,
    title: '艺术理念',
    description: '东方美学与西方美学融合，建立动漫美学体系',
    subtitle: '美学是灵魂',
    time: '深度研习',
    tools: '艺术史 · 美学理论 · 电影语言',
    key: '意境营造',
    icon: '🎨'
  },
  {
    number: 2,
    title: '故事创作艺术',
    description: '电影级剧本结构，人物弧光设计，情感节奏把控',
    subtitle: '故事是核心',
    time: '深度创作',
    tools: '剧本结构 · 人物设计 · 情感曲线',
    key: '动人情感',
    icon: '📖'
  },
  {
    number: 3,
    title: '角色设计体系',
    description: '五官美学，发型服装设计，风格统一性控制',
    subtitle: '人物是标识',
    time: '精细打磨',
    tools: '五官比例 · 服装设计 · 风格统一',
    key: '精致美丽',
    icon: '👤'
  },
  {
    number: 4,
    title: '世界构建方法',
    description: '地理生态设定，文明文化创造，历史神话体系',
    subtitle: '世界是舞台',
    time: '宏大构建',
    tools: '世界观 · 文明设定 · 历史体系',
    key: '丰富沉浸',
    icon: '🌍'
  },
  {
    number: 5,
    title: '画面生成',
    description: '电影级画面构建，三层光影设计，细节精度控制',
    subtitle: '画面是呈现',
    time: '极致追求',
    tools: '即梦 AI · 通义万相 · 电影级调色',
    key: '电影质感',
    icon: '🖼️'
  },
  {
    number: 6,
    title: '动画生成',
    description: '物理真实感动画，情感动画表现，艺术化运动表达',
    subtitle: '动画是生命',
    time: '精细调控',
    tools: '可灵 AI · 海螺 AI · Seedance 2.0',
    key: '丝滑流畅',
    icon: '🎬'
  },
  {
    number: 7,
    title: '混合媒体艺术',
    description: '水墨与数字融合，手绘与 AI 结合，电影级后期制作',
    subtitle: '融合是创新',
    time: '艺术探索',
    tools: '水墨艺术 · 手绘结合 · 电影后期',
    key: '艺术创新',
    icon: '✨'
  }
]

const masterFeatures = [
  {
    title: '极致画面',
    description: '电影级画质，每一帧都是艺术品',
    details: ['4K+ 分辨率', '电影级调色', '三层光影', '发丝级精度'],
    icon: '🎨'
  },
  {
    title: '动人故事',
    description: '深刻情感，引发观众共鸣',
    details: ['电影级结构', '人物弧光', '情感曲线', '意境营造'],
    icon: '📖'
  },
  {
    title: '美丽人物',
    description: '精致五官，独特个性，情感丰富',
    details: ['五官美学', '发型设计', '服装体系', '风格统一'],
    icon: '👤'
  },
  {
    title: '丰富世界',
    description: '庞大世界观，细腻设定，沉浸体验',
    details: ['地理设定', '文明体系', '历史神话', '社会结构'],
    icon: '🌍'
  }
]

function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section - 精美渐变背景 */}
      <section className="relative text-center py-16 md:py-24 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-[2rem]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg shadow-primary-500/25 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full animate-ping" />
            🎨 AI 幻梦工作室
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight px-4">
            创作<span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent animate-gradient">精致美丽的世界</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mx-auto leading-relaxed mb-8 px-4">
            动人的故事 <span className="text-primary-400">·</span> 美丽的人物 <span className="text-primary-400">·</span> 丰富的世界
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-8 md:mt-12 px-4">
            <Link 
              to="/module-1" 
              className="group relative bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary-500/25 hover:scale-105 min-w-[280px] text-center overflow-hidden"
            >
              <span className="relative z-10">开启创作之旅 →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link 
              to="/tutorials" 
              className="group bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-primary-200 min-w-[280px] text-center"
            >
              查看完整体系
            </Link>
          </div>
        </div>
      </section>

      {/* 创作目标 - 精美卡片设计 */}
      <section>
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">🎯 我们的创作目标</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            向专业工作室学习，每一个维度都追求极致
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {masterFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              {/* 悬停时的渐变边框效果 */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className="relative bg-white rounded-[22px] p-6 md:p-8">
                <div className="text-5xl md:text-6xl mb-5 md:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">{feature.title}</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">{feature.description}</p>
                <ul className="space-y-2 md:space-y-3">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="text-xs md:text-sm text-gray-500 flex items-center group-hover:text-gray-700 transition-colors">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 七步全流程 - 精美步骤卡片 */}
      <section>
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">🎯 创作七步法</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            从艺术理念到混合媒体，系统化学习 AI 动漫创作
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step) => (
            <Link 
              key={step.number}
              to={`/module-${step.number}`}
              className="group relative bg-white rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              {/* 悬停渐变背景 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div>
                    <span className="text-4xl md:text-5xl mb-2 md:mb-3 block transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {step.icon}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm font-semibold text-accent-600 mb-1 md:mb-2">{step.subtitle}</p>
                  </div>
                  <span className="bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 text-white font-bold w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 text-sm md:text-base">
                    {step.number}
                  </span>
                </div>
                <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm line-clamp-2 group-hover:text-gray-700 transition-colors">{step.description}</p>
                <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <div className="flex items-center text-gray-500 group-hover:text-gray-700 transition-colors">
                    <span className="font-semibold mr-2">⏰</span>
                    <span>{step.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">⭐</span>
                    <span className="bg-gradient-to-r from-accent-100 to-primary-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold">{step.key}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 创作理念 - 精美卡片设计 */}
      <section className="relative bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 rounded-[2rem] p-6 md:p-12 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-200/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">🎨 创作理念</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* 东方美学 */}
            <div className="group bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary-100 hover:border-primary-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                  🎋
                </div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">东方美学（核心）</h3>
              </div>
              <ul className="space-y-4 md:space-y-5">
                <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                  <span className="text-2xl flex-shrink-0">🎋</span>
                  <div>
                    <strong className="text-gray-800 font-bold">留白艺术</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">以空取胜，计白当黑，留 3 分想象空间</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                  <span className="text-2xl flex-shrink-0">🌸</span>
                  <div>
                    <strong className="text-gray-800 font-bold">意境营造</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">情景交融，虚实相生，不着一字尽得风流</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors duration-300">
                  <span className="text-2xl flex-shrink-0">🎵</span>
                  <div>
                    <strong className="text-gray-800 font-bold">韵律节奏</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">气韵生动，随物赋形，动静相宜</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 西方美学 */}
            <div className="group bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-accent-100 hover:border-accent-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                  🎭
                </div>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent-600 to-accent-800 bg-clip-text text-transparent">西方美学（融合）</h3>
              </div>
              <ul className="space-y-4 md:space-y-5">
                <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors duration-300">
                  <span className="text-2xl flex-shrink-0">🎭</span>
                  <div>
                    <strong className="text-gray-800 font-bold">戏剧张力</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">三一律，悬念设置，起承转合</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors duration-300">
                  <span className="text-2xl flex-shrink-0">📐</span>
                  <div>
                    <strong className="text-gray-800 font-bold">黄金比例</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">黄金螺旋，黄金分割，费波那契数列</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent-50 transition-colors duration-300">
                  <span className="text-2xl flex-shrink-0">🎬</span>
                  <div>
                    <strong className="text-gray-800 font-bold">电影语言</strong>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">蒙太奇，镜头组接，声画对位</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - 精美渐变背景 */}
      <section className="relative text-center py-12 md:py-16 overflow-hidden rounded-[2rem]">
        {/* 背景渐变和装饰 */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">准备好开始创作了吗？</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90 px-4 leading-relaxed">
            艺术没有尽头，唯有不断追求极致。<br />
            用 AI 这支新画笔，画出你心中的世界。
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 px-4">
            <Link 
              to="/module-1" 
              className="group relative bg-white text-primary-600 font-bold py-3 px-8 md:py-4 md:px-12 rounded-2xl text-base md:text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-block min-w-[200px] overflow-hidden"
            >
              <span className="relative z-10">开启创作之旅 →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link 
              to="/workflow" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-2xl text-base md:text-xl transition-all duration-300 inline-block min-w-[200px] border border-white/30 hover:border-white/50"
            >
              查看工作流
            </Link>
            <Link 
              to="/tutorials" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-2xl text-base md:text-xl transition-all duration-300 inline-block min-w-[200px] border border-white/30 hover:border-white/50"
            >
              教程中心
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home