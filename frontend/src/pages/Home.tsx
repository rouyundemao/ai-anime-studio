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
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-3xl">
        <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
          🎨 AI 幻梦工作室
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          创作<span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">精致美丽的绝境</span>
        </h1>
        <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
          动人的故事 · 美丽的人物 · 丰富的世界
        </p>
        <div className="flex justify-center gap-6 mt-12">
          <Link to="/module-1" className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            开启创作之旅 →
          </Link>
          <Link to="/tutorials" className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200">
            查看完整体系
          </Link>
        </div>
      </section>

      {/* 创作目标 */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-4">🎯 我们的创作目标</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          向顶级工作室学习，每一个维度都追求极致
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {masterFeatures.map((feature, index) => (
            <div key={index} className="card p-8 hover:scale-105 transition-transform duration-300 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-primary-600">{feature.title}</h3>
              <p className="text-gray-700 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 七步全流程 */}
      <section>
        <h2 className="section-title text-4xl">🎯 创作七步法</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          从艺术理念到混合媒体，系统化学习 AI 动漫创作
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Link 
              key={step.number}
              to={`/module-${step.number}`}
              className="card p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-primary-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-5xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-primary-600 group-hover:text-primary-700">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-accent-600 mb-2">{step.subtitle}</p>
                </div>
                <span className="bg-gradient-to-br from-primary-500 to-accent-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">{step.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="font-semibold mr-2">⏰</span>
                  <span>{step.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-semibold mr-2">⭐</span>
                  <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded">{step.key}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 创作理念 */}
      <section className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl p-12">
        <h2 className="text-4xl font-bold text-center mb-12">🎨 创作理念</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary-600">东方美学（核心）</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-3">🎋</span>
                <div>
                  <strong className="text-gray-800">留白艺术</strong>
                  <p className="text-gray-600 text-sm mt-1">以空取胜，计白当黑，留 3 分想象空间</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🌸</span>
                <div>
                  <strong className="text-gray-800">意境营造</strong>
                  <p className="text-gray-600 text-sm mt-1">情景交融，虚实相生，不着一字尽得风流</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🎵</span>
                <div>
                  <strong className="text-gray-800">韵律节奏</strong>
                  <p className="text-gray-600 text-sm mt-1">气韵生动，随物赋形，动静相宜</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-accent-600">西方美学（融合）</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-3">🎭</span>
                <div>
                  <strong className="text-gray-800">戏剧张力</strong>
                  <p className="text-gray-600 text-sm mt-1">三一律，悬念设置，起承转合</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">📐</span>
                <div>
                  <strong className="text-gray-800">黄金比例</strong>
                  <p className="text-gray-600 text-sm mt-1">黄金螺旋，黄金分割，费波那契数列</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🎬</span>
                <div>
                  <strong className="text-gray-800">电影语言</strong>
                  <p className="text-gray-600 text-sm mt-1">蒙太奇，镜头组接，声画对位</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <section>
        <h2 className="section-title text-4xl">🚀 学习路径</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          从基础到精品，一步一个脚印成长
        </p>

        <div className="space-y-6 max-w-5xl mx-auto">
          <div className="card p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-500">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-primary-600">阶段一：打基础（3 个月）</h3>
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-bold">入门</span>
            </div>
            <p className="text-gray-700 mb-4">掌握基本创作方法，建立艺术基础认知</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 艺术基础：构图、光影、色彩
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 故事基础：剧本结构、人物设计
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 工具入门：AI 工具基本使用
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 小品练习：5-10 分钟短片
              </div>
            </div>
          </div>

          <div className="card p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-secondary-500">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-secondary-600">阶段二：练技巧（6 个月）</h3>
              <span className="bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full font-bold">进阶</span>
            </div>
            <p className="text-gray-700 mb-4">提升技术能力，掌握专业级制作方法</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 画面艺术：电影级画面构建
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 动画技巧：关键帧、物理动画
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 后期制作：剪辑、调色、特效
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 中品练习：1-3 分钟短片
              </div>
            </div>
          </div>

          <div className="card p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-accent-500">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-accent-600">阶段三：成风格（1 年）</h3>
              <span className="bg-accent-100 text-accent-700 px-4 py-2 rounded-full font-bold">精通</span>
            </div>
            <p className="text-gray-700 mb-4">形成个人风格，建立艺术表达体系</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 风格探索：多种风格尝试
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 艺术深化：美学理论、艺术史
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 世界构建：宏大世界观设定
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 大品练习：5-10 分钟短片
              </div>
            </div>
          </div>

          <div className="card p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-600">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-primary-600">阶段四：创精品（2 年+）</h3>
              <span className="bg-primary-600 text-white px-4 py-2 rounded-full font-bold">精通</span>
            </div>
            <p className="text-gray-700 mb-4">创作精品作品，向行业顶尖水平靠近</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 精品制作：电影级品质
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 艺术表达：个人艺术理念
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 精品系列：系列化创作
              </div>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> 行业交流：与专业人士交流
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 text-white rounded-3xl">
        <h2 className="text-4xl font-bold mb-6">准备好开始创作了吗？</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          艺术没有尽头，唯有不断追求极致。<br />
          用 AI 这支新画笔，画出你心中的世界。
        </p>
        <Link to="/module-1" className="bg-white hover:bg-gray-50 text-primary-600 font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-block">
          开启创作之旅 →
        </Link>
      </section>
    </div>
  )
}

export default Home