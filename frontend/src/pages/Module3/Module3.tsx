import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopNavigation, SideNavigation, TableOfContents, ModuleFooter, getModule } from '../../components/AdvancedNavigation'

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
    { id: 'practical-steps', title: '实践步骤', icon: '📋' }
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
      <SideNavigation currentId="module3" />
      <TableOfContents sections={sections} moduleName="角色设计体系" />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <header className="mb-12 border-b border-gray-200 pb-8">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              👤 角色设计体系
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              角色设计体系
            </h1>
            <p className="text-xl text-gray-600">
              顶级五官美学，发型服装设计，风格统一性控制
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
          </div>

          {/* 底部导航 */}
          <ModuleFooter currentId="module3" />
        </article>
      </div>
    </div>
  )
}

export default Module3