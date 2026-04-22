import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopNavigation, SideNavigation, TableOfContents, ModuleFooter } from '../../components/AdvancedNavigation'

// 模块 8：六步标准化工作流
function Module8() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  // 目录章节
  const sections = [
    { id: 'workflow-overview', title: '流程概览', icon: '📊' },
    { id: 'step1-script', title: '构思与剧本创作', icon: '📝' },
    { id: 'step2-character', title: '角色设计', icon: '👤' },
    { id: 'step3-scene', title: '场景设计与布局', icon: '🏠' },
    { id: 'step4-animation', title: '动画制作', icon: '🎬' },
    { id: 'step5-post', title: '后期制作', icon: '🎧' },
    { id: 'step6-publish', title: '发布与推广', icon: '🚀' }
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
      <SideNavigation currentId="module8" />
      <TableOfContents sections={sections} moduleName="六步标准化工作流" />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* 模块标题 */}
          <header className="mb-12 border-b border-gray-200 pb-8">
            <div className="inline-block bg-gradient-to-r from-primary-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              🎬 六步标准化工作流
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              六步标准化工作流
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              2026 年最新行业标准 · 专业级 AI 动漫制作流程
            </p>
            <div className="flex items-center gap-6 mt-6 text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                ⏳ 完整流程
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                📚 行业标准
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                🎯 实战导向
              </span>
            </div>
          </header>

          {/* 内容主体 */}
          <div className="prose prose-lg max-w-none">
            
            {/* 流程概览 */}
            <section id="workflow-overview" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-primary-600 border-l-4 border-primary-500 pl-4">
                📊 流程概览
              </h2>
              
              <div className="bg-gradient-to-br from-primary-50 to-purple-50 p-8 rounded-xl border border-primary-200 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  基于 2026 年 4 月最新行业标准，AI 动漫制作已形成完整的六步标准化流程。
                  每一步都有明确的时间占比、核心内容和推荐工具，让你的创作之路更加顺畅！
                </p>
                
                {/* 六步流程卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* 步骤 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">📝</div>
                    <h3 className="text-xl font-bold mb-2">1. 构思与剧本创作</h3>
                    <div className="text-sm text-gray-600 mb-3">⏱️ 时间占比：20%</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 灵感捕捉与故事内核</li>
                      <li>• 音乐漫剧新手切入点</li>
                      <li>• 角色塑造与情感曲线</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-500">推荐工具：豆包 AI、通义千问、DeepSeek</div>
                    </div>
                  </div>
                  
                  {/* 步骤 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">👤</div>
                    <h3 className="text-xl font-bold mb-2">2. 角色设计</h3>
                    <div className="text-sm text-gray-600 mb-3">⏱️ 时间占比：25%</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 多视角参考图</li>
                      <li>• ComfyUI 高级控制</li>
                      <li>• 角色一致性技术</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-500">推荐工具：即梦 AI 5.0、Seedance 2.0</div>
                    </div>
                  </div>
                  
                  {/* 步骤 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">🏠</div>
                    <h3 className="text-xl font-bold mb-2">3. 场景设计与布局</h3>
                    <div className="text-sm text-gray-600 mb-3">⏱️ 时间占比：15%</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• VR 实时调整技术</li>
                      <li>• 环境音效设计</li>
                      <li>• 色彩与光影统一</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-500">推荐工具：即梦 AI、海螺 AI、Vidu</div>
                    </div>
                  </div>
                  
                  {/* 步骤 4 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">🎬</div>
                    <h3 className="text-xl font-bold mb-2">4. 动画制作</h3>
                    <div className="text-sm text-gray-600 mb-3">⏱️ 时间占比：30%</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 运动捕捉技术</li>
                      <li>• 帧数自动化</li>
                      <li>• 微表情控制</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-500">推荐工具：Kling、Wan2.2、豆包 AI</div>
                    </div>
                  </div>
                  
                  {/* 步骤 5 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">🎧</div>
                    <h3 className="text-xl font-bold mb-2">5. 后期制作</h3>
                    <div className="text-sm text-gray-600 mb-3">⏱️ 时间占比：10%</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• AI 音乐生成</li>
                      <li>• 豆包 TTS 2.0 配音</li>
                      <li>• 数据分析优化</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-500">推荐工具：豆包 TTS 2.0、剪映、ElevenLabs</div>
                    </div>
                  </div>
                  
                  {/* 步骤 6 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">🚀</div>
                    <h3 className="text-xl font-bold mb-2">6. 发布与推广</h3>
                    <div className="text-sm text-gray-600 mb-3">⏱️ 时间占比：5%</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 红果签约攻略</li>
                      <li>• 抖音/B 站策略</li>
                      <li>• AI 数据分析</li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-500">推荐工具：红果、抖音、B 站、YouTube</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 流程图 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-center">🔄 完整工作流程</h3>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-4 rounded-lg font-bold">1. 构思与剧本</div>
                  <span className="text-2xl text-gray-400">→</span>
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-lg font-bold">2. 角色设计</div>
                  <span className="text-2xl text-gray-400">→</span>
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-lg font-bold">3. 场景设计</div>
                  <span className="text-2xl text-gray-400">→</span>
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 rounded-lg font-bold">4. 动画制作</div>
                  <span className="text-2xl text-gray-400">→</span>
                  <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-4 rounded-lg font-bold">5. 后期制作</div>
                  <span className="text-2xl text-gray-400">→</span>
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-4 rounded-lg font-bold">6. 发布推广</div>
                </div>
              </div>
            </section>

            {/* 第一步：构思与剧本创作 */}
            <section id="step1-script" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-gray-700 border-l-4 border-gray-500 pl-4">
                📝 第一步：构思与剧本创作
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-4">核心问题</h3>
                <p className="text-lg text-gray-700 mb-6">讲什么故事？如何打动人心？</p>
                
                <h3 className="text-xl font-bold mb-4">核心内容</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3">✓</span>
                    <span><strong>灵感捕捉：</strong>记录触动你的情感时刻、人物细节、奇幻场景</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3">✓</span>
                    <span><strong>故事内核：</strong>用一句话概括故事（主角 + 情境 + 目标 + 困难 + 结果）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3">✓</span>
                    <span><strong>音乐漫剧：</strong>新手最佳切入点，音乐天然提供节奏</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3">✓</span>
                    <span><strong>角色塑造：</strong>欲望、恐惧、秘密、成长四个维度</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3">✓</span>
                    <span><strong>情感曲线：</strong>开场→发展→转折→高潮→结局</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-4">推荐工具</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">豆包 AI</div>
                    <div className="text-sm text-gray-600">剧本细化与对话优化</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">通义千问</div>
                    <div className="text-sm text-gray-600">情感表达润色</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">DeepSeek</div>
                    <div className="text-sm text-gray-600">故事大纲生成</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">提示词模板</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
{`请帮我创作一个 AI 动漫短剧剧本：

【故事类型】校园奇幻 / 古风武侠 / 都市情感 / 科幻冒险

【核心主题】友情 / 成长 / 爱情 / 梦想 / 复仇

【主角设定】
- 姓名：
- 年龄：
- 性格：
- 外貌特征：
- 内心渴望：
- 最大恐惧：

【故事背景】

【核心冲突】

【期望集数】每集约 1-2 分钟，共 5 集

【情感基调】温暖治愈 / 热血励志 / 悬疑烧脑 / 轻松搞笑

【特殊要求】
- 每集结尾需要留悬念
- 对话要符合角色性格
- 场景描写要视觉化（AI 能生成画面）`}
                  </pre>
                </div>
              </div>

              {/* 实战案例 */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl border-2 border-yellow-200">
                <h3 className="text-2xl font-bold mb-6 text-orange-600">🎬 实战案例：《毕业的夏天》</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">项目概述</h4>
                    <p className="text-gray-700">
                      一部以毕业为主题的校园奇幻短剧，讲述一个内向的高中生在毕业前夕意外获得了时间倒流的能力，
                      最终学会珍惜当下、勇敢表达自己的故事。
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">故事内核</h4>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-700 italic">
                        "内向高中生林小雨 + 毕业前夕获得时间倒流能力 + 想要向暗恋的学长表白但总是失败 + 
                        学长即将出国留学 + 最终学会珍惜当下，勇敢表达自我"
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">使用工具与提示词</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800 mb-2">豆包 AI - 故事大纲</div>
                        <pre className="text-xs text-gray-600 whitespace-pre-wrap bg-gray-50 p-3 rounded">
{"请帮我创作一个校园奇幻短剧大纲：\n主角是内向的高三女生林小雨，\n毕业前夕意外获得时间倒流能力，\n想向暗恋学长表白但每次都失败，\n学长即将出国留学，\n最终学会珍惜当下。\n要求：5集，每集1-2分钟，\n温暖治愈风格"}
                        </pre>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800 mb-2">通义千问 - 对话优化</div>
                        <pre className="text-xs text-gray-600 whitespace-pre-wrap bg-gray-50 p-3 rounded">
{"请优化这段对话，让林小雨的\n犹豫和紧张更自然：\n学长，我...我有话想对你说。\n嗯？你说吧。\n（心跳加速，说不出话）"}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">遇到的问题与解决方案</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-orange-600 mb-1">问题1：故事节奏太慢</div>
                        <div className="text-sm text-gray-700">解决方案：删减无关细节，聚焦主线冲突，增加每集悬念</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-orange-600 mb-1">问题2：对话生硬</div>
                        <div className="text-sm text-gray-700">解决方案：增加内心独白，使用通义千问润色，加入停顿和省略号</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-orange-600 mb-1">问题3：结尾不够感动</div>
                        <div className="text-sm text-gray-700">解决方案：添加回忆杀，用蒙太奇手法剪辑，配合悲伤的背景音乐</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">最终效果</h4>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✅ 5集完整剧本，总时长约8分钟</li>
                        <li>✅ 情感曲线完整：期待→挫折→希望→高潮→温暖</li>
                        <li>✅ 对话自然，符合高中生语言习惯</li>
                        <li>✅ 场景描写视觉化，便于AI生成画面</li>
                        <li>✅ 每集结尾留悬念，吸引观众追更</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第二步：角色设计 */}
            <section id="step2-character" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 border-l-4 border-blue-500 pl-4">
                👤 第二步：角色设计
              </h2>
              
              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-4">核心问题</h3>
                <p className="text-lg text-gray-700 mb-6">角色长什么样？如何让人记住？</p>
                
                <h3 className="text-xl font-bold mb-4">核心内容</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span><strong>多视角参考图：</strong>正面、侧面、背面、全身图</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span><strong>ComfyUI 高级控制：</strong>IP-Adapter、ControlNet、Roop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span><strong>角色一致性技术：</strong>固定提示词、相同 seed、参考图锁定</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span><strong>角色卡制作：</strong>基本信息、外貌特征、性格特点、代表色</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">✓</span>
                    <span><strong>表情集设计：</strong>喜、怒、哀、乐、惊 5 种基础表情</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-4">推荐工具</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">即梦 AI 5.0</div>
                    <div className="text-sm text-gray-600">角色生成主力工具</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">Seedance 2.0</div>
                    <div className="text-sm text-gray-600">多主体一致性控制</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">提示词模板</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
{`【基础描述】
一位 16 岁的中国少女，黑色齐肩短发，左侧别着蓝色星星发卡，
琥珀色大眼睛，眼神清澈带着忧郁，皮肤白皙，

【服装】
穿着白色校服衬衫，深蓝色百褶裙，白色长袜，
左手腕戴着红色编织手绳，

【风格】
高质量动漫风格，新海诚风格，细腻的光影，
柔和的色调，电影级画面，

【质量要求】
完美精致五官，五官比例协调，面部光照均匀，
极致面部细节刻画，人物结构完美无瑕`}
                  </pre>
                </div>
              </div>

              {/* 实战案例 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">🎬 实战案例：《林小雨》角色设计</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">角色设定</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                        <div className="text-2xl mb-1">👩</div>
                        <div className="text-sm font-bold">姓名</div>
                        <div className="text-xs text-gray-600">林小雨</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                        <div className="text-2xl mb-1">🎂</div>
                        <div className="text-sm font-bold">年龄</div>
                        <div className="text-xs text-gray-600">18岁</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                        <div className="text-2xl mb-1">📏</div>
                        <div className="text-sm font-bold">身高</div>
                        <div className="text-xs text-gray-600">165cm</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                        <div className="text-2xl mb-1">🎭</div>
                        <div className="text-sm font-bold">性格</div>
                        <div className="text-xs text-gray-600">内向温柔</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">多视角参考图</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-blue-100 p-3 rounded-lg text-center">
                        <div className="text-sm font-bold mb-1">正面</div>
                        <div className="text-xs text-blue-600">标准参考</div>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-lg text-center">
                        <div className="text-sm font-bold mb-1">侧面</div>
                        <div className="text-xs text-blue-600">轮廓结构</div>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-lg text-center">
                        <div className="text-sm font-bold mb-1">背面</div>
                        <div className="text-xs text-blue-600">发型设计</div>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-lg text-center">
                        <div className="text-sm font-bold mb-1">全身</div>
                        <div className="text-xs text-blue-600">服装比例</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">使用工具与参数</h4>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="font-bold text-gray-800 mb-2">即梦 AI 5.0</div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div>• 分辨率：1080x1920 (9:16)</div>
                            <div>• 质量等级：高质量</div>
                            <div>• 风格：新海诚风格</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 mb-2">Seedance 2.0</div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div>• 角色一致性：高</div>
                            <div>• 参考图权重：0.8</div>
                            <div>• 脸部特征锁定：开启</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">遇到的问题与解决方案</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-blue-600 mb-1">问题1：角色在不同场景下不一致</div>
                        <div className="text-sm text-gray-700">解决方案：使用 Seedance 2.0 的一致性控制，固定提示词中的核心特征词</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-blue-600 mb-1">问题2：发卡位置每次都不同</div>
                        <div className="text-sm text-gray-700">解决方案：在提示词中明确标注"左侧别着蓝色星星发卡"，提高权重</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-blue-600 mb-1">问题3：表情不够丰富</div>
                        <div className="text-sm text-gray-700">解决方案：设计5种基础表情（喜、怒、哀、乐、惊），分别生成参考图</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">最终效果</h4>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✅ 8张多视角参考图，角色一致性达90%+</li>
                        <li>✅ 5种基础表情，每个表情3个变体</li>
                        <li>✅ 完整的角色卡（基本信息、外貌、性格、代表色）</li>
                        <li>✅ 角色在不同场景、不同角度都保持一致性</li>
                        <li>✅ 建立了一套可复用的角色生成工作流</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第三步：场景设计与布局 */}
            <section id="step3-scene" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-green-600 border-l-4 border-green-500 pl-4">
                🏠 第三步：场景设计与布局
              </h2>
              
              <div className="bg-green-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-4">核心问题</h3>
                <p className="text-lg text-gray-700 mb-6">故事发生在哪？如何营造氛围？</p>
                
                <h3 className="text-xl font-bold mb-4">核心内容</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span><strong>场景分类：</strong>室内、自然、城市、幻想四大类</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span><strong>VR 实时调整：</strong>实时预览和调整场景细节</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span><strong>环境音效设计：</strong>鸟鸣、风声、水流等环境音</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span><strong>色彩与光影统一：</strong>建立场景色调标准</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span><strong>场景参考图库：</strong>收集高质量场景参考</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-4">推荐工具</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">即梦 AI</div>
                    <div className="text-sm text-gray-600">场景生成</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">海螺 AI</div>
                    <div className="text-sm text-gray-600">快速分镜</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">Vidu</div>
                    <div className="text-sm text-gray-600">场景动画</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第四步：动画制作 */}
            <section id="step4-animation" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-purple-600 border-l-4 border-purple-500 pl-4">
                🎬 第四步：动画制作
              </h2>
              
              <div className="bg-purple-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-4">核心问题</h3>
                <p className="text-lg text-gray-700 mb-6">如何让静态画面有生命力？</p>
                
                <h3 className="text-xl font-bold mb-4">核心内容</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span><strong>文生图 + 图生视频：</strong>从静态到动态的完整流程</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span><strong>运动捕捉技术：</strong>将实际动作转化为角色动画</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span><strong>帧数自动化：</strong>AI 自动生成中间帧</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span><strong>微表情控制：</strong>眨眼、微笑、惊讶等微表情</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">✓</span>
                    <span><strong>镜头运动与转场：</strong>推、拉、摇、移、跟</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-4">推荐工具</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">Kling</div>
                    <div className="text-sm text-gray-600">高质量视频生成</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">Wan2.2</div>
                    <div className="text-sm text-gray-600">图生视频本地部署</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">运动强度参考</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="space-y-4">
                    <div>
                      <div className="font-bold text-gray-800 mb-2">轻微运动（强度 0.1-0.3）</div>
                      <div className="text-sm text-gray-600">眨眼、呼吸、头发飘动、衣服微动</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-2">中等运动（强度 0.3-0.5）</div>
                      <div className="text-sm text-gray-600">转头、转身、手势动作、走路</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-2">大幅运动（强度 0.5-0.8）</div>
                      <div className="text-sm text-gray-600">奔跑、跳跃、打斗动作、复杂舞蹈</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第五步：后期制作 */}
            <section id="step5-post" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-teal-600 border-l-4 border-teal-500 pl-4">
                🎧 第五步：后期制作
              </h2>
              
              <div className="bg-teal-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-4">核心问题</h3>
                <p className="text-lg text-gray-700 mb-6">如何用声音塑造灵魂？</p>
                
                <h3 className="text-xl font-bold mb-4">核心内容</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>AI 音乐生成：</strong>自动生成符合气氛的背景音乐</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>豆包 TTS 2.0 配音：</strong>Vivi 2.0 音色，自然流畅</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>数据分析优化：</strong>根据观众反馈优化音效和音乐</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>视频剪辑调色：</strong>剪映快速剪辑，统一色调</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>音画同步：</strong>口型对齐、动作同步、情绪同步</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-4">推荐工具</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">豆包 TTS 2.0</div>
                    <div className="text-sm text-gray-600">中文配音</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">剪映</div>
                    <div className="text-sm text-gray-600">视频剪辑</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">ElevenLabs</div>
                    <div className="text-sm text-gray-600">多语言配音</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">音量平衡参考</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">人声</span>
                      <span className="text-gray-600 font-mono">-6dB 到 -3dB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">BGM</span>
                      <span className="text-gray-600 font-mono">-18dB 到 -12dB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">音效</span>
                      <span className="text-gray-600 font-mono">-12dB 到 -6dB</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第六步：发布与推广 */}
            <section id="step6-publish" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-orange-600 border-l-4 border-orange-500 pl-4">
                🚀 第六步：发布与推广
              </h2>
              
              <div className="bg-orange-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-4">核心问题</h3>
                <p className="text-lg text-gray-700 mb-6">如何让作品被更多人看到？</p>
                
                <h3 className="text-xl font-bold mb-4">核心内容</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    <span><strong>红果签约攻略：</strong>5 部以上作品可签约，月收入 5000-30000 元</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    <span><strong>抖音/B 站策略：</strong>多平台分发，数据分析优化</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    <span><strong>AI 数据分析：</strong>了解观众偏好，制定推广策略</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    <span><strong>商业化变现：</strong>平台签约、定制服务、知识付费、代运营</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    <span><strong>系列化运营：</strong>制作系列内容提高粉丝粘性</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-4">推荐平台</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">红果</div>
                    <div className="text-sm text-gray-600">漫剧专业平台</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">抖音</div>
                    <div className="text-sm text-gray-600">短视频流量大</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">B 站</div>
                    <div className="text-sm text-gray-600">二次元用户集中</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-gray-800">YouTube</div>
                    <div className="text-sm text-gray-600">国际化发布</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">变现渠道</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-bold text-gray-800 mb-2">平台签约</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 红果：5 部作品可签约</li>
                        <li>• 抖音：1000 粉丝 +4000 播放</li>
                        <li>• B 站：1000 粉丝 +10 万播放</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-2">定制服务</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 企业宣传：3000-20000 元/条</li>
                        <li>• 个人定制：500-5000 元/条</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-2">知识付费</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 教程销售：99-999 元</li>
                        <li>• 直播教学：99-299 元/场</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 mb-2">代运营</div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 全案代运营：5000-30000 元/月</li>
                        <li>• 内容制作：2000-10000 元/条</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 实战案例 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-6 text-green-600">🎬 实战案例：《毕业的夏天》推广策略</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">发布策略</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800 mb-2">红果（主阵地）</div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 首发发布5集完整系列</li>
                          <li>• 申请签约创作者</li>
                          <li>• 参与平台推荐活动</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-gray-800 mb-2">抖音（引流）</div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 发布精彩片段（15-30秒）</li>
                          <li>• 添加热门话题标签</li>
                          <li>• 引导到红果观看完整版</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">发布时间与频率</h4>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">第一天</div>
                          <div className="text-sm text-gray-600">第1集</div>
                          <div className="text-xs text-gray-500">19:00 发布</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">第二天</div>
                          <div className="text-sm text-gray-600">第2-3集</div>
                          <div className="text-xs text-gray-500">12:00, 19:00</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">第三天</div>
                          <div className="text-sm text-gray-600">第4-5集</div>
                          <div className="text-xs text-gray-500">12:00, 19:00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">数据分析与优化</h4>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="font-bold text-gray-800 mb-2">关键数据指标</div>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 完播率：超过40%</li>
                            <li>• 点赞率：超过8%</li>
                            <li>• 分享率：超过3%</li>
                            <li>• 评论数：每集至少10条</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 mb-2">优化策略</div>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 完播率低：优化开头前5秒</li>
                            <li>• 点赞率低：增加情感高潮点</li>
                            <li>• 分享率低：添加共鸣台词</li>
                            <li>• 评论少：设置悬念提问</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">遇到的问题与解决方案</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-green-600 mb-1">问题1：红果播放量低</div>
                        <div className="text-sm text-gray-700">解决方案：在抖音发布精彩片段引流，使用热门音乐和标签</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-green-600 mb-1">问题2：评论互动少</div>
                        <div className="text-sm text-gray-700">解决方案：在视频结尾设置问题，主动回复观众评论，制造话题讨论</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="font-bold text-green-600 mb-1">问题3：未能签约红果</div>
                        <div className="text-sm text-gray-700">解决方案：继续制作更多作品，提升质量，申请创作者扶持计划</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-800">最终成果</h4>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>✅ 红果平台播放量：15万+</li>
                        <li>✅ 抖音引流播放量：50万+</li>
                        <li>✅ 成功签约红果创作者</li>
                        <li>✅ 获得平台推荐，月收入约1.2万元</li>
                        <li>✅ 粉丝增长到1.5万，建立稳定观众群</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* 底部导航 */}
          <ModuleFooter currentId="module8" />
        </article>
      </div>
    </div>
  )
}

export default Module8
