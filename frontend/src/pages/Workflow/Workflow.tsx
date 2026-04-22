import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// 六步标准化流程（2026 年最新）
const workflowSteps = [
  {
    id: 1,
    title: '构思与剧本创作',
    duration: '20%',
    icon: '📝',
    description: '讲什么故事？如何打动人心？',
    details: [
      '灵感捕捉与故事内核',
      '角色塑造与情感曲线',
      '音乐漫剧新手切入点',
      '剧本提示词模板',
      '视觉化描写与留白艺术'
    ],
    tools: ['豆包 AI', '通义千问', 'DeepSeek'],
    optimization: '增加：音乐漫剧切入点、灵感捕捉与故事内核'
  },
  {
    id: 2,
    title: '角色设计',
    duration: '25%',
    icon: '👤',
    description: '角色长什么样？如何让人记住？',
    details: [
      '角色原型与角色卡',
      '多视角参考图',
      '风格统一技术',
      '_comfyUI 高级控制',
      '角色一致性技术'
    ],
    tools: ['即梦 AI 5.0', 'ComfyUI', '中控', 'Seedance 2.0'],
    optimization: '增加：多视角参考图、ComfyUI 高级控制、角色一致性技术'
  },
  {
    id: 3,
    title: '场景设计与布局',
    duration: '15%',
    icon: '🏠',
    description: '故事发生在哪？如何营造氛围？',
    details: [
      '场景分类与风格统一',
      'VR 实时调整技术',
      '环境音效设计',
      '色彩与光影统一',
      '场景参考图库'
    ],
    tools: ['即梦 AI', '海螺 AI', 'Vidu'],
    optimization: '增加：场景设计与布局、VR 实时调整、环境音效设计'
  },
  {
    id: 4,
    title: '动画制作',
    duration: '30%',
    icon: '🎬',
    description: '如何让静态画面有生命力？',
    details: [
      '文生图 + 图生视频',
      '运动捕捉技术',
      '帧数自动化',
      '微表情控制',
      '镜头运动与转场'
    ],
    tools: ['即梦 Seedance 2.0', '豆包 AI', 'Kling', 'Wan2.2'],
    optimization: '增加：运动捕捉技术、帧数自动化、豆包 TTS 2.0 微表情控制'
  },
  {
    id: 5,
    title: '后期制作',
    duration: '10%',
    icon: '🎧',
    description: '如何用声音塑造灵魂？',
    details: [
      '配音艺术（豆包 TTS 2.0）',
      'AI 音乐生成',
      '音画同步',
      '视频剪辑调色',
      '数据分析优化'
    ],
    tools: ['豆包 TTS 2.0', '剪映', 'ElevenLabs', '调色大师'],
    optimization: '增加：AI 音乐生成、豆包 TTS 2.0 微表情控制、数据分析优化'
  },
  {
    id: 6,
    title: '发布与推广',
    duration: '5%',
    icon: '🚀',
    description: '如何让作品被更多人看到？',
    details: [
      '红果签约攻略',
      '抖音/ B 站策略',
      'AI 数据分析',
      '多平台分发',
      '商业化变现路径'
    ],
    tools: ['红果', '抖音', 'B站', 'YouTube'],
    optimization: '新增：发布与推广策略、AI数据分析、商业化变现路径'
  }
]

function Workflow() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🎬 AI 动漫制作六步标准化流程</h1>
          <p className="text-xl opacity-90">2026 年最新行业标准 · 专业级制作流程</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* 流程概览 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span>📊</span> 流程概览
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.id}
                onClick={() => setCurrentStep(step.id - 1)}
                className={`cursor-pointer p-4 rounded-xl transition-all duration-300 hover:shadow-lg ${
                  currentStep === step.id - 1
                    ? 'bg-primary-500 text-white ring-2 ring-primary-600'
                    : 'bg-white border border-gray-200 hover:bg-primary-50'
                }`}
              >
                <div className="text-3xl mb-2">{step.icon}</div>
                <div className="font-bold">{step.title}</div>
                <div className={`text-sm mt-1 ${currentStep === step.id - 1 ? 'text-white' : 'text-gray-500'}`}>
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 当前选中步骤的详细内容 */}
        <div className={`transition-all duration-500 ${currentStep !== -1 ? 'opacity-100' : 'opacity-50'}`}>
          {workflowSteps.map((step, index) => (
            <div
              key={step.id}
              id={`step-${step.id}`}
              className={`mb-12 bg-white rounded-2xl shadow-xl overflow-hidden ${
                currentStep === index ? 'ring-4 ring-primary-500' : ''
              }`}
            >
              <div className={`bg-gradient-to-r ${step.id === 1 ? 'from-gray-700 to-gray-900' : step.id === 2 ? 'from-blue-600 to-cyan-600' : step.id === 3 ? 'from-green-600 to-emerald-600' : step.id === 4 ? 'from-purple-600 to-indigo-600' : step.id === 5 ? 'from-teal-600 to-cyan-600' : 'from-orange-600 to-red-600'} p-8 text-white`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                      <span className="text-4xl">{step.icon}</span>
                      {step.id}. {step.title}
                    </h2>
                    <p className="text-xl opacity-90">{step.description}</p>
                    <div className="mt-4 inline-block bg-white/20 px-4 py-2 rounded-full">
                      ⏱️ 时间占比：{step.duration}
                    </div>
                  </div>
                  <div className="hidden md:block text-right">
                    <div className="text-6xl font-bold opacity-20">{step.id}</div>
                    <div className="text-lg opacity-70">STEP</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* 核心内容 */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>📝</span> 核心内容
                  </h3>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary-500 text-xl">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 推荐工具 */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>🛠️</span> 推荐工具
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {step.tools.map((tool, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div className="font-semibold text-gray-800">{tool}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 优化内容 */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span>✨</span> 优化内容
                  </h3>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6">
                    <p className="text-gray-700 leading-relaxed">{step.optimization}</p>
                  </div>
                </div>

                {/* 返回按钮 */}
                <div className="text-center mt-8">
                  <button
                    onClick={() => setCurrentStep(-1)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors"
                  >
                    ← 返回流程概览
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 结语 */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-white text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">🎯 六步流程总结</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            AI 动漫制作不再是复杂的系统工程，而是可以通过标准化流程快速掌握的技能。<br/>
            从构思到发布，每一步都有明确的方法和工具支持，让你的创作之路更加顺畅！
          </p>
          <div className="mt-8">
            <Link
              to="/tutorials"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              查看全部教程 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workflow