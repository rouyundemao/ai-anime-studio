import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHashScroll } from '../hooks/useHashScroll'
import BrandLogo from '../components/BrandLogo'

// 工具网站数据
const toolWebsites = [
  {
    category: '🎨 AI 图片生成（2026最新）',
    tools: [
      {
        name: '即梦 AI (Seedream 4.5)',
        url: 'https://jimeng.jianying.com/',
        description: '字节跳动顶级图片生成，4K超高清，中文提示词理解优秀，特别适合东方美学风格',
        tags: ['国产', '免费', '4K'],
        recommended: true
      },
      {
        name: '通义万相 3.0',
        url: 'https://wanxiang.aliyun.com/',
        description: '阿里云东方风格优化，特别适合水墨效果和古风创作，长文本理解能力强',
        tags: ['国产', '免费', '东方风格'],
        recommended: true
      },
      {
        name: 'Nano Banana',
        url: 'https://aistudio.google.com/',
        description: 'Google Gemini 2.5 Pro Image，付费版最强，多轮编辑后保持高度一致性，支持自然语言指令',
        tags: ['国际', '付费', '最强图片'],
        recommended: true
      },
      {
        name: 'Midjourney',
        url: 'https://www.midjourney.com/',
        description: '国际顶级艺术风格AI，创意生成能力强，V7版本支持4K高清，适合高端商业创作',
        tags: ['国际', '付费', '艺术风格'],
        recommended: true
      },
      {
        name: 'Stable Diffusion 3.0',
        url: 'https://stability.ai/',
        description: '开源免费，可本地部署，SDXL/SD 3.0模型，ControlNet/IP-Adapter专业控制',
        tags: ['开源', '免费', '本地部署'],
        recommended: true
      },
      {
        name: 'Civitai',
        url: 'https://civitai.com/',
        description: '全球最大的SD模型社区，海量高质量模型可下载，社区活跃（1000万+月活）',
        tags: ['模型库', '免费', '社区'],
        recommended: true
      },
      {
        name: 'NijiJourney',
        url: 'https://docs.nijijourney.com/',
        description: 'Midjourney 旗下专业动漫风格工具，二次元创作首选',
        tags: ['动漫', '付费', '二次元'],
        recommended: false
      },
      {
        name: 'Draw Things',
        url: 'https://drawthings.ai/',
        description: 'iOS/iPadOS 本地部署工具，隐私安全，适合接NDA保密项目',
        tags: ['本地', '免费', '隐私'],
        recommended: false
      }
    ]
  },
  {
    category: '🎬 AI 视频生成（2026最新）',
    tools: [
      {
        name: 'Seedance 2.0',
        url: 'https://jimeng.jianying.com/',
        description: '字节跳动顶级视频生成模型，支持12项多模态输入，15秒视频，原生音频，2K画质，可用产 出率90%+',
        tags: ['国产', '付费', '最强视频'],
        recommended: true
      },
      {
        name: 'Kling 3.0',
        url: 'https://kling.kuaishou.com/',
        description: '快手顶级视频生成，2K/4K超高清输出，物理真实感强，多镜头叙事（6镜头），AI导演系统',
        tags: ['国产', '免费', '4K画质'],
        recommended: true
      },
      {
        name: 'Veo 3.1',
        url: 'https://flow.google.com/',
        description: 'Google 旗舰视频生成模型，4K原生画质，原生音画同步，镜头语言丰富，集成 Gemini API',
        tags: ['国际', '付费', '电影级'],
        recommended: true
      },
      {
        name: 'Wan 2.7',
        url: 'https://wan.ai/',
        description: '免费工具中逼真度最高（9.8/10），动态逻辑与物理模拟最强，适合专业B-roll素材',
        tags: ['免费', '高逼真度', '物理模拟'],
        recommended: true
      },
      {
        name: 'Runway Gen-4 Turbo',
        url: 'https://runwayml.com/',
        description: '国际顶级视频生成和编辑工具，精准操控，主体一致性突破，125积分新用户免费',
        tags: ['国际', '付费', '专业级'],
        recommended: true
      },
      {
        name: 'Vidu 2.0',
        url: 'https://www.vidu.cn/',
        description: '生数科技视频生成工具，中国风元素支持佳，3D空间深度强，推拉镜头优秀',
        tags: ['国产', '免费', '国风'],
        recommended: true
      },
      {
        name: '海螺 AI 2.3',
        url: 'https://hailuoai.com/',
        description: 'MiniMax 视频生成工具，中文理解能力强，生成速度快，300积分新用户免费',
        tags: ['国产', '免费', '中文优化'],
        recommended: true
      },
      {
        name: 'PixVerse',
        url: 'https://pixverse.ai/',
        description: '免费工具中面部映射和口型同步表现优秀，60积分/天，适合对口型视频',
        tags: ['免费', '口型同步', '面部映射'],
        recommended: false
      }
    ]
  },
  {
    category: '🎭 数字人 AI（2026新热门）',
    tools: [
      {
        name: '悟空AI',
        url: 'https://wukongai.com/',
        description: '字节跳动与香港大学联合研发，超写实数字人视频生成，解决闪烁断层问题，直接对接电商场景',
        tags: ['国产', '电商', '数字人'],
        recommended: true
      },
      {
        name: '即梦数字人',
        url: 'https://jimeng.jianying.com/',
        description: '即梦AI内置数字人功能，输入产品图和文案即可生成带货素材',
        tags: ['国产', '带货', '短视频'],
        recommended: true
      },
      {
        name: 'HeyGen',
        url: 'https://heygen.com/',
        description: '国际顶级数字人平台，支持100+语言，口型同步优秀',
        tags: ['国际', '付费', '多语言'],
        recommended: true
      },
      {
        name: 'D-ID',
        url: 'https://www.d-id.com/',
        description: '专业数字人视频生成，支持照片说话，适合营销视频',
        tags: ['国际', '付费', '营销'],
        recommended: false
      }
    ]
  },
  {
    category: '📝 提示词工具',
    tools: [
      {
        name: 'MyPrompt 提示词库',
        url: 'https://myprompt.cc/zh',
        description: 'AI 图片与视频提示词大全，支持 Midjourney、Stable Diffusion、DALL·E、Nano Banana Pro，海量优质提示词',
        tags: ['中文', '免费', '图库'],
        recommended: true
      },
      {
        name: 'PromLib·AI 提示词画廊',
        url: 'https://promlib.com/',
        description: 'AIGC 提示词分享平台，海量 AI 绘画提示词，支持多种模型，社区活跃',
        tags: ['中文', '免费', '社区'],
        recommended: true
      },
      {
        name: 'PromptHero',
        url: 'https://prompthero.com/',
        description: '顶级 AI 提示词搜索引擎，百万级提示词库',
        tags: ['国际', '免费', '搜索'],
        recommended: true
      },
      {
        name: 'PromptBase',
        url: 'https://promptbase.com/',
        description: '专业提示词交易平台，高质量付费提示词',
        tags: ['国际', '付费', '交易'],
        recommended: true
      },
      {
        name: 'FlowGPT',
        url: 'https://flowgpt.com/',
        description: '社区驱动的提示词分享平台',
        tags: ['国际', '免费', '社区'],
        recommended: true
      },
      {
        name: 'AIPRM',
        url: 'https://www.aiprm.com/',
        description: 'Chrome 插件，一键使用优质提示词',
        tags: ['插件', '免费', '便捷'],
        recommended: true
      },
      {
        name: 'Prompt Engineering Guide',
        url: 'https://www.promptingguide.ai/',
        description: '提示词工程学习指南，系统学习提示词技巧',
        tags: ['学习', '免费', '教程'],
        recommended: true
      }
    ]
  },
  {
    category: '🌐 翻译工具',
    tools: [
      {
        name: 'DeepL',
        url: 'https://www.deepl.com/',
        description: '全球最精准的 AI 翻译工具，支持中日英等多语言',
        tags: ['国际', '免费', '高精度'],
        recommended: true
      },
      {
        name: 'Google 翻译',
        url: 'https://translate.google.com/',
        description: '谷歌翻译，支持 100+ 语言，实时翻译',
        tags: ['国际', '免费', '多语言'],
        recommended: true
      },
      {
        name: '百度翻译',
        url: 'https://fanyi.baidu.com/',
        description: '百度翻译，中文优化好，支持文档翻译',
        tags: ['国产', '免费', '文档'],
        recommended: true
      },
      {
        name: '有道翻译',
        url: 'https://fanyi.youdao.com/',
        description: '网易有道翻译，专业术语准确',
        tags: ['国产', '免费', '专业'],
        recommended: true
      },
      {
        name: '彩云小译',
        url: 'https://fanyi.caiyunapp.com/',
        description: 'AI 翻译工具，支持双语对照',
        tags: ['国产', '免费', '双语'],
        recommended: false
      }
    ]
  },
  {
    category: '✏️ 在线设计工具',
    tools: [
      {
        name: 'Figma',
        url: 'https://www.figma.com/',
        description: '专业在线设计工具，支持协作',
        tags: ['国际', '免费', '协作'],
        recommended: true
      },
      {
        name: 'Canva',
        url: 'https://www.canva.com/',
        description: '简单易用的在线设计平台',
        tags: ['国际', '免费', '模板'],
        recommended: true
      },
      {
        name: '稿定设计',
        url: 'https://www.gaoding.com/',
        description: '国产在线设计工具，模板丰富',
        tags: ['国产', '免费', '模板'],
        recommended: false
      }
    ]
  },
  {
    category: '🎵 音频处理工具',
    tools: [
      {
        name: 'Audacity',
        url: 'https://www.audacityteam.org/',
        description: '免费开源音频编辑软件',
        tags: ['免费', '开源', '桌面'],
        recommended: true
      },
      {
        name: 'Adobe Audition',
        url: 'https://www.adobe.com/products/audition.html',
        description: '专业音频处理软件',
        tags: ['付费', '专业', '桌面'],
        recommended: true
      },
      {
        name: '豆包语音合成',
        url: 'https://www.volcengine.com/product/speech',
        description: '火山引擎语音合成服务',
        tags: ['国产', 'API', 'TTS'],
        recommended: true
      }
    ]
  },
  {
    category: '📹 视频编辑工具',
    tools: [
      {
        name: '剪映',
        url: 'https://www.capcut.cn/',
        description: '字节跳动视频编辑工具，功能强大',
        tags: ['国产', '免费', '易用'],
        recommended: true
      },
      {
        name: 'DaVinci Resolve',
        url: 'https://www.blackmagicdesign.com/products/davinciresolve',
        description: '专业级视频剪辑和调色软件',
        tags: ['免费', '专业', '桌面'],
        recommended: true
      },
      {
        name: 'Premiere Pro',
        url: 'https://www.adobe.com/products/premiere.html',
        description: 'Adobe 专业视频编辑软件',
        tags: ['付费', '专业', '桌面'],
        recommended: true
      }
    ]
  },
  {
    category: '📚 学习资源网站',
    tools: [
      {
        name: 'B 站教程',
        url: 'https://www.bilibili.com/',
        description: '丰富的 AI 创作和动漫制作教程',
        tags: ['国产', '免费', '视频'],
        recommended: true
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        description: '国际视频教程平台',
        tags: ['国际', '免费', '视频'],
        recommended: true
      },
      {
        name: 'Coursera',
        url: 'https://www.coursera.org/',
        description: '在线课程平台，有 AI 和艺术相关课程',
        tags: ['国际', '付费', '课程'],
        recommended: false
      }
    ]
  },
  {
    category: '💾 素材资源网站',
    tools: [
      {
        name: 'Unsplash',
        url: 'https://unsplash.com/',
        description: '高质量免费图片库',
        tags: ['国际', '免费', '图片'],
        recommended: true
      },
      {
        name: 'Pexels',
        url: 'https://www.pexels.com/',
        description: '免费图片和视频素材库',
        tags: ['国际', '免费', '视频'],
        recommended: true
      },
      {
        name: 'Pixabay',
        url: 'https://pixabay.com/',
        description: '免费图片、视频、音乐素材库',
        tags: ['国际', '免费', '综合'],
        recommended: true
      }
    ]
  }
]

