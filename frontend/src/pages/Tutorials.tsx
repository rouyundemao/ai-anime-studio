import React from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../components/BrandLogo'
import { NavIcon } from '../components/NavIcons'

interface Module {
  id: string
  title: string
  subtitle: string
  category: string
  duration: string
  description: string
  outcomes: string[]
  color: string
  icon: 'palette' | 'book' | 'user' | 'globe' | 'image' | 'film' | 'sparkles' | 'rocket'
  path: string
  level: '入门' | '进阶' | '高阶'
}

const modules: Module[] = [
  {
    id: 'module1',
    title: '艺术理念',
    subtitle: '建立通用 AI 动漫的美学坐标系',
    category: '核心理念',
    duration: '深度研习',
    description: '在开始使用任何 AI 工具之前，先建立自己的美学判断力。系统梳理东方留白、西方戏剧张力、电影语言三大体系，让 AI 成为你审美的放大器，而不是替代品。',
    outcomes: ['能够描述并定调自己作品的美学风格', '建立可量化的画面评价标准', '掌握 6 种风格基线 Prompt 模板'],
    color: 'from-[#8B7AB8] to-[#5B4B89]',
    icon: 'palette',
    path: '/module-1',
    level: '入门'
  },
  {
    id: 'module2',
    title: '故事创作',
    subtitle: '从灵感火花到可拍摄剧本',
    category: '叙事工程',
    duration: '深度创作',
    description: '剧本决定 70% 的成片质量。讲透三幕式、救猫咪 15 节拍、英雄之旅、短剧钩子公式四种主流结构，并提供漫剧 / 微短剧 / MV / 广告片 4 种题材的落地模板。',
    outcomes: ['30 分钟内完成一部短片剧本大纲', '掌握 4 种剧本结构的适用场景', '建立自己的故事灵感库'],
    color: 'from-[#C2649C] to-[#8B3A6E]',
    icon: 'book',
    path: '/module-2',
    level: '入门'
  },
  {
    id: 'module3',
    title: '角色设计',
    subtitle: '可商用的角色一致性方案',
    category: '视觉资产',
    duration: '精细打磨',
    description: '困扰所有 AI 动漫创作者的"角色脸会变"问题，在这一章得到系统解决。覆盖三视图 / 表情集 / 服装集的制作流程，以及 Lora 训练、IP-Adapter、Reference、ControlNet 四套一致性方案的取舍。',
    outcomes: ['产出一套完整角色资产包（三视图 + 表情集）', '掌握 4 种角色一致性技术路线', '建立可批量生产的角色工厂流程'],
    color: 'from-[#3B82F6] to-[#1D4ED8]',
    icon: 'user',
    path: '/module-3',
    level: '进阶'
  },
  {
    id: 'module4',
    title: '世界构建',
    subtitle: '可复用的世界观与场景库',
    category: '视觉资产',
    duration: '宏大构建',
    description: '世界观不只是背景，它决定每一个镜头的氛围基调。学会用"风格指南 + 场景库 + 道具库"的方式沉淀资产，让系列作品保持一致，让单集制作速度翻倍。',
    outcomes: ['撰写一份可指导团队的风格指南', '建立可检索的场景 / 道具 Prompt 库', '输出一套世界观视觉规范'],
    color: 'from-[#10B981] to-[#047857]',
    icon: 'globe',
    path: '/module-4',
    level: '进阶'
  },
  {
    id: 'module5',
    title: '画面生成',
    subtitle: '多模型画面生成实战',
    category: '生产执行',
    duration: '极致追求',
    description: 'Midjourney V7 · 即梦 4.5 · 通义万相 3 · SD 3 · Flux · ComfyUI 全工具对比。不是教你单个工具的按钮，而是教你在不同场景（概念图 / 关键帧 / 批量出图）下如何组合使用。',
    outcomes: ['掌握 6 种主流出图工具的差异与取舍', '学会 ComfyUI 基础工作流搭建', '产出电影级画面的三层光影方法'],
    color: 'from-[#EF4444] to-[#B91C1C]',
    icon: 'image',
    path: '/module-5',
    level: '进阶'
  },
  {
    id: 'module6',
    title: '动画生成',
    subtitle: 'AI 视频模型的工业化用法',
    category: '生产执行',
    duration: '精细调控',
    description: 'Sora 2 · Veo 3.1 · Kling 3 · Seedance 2 · Runway Gen-4 · 海螺 2 · Wan · Vidu 八大视频模型的横向评测，以及"首尾帧 / 图生视频 / 视频重绘 / 对口型"四种工业化用法。',
    outcomes: ['建立视频模型按场景选型的决策表', '掌握首尾帧控制与镜头语言注入', '实现 AI 视频的镜头级稳定连贯'],
    color: 'from-[#8B5CF6] to-[#6D28D9]',
    icon: 'film',
    path: '/module-6',
    level: '高阶'
  },
  {
    id: 'module7',
    title: '后期合成',
    subtitle: '剪辑 · 调色 · 配音 · 字幕全流程',
    category: '后期交付',
    duration: '精修打磨',
    description: 'AI 出的素材只是半成品。通过剪映 / DaVinci / After Effects 完成节奏剪辑、电影级调色、AI 配音（豆包 / ElevenLabs）、BGM（Suno / Udio）、字幕与音效一体化工作流。',
    outcomes: ['搭建从素材到成片的完整后期流水线', '掌握电影级调色 LUT 与音效套件', '输出符合平台规范的最终交付物'],
    color: 'from-[#14B8A6] to-[#0F766E]',
    icon: 'sparkles',
    path: '/module-7',
    level: '高阶'
  },
  {
    id: 'module8',
    title: '发行运营',
    subtitle: '把作品变成可持续的业务',
    category: '商业闭环',
    duration: '商业转化',
    description: '抖音 / 小红书 / B 站 / YouTube / TikTok 的算法偏好、封面与标题规范、付费投流策略，以及 IP 矩阵、商单接洽、广告植入、会员订阅四条主流变现路径。',
    outcomes: ['针对 5 大平台的差异化发行策略', '搭建 AI 内容数据分析看板', '建立个人 / 团队的 IP 变现路径'],
    color: 'from-[#F59E0B] to-[#B45309]',
    icon: 'rocket',
    path: '/module-8',
    level: '高阶'
  }
]

