import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHashScroll } from '../hooks/useHashScroll'
import BrandLogo from '../components/BrandLogo'

interface Tool {
  name: string
  url: string
  description: string
  tags: string[]
  star?: boolean   // 强烈推荐
  free?: boolean   // 有免费额度
}

interface Category {
  id: string
  label: string
  icon: string
  tools: Tool[]
}

const toolCategories: Category[] = [
  // ─── 1. AI 图片生成 ──────────────────────────────
  {
    id: 'image',
    label: 'AI 图片生成',
    icon: '🎨',
    tools: [
      {
        name: '即梦 AI · Seedream 4.5',
        url: 'https://jimeng.jianying.com/',
        description: '字节跳动出品，4K 超高清，中文提示词理解一流，东方美学与国风角色首选，附带 Seedance 视频生成。',
        tags: ['国产', '动漫优化', '4K'],
        star: true, free: true
      },
      {
        name: '通义万相 3.0',
        url: 'https://tongyi.aliyun.com/wanxiang/',
        description: '阿里云出品，水墨画与古风效果顶级，长文本理解强，免费额度充足，适合东方意境创作。',
        tags: ['国产', '水墨/古风', '免费'],
        star: true, free: true
      },
      {
        name: 'Midjourney V7',
        url: 'https://www.midjourney.com/',
        description: '国际顶级艺术风格 AI，V7 版本支持 4K、角色参考图（--cref）和风格参考（--sref），商业级品质。',
        tags: ['国际', '艺术风格', '付费'],
        star: true, free: false
      },
      {
        name: 'NijiJourney V6',
        url: 'https://nijijourney.com/',
        description: 'Midjourney 旗下专业二次元工具，动漫插画风格无出其右，角色设计与场景创作首选。',
        tags: ['动漫', '二次元', '付费'],
        star: true, free: false
      },
      {
        name: 'Stable Diffusion + Flux',
        url: 'https://stability.ai/',
        description: '开源免费本地部署，Flux.1 模型画质比肩商业级，ControlNet / IP-Adapter 精准控制，LoRA 训练必备。',
        tags: ['开源', '本地部署', '免费'],
        star: true, free: true
      },
      {
        name: 'Civitai',
        url: 'https://civitai.com/',
        description: '全球最大 SD/Flux 模型社区，1000 万月活，海量动漫 LoRA / Checkpoint 免费下载。',
        tags: ['模型社区', '动漫模型', '免费'],
        star: true, free: true
      },
      {
        name: 'Google Imagen 3',
        url: 'https://aistudio.google.com/',
        description: 'Google 最新图片生成模型，通过 AI Studio 免费调用，细节丰富，多轮编辑一致性高。',
        tags: ['国际', '免费API', '高细节'],
        star: false, free: true
      },
    ]
  },
  // ─── 2. AI 视频生成 ──────────────────────────────
  {
    id: 'video',
    label: 'AI 视频生成',
    icon: '🎬',
    tools: [
      {
        name: 'Seedance 2.0（即梦）',
        url: 'https://jimeng.jianying.com/',
        description: '字节跳动旗舰视频模型，支持 12 项多模态输入，15 秒 2K 输出，原生音轨，可用产出率 90%+。',
        tags: ['国产', '2K/音轨', '多模态'],
        star: true, free: true
      },
      {
        name: 'Kling 3.0',
        url: 'https://kling.kuaishou.com/',
        description: '快手出品，4K 超高清，物理真实感强，AI 导演系统支持多镜头叙事，免费额度每日刷新。',
        tags: ['国产', '4K', '物理模拟'],
        star: true, free: true
      },
      {
        name: 'Wan 2.7',
        url: 'https://wan.ai/',
        description: '开源免费视频模型，逼真度测评最高（9.8/10），动态逻辑与物理模拟强，专业 B-roll 首选。',
        tags: ['开源', '免费', '高逼真'],
        star: true, free: true
      },
      {
        name: 'Veo 3',
        url: 'https://deepmind.google/technologies/veo/',
        description: 'Google DeepMind 旗舰，4K 原生，原生音画同步，镜头语言最丰富，集成 Gemini API。',
        tags: ['国际', '4K/音频', '电影级'],
        star: true, free: false
      },
      {
        name: 'Runway Gen-4',
        url: 'https://runwayml.com/',
        description: '国际顶级视频编辑与生成工具，主体一致性突破，精准运镜控制，125 积分新用户免费。',
        tags: ['国际', '专业级', '运镜控制'],
        star: true, free: true
      },
      {
        name: '海螺 AI（MiniMax）',
        url: 'https://hailuoai.com/',
        description: 'MiniMax 出品，中文理解强，生成速度快，300 积分新用户免费，适合快速出片。',
        tags: ['国产', '速度快', '免费额度'],
        star: false, free: true
      },
      {
        name: 'Vidu 2.0',
        url: 'https://www.vidu.cn/',
        description: '生数科技出品，中国风元素支持出色，3D 空间深度强，推拉镜头自然，免费可用。',
        tags: ['国产', '国风', '3D运镜'],
        star: false, free: true
      },
    ]
  },
  // ─── 3. AI 写作 & 剧本 ──────────────────────────
  {
    id: 'writing',
    label: 'AI 写作 & 剧本',
    icon: '✍️',
    tools: [
      {
        name: 'DeepSeek R2',
        url: 'https://chat.deepseek.com/',
        description: '国内综合能力最强的开源大模型，深度推理与长文本创作一流，剧本/大纲/世界观构建首选，完全免费。',
        tags: ['国产', '推理最强', '免费'],
        star: true, free: true
      },
      {
        name: 'Claude Sonnet 4',
        url: 'https://claude.ai/',
        description: 'Anthropic 出品，创意写作与叙事能力国际顶级，角色心理刻画细腻，长文档一致性强。',
        tags: ['国际', '创意写作', '付费'],
        star: true, free: true
      },
      {
        name: 'ChatGPT-4o',
        url: 'https://chat.openai.com/',
        description: 'OpenAI 旗舰多模态模型，支持图文混合输入，分镜描述与对白创作能力强。',
        tags: ['国际', '多模态', '付费'],
        star: true, free: true
      },
      {
        name: '豆包（Doubao）',
        url: 'https://www.doubao.com/',
        description: '字节跳动全能 AI 助手，中文创作自然流畅，一键生成小红书文案、短视频脚本，完全免费。',
        tags: ['国产', '中文优化', '免费'],
        star: true, free: true
      },
      {
        name: '通义千问 Max',
        url: 'https://tongyi.aliyun.com/',
        description: '阿里云出品，国风叙事与东方美学描写出色，适合古风剧本与世界观设定，免费使用。',
        tags: ['国产', '古风叙事', '免费'],
        star: false, free: true
      },
    ]
  },
  // ─── 4. AI 音乐 & 配乐 ──────────────────────────
  {
    id: 'music',
    label: 'AI 音乐 & 配乐',
    icon: '🎵',
    tools: [
      {
        name: 'Suno AI v4',
        url: 'https://suno.com/',
        description: '全球最强 AI 音乐生成，2 分钟完整曲目，支持歌词、风格、情绪精准控制，每日 50 首免费。',
        tags: ['国际', '完整曲目', '免费额度'],
        star: true, free: true
      },
      {
        name: 'Udio',
        url: 'https://www.udio.com/',
        description: '音质最接近人工制作的 AI 音乐工具，支持分段扩展，适合长篇动漫 OST 制作。',
        tags: ['国际', 'OST', '高音质'],
        star: true, free: true
      },
      {
        name: '天工音乐（昆仑万维）',
        url: 'https://music.tiangong.cn/',
        description: '国产最强 AI 音乐，中文歌词理解一流，古风/国风/流行全风格覆盖，免费生成。',
        tags: ['国产', '中文歌词', '免费'],
        star: true, free: true
      },
      {
        name: '网易天音',
        url: 'https://tianyin.music.163.com/',
        description: '网易出品，辅助作曲工具，支持哼唱转曲、旋律续写，适合有音乐基础的创作者。',
        tags: ['国产', '辅助作曲', '免费'],
        star: false, free: true
      },
      {
        name: 'Stable Audio 2.0',
        url: 'https://stableaudio.com/',
        description: 'Stability AI 音频模型，专注高保真环境音效与背景乐，最长 3 分钟，每月 20 首免费。',
        tags: ['国际', '环境音效', '免费额度'],
        star: false, free: true
      },
    ]
  },
  // ─── 5. AI 配音 & TTS ───────────────────────────
  {
    id: 'tts',
    label: 'AI 配音 & TTS',
    icon: '🎙️',
    tools: [
      {
        name: '豆包 TTS 2.0（Vivi）',
        url: 'https://www.volcengine.com/product/speech',
        description: '火山引擎语音合成，Vivi 2.0 音色情绪饱满，支持多角色切换，动漫配音最自然，API 价格低。',
        tags: ['国产', '情绪控制', 'API'],
        star: true, free: true
      },
      {
        name: 'ElevenLabs',
        url: 'https://elevenlabs.io/',
        description: '国际顶级声音克隆与配音平台，3 秒音频即可克隆声线，英文配音效果无出其右。',
        tags: ['国际', '声音克隆', '付费'],
        star: true, free: true
      },
      {
        name: 'Fish Audio',
        url: 'https://fish.audio/',
        description: '开源声音克隆工具，中英文效果俱佳，海量免费音色模型可直接使用，支持 API 调用。',
        tags: ['开源', '中英双语', '免费'],
        star: true, free: true
      },
      {
        name: '剪映 AI 配音',
        url: 'https://www.capcut.cn/',
        description: '剪映内置 AI 配音功能，数百种音色，情绪调节简单直观，适合不懂 API 的创作者。',
        tags: ['国产', '零门槛', '免费'],
        star: false, free: true
      },
    ]
  },
  // ─── 6. 数字人 ──────────────────────────────────
  {
    id: 'avatar',
    label: '数字人',
    icon: '🧑‍💻',
    tools: [
      {
        name: '悟空 AI',
        url: 'https://wukongai.com/',
        description: '字节跳动 × 港大联研，超写实数字人视频，解决闪烁断层，直接对接电商带货场景。',
        tags: ['国产', '超写实', '电商'],
        star: true, free: false
      },
      {
        name: '即梦数字人',
        url: 'https://jimeng.jianying.com/',
        description: '即梦 AI 内置数字人模块，输入产品图 + 文案即可生成带货视频，零门槛入手。',
        tags: ['国产', '带货', '零门槛'],
        star: true, free: true
      },
      {
        name: 'HeyGen',
        url: 'https://heygen.com/',
        description: '国际顶级数字人平台，100+ 语言，口型同步业界最佳，适合国际化内容制作。',
        tags: ['国际', '多语言', '口型同步'],
        star: true, free: true
      },
    ]
  },
  // ─── 7. 提示词工具 ──────────────────────────────
  {
    id: 'prompt',
    label: '提示词工具',
    icon: '📝',
    tools: [
      {
        name: 'MyPrompt 提示词库',
        url: 'https://myprompt.cc/zh',
        description: '中文 AI 图片/视频提示词大全，覆盖 Midjourney、SD、DALL·E，海量优质分类模板。',
        tags: ['中文', '图片/视频', '免费'],
        star: true, free: true
      },
      {
        name: 'PromptHero',
        url: 'https://prompthero.com/',
        description: '百万级提示词搜索引擎，按图片效果反查提示词，找参考学习的最佳工具。',
        tags: ['国际', '搜索引擎', '免费'],
        star: true, free: true
      },
      {
        name: 'PromLib',
        url: 'https://promlib.com/',
        description: 'AIGC 提示词分享平台，社区活跃，按风格/主题分类浏览，适合灵感发现。',
        tags: ['中文', '社区', '免费'],
        star: false, free: true
      },
      {
        name: 'Prompt Engineering Guide',
        url: 'https://www.promptingguide.ai/',
        description: '系统学习提示词工程的最佳教程网站，从基础到高阶，免费开源。',
        tags: ['学习', '教程', '免费'],
        star: false, free: true
      },
    ]
  },
  // ─── 8. 视频剪辑 ────────────────────────────────
  {
    id: 'edit',
    label: '视频剪辑',
    icon: '✂️',
    tools: [
      {
        name: '剪映专业版',
        url: 'https://www.capcut.cn/',
        description: '字节跳动出品，AI 剪辑能力强，字幕/变速/色彩分级一体，国内 AI 动漫后期首选，免费。',
        tags: ['国产', 'AI辅助', '免费'],
        star: true, free: true
      },
      {
        name: 'DaVinci Resolve 19',
        url: 'https://www.blackmagicdesign.com/products/davinciresolve',
        description: '专业级剪辑 + 调色 + 特效三合一，免费版功能已超越绝大多数付费软件，色彩分级业界标准。',
        tags: ['免费', '专业调色', '桌面'],
        star: true, free: true
      },
      {
        name: 'Adobe Premiere Pro',
        url: 'https://www.adobe.com/products/premiere.html',
        description: 'Adobe 旗舰视频编辑，与 After Effects / Photoshop 无缝联动，团队协作首选。',
        tags: ['付费', '全家桶', '协作'],
        star: false, free: false
      },
      {
        name: 'Adobe After Effects',
        url: 'https://www.adobe.com/products/aftereffects.html',
        description: '运动图形与视觉特效标准工具，动漫片头/字幕动画/粒子特效，与 Premiere 无缝联动。',
        tags: ['付费', '特效', '片头'],
        star: false, free: false
      },
    ]
  },
]

