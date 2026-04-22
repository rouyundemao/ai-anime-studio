import React from 'react'
import { Link } from 'react-router-dom'

// 工具网站数据
const toolWebsites = [
  {
    category: '🎨 AI 图片生成',
    tools: [
      {
        name: '即梦 AI',
        url: 'https://jimeng.jianying.com/',
        description: '火山引擎顶级图片生成工具，支持高质量写实和动漫风格',
        tags: ['国产', '免费', '高质量'],
        recommended: true
      },
      {
        name: '通义万相',
        url: 'https://wanxiang.aliyun.com/',
        description: '阿里云东方风格优化，特别适合水墨效果和古风创作',
        tags: ['国产', '免费', '东方风格'],
        recommended: true
      },
      {
        name: 'Midjourney',
        url: 'https://www.midjourney.com/',
        description: '国际顶级艺术风格 AI，创意生成能力强',
        tags: ['国际', '付费', '艺术风格'],
        recommended: true
      },
      {
        name: 'Stable Diffusion Online',
        url: 'https://stablediffusionweb.com/',
        description: '在线 SD 工具，无需部署即可使用',
        tags: ['在线', '免费', '开源'],
        recommended: false
      }
    ]
  },
  {
    category: '🎬 AI 视频生成',
    tools: [
      {
        name: '可灵 AI',
        url: 'https://kling.kuaishou.com/',
        description: '快手顶级视频生成工具，物理真实感强',
        tags: ['国产', '免费', '图生视频'],
        recommended: true
      },
      {
        name: '海螺 AI',
        url: 'https://hailuoai.com/',
        description: 'MiniMax 视频生成工具，支持特效制作',
        tags: ['国产', '免费', '特效'],
        recommended: true
      },
      {
        name: 'Vidu',
        url: 'https://www.vidu.cn/',
        description: '生数科技顶级视频生成工具，支持长视频和高一致性',
        tags: ['国产', '免费', '长视频'],
        recommended: true
      },
      {
        name: 'Runway ML',
        url: 'https://runwayml.com/',
        description: '国际顶级视频生成和编辑工具',
        tags: ['国际', '付费', '专业级'],
        recommended: true
      },
      {
        name: 'Pika Labs',
        url: 'https://pika.art/',
        description: '新兴视频生成工具，风格独特',
        tags: ['国际', '免费', '创意'],
        recommended: false
      }
    ]
  },
  {
    category: '📝 提示词工具',
    tools: [
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
  return (
    <div className="space-y-12">
      {/* 页面标题 */}
      <div className="text-center py-12 bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl">
        <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
          🛠️ 实用工具网站精选
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          一键直达，高效创作
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          精选顶级创作工具网站，点击即可访问<br />
          <span className="text-gray-500">AI 生成 · 提示词 · 翻译 · 设计 · 音频视频 · 学习资源</span>
        </p>
      </div>

      {/* 工具分类列表 */}
      <div className="space-y-12">
        {toolWebsites.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {/* 分类标题 */}
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{category.category}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
            </div>

            {/* 工具卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool, toolIndex) => (
                <a
                  key={toolIndex}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 使用说明 */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">💡 使用提示</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="font-bold mb-2">点击访问</h3>
            <p className="text-gray-600 text-sm">点击工具卡片即可访问对应网站</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-bold mb-2">优先推荐</h3>
            <p className="text-gray-600 text-sm">带⭐标记的是雾推荐的工具</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">📑</div>
            <h3 className="font-bold mb-2">标签筛选</h3>
            <p className="text-gray-600 text-sm">根据标签快速找到合适的工具</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools