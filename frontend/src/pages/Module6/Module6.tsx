import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopNavigation, SideNavigation, TableOfContents, ModuleFooter, getModule } from '../../components/AdvancedNavigation'

// 模块 6：顶级动画生成
function Module6() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  // 目录章节
  const sections = [
    { id: 'animation-basics', title: '动画生成基础', icon: '🎬' },
    { id: 'keyframes', title: '关键帧设计', icon: '✏️' },
    { id: 'motion-guide', title: '运动引导', icon: '💃' },
    { id: 'rendering', title: '渲染技术', icon: '🎨' },
    { id: 'video-export', title: '视频导出', icon: '🎥' },
    { id: 'practical-steps', title: '实践步骤', icon: '📋' },
    { id: 'animation-ai-tutorial', title: 'AI 动画生成全流程教学', icon: '🤖' }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />
      
      <div className="flex gap-6 container mx-auto px-4 py-8 max-w-[1800px]">
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-4">
            <SideNavigation currentId="module6" />
          </div>
        </aside>
        <main className="flex-1 min-w-0">
          <article className="bg-white rounded-2xl shadow-lg p-6 md:p-10 lg:p-12">
          <header className="mb-12 border-b border-gray-200 pb-8">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              🎬 顶级动画生成
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              电影级动画生成
            </h1>
            <p className="text-xl text-gray-600">
              物理真实感动画，情感动画表现，艺术化运动表达
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* 核心理念 */}
            <section id="animation-basics" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-indigo-600 border-l-4 border-indigo-500 pl-4">
                🎭 动画是生命的艺术表达
              </h2>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-6">
                <p className="text-lg text-gray-700">
                  电影级动画 = <strong>物理真实感</strong> + <strong>情感表现力</strong> + <strong>艺术化运动</strong> + <strong>电影级节奏</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white border-2 border-purple-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-lg font-bold mb-2 text-purple-600">物理真实感</h3>
                  <p className="text-xs text-gray-600">遵循物理定律</p>
                </div>
                <div className="bg-white border-2 border-indigo-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">❤️</div>
                  <h3 className="text-lg font-bold mb-2 text-indigo-600">情感表现</h3>
                  <p className="text-xs text-gray-600">传递角色情感</p>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="text-lg font-bold mb-2 text-blue-600">艺术化运动</h3>
                  <p className="text-xs text-gray-600">超越现实的美</p>
                </div>
                <div className="bg-white border-2 border-violet-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🎬</div>
                  <h3 className="text-lg font-bold mb-2 text-violet-600">电影节奏</h3>
                  <p className="text-xs text-gray-600">张弛有度的节奏</p>
                </div>
              </div>
            </section>

            {/* 物理真实感动画 */}
            <section id="keyframes" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-indigo-600 border-l-4 border-indigo-500 pl-4">
                🌍 物理真实感动画体系
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">物理动画的七大法则</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-purple-600">1. 重力与惯性</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>重力加速度</strong>：9.8m/s²</li>
                      <li>• <strong>惯性作用</strong>：物体保持原有状态</li>
                      <li>• <strong>抛物线轨迹</strong>：投掷物的自然路径</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-indigo-600">2. 弹性与碰撞</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>弹性系数</strong>：决定弹跳程度</li>
                      <li>• <strong>能量守恒</strong>：碰撞中的能量转换</li>
                      <li>• <strong>摩擦力</strong>：物体表面的阻力</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-blue-600">3. 流体动力学</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>液体流动</strong>：水、酒、血液</li>
                      <li>• <strong>气体运动</strong>：烟雾、蒸汽、风</li>
                      <li>• <strong>表面张力</strong>：液滴形成</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-violet-600">4. 碰撞检测</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>边界检测</strong>：防止穿模</li>
                      <li>• <strong>物理交互</strong>：物体间相互作用</li>
                      <li>• <strong>反应时间</strong>：即时反馈</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-purple-700">物理模拟技术</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🌊</div>
                    <h4 className="font-bold text-gray-800">流体模拟</h4>
                    <p className="text-sm text-gray-600">液体/气体流动</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">💥</div>
                    <h4 className="font-bold text-gray-800">刚体动力学</h4>
                    <p className="text-sm text-gray-600">碰撞/破碎效果</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">💨</div>
                    <h4 className="font-bold text-gray-800">粒子系统</h4>
                    <p className="text-sm text-gray-600">烟雾/火花/魔法</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 情感动画表现 */}
            <section id="motion-guide" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-indigo-600 border-l-4 border-indigo-500 pl-4">
                ❤️ 情感动画表现体系
              </h2>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-purple-600">情感表达的三大维度</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">👁️</div>
                    <h4 className="font-bold text-gray-800">眼部动画</h4>
                    <p className="text-sm text-gray-600">眼神传达情感</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">👄</div>
                    <h4 className="font-bold text-gray-800">嘴部动画</h4>
                    <p className="text-sm text-gray-600">表情与语调</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">👋</div>
                    <h4 className="font-bold text-gray-800">肢体语言</h4>
                    <p className="text-sm text-gray-600">姿态反映心情</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <h3 className="text-xl font-bold mb-4 text-pink-700">情感动画技术</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">微表情捕捉</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 眉毛细微变化</li>
                        <li>• 眼部肌肉运动</li>
                        <li>• 嘴角微妙弧度</li>
                        <li>• 脸颊微表情</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">情绪转换</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 平滑过渡</li>
                        <li>• 情绪叠加</li>
                        <li>• 瞬间转换</li>
                        <li>• 渐进变化</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">角色情绪设计</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 text-blue-500">😊</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">喜悦</h4>
                        <p className="text-sm text-gray-600">眉毛舒展，嘴角上扬，眼睛眯起</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 text-blue-500">😢</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">悲伤</h4>
                        <p className="text-sm text-gray-600">眉毛下垂，嘴角下沉，眼神黯淡</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 text-blue-500">😠</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">愤怒</h4>
                        <p className="text-sm text-gray-600">眉头紧锁，牙关紧咬，瞳孔放大</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 text-blue-500">😱</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">恐惧</h4>
                        <p className="text-sm text-gray-600">瞳孔放大，眉毛上挑，嘴巴张开</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 艺术化运动表达 */}
            <section id="rendering" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-indigo-600 border-l-4 border-indigo-500 pl-4">
                🎨 艺术化运动表达体系
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">动画的十二原则</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 text-purple-600">挤压与拉伸</h4>
                    <p className="text-sm text-gray-600">赋予物体生命力</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 text-indigo-600">预备动作</h4>
                    <p className="text-sm text-gray-600">为动作做准备</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 text-blue-600">表演夸张</h4>
                    <p className="text-sm text-gray-600">强化视觉效果</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 text-violet-600">慢入慢出</h4>
                    <p className="text-sm text-gray-600">自然的加速减速</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 text-pink-600">弧线运动</h4>
                    <p className="text-sm text-gray-600">自然的运动轨迹</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-2 text-rose-600">次要动作</h4>
                    <p className="text-sm text-gray-600">辅助主动作</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">艺术化表达技巧</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">节奏控制</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• <strong>快节奏</strong>：紧张刺激</li>
                      <li>• <strong>慢节奏</strong>：舒缓优美</li>
                      <li>• <strong>变节奏</strong>：节奏变化丰富</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">夸张变形</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• <strong>表情夸张</strong>：强化情感</li>
                      <li>• <strong>动作夸张</strong>：增强表现力</li>
                      <li>• <strong>变形夸张</strong>：艺术化表达</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 电影级节奏 */}
            <section id="video-export" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-indigo-600 border-l-4 border-indigo-500 pl-4">
                🎬 电影级节奏控制
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-6 text-center text-blue-700">节奏的三个层面</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-lg font-bold mb-3 text-blue-600">宏观节奏</h4>
                    <p className="text-gray-700 mb-2">整个作品的节奏规划</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 开场：快速抓住注意力</li>
                      <li>• 发展：稳步推进情节</li>
                      <li>• 高潮：节奏达到顶峰</li>
                      <li>• 结尾：平稳收尾</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                    <h4 className="text-lg font-bold mb-3 text-purple-600">中观节奏</h4>
                    <p className="text-gray-700 mb-2">场景内部的节奏变化</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 对话：停顿与连贯</li>
                      <li>• 动作：快慢交替</li>
                      <li>• 转场：平滑或突兀</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-500">
                    <h4 className="text-lg font-bold mb-3 text-indigo-600">微观节奏</h4>
                    <p className="text-gray-700 mb-2">单帧动画的节奏感</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 关键帧：精确控制</li>
                      <li>• 中间帧：平滑过渡</li>
                      <li>• 插值：自然变化</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 实践步骤 */}
            <section id="practical-steps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-indigo-600 border-l-4 border-indigo-500 pl-4">
                📋 一步一步生成流程
              </h2>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-purple-700">从零开始生成顶级动画</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">分析物理规律</h4>
                      <p className="text-gray-700 mb-3">确定动画对象的物理属性和运动规律。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>列出重力、惯性、弹性等物理参数。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设计情感表达</h4>
                      <p className="text-gray-700 mb-3">确定角色在该动画片段中的情感状态。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>绘制情绪曲线，确定情感变化节点。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">规划艺术化处理</h4>
                      <p className="text-gray-700 mb-3">确定哪些地方需要夸张变形，哪些地方保持真实。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>制作艺术化处理清单，确定夸张程度。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设定关键帧</h4>
                      <p className="text-gray-700 mb-3">在时间轴上设定关键的动画节点。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>设定起始、中间、结束关键帧。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">生成中间帧</h4>
                      <p className="text-gray-700 mb-3">通过插值算法生成平滑的中间帧。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>使用AI动画生成工具，调整插值参数。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      6
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">优化节奏控制</h4>
                      <p className="text-gray-700 mb-3">调整动画的宏观、中观、微观节奏。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>反复播放，调整节奏节点，确保流畅自然。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="animation-ai-tutorial" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-indigo-600 border-l-4 border-indigo-500 pl-4">
                🤖 AI 动画生成全流程教学
              </h2>
              <p className="text-gray-700 mb-6">
                用 AI 工具从静帧到成片，生成丝滑流畅的物理真实感动画
              </p>
              
              {/* 静帧图生动画 */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">静帧图生动画基础操作</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    使用 AI 工具将静帧图转化为动画，掌握画面一致性、动作幅度、时长控制的核心技巧
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Runway Gen-3</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Pika Labs</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">AnimateDiff</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：图生动画 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[动画描述], 根据以上静帧图生成动画，动作幅度控制在合理范围，遵循物理规律，保持人物造型和五官一致性，丝滑流畅，60 帧 --duration 5s --ar 16:9</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：动作幅度控制</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">动画角色在 5 秒内完成一个完整动作循环，动作幅度适中，避免过度夸张导致失真，保持角色造型一致性，面部五官不变形，服装布料自然摆动。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：画面一致性控制</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">确保动画中角色的五官、发型、服装、配饰在所有帧中完全一致，使用 LoRA 模型或参考图控制，避免画面崩坏和人物变脸。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    动画画面一致、五官发型服装不变、动作幅度适中、丝滑流畅 60 帧、无画面崩坏
                  </p>
                </div>
              </div>
              
              {/* 物理真实感动画 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">物理真实感动画生成</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Runway Gen-3</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Pika Labs</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Kaiber</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">人物动作物理 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[角色动作描述]，符合物理规则的运动，自然的重力和惯性，真实的肢体动作，流畅的过渡，60 帧丝滑动画，物理真实感 --duration 5s --ar 16:9</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">物体运动物理 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[物体运动描述]，符合物理规律的运动，重力、惯性、弹性、摩擦力等物理特性真实，自然的碰撞和反弹，动态模糊，60 帧丝滑动画 --duration 5s</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">自然环境物理 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[自然环境运动]，真实的布料物理、流体物理、动态效果，自然的风、水流、烟雾、火焰等，符合物理规律，沉浸感强，60 帧丝滑动画 --duration 5s</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    动画符合物理规则、重力惯性真实、动作过渡自然、无物理失真、60 帧丝滑流畅
                  </p>
                </div>
              </div>
              
              {/* 情感动画表现 */}
              <div className="bg-gradient-to-br from-pink-50 to-red-50 border border-pink-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-pink-700">情感动画表现</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Runway Gen-3</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Kaiber</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Pika Labs</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">面部表情动画 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[角色表情描述]，通过面部表情传递情感，眼睛眉毛嘴部细节丰富，微表情自然，情绪表达准确，情感真挚动人，60 帧丝滑动画 --duration 3s</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">肢体语言动画 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[角色动作描述]，通过肢体动作传递情感，姿态变化自然，动作幅度和节奏符合情绪，情感表达丰富，60 帧丝滑动画 --duration 3s</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">情感综合动画 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[情感场景描述]，面部表情 + 肢体动作 + 节奏变化，综合传递人物情感，情感递进自然，情绪真实感人，60 帧丝滑动画 --duration 5s</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    面部表情真实丰富、肢体语言自然准确、情感递进合理、观众能够准确感知人物情绪
                  </p>
                </div>
              </div>
              
              {/* 后期精细化调控 */}
              <div className="bg-gradient-to-br from-teal-50 to-green-50 border border-teal-200 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-teal-700">后期精细化调控</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Topaz Video AI</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">剪映专业版</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Adobe Premiere</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：去闪烁处理</h5>
                    <p className="text-gray-700 mb-2">解决 AI 动画常见的闪烁问题</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">使用 Topaz Video AI 或剪映的降闪烁功能，降低动画帧间的闪烁和抖动，确保画面稳定流畅。</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：补帧处理</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">使用 AI 补帧工具（如 RIFE、Morpho）将动画从 24/30 帧提升到 60 帧，增加中间帧，使动画更加丝滑流畅。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：画质修复</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">使用 Topaz Video Enhance AI 进行画质修复，提升分辨率、增强细节、去除噪点，确保最终输出质量。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    动画无闪烁、丝滑流畅 60 帧、分辨率 4K+、细节清晰、无明显瑕疵
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* 底部导航 */}
          <ModuleFooter currentId="module6" />
        </article>
        </main>
        
        {/* 右侧：小标题导航 */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-4">
            <TableOfContents sections={sections} moduleName="动画生成" />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Module6