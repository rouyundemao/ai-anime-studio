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
    { id: 'practical-steps', title: '实践步骤', icon: '📋' }
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
      <SideNavigation currentId="module2" />
      <TableOfContents sections={sections} moduleName="故事创作艺术" />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
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
          </div>

          {/* 底部导航 */}
          <ModuleFooter currentId="module2" />
        </article>
      </div>
    </div>
  )
}

export default Module2