function Tools() {
  useHashScroll()
  const allCategories = useMemo(() => ['全部', ...toolWebsites.map(c => c.category)], [])
  const [active, setActive] = useState('全部')

  const totalTools = useMemo(
    () => toolWebsites.reduce((acc, c) => acc + c.tools.length, 0),
    []
  )
  const visibleCategories = active === '全部'
    ? toolWebsites
    : toolWebsites.filter(c => c.category === active)

  return (
    <div className="space-y-10">
      {/* 页头 */}
      <section className="relative text-center py-12 md:py-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#F5F0E8] via-white to-[#F0EAFB]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B7AB8]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C23B22]/10 rounded-full blur-3xl" />

        <div className="relative z-10 px-4">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#8B7AB8]/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BrandLogo size={22} showText={false} />
            <span className="text-gray-700">工具评测 · Tool Stack</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            {totalTools}+ AI 创作工具 · 按场景选型
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            不按品牌、不按热度，只按<strong className="text-gray-800">"你要做什么"</strong>推荐工具。<br className="hidden md:block" />
            <span className="text-gray-500">2026 年 4 月最新版本 · 持续更新评测与替代方案。</span>
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">🎨 图片生成</span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">🎬 视频生成</span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">🎭 数字人</span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">📝 提示词</span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">🎵 音频</span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">📹 剪辑</span>
          </div>
        </div>
      </section>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2 justify-center">
        {allCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              active === cat
                ? 'bg-gradient-to-r from-[#8B7AB8] to-[#C23B22] text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 工具分类列表 */}
      <div className="space-y-12">
        {visibleCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {/* 分类标题 */}
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{category.category}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
            </div>

            {/* 工具卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool, toolIndex) => {
                const toolId = tool.name.toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-')
                  .substring(0, 20)
                
                return (
                <a
                  key={toolIndex}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hash={toolId}
                  className={`card hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden ${
                    tool.recommended ? 'border-2 border-accent-400' : ''
                  }`}
                >
                  {/* 推荐标记 */}
                  {tool.recommended && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-accent-500 to-accent-700 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                      ⭐ 推荐
                    </div>
                  )}

                  {/* 工具信息 */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                        🔗
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {tool.description}
                    </p>

                    {/* 标签 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 访问按钮 */}
                    <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      访问网站
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </a>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 选型决策指引 */}
      <section className="bg-gradient-to-br from-[#F5F0E8] via-white to-[#F0EAFB] rounded-3xl p-8 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-gray-800">🧭 工具选型决策指引</h2>
        <p className="text-center text-gray-500 mb-8">不要盲目追求"最强"，按你的场景和预算来选</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B7AB8] to-[#5B4B89] flex items-center justify-center text-2xl text-white mb-4">💰</div>
            <h3 className="font-bold text-gray-800 mb-2">按预算</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>· 0 元：即梦 / 通义 / Kling 免费额度</li>
              <li>· 个人：Midjourney $10 / 月起</li>
              <li>· 团队：Runway / Sora 企业版</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C2649C] to-[#8B3A6E] flex items-center justify-center text-2xl text-white mb-4">🌏</div>
            <h3 className="font-bold text-gray-800 mb-2">按语言</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>· 中文优先：即梦、通义万相、Kling</li>
              <li>· 英文原生：Midjourney、Flux、Sora</li>
              <li>· 双语友好：海螺、Seedance</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C23B22] to-[#8A1F0E] flex items-center justify-center text-2xl text-white mb-4">🎯</div>
            <h3 className="font-bold text-gray-800 mb-2">按场景</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>· 角色一致性：ComfyUI + IP-Adapter</li>
              <li>· 电影级视频：Sora / Veo / Kling 高阶</li>
              <li>· 快速出稿：即梦 / Midjourney</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link to="/prompt-library" className="inline-flex items-center gap-2 text-[#8B7AB8] font-semibold hover:text-[#C23B22] transition-colors">
            下一步：浏览 250+ 通用 Prompt →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Tools