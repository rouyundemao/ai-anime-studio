import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopNavigation, SideNavigation, TableOfContents, ModuleFooter, getModule } from '../../components/AdvancedNavigation'

// 模块 1：艺术理念
function Module1() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  // 目录章节
  const sections = [
    { id: 'core-concept', title: '核心理念', icon: '🎯' },
    { id: 'eastern-aesthetics', title: '东方美学体系', icon: '🌸' },
    { id: 'eastern-ai-tutorial', title: '东方美学 AI 实操教学', icon: '🤖' },
    { id: 'western-aesthetics', title: '西方美学融合', icon: '🎭' },
    { id: 'western-ai-tutorial', title: '西方美学 AI 实操教学', icon: '🤖' },
    { id: 'anime-aesthetics', title: '动漫美学特征', icon: '🎨' },
    { id: 'classic-analysis', title: '经典作品分析', icon: '🏛️' },
    { id: 'practice-steps', title: '实践步骤', icon: '📋' }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">正在加载模块内容...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />
      
      <div className="relative flex gap-4 px-4 md:px-8 py-8">
        {/* 左侧：模块导航 - 固定定位 */}
        <aside className="hidden xl:block w-60 flex-shrink-0">
          <div className="fixed top-20 left-4 md:left-8 w-60">
            <SideNavigation currentId="module1" />
          </div>
        </aside>
        
        {/* 中间：教程内容 - 真正全宽 */}
        <main className="flex-1 min-w-0 xl:mx-60">
          <article className="bg-white rounded-2xl shadow-lg p-4 md:p-8 lg:p-10 w-full">
          {/* 模块标题 */}
          <header className="mb-12 border-b border-gray-200 pb-8">
            <div className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              🎨 艺术理念
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              艺术理念
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              东方美学与西方美学融合，建立动漫美学体系
            </p>
            <div className="flex items-center gap-6 mt-6 text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                ⏳ 深度研习
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                📚 专业级内容
              </span>
            </div>
          </header>

          {/* 内容主体 */}
          <div className="prose prose-lg max-w-none">
            <section id="core-concept" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-primary-600 border-l-4 border-primary-500 pl-4">
                🎯 核心理念
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  AI 动漫创作的本质是<strong>艺术表达</strong>，技术只是实现创意的手段。
                  优秀的 AI 动漫作品需要：
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3 text-primary-500">🎨</span>
                    <span><strong>艺术性</strong>：故事有情感、画面有美感、节奏有韵律</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3 text-secondary-500">🔧</span>
                    <span><strong>技术性</strong>：工具熟练、流程清晰、效率高质</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3 text-accent-500">✨</span>
                    <span><strong>创新性</strong>：独特风格、个人表达、突破常规</span>
                  </li>
                </ul>
              </div>
              <blockquote className="border-l-4 border-accent-500 pl-6 py-4 my-6 bg-accent-50 italic text-gray-700">
                <p className="text-lg">"AI 是画笔，你才是艺术家。"</p>
                <cite className="block text-right text-sm text-gray-600 mt-2">— AI 动漫创作理念</cite>
              </blockquote>
            </section>

            <section id="eastern-aesthetics" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-primary-600 border-l-4 border-primary-500 pl-4">
                🌸 东方美学体系
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-green-600">留白艺术</h3>
                  <p className="text-gray-700 mb-3">以空取胜，计白当黑</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 留3分想象空间</li>
                    <li>• 不着一字尽得风流</li>
                    <li>• 虚实相生</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">意境营造</h3>
                  <p className="text-gray-700 mb-3">情景交融，虚实相生</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 情景交融</li>
                    <li>• 虚实相生</li>
                    <li>• 不着一字尽得风流</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-purple-600">韵律节奏</h3>
                  <p className="text-gray-700 mb-3">气韵生动，随物赋形</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 气韵生动</li>
                    <li>• 随物赋形</li>
                    <li>• 动静相宜</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">实践练习</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>分析3部经典东方美学作品的艺术特征</li>
                  <li>建立个人美学参考库（至少收集50幅参考图）</li>
                  <li>设计个人风格定位（确定自己的美学倾向）</li>
                </ol>
              </div>
            </section>

            <section id="eastern-ai-tutorial" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-primary-600 border-l-4 border-primary-500 pl-4">
                🤖 东方美学 AI 实操教学
              </h2>
              <p className="text-gray-700 mb-6">
                将东方美学理念转化为 AI 工具可理解的 Prompt，实现算法化创作
              </p>
              
              {/* 留白艺术 AI 教学 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">留白艺术 - AI 实操教学</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    将"留白"的东方美学理念转化为 AI 绘画工具可理解的 Prompt，实现计白当黑的意境效果
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Midjourney v6</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Stable Diffusion</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ComfyUI</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：基础留白 Prompt 公式</h5>
                    <p className="text-gray-700 mb-2">采用「主体 + 留白关键词 + 风格 + 参数」的固定公式</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[动漫主体与场景描述]，东方水墨画留白艺术，计白当黑，大面积留白，留足想象空间，极简构图，意境悠远，动漫风格，电影级画质，8K 超高清 --ar 16:9 --style raw --s 250</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：意境营造 Prompt</h5>
                    <p className="text-gray-700 mb-2">强调"情景交融 + 虚实相生"的意境营造逻辑</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[核心情节与情绪]，动漫场景，情景交融，虚实相生，通过环境氛围烘托人物情绪，不着一字尽得风流，东方美学意境，电影级光影，氛围感拉满 --ar 16:9 --style raw</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：韵律节奏控制</h5>
                    <p className="text-gray-700 mb-2">用 AI 设计分镜的韵律感</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">为[剧本片段]设计一组动漫分镜，共4个镜头，通过景别切换、运镜快慢、画面疏密，实现气韵生动、动静相宜的韵律节奏 --ar 16:9</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center">
                    <span className="mr-2">✅</span>
                    成果校验标准
                  </h4>
                  <p className="text-green-700">
                    生成的动漫画面具备大面积留白、极简构图、意境悠远、虚实相生的艺术效果，符合东方美学的留白艺术特征
                  </p>
                </div>
              </div>
              
              {/* 意境营造 AI 教学 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">意境营造 - AI 实操教学</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    通过 AI 控制画面的情感氛围，实现"情景交融、不着一字尽得风流"的意境效果
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">基础意境 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[场景描述]，东方美学意境，情景交融，虚实相生，通过朦胧雾气、柔和光线、空白区域营造氛围，让人产生无限遐想 --ar 16:9 --style raw --s 250</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">电影感意境 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[电影级场景]，电影级意境表达，空灵淡定的氛围感，留白艺术，动态模糊，景深控制 --ar 16:9 --style raw --s 300</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    画面具备空灵意境、氛围感强烈、留白区域恰当、让人产生无限想象空间
                  </p>
                </div>
              </div>
            </section>

            <section id="western-aesthetics" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-primary-600 border-l-4 border-primary-500 pl-4">
                🎭 西方美学融合
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-red-600">戏剧张力</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-lg mr-2">🎭</span>
                      <span><strong>三一律</strong>：时间、地点、情节的统一</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2">⚡</span>
                      <span><strong>悬念设置</strong>：引导观众持续关注</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2">🔄</span>
                      <span><strong>起承转合</strong>：故事发展的经典结构</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-yellow-600">黄金比例</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-lg mr-2">📐</span>
                      <span><strong>黄金螺旋</strong>：自然界最美妙的比例</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2">🔢</span>
                      <span><strong>黄金分割</strong>：1:1.618的完美比例</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lg mr-2">🌀</span>
                      <span><strong>费波那契数列</strong>：自然界的数学之美</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold mb-3 text-gray-800">电影语言</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl mb-2">🎬</div>
                    <h4 className="font-bold text-gray-800">蒙太奇</h4>
                    <p className="text-sm text-gray-600">镜头组接的艺术</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl mb-2">📸</div>
                    <h4 className="font-bold text-gray-800">镜头组接</h4>
                    <p className="text-sm text-gray-600">叙事的视觉语言</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-3xl mb-2">🎵</div>
                    <h4 className="font-bold text-gray-800">声画对位</h4>
                    <p className="text-sm text-gray-600">声音与画面的和谐</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="western-ai-tutorial" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-primary-600 border-l-4 border-primary-500 pl-4">
                🤖 西方美学 AI 实操教学
              </h2>
              <p className="text-gray-700 mb-6">
                将西方美学理念转化为 AI 工具可理解的 Prompt，实现算法化创作
              </p>
              
              {/* 黄金比例 AI 教学 */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">黄金比例 - AI 实操教学</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    将“黄金分割”的美学理念转化为 AI 绘画工具可理解的构图控制参数
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Midjourney v6</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Stable Diffusion</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ComfyUI</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：黄金分割构图 Prompt</h5>
                    <p className="text-gray-700 mb-2">使用“主体 + 构图关键词 + 参数”的固定公式</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[动漫主体与场景描述]，构图遵循黄金分割与黄金螺旋法则，主体位于黄金分割点，画面平衡有张力，电影级构图，动漫风格，8K 超高清 --ar 16:9 --style raw --s 250</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：费波那契构图 Prompt</h5>
                    <p className="text-gray-700 mb-2">使用引导线、螺旋线进行构图控制</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[动漫主体与场景描述]，费波那契螺旋构图，黄金螺旋引导线，主体位于螺旋中心点，画面平衡且富有张力，电影级构图，动漫风格，8K 超高清 --ar 16:9 --style raw</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：三分法构图 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[动漫主体与场景描述]，三分法构图，主体位于画面三分之一处，留白区域恰到好处，画面平衡有张力，电影级构图，动漫风格，8K 超高清 --ar 16:9 --style raw</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center">
                    <span className="mr-2">✅</span>
                    成果校验标准
                  </h4>
                  <p className="text-green-700">
                    生成的动漫画面构图符合黄金分割、费波那契螺旋或三分法，主体位于黄金分割点，画面平衡且富有张力
                  </p>
                </div>
              </div>
              
              {/* 戏剧张力 AI 教学 */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-red-700">戏剧张力 - AI 实操教学</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    通过 AI 编剧工具生成符合三一律原则的剧本，实现戏剧张力最大化
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Claude 3 Opus</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ChatGPT-4o</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Kimi</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：三一律剧本框架</h5>
                    <p className="text-gray-700 mb-2">使用“救猫咪 15 节拍表”框架</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">帮我按照好莱坞救猫咪 15 节拍表，创作一个 [题材类型] 动漫短片的完整剧本框架，明确标注每个节拍的核心事件、时长占比、情绪峰值，同时设计完整的主角人物弧光，标注主角从开篇到结局的成长转变节点，以及全片的情感曲线起伏。</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：悬念设置 Prompt</h5>
                    <p className="text-gray-700 mb-2">在剧本中设置层层递进的悬念</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">基于以上剧本框架，在每个关键节点设置一个悬念，采用“倒金字塔”结构，将最重要的信息放在最后揭晓，全程保持观众的好奇心和紧张感。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：起承转合结构 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">优化以上剧本的起承转合结构，确保每个环节节奏紧凑，情感递进自然。起：引入冲突（30秒），承：发展矛盾（60秒），转：高潮爆发（45秒），合：情感释放（15秒）</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    生成的剧本具备完整的时间、地点、情节统一性，悬念层层递进，起承转合结构清晰，情感曲线起伏明显
                  </p>
                </div>
              </div>
              
              {/* 电影语言 AI 教学 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">电影语言 - AI 实操教学</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    用 AI 设计蒙太奇分镜，实现镜头组接的叙事与情绪表达
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ChatGPT-4o</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Claude 3</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Midjourney (分镜图)</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：蒙太奇分镜设计</h5>
                    <p className="text-gray-700 mb-2">使用 AI 生成蒙太奇分镜脚本</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">为 [核心情节] 设计一组蒙太奇动漫分镜，共 6-8 个镜头，通过镜头组接实现叙事与情绪表达，标注每个镜头的画面内容、时长、声画对位设计，符合电影级蒙太奇语言</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：镜头组接逻辑</h5>
                    <p className="text-gray-700 mb-2">学习经典蒙太奇组接逻辑</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">分析以上蒙太奇分镜，确保镜头组接符合电影语言逻辑：时间连续性、空间一致性、情绪递进性。每个镜头的时长与情绪强度成反比，紧张场景用短镜头，抒情场景用长镜头。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：声画对位设计</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">为以上蒙太奇分镜设计声画对位关系，包括背景音乐、音效、人声的安排。音乐节奏与画面节奏同步，音效增强画面真实感，人声推动情节发展。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    生成的蒙太奇分镜具备完整的叙事逻辑、情绪递进、声画对位关系，符合电影级蒙太奇语言
                  </p>
                </div>
              </div>
            </section>

            <section id="anime-aesthetics" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-primary-600 border-l-4 border-primary-500 pl-4">
                🎨 动漫美学特征
              </h2>
              
              <div className="space-y-8">
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-pink-600">角色美学</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">五官比例</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 完美精致五官，五官比例协调</li>
                        <li>• 面部光照均匀，细节清晰</li>
                        <li>• 极致面部细节刻画</li>
                        <li>• 人物结构完美无瑕</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">表情传达</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 眼神是灵魂之窗</li>
                        <li>• 微表情传递情感</li>
                        <li>• 肢体语言丰富</li>
                        <li>• 姿态反映性格</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-indigo-600">场景美学</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl mb-2">📏</div>
                      <h4 className="font-bold text-gray-800">构图法则</h4>
                      <p className="text-sm text-gray-600">三分法、黄金分割</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">💡</div>
                      <h4 className="font-bold text-gray-800">光影运用</h4>
                      <p className="text-sm text-gray-600">三层光影设计</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🎨</div>
                      <h4 className="font-bold text-gray-800">色彩搭配</h4>
                      <p className="text-sm text-gray-600">电影级调色</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-teal-600">色彩美学</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">配色原理</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 同色系：和谐统一</li>
                        <li>• 对比色：强烈视觉</li>
                        <li>• 邻近色：柔和过渡</li>
                        <li>• 互补色：突出重点</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">情感暗示</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 暖色：温暖、激情</li>
                        <li>• 冷色：冷静、忧郁</li>
                        <li>• 高饱和：活力、青春</li>
                        <li>• 低饱和：成熟、稳重</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="classic-analysis" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-primary-600 border-l-4 border-primary-500 pl-4">
                🏛️ 经典作品分析
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-3 text-blue-700">新海诚风格</h3>
                  <p className="text-sm text-gray-700 mb-3">细腻光影，唯美景色</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 光影渲染细腻</li>
                    <li>• 色彩清新明亮</li>
                    <li>• 情感表达深刻</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-3 text-green-700">宫崎骏美学</h3>
                  <p className="text-sm text-gray-700 mb-3">人文关怀，自然之美</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 人文关怀深刻</li>
                    <li>• 自然描绘细腻</li>
                    <li>• 人物设计温馨</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-3 text-purple-700">京阿尼细节</h3>
                  <p className="text-sm text-gray-700 mb-3">细节至上，生活美学</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 细节刻画入微</li>
                    <li>• 生活场景真实</li>
                    <li>• 情感表达细腻</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800">深度分析要点</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-lg mr-2">🔍</span>
                    <span><strong>视觉风格</strong>：色彩、光影、构图的独特之处</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg mr-2">🎭</span>
                    <span><strong>叙事手法</strong>：故事结构、节奏把控、情感表达</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg mr-2">🎨</span>
                    <span><strong>美学特征</strong>：东方美学与西方美学的融合方式</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg mr-2">✨</span>
                    <span><strong>创新元素</strong>：在传统基础上的突破与创新</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="practice-steps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-primary-600 border-l-4 border-primary-500 pl-4">
                📋 实践步骤
              </h2>
              
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl border border-primary-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary-700">一步一步制作流程</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">美学理念确立</h4>
                      <p className="text-gray-700 mb-3">确定你的美学倾向：偏向东方美学还是西方美学，或是两者的融合。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作要点：</strong>收集50-100幅参考图，分析它们的美学特征。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">风格定位</h4>
                      <p className="text-gray-700 mb-3">根据美学理念确定你的视觉风格：清新、厚重、梦幻、写实等。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作要点：</strong>创建风格参考板，明确色彩、光影、构图标准。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">美学原则制定</h4>
                      <p className="text-gray-700 mb-3">制定你在创作中要遵循的美学原则，确保作品风格统一。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作要点：</strong>编写美学原则文档，包括构图、色彩、光影等具体标准。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">实践验证</h4>
                      <p className="text-gray-700 mb-3">用小作品验证你的美学理念，根据效果调整和完善。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作要点：</strong>制作1-2分钟的概念短片，检验美学理念的可行性。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* 底部导航 */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <button 
                onClick={() => navigate('/tutorials')}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                ← 返回教程目录
              </button>
              <button 
                onClick={() => navigate('/module-2')}
                className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                模块 2：故事创作艺术 →
              </button>
            </div>
          </footer>
        </article>
        </main>
        
        {/* 右侧：小标题导航 - 固定定位 */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="fixed top-20 right-4 md:right-8 w-64">
            <TableOfContents sections={sections} moduleName="艺术理念" />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Module1