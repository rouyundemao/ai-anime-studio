import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopNavigation, SideNavigation, TableOfContents, ModuleFooter, getModule } from '../../components/AdvancedNavigation'
import CodeBlock from '../../components/CodeBlock'

// 模块 5：顶级画面生成
function Module5() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  // 目录章节
  const sections = [
    { id: 'image-generation', title: '画面生成基础', icon: '🎨' },
    { id: 'prompt-engineering', title: '提示词工程', icon: '✍️' },
    { id: 'style-transfer', title: '风格迁移', icon: '🎭' },
    { id: 'composition', title: '构图美学', icon: '📐' },
    { id: 'lighting', title: '光影质感', icon: '💡' },
    { id: 'practical-steps', title: '实践步骤', icon: '📋' },
    { id: 'image-ai-tutorial', title: 'AI 电影级画面生成全流程教学', icon: '🤖' }
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
            <SideNavigation currentId="module5" />
          </div>
        </aside>
        <main className="flex-1 min-w-0 xl:mx-60">
          <article className="bg-white rounded-2xl shadow-lg p-4 md:p-8 lg:p-10 w-full">
          <header className="mb-12 border-b border-gray-200 pb-8">
            <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              🖼️ 顶级画面生成
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              电影级画面生成
            </h1>
            <p className="text-xl text-gray-600">
              电影级画面构建，三层光影设计，细节精度控制
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* 核心理念 */}
            <section id="image-generation" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-orange-600 border-l-4 border-orange-500 pl-4">
                🎨 画面是故事的视觉呈现
              </h2>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl mb-6">
                <p className="text-lg text-gray-700">
                  电影级画面 = <strong>电影级构图</strong> + <strong>三层光影</strong> + <strong>发丝级精度</strong> + <strong>电影级调色</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white border-2 border-red-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-lg font-bold mb-2 text-red-600">构图</h3>
                  <p className="text-xs text-gray-600">三分法、黄金螺旋</p>
                </div>
                <div className="bg-white border-2 border-orange-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">💡</div>
                  <h3 className="text-lg font-bold mb-2 text-orange-600">光影</h3>
                  <p className="text-xs text-gray-600">三层光影设计</p>
                </div>
                <div className="bg-white border-2 border-yellow-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="text-lg font-bold mb-2 text-yellow-600">色彩</h3>
                  <p className="text-xs text-gray-600">电影级调色</p>
                </div>
                <div className="bg-white border-2 border-amber-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <h3 className="text-lg font-bold mb-2 text-amber-600">细节</h3>
                  <p className="text-xs text-gray-600">4K+ 精度</p>
                </div>
              </div>
            </section>

            {/* 电影级构图 */}
            <section id="prompt-engineering" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-orange-600 border-l-4 border-orange-500 pl-4">
                📸 电影级构图体系
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">经典构图法则</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-blue-600">三分法</h4>
                    <p className="text-sm text-gray-700 mb-3">将画面分为九宫格，关键元素放在交点上。</p>
                    <div className="grid grid-cols-3 gap-1 h-24 bg-gray-100 rounded">
                      <div className="bg-blue-400/30"></div>
                      <div className="bg-transparent"></div>
                      <div className="bg-blue-400/30"></div>
                      <div className="bg-transparent"></div>
                      <div className="bg-transparent"></div>
                      <div className="bg-transparent"></div>
                      <div className="bg-blue-400/30"></div>
                      <div className="bg-transparent"></div>
                      <div className="bg-blue-400/30"></div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-green-600">黄金螺旋</h4>
                    <p className="text-sm text-gray-700 mb-3">遵循斐波那契螺旋，引导观众视线。</p>
                    <div className="h-24 w-32 bg-gray-100 rounded relative overflow-hidden">
                      <div className="absolute inset-0 border-2 border-green-500/30 rounded transform rotate-45"></div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-purple-600">对角线构图</h4>
                    <p className="text-sm text-gray-700 mb-3">利用对角线创造动感和张力。</p>
                    <div className="h-24 w-32 bg-gray-100 rounded relative">
                      <div className="absolute inset-0 border-2 border-purple-500 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">景别运用</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-2xl mb-1">远景</div>
                    <p className="text-xs text-gray-600">展示环境</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-2xl mb-1">全景</div>
                    <p className="text-xs text-gray-600">展示全身</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-2xl mb-1">中景</div>
                    <p className="text-xs text-gray-600">展示半身</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-2xl mb-1">近景</div>
                    <p className="text-xs text-gray-600">展示胸部以上</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <div className="text-2xl mb-1">特写</div>
                    <p className="text-xs text-gray-600">面部细节</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 三层光影设计 */}
            <section id="lighting" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-orange-600 border-l-4 border-orange-500 pl-4">
                💡 三层光影设计体系
              </h2>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">光影的三大层次</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
                    <h4 className="text-xl font-bold mb-3 text-orange-600">第一层：主光源</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>光源位置</strong>：决定整体光影方向</li>
                      <li>• <strong>光源强度</strong>：影响画面明暗对比</li>
                      <li>• <strong>光源性质</strong>：硬光还是软光</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                    <h4 className="text-xl font-bold mb-3 text-yellow-600">第二层：辅光源</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>补光</strong>：柔化阴影，减少对比</li>
                      <li>• <strong>溢出光</strong>：勾勒轮廓，增加立体感</li>
                      <li>• <strong>背景光</strong>：分离主体与背景</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                    <h4 className="text-xl font-bold mb-3 text-red-600">第三层：环境光</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>环境色</strong>：反射周围环境的颜色</li>
                      <li>• <strong>间接光照</strong>：光线多次反射的结果</li>
                      <li>• <strong>雾效/氛围</strong>：增加深度感</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">经典光源类型</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">三点布光法</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• <strong>主光</strong>：最强光源，照亮主体</li>
                      <li>• <strong>辅光</strong>：柔和阴影，补充亮度</li>
                      <li>• <strong>轮廓光</strong>：勾勒边缘，分离背景</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800">电影级布光</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• <strong>伦勃朗光</strong>：经典的戏剧性光影</li>
                      <li>• <strong>蝴蝶光</strong>：优雅的面部光影</li>
                      <li>• <strong>分割光</strong>：强烈的对比效果</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 电影级调色 */}
            <section id="composition" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-orange-600 border-l-4 border-orange-500 pl-4">
                🎨 电影级调色体系
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">调色的四个步骤</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3 text-blue-600">1. 基础校正</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>白平衡</strong>：确保色彩准确</li>
                      <li>• <strong>曝光</strong>：调整亮度对比</li>
                      <li>• <strong>色温</strong>：冷暖基调</li>
                      <li>• <strong>色调</strong>：青橙对比</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3 text-green-600">2. 主色调确定</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>主色</strong>：主导画面色彩</li>
                      <li>• <strong>辅色</strong>：辅助主色</li>
                      <li>• <strong>点缀色</strong>：突出重点</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3 text-purple-600">3. 色彩分级</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>阴影</strong>：暗部色调</li>
                      <li>• <strong>中间调</strong>：主体色调</li>
                      <li>• <strong>高光</strong>：亮部色调</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-3 text-orange-600">4. 细节调整</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>饱和度</strong>：色彩饱满度</li>
                      <li>• <strong>清晰度</strong>：细节锐化</li>
                      <li>• <strong>颗粒感</strong>：胶片质感</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">经典调色风格</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-red-100 to-pink-100 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-gray-800 mb-2">青橙色调</h4>
                    <p className="text-xs text-gray-600">阴影青色，高光橙色</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-gray-800 mb-2">冷调风格</h4>
                    <p className="text-xs text-gray-600">整体蓝色系</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-gray-800 mb-2">暖调风格</h4>
                    <p className="text-xs text-gray-600">整体黄色系</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 细节精度控制 */}
            <section id="style-transfer" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-orange-600 border-l-4 border-orange-500 pl-4">
                ✨ 细节精度控制系统
              </h2>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">细节的四个等级</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl mb-2">🎨</div>
                    <h4 className="font-bold mb-2">轮廓精度</h4>
                    <p className="text-sm text-gray-600">线条清晰流畅</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl mb-2">👀</div>
                    <h4 className="font-bold mb-2">面部细节</h4>
                    <p className="text-sm text-gray-600">五官精致，表情丰富</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl mb-2">🧵</div>
                    <h4 className="font-bold mb-2">材质细节</h4>
                    <p className="text-sm text-gray-600">丝绸/金属/头发质感</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl mb-2">✨</div>
                    <h4 className="font-bold mb-2">特效细节</h4>
                    <p className="text-sm text-gray-600">光效/粒子/特效</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">发丝级精度控制</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-orange-500">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">发丝细节</h4>
                      <p className="text-sm text-gray-600">每根头发的走向、颜色、光泽</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-orange-500">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">皮肤细节</h4>
                      <p className="text-sm text-gray-600">毛孔、痘痘、皱纹、血丝</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-orange-500">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">衣物褶皱</h4>
                      <p className="text-sm text-gray-600">自然的褶皱走向和光影</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-orange-500">4</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">环境细节</h4>
                      <p className="text-sm text-gray-600">灰尘、毛发、微小物体</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 实践步骤 */}
            <section id="practical-steps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-orange-600 border-l-4 border-orange-500 pl-4">
                📋 一步一步生成流程
              </h2>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-orange-700">从零开始生成顶级画面</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">确定画面构图</h4>
                      <p className="text-gray-700 mb-3">选择构图法则，确定主体位置和视角。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>绘制构图草图，使用三分法或黄金螺旋。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设计三层光影</h4>
                      <p className="text-gray-700 mb-3">规划主光源、辅光源、环境光的位置和强度。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>使用光线追踪软件模拟光影效果。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">设定电影级调色</h4>
                      <p className="text-gray-700 mb-3">确定主色调、辅色、点缀色，设定冷暖基调。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>创建调色预设，确保色彩统一。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">添加发丝级细节</h4>
                      <p className="text-gray-700 mb-3">优化五官、服装、材质的细节表现。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>使用高清素材增强细节，确保发丝精度。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">分辨率优化</h4>
                      <p className="text-gray-700 mb-3">设置 4K+ 分辨率，确保图片质量。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>使用高清适配器，确保输出质量。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      6
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">输出和对比</h4>
                      <p className="text-gray-700 mb-3">生成多张版本，对比选择最优效果。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>生成 3-5 张版本，选择最佳效果。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="image-ai-tutorial" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-orange-600 border-l-4 border-orange-500 pl-4">
                🤖 AI 电影级画面生成全流程教学
              </h2>
              <p className="text-gray-700 mb-6">
                用 AI 工具快速生成电影级画质的动漫画面，实现 4K+ 分辨率、三层光影、发丝级精度
              </p>
              
              {/* 电影级镜头语言设计 */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">电影级镜头语言设计</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    用 AI 设计符合电影语言的动漫画面，掌握景别、运镜、构图的核心逻辑
                  </p>
                </div>
                
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
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：景别控制 Prompt</h5>
                    <CodeBlock
                      code="[画面主体], 电影级镜头语言，[景别：特写/中景/全景/大远景], [运镜：推/拉/摇/移/跟], 构图遵循黄金分割，动漫风格，8K 超高清 --ar 16:9 --style raw"
                      title="步骤 1：景别控制 Prompt"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：运镜效果 Prompt</h5>
                    <CodeBlock
                      code="[场景描述], 电影级运镜，镜头从远景缓慢推进到特写，动态模糊，景深控制，前景虚化，背景清晰，营造沉浸式观影体验 --ar 16:9 --style raw --s 250"
                      title="步骤 2：运镜效果 Prompt"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：构图控制 Prompt</h5>
                    <CodeBlock
                      code="[画面主体], 电影级构图，三分法构图，主体位于画面三分之一处，留白区域恰到好处，画面平衡有张力，动漫风格，8K 超高清 --ar 16:9 --style raw"
                      title="步骤 3：构图控制 Prompt"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    画面具备电影级镜头感、景别明确、运镜流畅、构图符合黄金分割或三分法、画面平衡有张力
                  </p>
                </div>
              </div>
              
              {/* 三层光影精准控制 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">三层光影精准控制</h3>
                
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
                    <h5 className="font-semibold text-gray-800 mb-2">三层光影 Prompt 公式</h5>
                    <CodeBlock
                      code="[场景描述], 三层光影：环境氛围光 + 人物轮廓光 + 面部细节补光，电影级色彩分级，8K 超高清，发丝级细节刻画，极致纹理质感，OC 渲染，Unreal Engine 5 --ar 16:9 --style raw --s 250"
                      title="三层光影 Prompt 公式"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">环境氛围光</h5>
                    <CodeBlock
                      code="[场景], 环境氛围光，柔和的全局光照，营造整体氛围，冷暖色调对比，体积光，丁达尔效应，空气感 --ar 16:9"
                      title="环境氛围光"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">轮廓光与补光</h5>
                    <CodeBlock
                      code="[人物], 轮廓光从背后照射，勾勒人物边缘，面部细节补光，柔和自然光，面部光照均匀，细节清晰，无阴影遮挡 --ar 16:9"
                      title="轮廓光与补光"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    画面具备完整的三层光影层次、环境氛围光营造整体氛围、轮廓光勾勒人物边缘、面部补光清晰均匀
                  </p>
                </div>
              </div>
              
              {/* 画质与细节精度提升 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">画质与细节精度提升</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Topaz Gigapixel AI</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Topaz Video Enhance AI</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Upscayl</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：AI 无损放大</h5>
                    <p className="text-gray-700 mb-2">使用 Topaz Video Enhance AI，采用动漫专属模型</p>
                    <CodeBlock
                      code="参数预设：放大倍率 4-8 倍，降噪强度 30%，细节增强 40%，去锯齿开启，一键解决 AI 生成画面模糊、分辨率不足、边缘锯齿问题，无损输出 4K+ 成品。"
                      title="步骤 1：AI 无损放大"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：细节修复</h5>
                    <CodeBlock
                      code="针对面部细节、发丝、服装纹理进行专项修复，使用高清素材增强细节，确保发丝级精度。"
                      title="步骤 2：细节修复"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：质量检查</h5>
                    <CodeBlock
                      code="检查画面是否达到 4K+ 分辨率、边缘是否清晰无锯齿、细节是否丰富、有无模糊或失真。"
                      title="步骤 3：质量检查"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    画面达到 4K+ 分辨率、边缘清晰无锯齿、发丝级细节清晰可见、无模糊或失真、画质细腻
                  </p>
                </div>
              </div>
              
              {/* 电影级调色与风格统一 */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-700">电影级调色与风格统一</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">DaVinci Resolve</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Lightroom</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Photoshop</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：AI 色彩匹配</h5>
                    <p className="text-gray-700 mb-2">使用 DaVinci Resolve 的 AI 色彩匹配功能</p>
                    <CodeBlock
                      code="导入经典动漫/电影的参考帧，30 秒内完成 1:1 色调匹配，同步开启 AI 键色保护、高光阴影智能优化，实现统一的电影级调色风格。"
                      title="步骤 1：AI 色彩匹配"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：色调统一</h5>
                    <CodeBlock
                      code="确定主色调（冷/暖）、辅色（对比色/邻近色）、点缀色（强调色），为同系列作品建立统一的调色预设，确保风格一致。"
                      title="步骤 2：色调统一"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：风格化调色</h5>
                    <CodeBlock
                      code="根据作品风格应用 LUT 预设：日系清新（高明度、低饱和）、赛博朋克（高对比、霓虹色）、复古胶片（颗粒感、暖色调）等。"
                      title="步骤 3：风格化调色"
                      language="prompt"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    同系列作品色调统一、色彩风格符合主题、肤色自然、高光阴影层次分明、达到电影级调色标准
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* 底部导航 */}
          <ModuleFooter currentId="module5" />
        </article>
        </main>
        
        {/* 右侧：小标题导航 - 固定定位 */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="fixed top-20 right-4 md:right-8 w-64">
            <TableOfContents sections={sections} moduleName="画面生成" />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Module5