// 选型指引
const decisionGuide = [
  {
    icon: '🎯',
    title: '按创作阶段',
    gradient: 'from-[#8B7AB8] to-[#6B5FA0]',
    items: [
      '剧本创作 → DeepSeek / Claude',
      '角色出图 → 即梦 / NijiJourney',
      '视频生成 → Seedance / Kling',
      '配音配乐 → 豆包TTS + Suno',
    ]
  },
  {
    icon: '💰',
    title: '按预算',
    gradient: 'from-[#C2649C] to-[#A44B82]',
    items: [
      '零成本：DeepSeek + 即梦 + Kling 免费额度',
      '轻付费：Midjourney $10/月',
      '专业级：Runway + ElevenLabs 套餐',
    ]
  },
  {
    icon: '🌏',
    title: '按语言偏好',
    gradient: 'from-[#C23B22] to-[#A82C16]',
    items: [
      '中文优先：即梦、豆包、天工、通义',
      '英文原生：Midjourney、Runway、Suno',
      '双语均优：DeepSeek、Wan、Fish Audio',
    ]
  },
]

// 标签颜色映射
const tagColor = (tag: string) => {
  if (['国产', '国际'].includes(tag)) return 'bg-[#8B7AB8]/10 text-[#6B5FA0]'
  if (['免费', '免费额度', '免费API'].includes(tag)) return 'bg-emerald-50 text-emerald-700'
  if (['付费'].includes(tag)) return 'bg-amber-50 text-amber-700'
  if (['开源'].includes(tag)) return 'bg-sky-50 text-sky-700'
  return 'bg-gray-100 text-gray-600'
}

