import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopNavigation, SideNavigation, TableOfContents, ModuleFooter, getModule } from '../../components/AdvancedNavigation'

// 模块 7：混合媒体艺术
function Module7() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  // 目录章节
  const sections = [
    { id: 'mixed-media', title: '混合媒体基础', icon: '🎨' },
    { id: 'video-art', title: '视频艺术', icon: '🎬' },
    { id: 'interactive', title: '互动媒体', icon: '🎮' },
    { id: 'sound-design', title: '声音设计', icon: '🎵' },
    { id: 'installation', title: '装置艺术', icon: '🏗️' },
    { id: 'practical-steps', title: '实践步骤', icon: '📋' },
    { id: 'mixed-media-ai-tutorial', title: 'AI 混合媒体创作创新玩法教学', icon: '🤖' }
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
            <SideNavigation currentId="module7" />
          </div>
        </aside>
        <main className="flex-1 min-w-0">
          <article className="bg-white rounded-2xl shadow-lg p-6 md:p-10 lg:p-12">
          <header className="mb-12 border-b border-gray-200 pb-8">
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              ✨ 混合媒体艺术
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              混合媒体艺术
            </h1>
            <p className="text-xl text-gray-600">
              水墨与数字融合，手绘与AI结合，电影级后期制作
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* 核心理念 */}
            <section id="mixed-media" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-teal-600 border-l-4 border-teal-500 pl-4">
                🎨 技术与艺术的完美融合
              </h2>
              
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl mb-6">
                <p className="text-lg text-gray-700">
                  混合媒体艺术 = <strong>传统艺术</strong> + <strong>数字技术</strong> + <strong>AI 创造</strong> + <strong>电影后期</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🖌️</div>
                  <h3 className="text-lg font-bold mb-2 text-teal-600">水墨艺术</h3>
                  <p className="text-xs text-gray-600">东方美学精髓</p>
                </div>
                <div className="bg-white border-2 border-cyan-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">✏️</div>
                  <h3 className="text-lg font-bold mb-2 text-cyan-600">手绘艺术</h3>
                  <p className="text-xs text-gray-600">独特笔触魅力</p>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🤖</div>
                  <h3 className="text-lg font-bold mb-2 text-blue-600">AI 创造</h3>
                  <p className="text-xs text-gray-600">无限创意可能</p>
                </div>
                <div className="bg-white border-2 border-indigo-200 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🎬</div>
                  <h3 className="text-lg font-bold mb-2 text-indigo-600">电影后期</h3>
                  <p className="text-xs text-gray-600">专业级制作</p>
                </div>
              </div>
            </section>

            {/* 水墨与数字融合 */}
            <section id="video-art" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-teal-600 border-l-4 border-teal-500 pl-4">
                🖌️ 水墨与数字融合体系
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">水墨艺术的数字化表达</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-gray-800">传统水墨技法</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>笔法</strong>：中锋、侧锋、逆锋</li>
                      <li>• <strong>墨法</strong>：浓、淡、干、湿、焦</li>
                      <li>• <strong>技法</strong>：皴、擦、点、染、烘</li>
                      <li>• <strong>构图</strong>：留白、虚实、疏密</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-xl font-bold mb-3 text-gray-800">数字化转换</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>数字笔刷</strong>：模拟毛笔质感</li>
                      <li>• <strong>纸张纹理</strong>：宣纸纹理贴图</li>
                      <li>• <strong>墨效渲染</strong>：墨晕扩散效果</li>
                      <li>• <strong>层次叠加</strong>：多图层透明度</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-teal-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-teal-600">水墨风格画面创作步骤</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-teal-500">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">草稿阶段</h4>
                      <p className="text-sm text-gray-600">使用铅笔笔刷勾勒构图，注意留白</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-teal-500">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">墨稿阶段</h4>
                      <p className="text-sm text-gray-600">使用浓墨笔刷勾线，建立结构</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-teal-500">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">渲染阶段</h4>
                      <p className="text-sm text-gray-600">使用淡墨渲染，建立明暗层次</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-teal-500">4</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">点染阶段</h4>
                      <p className="text-sm text-gray-600">添加细节，强化重点</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 text-teal-500">5</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">题款阶段</h4>
                      <p className="text-sm text-gray-600">添加诗词、印章，完成作品</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-teal-700">AI 水墨生成技巧</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">关键词</h4>
                    <p className="text-sm text-gray-600">水墨画风格、东方美学、留白意境、墨晕扩散</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">艺术家参考</h4>
                    <p className="text-sm text-gray-600">张大千、齐白石、徐悲鸿、李可染</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">后期处理</h4>
                    <p className="text-sm text-gray-600">宣纸纹理叠加、墨晕效果增强、色彩调优</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 手绘与AI结合 */}
            <section id="interactive" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-teal-600 border-l-4 border-teal-500 pl-4">
                ✏️ 手绘与AI结合体系
              </h2>

              <div className="bg-white border-2 border-cyan-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-600">手绘的三大优势</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">✨</div>
                    <h4 className="font-bold text-gray-800">独特笔触</h4>
                    <p className="text-sm text-gray-600">无法复制的个人风格</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">💖</div>
                    <h4 className="font-bold text-gray-800">情感温度</h4>
                    <p className="text-sm text-gray-600">注入创作者的灵魂</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <h4 className="font-bold text-gray-800">精确控制</h4>
                    <p className="text-sm text-gray-600">完全自主的细节把控</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">手绘+AI工作流</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 text-blue-500">A</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">手绘草稿阶段</h4>
                        <p className="text-sm text-gray-600">用传统工具绘制草稿，确定构图和结构</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 text-blue-500">B</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">数字化扫描</h4>
                        <p className="text-sm text-gray-600">扫描手绘草稿，转换为数字格式</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 text-blue-500">C</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">AI辅助上色</h4>
                        <p className="text-sm text-gray-600">使用AI工具自动上色，节省时间</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 text-blue-500">D</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">手绘细节优化</h4>
                        <p className="text-sm text-gray-600">人工修正和添加细节，提升质量</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-2xl mr-3 text-blue-500">E</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">AI风格化处理</h4>
                        <p className="text-sm text-gray-600">使用AI进行风格统一，调整整体效果</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
                  <h3 className="text-xl font-bold mb-4 text-purple-700">AI增强手绘技巧</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">线稿清理</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• AI自动去噪</li>
                        <li>• 线条优化</li>
                        <li>• 断点连接</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">色彩生成</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• AI自动上色</li>
                        <li>• 色彩推荐</li>
                        <li>• 配色方案</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 电影级后期制作 */}
            <section id="sound-design" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-teal-600 border-l-4 border-teal-500 pl-4">
                🎬 电影级后期制作体系
              </h2>

              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">后期制作的五大阶段</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
                    <h4 className="text-xl font-bold mb-3 text-teal-600">1. 剪辑</h4>
                    <p className="text-gray-700 mb-3">选择最佳镜头，编排故事节奏</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 粗剪：确定镜头顺序</li>
                      <li>• 精剪：优化转场效果</li>
                      <li>• 音画同步：确保对齐</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-cyan-500">
                    <h4 className="text-xl font-bold mb-3 text-cyan-600">2. 调色</h4>
                    <p className="text-gray-700 mb-3">确立视觉风格，统一色调</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 一级调色：基础校正</li>
                      <li>• 二级调色：风格化处理</li>
                      <li>• LUT应用：快速调色</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold mb-3 text-blue-600">3. 特效</h4>
                    <p className="text-gray-700 mb-3">添加视觉特效，增强表现力</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 光效：光束、光晕</li>
                      <li>• 粒子：火花、烟雾</li>
                      <li>• 形变：扭曲、变形</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-500">
                    <h4 className="text-xl font-bold mb-3 text-indigo-600">4. 音效</h4>
                    <p className="text-gray-700 mb-3">添加声音，营造氛围</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 背景音乐：情绪渲染</li>
                      <li>• 音效：环境音、动作音</li>
                      <li>• 对白：清晰录制</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                    <h4 className="text-xl font-bold mb-3 text-purple-600">5. 导出</h4>
                    <p className="text-gray-700 mb-3">输出最终成品，发布传播</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 分辨率：4K/1080P</li>
                      <li>• 编码：H.264/ProRes</li>
                      <li>• 格式：MP4/MOV</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-teal-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-teal-600">电影级调色风格</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-gray-800 mb-1">暖色调</h4>
                    <p className="text-xs text-gray-600">温馨怀旧</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-gray-800 mb-1">冷色调</h4>
                    <p className="text-xs text-gray-600">清冷忧郁</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-gray-800 mb-1">梦幻色调</h4>
                    <p className="text-xs text-gray-600">浪漫唯美</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-4 rounded-lg text-center text-white">
                    <h4 className="font-bold mb-1">黑白调</h4>
                    <p className="text-xs text-gray-300">经典永恒</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 创作案例 */}
            <section id="installation" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-teal-600 border-l-4 border-teal-500 pl-4">
                🎯 创作案例展示
              </h2>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-center text-teal-700">典型创作流程示例</h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
                    <h4 className="text-lg font-bold mb-3 text-gray-800">案例 1：水墨风格动漫短片</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>风格定位：</strong>新中式水墨风格</p>
                      <p><strong>创作流程：</strong>手绘草稿 → 数字化 → AI上色 → 水墨风格化 → 后期调色</p>
                      <p><strong>技术要点：</strong>留白意境、墨晕效果、宣纸纹理、青绿山水调色</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-cyan-500">
                    <h4 className="text-lg font-bold mb-3 text-gray-800">案例 2：手绘+AI角色设计</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>风格定位：</strong>精致手绘+AI辅助</p>
                      <p><strong>创作流程：</strong>手绘线稿 → 扫描数字化 → AI自动上色 → 手绘细节优化 → AI风格统一</p>
                      <p><strong>技术要点：</strong>笔触保留、自然过渡、细节精度、风格统一</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-lg font-bold mb-3 text-gray-800">案例 3：电影级动画短片</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>风格定位：</strong>电影级视觉冲击</p>
                      <p><strong>创作流程：</strong>剧本 → 分镜 → AI画面生成 → AI动画生成 → 手绘优化 → 后期制作</p>
                      <p><strong>技术要点：</strong>三层光影、电影调色、物理真实感、情感表达</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 实践步骤 */}
            <section id="practical-steps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-teal-600 border-l-4 border-teal-500 pl-4">
                📋 一步一步创作流程
              </h2>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-200">
                <h3 className="text-2xl font-bold mb-6 text-center text-teal-700">从零开始创作混合媒体作品</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">确定创作风格</h4>
                      <p className="text-gray-700 mb-3">选择水墨风格、手绘风格、数字风格或混合风格。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>收集参考图，建立风格定位。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">创作手绘草稿</h4>
                      <p className="text-gray-700 mb-3">使用传统工具绘制初步草稿，确定构图。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>铅笔或炭笔绘制，注意留白和构图。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">数字化处理</h4>
                      <p className="text-gray-700 mb-3">扫描草稿，导入数字工具进行优化。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>使用PS、Procreate等工具优化线条和构图。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">AI辅助创作</h4>
                      <p className="text-gray-700 mb-3">使用AI工具进行上色、生成、风格化。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>选择合适的AI工具，根据需要调整参数。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">手绘细节优化</h4>
                      <p className="text-gray-700 mb-3">人工修正AI生成的结果，添加细节。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>使用手绘板添加关键细节，提升整体质量。</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      6
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">电影级后期制作</h4>
                      <p className="text-gray-700 mb-3">调色、特效、音效、导出。</p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-600"><strong>操作：</strong>使用AE、PR等专业工具完成后期制作。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="mixed-media-ai-tutorial" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-teal-600 border-l-4 border-teal-500 pl-4">
                🤖 AI 混合媒体创作创新玩法教学
              </h2>
              <p className="text-gray-700 mb-6">
                融合多种艺术形式，用 AI 工具实现水墨、手绘、数字、实拍等多种媒介的创新结合
              </p>
              
              {/* 水墨与数字动漫融合 */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-teal-700">水墨与数字动漫融合创作</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">能力锚点</h4>
                  <p className="text-gray-700">
                    用 AI 生成东方水墨风格的动漫画面，掌握水墨质感、笔触、意境的控制方法
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
                    <h5 className="font-semibold text-gray-800 mb-2">水墨风格 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[主体描述], 东方水墨风格，水墨质感，传统笔触，留白艺术，意境悠远，与数字动漫融合，电影级画质，8K 超高清 --ar 16:9 --style raw --s 250</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">水墨笔触控制 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[场景描述], 水墨画笔触，毛笔质感，墨色浓淡变化，飞白效果，传统山水画技法，与动漫人物融合，意境深远 --ar 16:9 --style raw</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">水墨意境表达 Prompt</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">[意境描述], 水墨意境，计白当黑，虚实相生，情景交融，不着一字尽得风流，东方美学意境，水墨与动漫融合，电影级光影 --ar 16:9</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    画面具备水墨质感、传统笔触、意境悠远、留白艺术、水墨与数字动漫完美融合
                  </p>
                </div>
              </div>
              
              {/* 手绘与 AI 结合 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-700">手绘与 AI 结合创作</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Photoshop AI</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Stable Diffusion</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">ComfyUI</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 1：手绘线稿 AI 上色</h5>
                    <p className="text-gray-700 mb-2">将手绘线稿转化为彩色画面</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">基于以下手绘线稿进行 AI 上色，保持手绘质感，色彩柔和自然，光影协调，风格统一，保留原始笔触感觉 --reference [手绘线稿路径]</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 2：手绘线稿 AI 细化</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">基于以下手绘线稿进行 AI 细化处理，增强细节表现，丰富纹理质感，提升画面精度，同时保留原始手绘风格和笔触 --reference [手绘线稿路径] --style_preserve true</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">步骤 3：手绘 AI 动画生成</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">基于以下手绘线稿生成 AI 动画，保持手绘风格和笔触，生成流畅动画，确保动画过程中风格统一，笔触一致 --reference [手绘线稿路径] --animation_style preserved</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    保留手绘艺术质感、色彩自然协调、细节丰富、风格统一、笔触一致
                  </p>
                </div>
              </div>
              
              {/* 电影级后期制作 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">电影级后期全流程制作</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">剪映专业版</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Adobe Premiere</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">After Effects</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">剪辑与节奏</h5>
                    <p className="text-gray-700 mb-2">AI 辅助剪辑，优化节奏</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">使用剪映专业版的 AI 剪辑功能，自动识别最佳镜头，优化剪辑节奏，确保叙事流畅，情感递进自然，符合电影语言。</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">配音与音效</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">使用 AI 配音工具生成符合角色性格的配音，添加环境音效、动作音效、背景音乐，确保音画同步，情感表达准确。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">特效与调色</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">使用 AI 辅助调色，应用电影级 LUT 预设，添加光效、粒子、转场等特效，确保整体视觉风格统一，达到电影级后期标准。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    剪辑流畅、节奏合理、音画同步、配音贴合、特效自然、调色统一、达到电影级成片标准
                  </p>
                </div>
              </div>
              
              {/* 实拍与 AI 动漫融合 */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-700">实拍与 AI 动漫融合创作</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">适配工具</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Runway ML</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Pika Labs</span>
                    <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Stable Video Diffusion</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">分步教学</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">实拍素材 AI 动漫化</h5>
                    <p className="text-gray-700 mb-2">将实拍镜头转化为动漫风格</p>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">将以下实拍视频素材转化为动漫风格，保持原始动作和构图，应用动漫风格滤镜，确保风格统一，动作流畅，与原实拍素材无缝融合 --input [实拍视频路径] --style anime</pre>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">实拍与动漫合成</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">将实拍背景与 AI 生成的动漫角色进行合成，确保光影一致、透视正确、融合自然，创建虚实结合的创新视觉效果。</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">混合媒体创新</h5>
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words font-mono">探索实拍、手绘、AI 生成、3D 动画等多种媒介的创新结合方式，拓展动漫创作的表现形式，创造独特的视觉语言。</pre>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-3">成果校验标准</h4>
                  <p className="text-green-700">
                    实拍与动漫融合自然、光影透视正确、风格统一、创新性强、视觉效果震撼
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* 底部导航 */}
          <ModuleFooter currentId="module7" />
        </article>
        </main>
        
        {/* 右侧：小标题导航 */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-4">
            <TableOfContents sections={sections} moduleName="混合媒体艺术" />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Module7