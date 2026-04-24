import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopNavigation, SideNavigation, TableOfContents, ModuleFooter, getModule } from '../../components/AdvancedNavigation'
import CodeBlock from '../../components/CodeBlock'

// 模块 3：角色设计体系
function Module3() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  // 目录章节
  const sections = [
    { id: 'role-soul', title: '角色是灵魂载体', icon: '🎨' },
    { id: 'facial-features', title: '五官美学体系', icon: '👤' },
    { id: 'hairstyle-design', title: '发型设计', icon: '💇' },
    { id: 'costume-design', title: '服装设计', icon: '👗' },
    { id: 'style-unity', title: '风格统一', icon: '✨' },
    { id: 'practical-steps', title: '实践步骤', icon: '📋' },
    { id: 'character-ai-tutorial', title: 'AI 角色设计全流程教学', icon: '🤖' }
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
      
      <div className="relative flex gap-4 px-4 md:px-8 py-8">
        <aside className="hidden xl:block w-60 flex-shrink-0">
          <div className="fixed top-20 left-4 md:left-8 w-60">
            <SideNavigation currentId="module3" />
          </div>
        </aside>
        <main className="flex-1 min-w-0 xl:mx-60">
          <article className="bg-white rounded-2xl shadow-lg p-4 md:p-8 lg:p-10 w-full">
          <header className="mb-12 border-b border-gray-200 pb-8">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              👤 角色设计体系
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              角色设计体系
            </h1>
            <p className="text-xl text-gray-600">
              精致五官美学，发型服装设计，风格统一性控制
            </p>
            <div className="flex items-center gap-6 mt-6 text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                ⏳ 精细打磨
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                📚 专业级内容
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* 核心理念 */}
            <section id="role-soul" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 border-l-4 border-blue-500 pl-4">
                🎨 角色是故事的灵魂载体
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-6">
                <p className="text-lg text-gray-700">
                  优秀的角色设计 = <strong>视觉吸引力</strong> + <strong>性格辨识度</strong> + <strong>情感共鸣力</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-xl font-bold mb-2 text-blue-600">视觉吸引力</h3>
                  <p className="text-gray-700">第一眼就让人记住的美学设计</p>
                </div>
                <div className="bg-white border-2 border-cyan-200 rounded-xl p-6">
                  <div className="text-4xl mb-3">✨</div>
                  <h3 className="text-xl font-bold mb-2 text-cyan-600">性格辨识度</h3>
                  <p className="text-gray-700">通过外表传达内在性格</p>
                </div>
                <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
                  <div className="text-4xl mb-3">💖</div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-600">情感共鸣力</h3>
                  <p className="text-gray-700">让观众产生情感连接</p>
                </div>
              </div>
            </section>

            {/* 顶级五官美学 */}
            <section id="facial-features" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 border-l-4 border-blue-500 pl-4">
                🌸 顶级五官美学体系
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">完美五官比例标准</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold mb-4 text-blue-600">三庭五眼</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>三庭</strong>：发际线 - 眉心 - 鼻底 - 下巴，三等分</li>
                      <li>• <strong>五眼</strong>：脸宽 = 五只眼睛的宽度</li>
                      <li>• <strong>应用</strong>：正面视角的黄金标准</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold mb-4 text-cyan-600">侧颜美学</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>E 线</strong>：鼻尖到下巴的连线</li>
                      <li>• <strong>鼻唇角</strong>：90-95 度为美</li>
                      <li>• <strong>下颌线</strong>：清晰流畅的轮廓</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <h3 className="text-xl font-bold mb-4 text-pink-700">眼睛设计要点</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">形状选择</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 杏眼：温柔甜美</li>
                        <li>• 凤眼：高贵冷艳</li>
                        <li>• 圆眼：可爱活泼</li>
                        <li>• 细长眼：成熟神秘</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">眼神表达</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 高光位置决定视线方向</li>
                        <li>• 瞳孔大小表达情绪</li>
                        <li>• 睫毛密度增加魅力</li>
                        <li>• 眼影层次增强立体感</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <h3 className="text-xl font-bold mb-4 text-amber-700">鼻子设计要点</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">鼻梁设计</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 高挺：立体感强</li>
                        <li>• 适中：自然和谐</li>
                        <li>• 微翘：俏皮可爱</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">鼻翼设计</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 宽度：不超过眼距</li>
                        <li>• 形状：圆润或精致</li>
                        <li>• 鼻孔：适度隐藏</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-red-50 p-6 rounded-xl border-l-4 border-rose-400">
                  <h3 className="text-xl font-bold mb-4 text-rose-700">嘴唇设计要点</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">唇形分类</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• M 唇：精致立体</li>
                        <li>• 花瓣唇：饱满性感</li>
                        <li>• 微笑唇：自然上扬</li>
                        <li>• 薄唇：清冷气质</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">色彩运用</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 粉红：青春活力</li>
                        <li>• 正红：成熟魅力</li>
                        <li>• 豆沙：温柔知性</li>
                        <li>• 裸色：自然清新</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 发型设计体系 */}
            <section id="hairstyle-design" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 border-l-4 border-blue-500 pl-4">
                💇 发型设计体系
              </h2>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">发型与脸型的匹配</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">圆脸</h4>
                    <p className="text-sm text-gray-600">适合：侧分长发、高马尾</p>
                    <p className="text-sm text-gray-500 mt-1">避免：齐刘海、短发</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">方脸</h4>
                    <p className="text-sm text-gray-600">适合：波浪卷发、斜刘海</p>
                    <p className="text-sm text-gray-500 mt-1">避免：直发、齐刘海</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">长脸</h4>
                    <p className="text-sm text-gray-600">适合：齐刘海、短发</p>
                    <p className="text-sm text-gray-500 mt-1">避免：高马尾、长直发</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-4 text-purple-700">古风发型</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>高髻</strong>：高贵典雅，适合贵族</li>
                    <li>• <strong>双鬟</strong>：俏皮可爱，适合少女</li>
                    <li>• <strong>披发</strong>：潇洒飘逸，适合侠客</li>
                    <li>• <strong>编发</strong>：精致复杂，适合正式场合</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-4 text-blue-700">现代发型</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>长直发</strong>：温柔气质</li>
                    <li>• <strong>波浪卷</strong>：成熟魅力</li>
                    <li>• <strong>短发</strong>：干练清爽</li>
                    <li>• <strong>马尾</strong>：青春活力</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 服装设计体系 */}
            <section id="costume-design" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 border-l-4 border-blue-500 pl-4">
                👗 服装设计体系
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">服装设计三要素</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-4xl mb-3">🎨</div>
                    <h4 className="font-bold text-lg mb-2 text-blue-600">色彩</h4>
                    <p className="text-sm text-gray-600">主色 + 辅色 + 点缀色</p>
                    <p className="text-xs text-gray-500 mt-2">60% + 30% + 10%</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-4xl mb-3">✂️</div>
                    <h4 className="font-bold text-lg mb-2 text-cyan-600">剪裁</h4>
                    <p className="text-sm text-gray-600">轮廓 + 结构 + 细节</p>
                    <p className="text-xs text-gray-500 mt-2">A 型/H 型/X 型</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="text-4xl mb-3">🧵</div>
                    <h4 className="font-bold text-lg mb-2 text-indigo-600">材质</h4>
                    <p className="text-sm text-gray-600">面料 + 纹理 + 光泽</p>
                    <p className="text-xs text-gray-500 mt-2">丝绸/棉麻/皮革</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">古风服装体系</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">先秦时期</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 曲裾深衣：庄重典雅</li>
                      <li>• 直裾袍：简洁大方</li>
                      <li>• 配色：红黑为主，青铜纹饰</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">汉唐时期</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 襦裙：上襦下裙，优雅飘逸</li>
                      <li>• 齐胸襦裙：华丽富贵</li>
                      <li>• 配色：色彩丰富，刺绣精美</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 风格统一性控制 */}
            <section id="style-unity" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 border-l-4 border-blue-500 pl-4">
                🎯 风格统一性控制
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-6 text-blue-700">风格统一的四个维度</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-blue-600">1. 时代背景统一</h4>
                    <p className="text-gray-700 mb-2">确保所有角色的服装、发型符合设定的时代背景。</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 建立时代参考库</li>
                      <li>• 避免现代元素混入</li>
                      <li>• 注意地域文化差异</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-indigo-600">2. 社会阶层统一</h4>
                    <p className="text-gray-700 mb-2">角色的服装材质、装饰应与其社会地位匹配。</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 贵族：华丽精致</li>
                      <li>• 平民：朴素实用</li>
                      <li>• 侠客：简洁利落</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-cyan-600">3. 色彩体系统一</h4>
                    <p className="text-gray-700 mb-2">建立整体色彩方案，确保视觉和谐。</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 主色调不超过 3 种</li>
                      <li>• 建立色彩情感对应</li>
                      <li>• 注意季节变化</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-purple-600">4. 细节精度统一</h4>
                    <p className="text-gray-700 mb-2">所有角色的绘制精度应保持一致。</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 线条粗细一致</li>
                      <li>• 阴影风格统一</li>
                      <li>• 材质表现一致</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 实践步骤 */}
            <section id="practical-steps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 border-l-4 border-blue-500 pl-4">
                📋 一步一步设计流程
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-blue-700">从零开始设计完美角色</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">确定角色定位</h4>
                      <p className="text-gray-700 mb-3">明确角色的性格、身份、年龄、背景。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>填写角色档案表，包括性格关键词、职业、年龄等。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设计五官特征</h4>
                      <p className="text-gray-700 mb-3">根据性格设计眼睛、鼻子、嘴巴的形状和比例。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>绘制五官草图，尝试多种组合，选择最符合性格的。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设计发型</h4>
                      <p className="text-gray-700 mb-3">根据脸型、性格、时代背景设计发型。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>收集发型参考图，绘制 3-5 种方案，选择最优。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设计服装</h4>
                      <p className="text-gray-700 mb-3">根据身份、时代、场景设计服装体系。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>设计日常装、正式装、特殊装 3 套服装。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">建立角色三视图</h4>
                      <p className="text-gray-700 mb-3">绘制正面、侧面、背面的标准视图。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>确保三视图比例一致，细节清晰。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      6
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设计表情集</h4>
                      <p className="text-gray-700 mb-3">绘制角色的各种表情，确保情感表达丰富。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>至少设计喜、怒、哀、乐、惊 5 种基础表情。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="character-ai-tutorial" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 border-l-4 border-blue-500 pl-4">
                🤖 AI 角色设计全流程教学
              </h2>
              <p className="text-gray-700 mb-6">
                用 AI 工具快速完成角色设计，实现标准化、批量化的角色素材生成
              </p>
              
              {/* 人物人设生成 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">人物人设与基础设定生成</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    用 AI 快速生成完整的角色人设，包含基本信息、性格特点、背景故事
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Claude 3 Opus</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ChatGPT-4o</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Midjourney</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：生成角色人设</h5>
                    <CodeBlock
                      code="创作一个 [年龄/性别/气质] 的动漫角色人设，包含基本信息、性格特点、背景故事、外貌特征、服装风格，确保人物设定立体饱满，有独特的辨识度。"
                      title="步骤 1：生成角色人设"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：深化角色背景</h5>
                    <CodeBlock
                      code="基于以上角色设定，补充详细的背景故事、动机、恐惧、欲望、与其他角色的关系。确保角色有血有肉，有完整的内在逻辑。"
                      title="步骤 2：深化角色背景"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：生成视觉描述</h5>
                    <CodeBlock
                      code="将以上角色设定转化为详细的视觉描述，包括脸型、五官、发型、服装、配饰、颜色偏好等，为 AI 绘画提供精准提示词。"
                      title="步骤 3：生成视觉描述"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    角色人设完整立体、性格特点鲜明、背景故事丰富、视觉描述详细准确、有独特辨识度
                  </p>
                </div>
              </div>
              
              {/* 五官与形体设计 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">五官与形体精准设计</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Midjourney</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Stable Diffusion</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ComfyUI</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Prompt 模板</h5>
                    <CodeBlock
                      code="[人物基础设定], 精致五官，符合黄金分割比例，东方美学骨相，[风格定位，如古风/日系/写实动漫], 清晰的面部轮廓，灵动的眼神细节，皮肤质感细腻，无五官变形，无面部崩坏 --ar 3:4 --style raw"
                      title="Prompt 模板"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">五官细化 Prompt</h5>
                    <CodeBlock
                      code="[角色名]，完美精致五官，五官比例协调，大眼睛明亮有神，高鼻梁，樱桃小嘴，面部光照均匀，细节清晰，极致面部细节刻画，人物结构完美无瑕 --ar 3:4 --style raw --s 250"
                      title="五官细化 Prompt"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    五官精致符合美学标准、比例协调、皮肤细腻、眼神灵动、无面部崩坏
                  </p>
                </div>
              </div>
              
              {/* 人物一致性 LoRA 训练 */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">人物一致性终极方案（LoRA 训练）</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    训练专属 LoRA 模型，实现同一人物多场景、多动作下的 100% 风格与五官统一
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Kohya_ss</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Stable Diffusion WebUI</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ComfyUI</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：准备训练素材</h5>
                    <p className="text-gray-700 mb-2">收集 8-15 张同人物的标准图片</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 至少包含正脸照片 3-5 张</li>
                      <li>• 包含不同表情、不同角度</li>
                      <li>• 图片清晰，无水印，无遮挡</li>
                      <li>• 统一图片尺寸为 512x512 或 1024x1024</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：配置训练参数</h5>
                    <CodeBlock
                      code="batch_size: 2
epoch: 10
learning_rate: 1e-4
lr_scheduler: cosine
resolution: 512
network_dim: 128
alpha: 64"
                      title="步骤 2：配置训练参数"
                      language="yaml"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：训练与调用</h5>
                    <p className="text-gray-700 mb-2">训练完成后，使用 LoRA 进行生成</p>
                    <CodeBlock
                      code="[场景描述], <lora:角色名:0.8>, 同一人物，五官完全一致，风格统一，动漫风格 --ar 16:9 --style raw"
                      title="步骤 3：训练与调用"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    LoRA 训练成功，同人物在不同场景、不同动作下五官和风格完全统一，解决 AI 变脸问题
                  </p>
                </div>
              </div>
              
              {/* 标准化角色素材生成 */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-700">标准化角色素材生成</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Midjourney</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Stable Diffusion</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ComfyUI</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">三视图 Prompt</h5>
                    <CodeBlock
                      code="[人物完整设定], 动漫角色三视图，分别为正面视图、侧面视图、背面视图，同一人物，保持五官、发型、服装完全一致，纯白背景，标准平光，无阴影，无透视变形，细节完整，8K 超高清 --ar 16:9"
                      title="三视图 Prompt"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">表情集 Prompt</h5>
                    <CodeBlock
                      code="[角色名]，动漫角色表情集，包括微笑、大笑、严肃、愤怒、悲伤、惊讶、困惑、放松，共 8 个表情，同一人物，五官一致，纯白背景 --ar 3:4"
                      title="表情集 Prompt"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">多套服装 Prompt</h5>
                    <CodeBlock
                      code="以上人物，保持五官、脸型、气质完全不变，设计 3 套不同场景的 [风格] 发型与服装，每套服装搭配对应的配饰，风格统一，细节完整，符合人物的性格与世界观设定 --ar 16:9"
                      title="多套服装 Prompt"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    生成完整的三视图、8 组基础表情、3 套服装变体，所有素材风格统一、五官一致
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* 底部导航 */}
          <ModuleFooter currentId="module3" />
        </article>
        </main>
        
        {/* 右侧：小标题导航 - 固定定位 */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="fixed top-20 right-4 md:right-8 w-64">
            <TableOfContents sections={sections} moduleName="角色设计体系" />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Module3