function Tools() {
<<<<<<< HEAD
  const [active, setActive] = useState('全部')

  const totalTools = useMemo(
    () => toolCategories.reduce((acc, c) => acc + c.tools.length, 0),
    []
  )

  const visibleCategories = active === '全部'
    ? toolCategories
    : toolCategories.filter(c => c.id === active)
=======
  useHashScroll()
>>>>>>> a7728e4 (修复：搜索跳转精准化 🎯)

  return (
    <div className="space-y-10">
      {/* 页头 */}
      <section className="relative text-center py-14 overflow-hidden rounded-3xl bg-gradient-to-br from-[#F5F0E8] via-white to-[#F0EAFB]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B7AB8]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C23B22]/08 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 px-4">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#8B7AB8]/25 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 shadow-sm">
            <BrandLogo size={18} showText={false} />
            <span className="text-gray-600">工具评测 · Tool Stack</span>
            <span className="w-1 h-1 rounded-full bg-[#8B7AB8]/40" />
            <span className="text-[#8B7AB8]">2026 最新整理</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4 text-[#1F1A3D] tracking-tight">
            {totalTools} 个精选工具
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            不按品牌、不按热度，只按<strong className="text-gray-700">「你要做什么」</strong>推荐工具。<br className="hidden md:block" />
            低质工具已清除，剩下的都是经过实测的精选。
          </p>

          {/* 分类标签预览 */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {toolCategories.map(c => (
              <span key={c.id} className="px-3 py-1.5 rounded-full bg-white border border-gray-100 text-xs text-gray-600 shadow-sm">
                {c.icon} {c.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActive('全部')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            active === '全部'
              ? 'bg-gradient-to-r from-[#8B7AB8] to-[#C23B22] text-white shadow-md'
              : 'bg-white text-gray-600 hover:text-gray-800 border border-gray-200 hover:border-gray-300'
          }`}
        >
          全部
        </button>
        {toolCategories.map(c => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
              active === c.id
                ? 'bg-gradient-to-r from-[#8B7AB8] to-[#C23B22] text-white shadow-md'
                : 'bg-white text-gray-600 hover:text-gray-800 border border-gray-200 hover:border-gray-300'
            }`}
          >
            <span>{c.icon}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>

      {/* 工具列表 */}
      <div className="space-y-12">
        {visibleCategories.map(category => (
          <div key={category.id}>
            {/* 分类标题 */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-[#8B7AB8] to-[#C23B22]" />
              <h2 className="text-lg font-extrabold text-[#1F1A3D]">
                {category.icon} {category.label}
              </h2>
              <span className="text-xs text-gray-400">{category.tools.length} 个工具</span>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
            </div>

<<<<<<< HEAD
            {/* 工具卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.tools.map((tool, i) => (
=======
            {/* 工具卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool, toolIndex) => {
                const toolId = tool.name.toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-')
                  .substring(0, 20)
                
                return (
>>>>>>> a7728e4 (修复：搜索跳转精准化 🎯)
                <a
                  key={i}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className="group relative bg-white rounded-2xl border border-gray-100 p-5 hover:border-[#8B7AB8]/30 hover:shadow-lg transition-all duration-200"
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04)' }}
=======
                  data-hash={toolId}
                  className={`card hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden ${
                    tool.recommended ? 'border-2 border-accent-400' : ''
                  }`}
>>>>>>> a7728e4 (修复：搜索跳转精准化 🎯)
                >
                  {/* ⭐ 强推标记 */}
                  {tool.star && (
                    <span className="absolute top-3.5 right-3.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-[#8B7AB8]/15 to-[#C2649C]/15 text-[#6B5FA0] border border-[#8B7AB8]/20">
                      强推
                    </span>
                  )}

                  {/* 工具名 */}
                  <h3 className="text-sm font-extrabold text-[#1F1A3D] group-hover:text-[#6B5FA0] transition-colors mb-2 pr-12 leading-snug">
                    {tool.name}
                  </h3>

                  {/* 描述 */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-3">
                    {tool.description}
                  </p>

                  {/* 标签 + 链接 */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {tool.tags.map((tag, j) => (
                        <span key={j} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagColor(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-50 group-hover:bg-[#8B7AB8]/10 flex items-center justify-center transition-colors">
                      <svg className="w-3 h-3 text-gray-400 group-hover:text-[#8B7AB8] group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 选型决策指引 */}
      <section className="rounded-3xl overflow-hidden border border-gray-100" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)' }}>
        <div className="bg-gradient-to-r from-[#F8F6FF] to-[#FDF8F6] px-8 pt-8 pb-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#1F1A3D] mb-1">🧭 工具选型决策指引</h2>
          <p className="text-sm text-gray-500">不要追求「最强」，按场景和预算来选</p>
        </div>
        <div className="bg-white p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {decisionGuide.map(({ icon, title, gradient, items }) => (
              <div key={title} className="flex gap-4">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-base flex-shrink-0`}>
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm">{title}</h3>
                  <ul className="space-y-1.5">
                    {items.map((item, i) => (
                      <li key={i} className="text-xs text-gray-500 leading-relaxed flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#8B7AB8]/40 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-gray-50 text-center">
            <Link to="/prompt-library" className="inline-flex items-center gap-2 text-[#8B7AB8] text-sm font-semibold hover:text-[#C23B22] transition-colors">
              去提示词库找现成模板，直接上手
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tools
