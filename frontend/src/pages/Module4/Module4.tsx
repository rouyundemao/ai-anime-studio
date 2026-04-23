import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopNavigation, SideNavigation, TableOfContents, ModuleFooter, getModule } from '../../components/AdvancedNavigation'

// 模块 4：世界构建方法
function Module4() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  // 目录章节
  const sections = [
    { id: 'world-building', title: '世界构建基础', icon: '🌍' },
    { id: 'geography', title: '地理环境', icon: '🏔️' },
    { id: 'civilization', title: '文明体系', icon: '🏛️' },
    { id: 'history', title: '历史神话', icon: '📜' },
    { id: 'practical-steps', title: '实践步骤', icon: '📋' },
    { id: 'world-ai-tutorial', title: 'AI 世界观构建全流程教学', icon: '🤖' }
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
      
      <div className="flex gap-6 container mx-auto px-4 py-8 max-w-[1400px]">
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-4">
            <SideNavigation currentId="module4" />
          </div>
        </aside>
        <main className="flex-1 min-w-0 xl:max-w-[800px]">
          <article className="bg-white rounded-2xl shadow-lg p-6 md:p-10 lg:p-12">
          <header className="mb-12 border-b border-gray-200 pb-8">
            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              🌍 世界构建方法
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              世界构建方法
            </h1>
            <p className="text-xl text-gray-600">
              地理生态、文明文化、历史神话体系
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* 核心理念 */}
            <section id="world-building" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-emerald-600 border-l-4 border-emerald-500 pl-4">
                🌐 世界是故事的土壤
              </h2>
              
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl mb-6">
                <p className="text-lg text-gray-700">
                  优秀的世界构建 = <strong>逻辑自洽</strong> + <strong>文化独特性</strong> + <strong>历史纵深感</strong> + <strong>生态完整性</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="text-4xl mb-3">🌍</div>
                  <h3 className="text-xl font-bold mb-2 text-emerald-600">地理生态</h3>
                  <p className="text-gray-700">自然环境如何影响文明发展</p>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                  <div className="text-4xl mb-3">🏛️</div>
                  <h3 className="text-xl font-bold mb-2 text-teal-600">文明文化</h3>
                  <p className="text-gray-700">社会结构和文化习俗体系</p>
                </div>
              </div>
            </section>

            {/* 地理生态设定 */}
            <section id="geography" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-emerald-600 border-l-4 border-emerald-500 pl-4">
                🏞️ 地理生态设定体系
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">地理环境的五个维度</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold mb-3 text-green-600">地形地貌</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>山脉</strong>：分隔文明，阻碍交通</li>
                      <li>• <strong>河流</strong>：滋养文明，促进贸易</li>
                      <li>• <strong>海洋</strong>：连接世界，带来风险</li>
                      <li>• <strong>沙漠</strong>：天然屏障，资源匮乏</li>
                      <li>• <strong>森林</strong>：资源丰富，危险重重</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold mb-3 text-teal-600">气候雨量</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>热带</strong>：湿热多雨，植被茂盛</li>
                      <li>• <strong>温带</strong>：四季分明，适宜居住</li>
                      <li>• <strong>寒带</strong>：寒冷干燥，资源有限</li>
                      <li>• <strong>沙漠</strong>：干旱少雨，昼夜温差大</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold mb-3 text-blue-600">自然资源</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>水源</strong>：生命之源，文明发源地</li>
                      <li>• <strong>矿产</strong>：工业基础，财富来源</li>
                      <li>• <strong>森林</strong>：木材供应，生态平衡</li>
                      <li>• <strong>耕地</strong>：粮食保障，人口上限</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold mb-3 text-indigo-600">生态环境</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>食物链</strong>：生态平衡的基础</li>
                      <li>• <strong>动植物</strong>：地域特色的体现</li>
                      <li>• <strong>自然灾害</strong>：推动剧情的工具</li>
                      <li>• <strong>环保意识</strong>：文明成熟度的体现</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-emerald-700">地理设计技巧</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-emerald-500">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">建立地理坐标系统</h4>
                      <p className="text-sm text-gray-600">创建经纬度系统，确定地点坐标</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-emerald-500">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">绘制 etc. 地图</h4>
                      <p className="text-sm text-gray-600">至少绘制 3 张地图：政治地图、地形地图、气候地图</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-emerald-500">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">考虑地理对文明的影响</h4>
                      <p className="text-sm text-gray-600">山脉会如何影响国家边界？河流如何影响城市布局？</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 文明文化体系 */}
            <section id="civilization" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-emerald-600 border-l-4 border-emerald-500 pl-4">
                🏛️ 文明文化体系
              </h2>

              <div className="bg-white border-2 border-emerald-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-emerald-600">文明的六大核心</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🏛️</div>
                    <h4 className="font-bold text-gray-800">政治</h4>
                    <p className="text-sm text-gray-600">政体、法律、权力结构</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">💰</div>
                    <h4 className="font-bold text-gray-800">经济</h4>
                    <p className="text-sm text-gray-600">货币、贸易、产业</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">📜</div>
                    <h4 className="font-bold text-gray-800">文化</h4>
                    <p className="text-sm text-gray-600">语言、文字、文学</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🎨</div>
                    <h4 className="font-bold text-gray-800">艺术</h4>
                    <p className="text-sm text-gray-600">音乐、绘画、建筑</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🎓</div>
                    <h4 className="font-bold text-gray-800">教育</h4>
                    <p className="text-sm text-gray-600">学校、知识传承</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">⚔️</div>
                    <h4 className="font-bold text-gray-800">军事</h4>
                    <p className="text-sm text-gray-600">军队、武器、战争</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="text-xl font-bold mb-4 text-purple-700">社会阶层体系</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong className="text-purple-600">贵族</strong>：统治阶层，掌握权力</p>
                    <p><strong className="text-indigo-600">士人</strong>：知识分子，文化传承</p>
                    <p><strong className="text-teal-600">平民</strong>：劳动阶层，社会基础</p>
                    <p><strong className="text-gray-600">工匠</strong>：技术阶层，工艺传承</p>
                    <p><strong className="text-amber-600">商人</strong>：经济阶层，财富流通</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">日常生活体系</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">衣食住行</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>衣</strong>：材质、款式、颜色禁忌</li>
                        <li>• <strong>食</strong>：主食、菜肴、饮食习惯</li>
                        <li>• <strong>住</strong>：建筑风格、房屋结构</li>
                        <li>• <strong>行</strong>：交通工具、道路系统</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">社会习俗</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>礼仪</strong>：见面礼、祭祀礼、婚丧礼</li>
                        <li>• <strong>节日</strong>：传统节日、庆典活动</li>
                        <li>• <strong>信仰</strong>：宗教信仰、 superstition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 历史神话体系 */}
            <section id="history" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-emerald-600 border-l-4 border-emerald-500 pl-4">
                ⏳ 历史神话体系
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">历史的时间维度</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 text-emerald-600">远古时期</h4>
                    <p className="text-sm text-gray-700 mb-2">创世神话、文明起源</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 创世传说</li>
                      <li>• 神话时代</li>
                      <li>• 早期文明</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 text-teal-600">黄金时期</h4>
                    <p className="text-sm text-gray-700 mb-2">帝国盛世、文化繁荣</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 文化巅峰</li>
                      <li>• 科技进步</li>
                      <li>• 艺术繁荣</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 text-indigo-600">现代时期</h4>
                    <p className="text-sm text-gray-700 mb-2">当前时代、社会现状</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 当前政局</li>
                      <li>• 社会矛盾</li>
                      <li>• 未来走向</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-emerald-600">神话体系构建</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">创世神话</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 宇宙如何诞生？</li>
                      <li>• 世界如何形成？</li>
                      <li>• 人类如何出现？</li>
                      <li>• 规则如何确立？</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">神灵体系</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 主神与从神</li>
                      <li>• 神灵职责分工</li>
                      <li>• 神殿与祭祀</li>
                      <li>• 神迹与神话</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 实践步骤 */}
            <section id="practical-steps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-emerald-600 border-l-4 border-emerald-500 pl-4">
                📋 一步一步构建流程
              </h2>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-emerald-700">从零开始构建完整世界</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">确定世界类型</h4>
                      <p className="text-gray-700 mb-3">现实世界、架空世界、末世世界、异世界等。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>明确世界观基调，确定是写实风格还是奇幻风格。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设计地理环境</h4>
                      <p className="text-gray-700 mb-3">创建地图、确定地形地貌、气候雨量、自然资源。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>绘制至少 3 张地图：地形图、气候图、资源图。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">建立文明体系</h4>
                      <p className="text-gray-700 mb-3">设计政体、社会阶层、经济体系、文化习俗。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>创建文明档案，包括 6 大核心体系。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">构建历史时间轴</h4>
                      <p className="text-gray-700 mb-3">设定重要历史事件，建立历史纵深感。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>设计远古、古代、近代、现代 4 个时期的历史事件。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设计神话传说</h4>
                      <p className="text-gray-700 mb-3">创世神话、神灵体系、神迹传说。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>创建神话档案，包括 2-3 个核心神话故事。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      6
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">完善文化细节</h4>
                      <p className="text-gray-700 mb-3">语言文字、饮食、建筑、艺术、节日等。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>选择 2-3 个文化特色进行深度设计。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="world-ai-tutorial" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-emerald-600 border-l-4 border-emerald-500 pl-4">
                🤖 AI 世界观构建全流程教学
              </h2>
              <p className="text-gray-700 mb-6">
                用 AI 工具快速构建完整的世界观体系，实现逻辑自洽、细节丰富的世界设定
              </p>
              
              {/* 世界观底层框架搭建 */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-emerald-700">世界观底层框架搭建</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    用 AI 快速生成世界观的完整底层框架，确保所有设定逻辑自洽
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Claude 3 Opus</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ChatGPT-4o</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">World Anvil AI</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：世界观核心设定</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">帮我构建一个 [题材类型] 的动漫世界观，包含完整的地理生态设定、文明文化体系、历史神话脉络、社会结构规则，所有设定逻辑自洽，无前后矛盾，贴合东方美学的意境与底蕴，同时具备宏大的想象空间。</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：世界规则设定</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">基于以上世界观，明确世界的核心规则：物理法则、魔法体系、力量等级、种族设定、科技水平等。确保规则清晰、逻辑自洽、有明确的边界和限制。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：地理生态设定</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">设计世界的地理生态：大陆分布、海洋河流、山脉平原、气候带、自然资源分布。标注核心地域的名称、特征、重要性。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    世界观框架完整、核心规则清晰、地理生态详细、逻辑自洽无矛盾、有东方美学底蕴
                  </p>
                </div>
              </div>
              
              {/* 文明文化与历史神话构建 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">文明文化与历史神话构建</h3>
                
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
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：历史年表</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">基于以上世界观，补充完整的世界历史大事件年表，包括创世时期、远古时代、古代、近代、现代的核心事件，标注每个事件的时间、地点、参与者、影响。</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：神话传说体系</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">设计世界的核心神话传说体系，包括创世神话、神灵体系、神迹传说、英雄史诗。每个神话故事要有完整的起因、经过、结果，体现世界的核心价值观。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：势力纷争与关系</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">设计世界的主要势力：国家、组织、种族、宗教等。明确各势力的核心利益、相互关系、历史恩怨、当前状态。为世界观赋予厚度与沉浸感。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    历史年表完整清晰、神话传说体系丰富、势力关系复杂合理、世界观有厚度和沉浸感
                  </p>
                </div>
              </div>
              
              {/* 世界观可视化落地 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">世界观可视化落地</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Inkarnate</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Midjourney</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Stable Diffusion</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：世界地图生成</h5>
                    <p className="text-gray-700 mb-2">使用 Inkarnate 的 AI 地图生成功能</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">输入世界地理设定，一键生成高清世界地图，标注核心地域、地形、城市分布、交通路线、资源分布。</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：场景概念图生成</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[世界观场景详细设定，如地域、建筑风格、环境氛围]，符合以上世界观的动漫场景概念图，电影级画质，三层光影，丰富的环境细节，沉浸感强，8K 超高清 --ar 16:9</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：建筑与服饰设计</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">基于世界观的文明设定，设计核心文明的建筑风格、服饰特点、日常用品、武器道具等，确保风格统一、符合世界观背景。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    生成世界高清地图、3 个以上核心场景概念图、建筑与服饰设计统一、视觉风格符合世界观设定
                  </p>
                </div>
              </div>
              
              {/* 世界观设定标准化归档 */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">世界观设定标准化归档</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Claude 3 Opus</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ChatGPT-4o</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Notion AI</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：整理世界观文档</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">将以上所有世界观设定，整理成标准化的世界观百科文档，按地理设定、文明体系、历史神话、社会结构、核心角色、核心场景分类归档，逻辑清晰，方便后续创作调用。</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：建立索引系统</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">为世界观文档建立完整的索引系统，包括术语表、人物索引、地点索引、事件索引、时间线等，方便快速查找和引用。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：版本管理与更新</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">建立世界观设定的版本管理机制，记录每次更新的内容、时间、原因。确保世界观设定随着创作进程不断完善，同时保持前后一致。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    世界观文档分类清晰、逻辑完整、索引系统完善、版本管理规范、方便后续创作调用
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* 底部导航 */}
          <ModuleFooter currentId="module4" />
        </article>
        </main>
        
        {/* 右侧：小标题导航 */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-4">
            <TableOfContents sections={sections} moduleName="世界构建方法" />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Module4