const levelBadge: Record<Module['level'], string> = {
  '入门': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  '进阶': 'bg-blue-50 text-blue-700 border-blue-200',
  '高阶': 'bg-rose-50 text-rose-700 border-rose-200'
}

function Tutorials() {
  return (
    <div className="space-y-12">
      {/* 页头 */}
      <section className="relative text-center py-12 md:py-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F5F0E8] via-white to-[#F0EAFB]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B7AB8]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C23B22]/10 rounded-full blur-3xl" />

        <div className="relative z-10 px-4">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#8B7AB8]/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BrandLogo size={22} showText={false} />
            <span className="text-gray-700">课程体系 · Curriculum</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            8 大模块 · 全流程 AI 动漫制作课程
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            从美学定调到商业变现，每一章都可独立学习，也可线性学习。<br className="hidden md:block" />
            <span className="text-gray-500">支持随停随学、章节进度追踪、学习成果检查清单。</span>
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center gap-1.5">
              <NavIcon type="book" size={16} /> <strong className="text-[#8B7AB8]">8</strong> 大模块
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center gap-1.5">
              <NavIcon type="target" size={16} /> <strong className="text-[#8B7AB8]">40+</strong> 小节
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center gap-1.5">
              <NavIcon type="sparkles" size={16} /> <strong className="text-[#8B7AB8]">250+</strong> 个 Prompt
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center gap-1.5">
              <NavIcon type="tools" size={16} /> <strong className="text-[#8B7AB8]">50+</strong> 工具评测
            </span>
          </div>
        </div>
      </section>

      {/* 模块列表 */}
      <div className="space-y-6">
        {modules.map((module, index) => (
          <Link
            key={module.id}
            to={module.path}
            className="block card overflow-hidden hover:shadow-2xl transition-all duration-300 group"
          >
            <div className={`bg-gradient-to-r ${module.color} p-8 text-white`}>
              <div className="flex items-start justify-between mb-4 gap-4">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="flex items-center flex-shrink-0"><NavIcon type={module.icon} size={48} /></div>
                  <div className="min-w-0">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <span className="bg-white/25 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        模块 {index + 1}
                      </span>
                      <span className="text-white/80 text-sm">{module.category}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold bg-white text-gray-800 border ${levelBadge[module.level]}`}>
                        {module.level}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">{module.title}</h3>
                    <p className="text-white/90">{module.subtitle}</p>
                  </div>
                </div>
                <div className="hidden md:block text-right flex-shrink-0">
                  <div className="text-3xl font-bold">{String(index + 1).padStart(2, '0')}</div>
                  <div className="text-white/70 text-sm">/ {String(modules.length).padStart(2, '0')}</div>
                </div>
              </div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                {module.description}
              </p>
            </div>

            <div className="p-6 bg-gray-50">
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                {module.outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#8B7AB8] to-[#C23B22] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{o}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-gray-500 text-sm flex items-center gap-1.5"><NavIcon type="target" size={14} /> {module.duration}</span>
                <span className="bg-white text-gray-800 font-bold py-2 px-6 rounded-lg group-hover:bg-gradient-to-r group-hover:from-[#8B7AB8] group-hover:to-[#C23B22] group-hover:text-white transition-all">
                  进入学习 →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 学习路径 */}
      <div className="bg-gradient-to-br from-[#F5F0E8] via-white to-[#F0EAFB] rounded-3xl p-8 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-800 flex items-center justify-center gap-2"><NavIcon type="book" size={24} /> 两条推荐学习路径</h2>
        <p className="text-center text-gray-500 mb-8">根据你的目标选择，也可以按需跳章学习</p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B7AB8] to-[#5B4B89] flex items-center justify-center text-white text-lg font-bold">A</div>
              <h3 className="text-lg font-bold text-gray-800">完整路径 · 体系化学习</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">适合想从 0 到 1 建立自己 AI 动漫体系的创作者</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-[#F0EAFB] text-[#8B7AB8] rounded-md font-semibold">1 艺术理念</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#F0EAFB] text-[#8B7AB8] rounded-md font-semibold">2 故事</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#F0EAFB] text-[#8B7AB8] rounded-md font-semibold">3 角色</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#F0EAFB] text-[#8B7AB8] rounded-md font-semibold">4 世界</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#FBE8E2] text-[#C23B22] rounded-md font-semibold">5 画面</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#FBE8E2] text-[#C23B22] rounded-md font-semibold">6 动画</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#FBE8E2] text-[#C23B22] rounded-md font-semibold">7 后期</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#FBE8E2] text-[#C23B22] rounded-md font-semibold">8 发行</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C23B22] to-[#8A1F0E] flex items-center justify-center text-white text-lg font-bold">B</div>
              <h3 className="text-lg font-bold text-gray-800">快速路径 · 一周出片</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4">适合想先做出成品再补美学的实战派</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-[#F0EAFB] text-[#8B7AB8] rounded-md font-semibold">2 故事（简）</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#F0EAFB] text-[#8B7AB8] rounded-md font-semibold">3 角色（Lora 跳过）</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#FBE8E2] text-[#C23B22] rounded-md font-semibold">5 画面（单模型）</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#FBE8E2] text-[#C23B22] rounded-md font-semibold">6 动画（图生视频）</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#FBE8E2] text-[#C23B22] rounded-md font-semibold">7 后期（剪映）</span>
              <span className="self-center">→</span>
              <span className="px-2 py-1 bg-[#FFF4E0] text-[#B45309] rounded-md font-semibold">8 发行（单平台）</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutorials
