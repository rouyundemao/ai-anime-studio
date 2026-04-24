import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHashScroll } from '../../hooks/useHashScroll'
import BrandLogo from '../../components/BrandLogo'

// 六步标准化流程（2026 年最新）
const workflowSteps = [
  {
    id: 1,
    title: '构思与剧本创作',
    duration: '20%',
    icon: '📝',
    description: '讲什么故事？如何打动人心？',
    stepByStep: [
      {
        title: '灵感捕捉',
        content: '从日常生活中捕捉灵感，记录闪现的创意火花。观察身边的人和事，记录有趣的对话和场景。',
        tips: '随身携带笔记软件，随时记录有价值的想法。建立灵感收集库，定期整理和回顾。',
        tools: ['Notion', '飞书多维表格', 'Apple Notes']
      },
      {
        title: '故事内核塑造',
        content: '确定故事的核心命题和情感基调。思考：这个故事想表达什么？观众能感受到什么？',
        tips: '用一句话概括故事核心，确保整个创作过程不偏离主题。',
        tools: ['思维导图', '蒙版写作法']
      },
      {
        title: '角色设定',
        content: '创建有缺陷、有成长的角色。角色卡包含：基本信息、性格特点、核心动机、最大缺陷。',
        tips: '好的角色不是完美的，而是有真实感的。给角色设置内在冲突和外在挑战。',
        tools: ['角色卡模板', '人物弧光设计稿']
      },
      {
        title: '剧本结构设计',
        content: '采用三幕式结构或救猫咪九幕式。第一幕：建立世界和人物；第二幕：对抗和升级；第三幕：高潮和结局。',
        tips: '每个情节点都要推动故事前进，避免无效场景。',
        tools: ['剧本大纲模板', '情节点清单']
      },
      {
        title: '提示词模板',
        content: '使用结构化提示词生成剧本。Include: 场景、角色、冲突、情绪、风格描述。',
        tips: '提示词越具体，生成的内容越精准。',
        tools: ['AI剧本助手', '剧本提示词库']
      },
      {
        title: '视觉化描写',
        content: '将文字转化为可拍摄的画面描述。多使用环境描写、动作描写、细节描写。',
        tips: '想象你在描述一个电影镜头，注意光影、色彩、构图。',
        tools: ['分镜脚本模板', '视觉化清单']
      }
    ],
    promptTemplate: {
      title: '剧本生成提示词模板',
      baseTemplate: '角色：[角色名] | 场景：[场景描述] | 冲突：[冲突详情] | 情绪：[情绪基调] | 风格：[叙事风格] | 输出要求：[具体内容要求]',
      example: '角色：小镇青年小明 | 场景：废弃火车站黄昏 | 冲突：错过末班车，面临人生重要抉择 | 情绪：孤独中带着希望 | 风格：现实主义 | 输出要求：一段200字左右的内心独白'
    },
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
    stepByStep: [
      {
        title: '角色原型分析',
        content: '确定角色的基本类型和特征。参考经典角色原型（英雄、导师、反派等），但要有创新。',
        tips: '原型是起点，不是终点。在原型基础上加入独特元素。',
        tools: ['角色原型库', '经典角色分析']
      },
      {
        title: '多视角参考图',
        content: '创建角色的正面、侧面、背面、3/4视角参考图。确保角色在不同角度下保持一致性。',
        tips: '使用 AI 生成多视角图，然后手动调整细节。',
        tools: ['即梦 AI', 'ComfyUI', '角色一致性工具']
      },
      {
        title: '风格统一技术',
        content: '建立统一的视觉风格指南。包括色彩方案、线条风格、比例标准等。',
        tips: '创建风格参考板，确保所有生成内容符合统一标准。',
        tools: ['风格参考板', '色彩方案工具']
      },
      {
        title: 'ComfyUI 高级控制',
        content: '使用 ComfyUI 进行精细的角色控制。包括面部特征、服装细节、表情变化等。',
        tips: '掌握 ControlNet 和 IP-Adapter 技术，实现精准控制。',
        tools: ['ComfyUI', 'ControlNet', 'IP-Adapter']
      },
      {
        title: '角色一致性技术',
        content: '确保角色在不同场景、不同表情下保持一致性。使用固定种子、参考图等技术。',
        tips: '建立角色参考图库，每次生成前参考标准图。',
        tools: ['角色一致性插件', '参考图库管理']
      }
    ],
    promptTemplate: {
      title: '角色生成提示词模板',
      baseTemplate: '角色类型：[类型] | 面部特征：[五官描述] | 发型：[发型描述] | 服装：[服装描述] | 表情：[表情描述] | 风格：[艺术风格] | 角度：[视角] | 质量要求：[细节要求]',
      example: '角色类型：青春少女 | 面部特征：精致五官，大眼睛，樱桃小口，白皙皮肤 | 发型：黑色长发，自然垂落 | 服装：白色连衣裙，简约设计 | 表情：微笑，温柔 | 风格：写实动漫 | 角度：正面 | 质量要求：极致细节，电影级画质'
    },
    details: [
      '角色原型与角色卡',
      '多视角参考图',
      '风格统一技术',
      'ComfyUI 高级控制',
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
    stepByStep: [
      {
        title: '场景分类与风格统一',
        content: '根据故事需要创建不同类型的场景。室内、室外、城市、自然等，保持统一的艺术风格。',
        tips: '建立场景风格指南，确保所有场景符合世界观设定。',
        tools: ['场景分类模板', '风格指南']
      },
      {
        title: 'VR 实时调整技术',
        content: '使用 VR 技术实时查看和调整场景布局。3D 空间预览，快速迭代设计。',
        tips: 'VR 预览能发现平面预览看不到的问题。',
        tools: ['VR 预览工具', '3D 建模软件']
      },
      {
        title: '环境音效设计',
        content: '为场景添加环境音效，增强沉浸感。风声、水声、城市噪音等。',
        tips: '音效是氛围营造的关键，不要忽视。',
        tools: ['音效库', 'AI 音效生成']
      },
      {
        title: '色彩与光影统一',
        content: '统一场景的色彩方案和光影效果。不同场景使用不同的色彩情绪。',
        tips: '色彩是情绪的直接表达，暖色调温馨，冷色调忧郁。',
        tools: ['色彩方案工具', '光影编辑器']
      },
      {
        title: '场景参考图库',
        content: '建立丰富的场景参考图库。收集真实照片、艺术作品、电影截图等。',
        tips: '参考图库越丰富，生成的场景越真实。',
        tools: ['参考图库', 'Pinterest', 'Behance']
      }
    ],
    promptTemplate: {
      title: '场景生成提示词模板',
      baseTemplate: '场景类型：[类型] | 环境描述：[详细描述] | 色彩方案：[色彩] | 光影效果：[光影] | 氛围：[情绪基调] | 风格：[艺术风格] | 质量要求：[细节要求]',
      example: '场景类型：废弃城市 | 环境描述：破败的建筑，杂草丛生的街道，夕阳余晖 | 色彩方案：暖色调，橙黄色调 | 光影效果：侧光，长阴影 | 氛围：孤独，荒凉 | 风格：写实动漫 | 质量要求：电影级画质，极致细节'
    },
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
    stepByStep: [
      {
        title: '文生图 + 图生视频',
        content: '先生成高质量的静态图片，然后使用图生视频技术让画面动起来。',
        tips: '静态图质量决定视频质量，不要跳过这一步。',
        tools: ['即梦 AI', '文生图', '图生视频']
      },
      {
        title: '运动捕捉技术',
        content: '使用运动捕捉技术实现自然的角色动画。捕捉真实动作，应用到 AI 角色上。',
        tips: '运动捕捉让动画更自然，避免机械感。',
        tools: ['运动捕捉软件', 'AI 动作迁移']
      },
      {
        title: '帧数自动化',
        content: '使用 AI 自动补帧技术，提高动画流畅度。从 24fps 到 60fps 的自动升级。',
        tips: '高帧率让动画更流畅，但注意不要过度平滑。',
        tools: ['AI 补帧工具', 'RIFE', 'DAIN']
      },
      {
        title: '微表情控制',
        content: '精细控制角色的微表情变化。眼神、嘴角、眉毛的微小变化传达丰富情感。',
        tips: '微表情是角色灵魂，注意细节。',
        tools: ['表情控制插件', '面部动画工具']
      },
      {
        title: '镜头运动与转场',
        content: '设计镜头运动和场景转场。推拉摇移，淡入淡出，让动画更有电影感。',
        tips: '镜头语言是叙事的重要部分，不要随意使用。',
        tools: ['镜头设计工具', '转场效果库']
      }
    ],
    promptTemplate: {
      title: '动画生成提示词模板',
      baseTemplate: '基础画面：[静态描述] | 运动描述：[动作描述] | 运动幅度：[幅度] | 运动速度：[速度] | 镜头运动：[镜头] | 时长：[秒数] | 质量要求：[细节要求]',
      example: '基础画面：少女站在樱花树下 | 运动描述：微风吹动头发和裙摆，少女微微转头微笑 | 运动幅度：轻微 | 运动速度：缓慢 | 镜头运动：缓慢推进 | 时长：5秒 | 质量要求：电影级画质，流畅动画'
    },
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
    stepByStep: [
      {
        title: '配音艺术',
        content: '使用豆包 TTS 2.0 生成高质量配音。注意语调、情感、节奏的把握。',
        tips: '好的配音能让角色活起来，注意情感表达。',
        tools: ['豆包 TTS 2.0', 'ElevenLabs']
      },
      {
        title: 'AI 音乐生成',
        content: '使用 AI 生成背景音乐。根据场景情绪选择合适的音乐风格。',
        tips: '音乐是情绪的放大器，选择要谨慎。',
        tools: ['AI 音乐生成', 'Suno', 'Udio']
      },
      {
        title: '音画同步',
        content: '确保声音和画面的完美同步。口型、动作、音效的精确对齐。',
        tips: '音画不同步会严重影响观感，务必仔细检查。',
        tools: ['音频编辑软件', '同步工具']
      },
      {
        title: '视频剪辑调色',
        content: '剪辑视频片段，调整色彩和光影。统一整体视觉风格。',
        tips: '调色是最后的视觉包装，直接影响作品质感。',
        tools: ['剪映', 'DaVinci Resolve', 'Premiere']
      },
      {
        title: '数据分析优化',
        content: '分析视频数据，优化播放效果。观看时长、完播率、互动率等指标。',
        tips: '数据驱动优化，但不要为了数据牺牲艺术性。',
        tools: ['数据分析工具', '平台后台']
      }
    ],
    promptTemplate: {
      title: '配音生成提示词模板',
      baseTemplate: '角色：[角色名] | 台词：[具体台词] | 情绪：[情绪基调] | 语速：[快慢] | 语调：[高低] | 风格：[配音风格] | 输出要求：[格式要求]',
      example: '角色：少女小明 | 台词：我终于找到了回家的路 | 情绪：感动，释然 | 语速：缓慢 | 语调：柔和 | 风格：自然真实 | 输出要求：WAV 格式，44.1kHz'
    },
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
    stepByStep: [
      {
        title: '红果签约攻略',
        content: '了解红果平台的签约要求和流程。准备作品集，撰写申请文案。',
        tips: '红果是优质内容平台，签约能获得更好推荐。',
        tools: ['红果平台', '签约指南']
      },
      {
        title: '抖音/B 站策略',
        content: '制定不同平台的发布策略。抖音重短视频，B 站重中长视频。',
        tips: '不同平台用户偏好不同，内容要针对性调整。',
        tools: ['抖音', 'B站', '平台分析工具']
      },
      {
        title: 'AI 数据分析',
        content: '使用 AI 分析视频数据，优化发布策略。观看时长、完播率、互动率等。',
        tips: '数据是客观的，但解读要结合实际。',
        tools: ['数据分析工具', 'AI 分析插件']
      },
      {
        title: '多平台分发',
        content: '将作品分发到多个平台。YouTube、TikTok、Instagram 等。',
        tips: '多平台分发能扩大影响力，但注意格式适配。',
        tools: ['多平台管理工具', '格式转换工具']
      },
      {
        title: '商业化变现路径',
        content: '探索作品的商业化路径。广告分成、付费内容、IP 授权等。',
        tips: '商业化是结果，不是目的。先做好内容，再谈变现。',
        tools: ['商业化工具', '版权保护']
      }
    ],
    promptTemplate: {
      title: '发布文案提示词模板',
      baseTemplate: '作品类型：[类型] | 核心亮点：[亮点描述] | 目标受众：[受众] | 平台：[平台] | 风格：[文案风格] | 输出要求：[字数/格式]',
      example: '作品类型：AI 动漫短片 | 核心亮点：电影级画质，感人故事 | 目标受众：18-35 岁动漫爱好者 | 平台：抖音 | 风格：轻松有趣，带悬念 | 输出要求：100 字以内，带话题标签'
    },
    details: [
      '红果签约攻略',
      '抖音/B 站策略',
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
  useHashScroll()

  return (
    <div className="space-y-12">
      {/* 页头 */}
      <section className="relative text-center py-12 md:py-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#F5F0E8] via-white to-[#F0EAFB]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B7AB8]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C23B22]/10 rounded-full blur-3xl" />

        <div className="relative z-10 px-4">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#8B7AB8]/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BrandLogo size={22} showText={false} />
            <span className="text-gray-700">工作流 · Production Workflow</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            六步标准化生产流程
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            把"做一部 AI 动漫"拆成可执行的六个阶段，每一步都有<span className="text-gray-700">清晰目标、产出物、工具链和检查清单</span>。<br className="hidden md:block" />
            <span className="text-gray-500">团队协作、个人出片、IP 批量生产都能套用。</span>
          </p>
        </div>
      </section>

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
                onClick={() => {
                  setCurrentStep(step.id - 1)
                  const element = document.getElementById(`step-${step.id}`)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
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
                {/* 操作步骤 */}
                {step.stepByStep && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span>📋</span> 详细操作步骤
                    </h3>
                    <div className="space-y-4">
                      {step.stepByStep.map((stepItem, i) => (
                        <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                          <h4 className="font-bold text-primary-700 mb-2">{stepItem.title}</h4>
                          <p className="text-gray-700 mb-3">{stepItem.content}</p>
                          {stepItem.tips && (
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                              <span className="text-yellow-800 text-sm">💡 提示：{stepItem.tips}</span>
                            </div>
                          )}
                          {stepItem.tools && (
                            <div className="mt-3">
                              <span className="text-sm text-gray-500">推荐工具：</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {stepItem.tools.map((tool, j) => (
                                  <span key={j} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 提示词模板 */}
                {step.promptTemplate && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span>📝</span> {step.promptTemplate.title}
                    </h3>
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-200 rounded-xl p-6">
                      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                        <pre className="text-sm text-gray-800 font-mono whitespace-pre-wrap">{step.promptTemplate.baseTemplate}</pre>
                      </div>
                      {step.promptTemplate.example && (
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">示例：</h4>
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <pre className="text-sm text-gray-800 font-mono whitespace-pre-wrap">{step.promptTemplate.example}</pre>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

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
                    onClick={() => {
                      setCurrentStep(-1)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
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