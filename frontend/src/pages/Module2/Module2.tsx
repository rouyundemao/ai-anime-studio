import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopNavigation, SideNavigation, TableOfContents, ModuleFooter, getModule } from '../../components/AdvancedNavigation'

// 模块 2：故事创作艺术
function Module2() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  // 目录章节
  const sections = [
    { id: 'story-soul', title: '故事是灵魂', icon: '🎯' },
    { id: 'three-act', title: '三幕式结构', icon: '🎭' },
    { id: 'hero-journey', title: '英雄之旅', icon: '⚔️' },
    { id: 'character-arc', title: '人物弧光', icon: '👤' },
    { id: 'emotional-rhythm', title: '情感节奏', icon: '🎵' },
    { id: 'practical-steps', title: '实践步骤', icon: '📋' },
    { id: 'story-ai-tutorial', title: 'AI 剧本创作全流程教学', icon: '🤖' }
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
        <aside className="hidden xl:block w-60 flex-shrink-0">
          <div className="fixed top-20 left-4 md:left-8 w-60">
            <SideNavigation currentId="module2" />
          </div>
        </aside>
        <main className="flex-1 min-w-0 xl:mx-60">
          <article className="bg-white rounded-2xl shadow-lg p-4 md:p-8 lg:p-10 w-full">
          <header className="mb-12 border-b border-gray-200 pb-8">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              📖 故事创作艺术
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              故事创作艺术
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              电影级剧本结构设计，人物弧光打造，情感节奏把控
            </p>
            <div className="flex items-center gap-6 mt-6 text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                ⏳ 深度创作
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                📚 专业级内容
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* 核心理念 */}
            <section id="story-soul" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-purple-600 border-l-4 border-purple-500 pl-4">
                🎯 故事是灵魂
              </h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mb-6">
                <blockquote className="text-lg text-gray-700 italic">
                  "没有好故事，再美的画面也只是空洞的皮囊。"
                </blockquote>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-600">故事的三大要素</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🎯</span>
                      <div>
                        <strong className="text-gray-800">冲突</strong>
                        <p className="text-sm text-gray-600 mt-1">核心矛盾，推动情节</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">👤</span>
                      <div>
                        <strong className="text-gray-800">人物</strong>
                        <p className="text-sm text-gray-600 mt-1">情感载体，观众共鸣</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🔄</span>
                      <div>
                        <strong className="text-gray-800">变化</strong>
                        <p className="text-sm text-gray-600 mt-1">人物成长，结局必然</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-pink-600">故事的情感层次</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-xl mr-3 text-pink-500">表层</span>
                      <span className="text-gray-700">视觉奇观、动作场面</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-xl mr-3 text-pink-600">中层</span>
                      <span className="text-gray-700">人物关系、情感纠葛</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-xl mr-3 text-pink-700">深层</span>
                      <span className="text-gray-700">哲学思考、人性探索</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 电影级剧本结构 */}
            <section id="three-act" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-purple-600 border-l-4 border-purple-500 pl-4">
                🎬 电影级剧本结构
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">三幕式结构详解</h3>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold mb-3 text-blue-700">第一幕：铺垫（25%）</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>开场</strong>：建立世界观、介绍主角</li>
                      <li>• <strong>激励事件</strong>：打破平衡，触发故事</li>
                      <li>• <strong>第一幕终点</strong>：主角做出决定，踏上旅程</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="text-xl font-bold mb-3 text-orange-700">第二幕：对抗（50%）</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>B故事</strong>：副线情节，丰富内容</li>
                      <li>• <strong>中点</strong>：主角面临最大挑战</li>
                      <li>• <strong>一无所有</strong>：主角陷入绝望</li>
                      <li>• <strong>第二幕终点</strong>：主角重整旗鼓</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-xl font-bold mb-3 text-green-700">第三幕：解决（25%）</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>高潮</strong>：最终对决，矛盾解决</li>
                      <li>• <strong>结局</strong>：新的平衡，人物成长</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-purple-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-600">其他经典结构</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">🔄</div>
                    <h4 className="font-bold">起承转合</h4>
                    <p className="text-sm text-gray-600 mt-1">东方经典叙事</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">⭕</div>
                    <h4 className="font-bold">英雄之旅</h4>
                    <p className="text-sm text-gray-600 mt-1">12步骤模型</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-bold">救猫咪</h4>
                    <p className="text-sm text-gray-600 mt-1">15节拍结构</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 人物弧光设计 */}
            <section id="hero-journey" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-purple-600 border-l-4 border-purple-500 pl-4">
                👤 人物弧光设计
              </h2>

              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-700">人物弧光的三个阶段</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-center mb-4">
                      <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold">
                        开始状态
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 人物的核心缺陷</li>
                      <li>• 心理防御机制</li>
                      <li>• 初始世界观</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-center mb-4">
                      <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold">
                        变化过程
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 挑战与考验</li>
                      <li>• 失败与反思</li>
                      <li>• 觉醒与改变</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-center mb-4">
                      <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
                        结束状态
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 克服核心缺陷</li>
                      <li>• 获得新的认知</li>
                      <li>• 完成人格成长</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">人物设计要点</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-600">外在目标</h4>
                    <p className="text-sm text-gray-600">看得见的具体目标：打败敌人、完成任务、获得宝藏</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-pink-600">内在需求</h4>
                    <p className="text-sm text-gray-600">看不见的情感需求：获得认可、寻找归属、自我证明</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 情感节奏把控 */}
            <section id="character-arc" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-purple-600 border-l-4 border-purple-500 pl-4">
                🎵 情感节奏把控
              </h2>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-6 text-indigo-700">情感曲线设计</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      高
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-lg">
                      <p className="text-gray-700">开场高潮：吸引注意，建立期待</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      低
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-lg">
                      <p className="text-gray-700">低谷时刻：情感低谷，考验主角</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      高
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-lg">
                      <p className="text-gray-700">结局高潮：情感爆发，完美收尾</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-purple-600">节奏控制技巧</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>张弛有度</strong>：紧张后放松，放松后再紧张</li>
                    <li>• <strong>情感递进</strong>：从小冲突到大冲突</li>
                    <li>• <strong>悬念设置</strong>：让观众持续关注</li>
                    <li>• <strong>情感转折</strong>：意外的情感变化</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-pink-600">情感触发点</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>人物牺牲</strong>：主角为他人付出</li>
                    <li>• <strong>关系转变</strong>：敌人变朋友/朋友变敌人</li>
                    <li>• <strong>真相揭露</strong>：关键信息揭示</li>
                    <li>• <strong>生死时刻</strong>：生命威胁场景</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 实践步骤 */}
            <section id="emotional-rhythm" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-purple-600 border-l-4 border-purple-500 pl-4">
                📋 一步一步创作流程
              </h2>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-purple-700">从零开始创作动人故事</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">确定核心主题</h4>
                      <p className="text-gray-700 mb-3">选择你要表达的核心主题：爱、勇气、成长、牺牲等。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>写下你的核心主题，用一句话表达：这是一个关于____的故事。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设计核心冲突</h4>
                      <p className="text-gray-700 mb-3">确定主要矛盾：人与人、人与自然、人与自我。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>写出冲突的双方，明确冲突的根源。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">构建人物弧光</h4>
                      <p className="text-gray-700 mb-3">设计主角的开始状态、变化过程、结束状态。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>填写人物弧光表格，明确外在目标和内在需求。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">规划三幕结构</h4>
                      <p className="text-gray-700 mb-3">按照三幕式结构，规划每个场景的关键节点。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>使用三幕式模板，填写每个节点的具体内容。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设计情感节奏</h4>
                      <p className="text-gray-700 mb-3">绘制情感曲线，标注高潮和低谷时刻。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>在时间轴上标注情感变化，确保节奏张弛有度。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      6
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">撰写完整剧本</h4>
                      <p className="text-gray-700 mb-3">将所有设计转化为完整的剧本文本。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>按照场景顺序，撰写每个场景的对话和动作。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="story-ai-tutorial" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-purple-600 border-l-4 border-purple-500 pl-4">
                🤖 AI 剧本创作全流程教学
              </h2>
              <p className="text-gray-700 mb-6">
                从创意到成片，用 AI 工具完成电影级剧本的完整创作流程
              </p>
              
              {/* 创意与选题生成 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">创意与选题生成 - AI 实操教学</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    使用 AI 快速生成大量创意灵感，然后筛选和优化最佳创意
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
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：批量创意生成</h5>
                    <p className="text-gray-700 mb-2">生成多个创意候选，方便筛选</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">帮我生成 10 个 [题材类型] 的动漫短片创意，每个创意包含核心主题、核心冲突、人物设定，要求主题有深度，能引发观众情感共鸣，有差异化的创意亮点。</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：创意筛选与优化</h5>
                    <p className="text-gray-700 mb-2">从生成的创意中筛选最有潜力的几个</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">从以上 10 个创意中，筛选出最有潜力的 3 个，并对每个创意进行深化，补充具体的场景设定、人物背景、情感内核。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：确定最终创意</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">从这 3 个深化后的创意中，选择一个作为最终创意，并详细阐述选择理由、创作目标、预期效果。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    选定的创意主题有深度、核心冲突明确、人物设定立体、有差异化亮点、能引发情感共鸣
                  </p>
                </div>
              </div>
              
              {/* 标准化剧本结构搭建 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">标准化剧本结构搭建 - AI 实操教学</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    使用 AI 快速搭建电影级剧本结构，确保故事节奏和结构完整
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Claude 3 Opus</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ChatGPT-4o</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Final Draft AI</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：三幕式结构框架</h5>
                    <p className="text-gray-700 mb-2">使用“救猫咪 15 节拍表”框架</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">帮我按照好莱坞救猫咪 15 节拍表，创作一个 [题材类型] 动漫短片的完整剧本框架，明确标注每个节拍的核心事件、时长占比、情绪峰值，同时设计完整的主角人物弧光，标注主角从开篇到结局的成长转变节点，以及全片的情感曲线起伏。</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：英雄之旅结构</h5>
                    <p className="text-gray-700 mb-2">使用 12 步英雄之旅模型</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">基于以上创意，使用英雄之旅 12 步模型构建剧本结构：1. 普通世界 2. 冒险召唤 3. 拒绝召唤 4. 遇见导师 5. 跨越第一道门槛 6. 试炼、盟友、敌人 7. 深入洞穴 8. 严峻考验 9. 奖赏 10. 返程 11. 复活 12. 满载而归。为每个步骤设计具体的场景和情节。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：三幕式简化结构</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">按照三幕式结构设计剧本框架。第一幕（铺垫，25%）：开场 + 激励事件 + 第一幕终点。第二幕（对抗，50%）：B故事 + 中点 + 一无所有 + 第二幕终点。第三幕（解决，25%）：高潮 + 结局。标注每个节点的具体内容和时长。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    剧本框架结构完整、节奏清晰、情感曲线合理、人物弧光明确、每个节点都有具体内容
                  </p>
                </div>
              </div>
              
              {/* 人物弧光深度设计 */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">人物弧光深度设计 - AI 实操教学</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    用 AI 深入设计人物弧光，确保人物成长逻辑自然、情感递进合理
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
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：人物小传</h5>
                    <p className="text-gray-700 mb-2">为主角和配角设计完整的人物背景</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">为 [角色名] 设计完整的人物小传，包括基本信息、性格特点、背景故事、核心信念、外在目标、内在需求、心理缺陷、成长需求。确保人物设定立体饱满，有独特的辨识度。</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：人物弧光设计</h5>
                    <p className="text-gray-700 mb-2">设计人物从开始到结束的成长路径</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">基于以上人物小传，设计 [角色名] 的完整人物弧光。明确标注人物的开始状态（核心缺陷、心理防御）、变化过程（遇到的挑战、失败的教训、觉醒的时刻）、结束状态（克服缺陷、获得成长、完成转变）。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：人物成长节点</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">为 [角色名] 在剧本的每个关键节点设计成长表现，明确人物在每个节点的心理状态、情绪变化、行为转变。确保人物弧光与情节发展紧密相连，成长过程自然合理。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    人物小传完整立体、人物弧光清晰明确、成长节点具体详细、成长过程自然合理、与情节紧密相连
                  </p>
                </div>
              </div>
              
              {/* 剧本打磨与对白优化 */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-700">剧本打磨与对白优化 - AI 实操教学</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    用 AI 优化剧本的对白和情节节奏，确保每一句话都符合人物性格、推动情节发展
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
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：对白优化</h5>
                    <p className="text-gray-700 mb-2">优化对白，让每一句话都符合人物性格</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">优化以上剧本的对白，确保每一句话都符合人物的性格和身份。对白要简洁有力、推动情节发展、体现人物心理、增强情感张力。删除冗余内容，强化关键对话。</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：情节节奏优化</h5>
                    <p className="text-gray-700 mb-2">调整情节节奏，确保张弛有度</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">分析以上剧本的情节节奏，确保张弛有度、情感递进自然。如有必要，调整场景的顺序、延长或缩短某些场景、增加或删减冲突，确保节奏紧凑流畅。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：最终打磨</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">对剧本进行最终打磨。检查情节逻辑、人物一致性、情感表达、对白质量。确保剧本没有漏洞、没有冗余、情感饱满、节奏流畅。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    对白符合人物性格、情节节奏紧凑流畅、情感递进自然、逻辑自洽无漏洞、情感饱满感人
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* 底部导航 */}
          <ModuleFooter currentId="module2" />
        </article>
        </main>
        
        {/* 右侧：小标题导航 - 固定定位 */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="fixed top-20 right-4 md:right-8 w-64">
            <TableOfContents sections={sections} moduleName="故事创作艺术" />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Module2