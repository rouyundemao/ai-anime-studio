/**
 * Prompt 库页面 - 科技感排版
 * 集中展示所有模块的精选 Prompt，支持分类、搜索、一键复制
 */

import React, { useState, useMemo } from 'react'
import PromptCard from '../components/PromptCard'

// Prompt 数据类型
interface PromptItem {
  id: string
  prompt: string
  title: string
  category: string
  module: string
  icon: string
  tags: string[]
}

// 所有 Prompt 数据
const prompts: PromptItem[] = [
  // ── 东方美学 ──────────────────────────────────
  {
    id: 'ea-1',
    prompt: '[动漫主体与场景]，东方水墨留白美学，计白当黑，大面积虚空留白，墨色晕染边缘，极简构图，意境悠远，笔墨写意，动漫风格，8K --ar 16:9 --style raw --s 250',
    title: '水墨留白',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🖌️',
    tags: ['留白', '水墨', '写意']
  },
  {
    id: 'ea-2',
    prompt: '[核心场景与情绪]，情景交融，虚实相生，以景抒情，雾气朦胧，远山如黛，孤舟一叶，空旷寂寥，东方禅意，动漫风格，电影级光影 --ar 16:9 --style raw --s 300',
    title: '情景交融意境',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🌫️',
    tags: ['意境', '情景交融', '禅意']
  },
  {
    id: 'ea-3',
    prompt: '[场景描述]，侘寂美学，残缺之美，岁月痕迹，斑驳苔藓，枯枝落叶，自然风化的肌理，不完美即美，冷色调，低饱和，动漫风格，电影级构图 --ar 16:9 --style raw',
    title: '侘寂残缺美',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🍂',
    tags: ['侘寂', '残缺美', '低饱和']
  },
  {
    id: 'ea-4',
    prompt: '[场景]，东方四季美学，樱花飘落 / 荷叶映日 / 红叶层林 / 寒梅傲雪（四选一），季节色彩情绪，诗意画面，动漫风格，8K 超高清 --ar 16:9 --style raw --s 280',
    title: '四季更迭诗意',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🌸',
    tags: ['四季', '诗意', '自然']
  },
  {
    id: 'ea-5',
    prompt: '[建筑场景]，传统枯山水禅庭，白砂纹理，置石如岛，苔藓点缀，极简空间，空与实的对话，禅宗哲学，动漫风格，俯视构图，8K --ar 1:1 --style raw',
    title: '枯山水禅庭',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '⛩️',
    tags: ['枯山水', '禅庭', '极简']
  },
  {
    id: 'ea-6',
    prompt: '[人物与场景]，金箔点缀，琳派装饰美学，金色与墨色交织，奢华而克制，平面装饰性构图，东方传统纹样，动漫插画风格 --ar 16:9 --style raw --s 350',
    title: '琳派金箔美学',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '✨',
    tags: ['金箔', '琳派', '装饰性']
  },
  {
    id: 'ea-7',
    prompt: '[夜晚场景]，月色如水，月光倾泻，清冷月白，淡蓝色调，竹影摇曳，虫鸣声声，东方古典意境，寂静之美，动漫风格，电影级光影 --ar 16:9 --style raw',
    title: '月色清冷意境',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🌙',
    tags: ['月色', '清冷', '夜晚']
  },
  {
    id: 'ea-8',
    prompt: '[场景描述]，工笔重彩风格，线条精细如发丝，色彩层层渲染，富丽精工，花鸟虫鱼细节极致，传统东方绘画美学，动漫化演绎 --ar 16:9 --style raw --s 300',
    title: '工笔重彩风',
    category: '东方美学',
    module: '模块 1: 艺术理念',
    icon: '🖼️',
    tags: ['工笔', '重彩', '精工']
  },
  // ── 角色设计 ──────────────────────────────────
  {
    id: 'cd-1',
    prompt: '[角色名]，动漫角色正面参考图，精致五官，双眸有神，皮肤白皙细腻，[发色]长发，[服装描述]，白色背景，全身图，角色设计参考，8K --ar 9:16 --style raw --s 250',
    title: '角色基础参考图',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '👤',
    tags: ['角色', '参考图', '全身']
  },
  {
    id: 'cd-2',
    prompt: '[角色描述]，动漫角色五视角设计图，正面·侧面·背面·3/4视角·特写，同一角色，保持外形一致，角色设计稿，白色背景，精致线条 --ar 16:9 --style raw',
    title: '五视角设计稿',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '🔄',
    tags: ['多视角', '设计稿', '一致性']
  },
  {
    id: 'cd-3',
    prompt: '[角色描述]，古风动漫少女，汉服飘逸，云鬓花颜，点绛唇，蛾眉淡扫，水袖轻舒，玉簪环佩，气质高雅清冷，电影级画质 --ar 9:16 --style raw --s 300',
    title: '古风汉服角色',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '👘',
    tags: ['古风', '汉服', '东方']
  },
  {
    id: 'cd-4',
    prompt: '[角色描述]，现代都市动漫少女，JK制服 / 学院风 / 街头潮流（三选一），青春活力，灵动眼神，自然妆容，城市背景虚化，电影级构图 --ar 9:16 --style raw --s 250',
    title: '现代都市少女',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '🏙️',
    tags: ['现代', '都市', '青春']
  },
  {
    id: 'cd-5',
    prompt: '[角色描述]，动漫反派角色设计，眼神犀利深邃，气质冷冽危险，暗色服装，锋利线条，神秘感十足，强烈存在感，黑暗美学，动漫风格 --ar 9:16 --style raw --s 350',
    title: '反派角色设计',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '😈',
    tags: ['反派', '黑暗', '冷冽']
  },
  {
    id: 'cd-6',
    prompt: '[角色描述]，动漫角色表情九宫格，喜·怒·哀·惧·惊·思·疲·嗔·平静，同一角色不同表情，白色背景，表情设计参考，精细线条 --ar 1:1 --style raw',
    title: '九种表情设计',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '😊',
    tags: ['表情', '九宫格', '情绪']
  },
  {
    id: 'cd-7',
    prompt: '请为以下角色生成 LoRA 训练数据集描述词：[角色基本设定]。输出格式：①统一外貌锁定词（发色/发型/五官特征/身材/肤色）②20组多场景触发词（自然光/室内/户外/不同情绪/不同服装）③负面描述词（避免特征漂移）',
    title: 'LoRA 训练数据集生成',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '🤖',
    tags: ['LoRA', '训练', '一致性']
  },
  {
    id: 'cd-8',
    prompt: '[角色描述]，动漫角色动态姿势，[姿势描述：奔跑/跳跃/回眸/倚墙/坐姿/战斗蓄力]，姿势自然流畅，重心稳定，符合人体结构，动感十足 --ar 9:16 --style raw --s 280',
    title: '动态姿势设计',
    category: '角色设计',
    module: '模块 3: 人物设计',
    icon: '🏃',
    tags: ['姿势', '动态', '动感']
  },
  // ── 场景营造 ──────────────────────────────────
  {
    id: 'sc-1',
    prompt: '[城市名/虚构城市]，赛博朋克动漫城市夜景，霓虹灯倒影在雨后街道，高耸入云的摩天大楼，飞行汽车尾迹，密集人群，蒸汽雾气，电影级构图，8K --ar 16:9 --style raw --s 300',
    title: '赛博朋克城市夜景',
    category: '场景营造',
    module: '模块 4: 世界观构建',
    icon: '🌃',
    tags: ['赛博朋克', '城市', '夜景']
  },
  {
    id: 'sc-2',
    prompt: '[朝代/架空王朝]，东方古风城市全景，飞檐翘角，朱墙金瓦，青石板街，集市热闹，烟雨朦胧，航拍俯视构图，动漫风格，史诗级画质 --ar 16:9 --style raw --s 350',
    title: '古风城市全景',
    category: '场景营造',
    module: '模块 4: 世界观构建',
    icon: '🏯',
    tags: ['古风', '古城', '史诗']
  },
  {
    id: 'sc-3',
    prompt: '[自然场景：山川/海洋/森林/草原]，动漫自然风光，宏大壮阔，光线丰富，体积云，远近透视层次分明，季节氛围明确，8K 超高清 --ar 21:9 --style raw --s 300',
    title: '宏大自然风光',
    category: '场景营造',
    module: '模块 4: 世界观构建',
    icon: '🏔️',
    tags: ['自然', '宏大', '风光']
  },
  {
    id: 'sc-4',
    prompt: '[室内场景：咖啡馆/图书馆/卧室/工作室]，动漫室内场景，温暖灯光，精心陈设，生活感细节丰富，窗外光线漫射，氛围舒适治愈 --ar 16:9 --style raw --s 250',
    title: '治愈系室内场景',
    category: '场景营造',
    module: '模块 4: 世界观构建',
    icon: '🏠',
    tags: ['室内', '治愈', '温暖']
  },
  {
    id: 'sc-5',
    prompt: '[末世设定]，动漫废土末世场景，锈蚀钢铁废墟，杂草蔓延，破碎玻璃，余晖斜射，尘埃飞扬，沉默而壮阔，末日诗意，8K --ar 21:9 --style raw --s 350',
    title: '末世废土场景',
    category: '场景营造',
    module: '模块 4: 世界观构建',
    icon: '🌑',
    tags: ['末世', '废土', '废墟']
  },
  {
    id: 'sc-6',
    prompt: '[奇幻世界描述]，动漫奇幻场景，悬浮岛屿，瀑布倒流，发光矿石，异域植物，神秘光柱，宏大天空，史诗奇幻风格，8K --ar 16:9 --style raw --s 400',
    title: '奇幻浮空世界',
    category: '场景营造',
    module: '模块 4: 世界观构建',
    icon: '🌌',
    tags: ['奇幻', '浮空', '异世界']
  },
  {
    id: 'sc-7',
    prompt: '[水下场景]，动漫深海场景，幽蓝光线折射，气泡漂浮，海草摇曳，神秘海底遗迹，鱼群穿梭，静谧而神秘，电影级光影 --ar 16:9 --style raw --s 300',
    title: '神秘深海场景',
    category: '场景营造',
    module: '模块 4: 世界观构建',
    icon: '🌊',
    tags: ['深海', '水下', '神秘']
  },
  {
    id: 'sc-8',
    prompt: '[战斗场景描述]，动漫史诗战场，硝烟弥漫，碎石横飞，冲击波扩散，光束切割天空，爆炸火光，速度线极致，紧张动感，电影级 --ar 21:9 --style raw --s 400',
    title: '史诗战斗场景',
    category: '场景营造',
    module: '模块 5: 画面生成',
    icon: '⚔️',
    tags: ['战斗', '爆炸', '动感']
  },
  // ── 剧本创作 ──────────────────────────────────
  {
    id: 'sc2-1',
    prompt: '我要创作一部 [时长] 分钟的 [题材] 动漫短片。请用好莱坞救猫咪15节拍表帮我搭建完整剧本骨架：逐一列出每个节拍的名称、发生时间点、核心事件内容、情绪强度（1-10分）、主角的内心变化，并在最后标注整体人物弧光。',
    title: '救猫咪15节拍剧本',
    category: '剧本创作',
    module: '模块 2: 故事创作',
    icon: '🎬',
    tags: ['剧本', '节拍表', '结构']
  },
  {
    id: 'sc2-2',
    prompt: '基于以下剧情概要：[概要]，帮我设计一条完整的主角人物弧光。包含：①初始状态（缺陷/误解/恐惧）②触发事件 ③三次考验与成长 ④转折顿悟时刻 ⑤最终蜕变状态。每个阶段给出可视化的画面表现建议。',
    title: '人物弧光设计',
    category: '剧本创作',
    module: '模块 2: 故事创作',
    icon: '🌱',
    tags: ['人物弧光', '成长', '角色']
  },
  {
    id: 'sc2-3',
    prompt: '为 [场景/情节] 设计3层悬念结构：第1层（表层悬念：下一步会发生什么）、第2层（中层悬念：角色真实动机是什么）、第3层（深层悬念：主题命题的答案）。每层标注设置位置、揭示时机、观众情绪预期。',
    title: '三层悬念结构',
    category: '剧本创作',
    module: '模块 2: 故事创作',
    icon: '🔍',
    tags: ['悬念', '结构', '三层']
  },
  {
    id: 'sc2-4',
    prompt: '请为 [题材] 动漫短剧设计一个3秒必抓人的开场钩子。要求：①视觉冲击力强 ②制造信息缺口（观众必须看下去才能理解）③情绪调性定准。给出3个方案，标注各自的钩子类型（悬念型/反转型/情绪型/奇观型）。',
    title: '开场3秒钩子设计',
    category: '剧本创作',
    module: '模块 2: 故事创作',
    icon: '🪝',
    tags: ['钩子', '开场', '抓眼球']
  },
  {
    id: 'sc2-5',
    prompt: '用起承转合四幕式结构，为 [核心冲突] 设计完整的情节推进方案。每幕标注：时长比例、核心事件、情绪峰值、节奏快慢、镜头风格建议。"转"必须出乎意料却在情理之中。',
    title: '起承转合四幕结构',
    category: '剧本创作',
    module: '模块 2: 故事创作',
    icon: '📊',
    tags: ['起承转合', '四幕', '节奏']
  },
  {
    id: 'sc2-6',
    prompt: '为 [情感关系] 设计一段高质量的对话场景。要求：①每句台词都承载双重含义（表层意思+隐藏情绪）②对话中有信息量推进 ③句子简短有力，避免说教 ④结尾留白让观众自行感受。给出完整台词+舞台指示。',
    title: '双重含义对白',
    category: '剧本创作',
    module: '模块 2: 故事创作',
    icon: '💬',
    tags: ['对白', '双重含义', '台词']
  },
  {
    id: 'sc2-7',
    prompt: '为 [高潮情节] 设计情感爆发点。要求：①积蓄期（前情铺垫，至少3个细节暗示）②触发器（一个具体的小事件引爆情绪）③爆发方式（用视觉化行为代替语言独白）④余波处理（情绪降落的节奏）。',
    title: '情感高潮爆发设计',
    category: '剧本创作',
    module: '模块 2: 故事创作',
    icon: '💥',
    tags: ['高潮', '情感', '爆发']
  },
  {
    id: 'sc2-8',
    prompt: '为 [故事结局] 设计一个令观众意外却满足的结尾反转。要求：①反转必须有前文伏笔支撑（列出至少2处伏笔）②反转后重新解读前文，所有细节都能自洽 ③结尾最后一个画面具有强烈的情感余韵，可以安静收尾。',
    title: '结尾反转设计',
    category: '剧本创作',
    module: '模块 2: 故事创作',
    icon: '🔄',
    tags: ['反转', '结尾', '伏笔']
  },
  // ── 镜头语言 ──────────────────────────────────
  {
    id: 'cl-1',
    prompt: '为 [场景/情节] 设计一组完整的分镜脚本，共8个镜头。每个镜头标注：景别（远/全/中/近/特写）、运镜方式（推/拉/摇/移/跟/升降）、时长、画面内容、角色状态、情绪目的。整体节奏符合情节张力。',
    title: '完整分镜脚本',
    category: '镜头语言',
    module: '模块 6: 视频动画',
    icon: '🎞️',
    tags: ['分镜', '景别', '运镜']
  },
  {
    id: 'cl-2',
    prompt: '[角色面部特写]，动漫极致特写镜头，睫毛颤动，瞳孔倒映光影，微表情细节，情绪在眼神中涌动，浅景深虚化背景，情感张力拉满，8K --ar 1:1 --style raw --s 350',
    title: '极致情绪特写',
    category: '镜头语言',
    module: '模块 6: 视频动画',
    icon: '👁️',
    tags: ['特写', '情绪', '眼神']
  },
  {
    id: 'cl-3',
    prompt: '[场景全景描述]，动漫建立镜头，广角超广角，环境宏大壮阔，人物渺小置于场景中，天空占画面60%，自然光丰富，史诗感，8K --ar 21:9 --style raw --s 300',
    title: '环境建立广角镜',
    category: '镜头语言',
    module: '模块 6: 视频动画',
    icon: '🌅',
    tags: ['广角', '建立镜头', '宏大']
  },
  {
    id: 'cl-4',
    prompt: '[对话场景]，动漫过肩镜头，前景人物肩膀虚化，后景对话者清晰，形成对话张力，亲密关系或对峙关系通过构图体现，浅景深，电影级 --ar 16:9 --style raw',
    title: '过肩对话镜头',
    category: '镜头语言',
    module: '模块 6: 视频动画',
    icon: '🎭',
    tags: ['过肩', '对话', '景深']
  },
  {
    id: 'cl-5',
    prompt: '[场景描述]，动漫低角度仰拍镜头，仰视视角，人物或建筑显得高大威严，天空为背景，强烈的压迫感或神圣感，透视畸变，戏剧性构图 --ar 16:9 --style raw --s 300',
    title: '仰拍威压镜头',
    category: '镜头语言',
    module: '模块 6: 视频动画',
    icon: '⬆️',
    tags: ['仰拍', '威压', '透视']
  },
  {
    id: 'cl-6',
    prompt: '[追逐/动作场景]，动漫主观镜头（第一视角），手持晃动感，速度感强烈，画面边缘运动模糊，沉浸感极强，观众代入主角视角，临场感十足 --ar 16:9 --style raw --s 350',
    title: '第一视角主观镜',
    category: '镜头语言',
    module: '模块 6: 视频动画',
    icon: '🏃',
    tags: ['主观镜头', '第一视角', '沉浸']
  },
  {
    id: 'cl-7',
    prompt: '为以下两个场景设计转场方式：场景A：[描述]，场景B：[描述]。给出3种转场方案（硬切/叠化/匹配剪辑/动作转场/颜色转场）各自的视觉效果、情绪过渡感受，以及具体的动作衔接点。',
    title: '创意转场方案设计',
    category: '镜头语言',
    module: '模块 6: 视频动画',
    icon: '✂️',
    tags: ['转场', '剪辑', '匹配']
  },
  {
    id: 'cl-8',
    prompt: '[情绪场景]，动漫光影叙事，[光源设定：逆光/顶光/侧光/冷暖对比光]，光影本身成为叙事语言，人物处于阴影与光明交界处，象征内心挣扎，电影级布光，8K --ar 16:9 --style raw --s 400',
    title: '光影叙事镜头',
    category: '镜头语言',
    module: '模块 6: 视频动画',
    icon: '💡',
    tags: ['光影', '叙事', '布光']
  },
  // ── 风格模仿 ──────────────────────────────────
  {
    id: 'st-1',
    prompt: '[场景描述]，新海诚动漫风格，超高精细度城市背景，镜头光晕，黄昏逆光，玻璃反光，体积光，粒子感尘埃，色彩饱和度高，孤独感人物，远景城市如画，8K --ar 16:9 --style raw --s 400',
    title: '新海诚风格',
    category: '风格模仿',
    module: '模块 1: 艺术理念',
    icon: '🌇',
    tags: ['新海诚', '光晕', '城市']
  },
  {
    id: 'st-2',
    prompt: '[场景描述]，宫崎骏吉卜力动画风格，手绘质感，清新自然，柔和色调，圆润线条，田园风光，细节丰富有生命力，温暖治愈，空气感十足 --ar 16:9 --style raw --s 300',
    title: '宫崎骏吉卜力风格',
    category: '风格模仿',
    module: '模块 1: 艺术理念',
    icon: '🌿',
    tags: ['宫崎骏', '吉卜力', '治愈']
  },
  {
    id: 'st-3',
    prompt: '[场景/人物描述]，今敏动画风格，现实与幻想交织，双重叙事，强烈的视觉冲击，精致的心理描绘，色彩对比鲜明，叙事碎片化，梦境感 --ar 16:9 --style raw --s 350',
    title: '今敏心理现实风格',
    category: '风格模仿',
    module: '模块 1: 艺术理念',
    icon: '🌀',
    tags: ['今敏', '心理', '梦境']
  },
  {
    id: 'st-4',
    prompt: '[人物/场景描述]，京都动画风格，清澈透亮的色彩，柔和光线，极致细腻的人物表情，温柔日常感，精致背景，生活化细节，治愈温暖 --ar 16:9 --style raw --s 300',
    title: '京都动画清透风格',
    category: '风格模仿',
    module: '模块 1: 艺术理念',
    icon: '✨',
    tags: ['京都动画', '清透', '温柔']
  },
  {
    id: 'st-5',
    prompt: '[场景描述]，虫师/蛇足水墨动漫风格，水墨晕染背景，线条简洁写意，自然灵异元素，朦胧诗意，东方志怪美学，冷绿色调，静谧神秘 --ar 16:9 --style raw --s 350',
    title: '水墨志怪风格',
    category: '风格模仿',
    module: '模块 1: 艺术理念',
    icon: '🌿',
    tags: ['水墨', '志怪', '东方']
  },
  {
    id: 'st-6',
    prompt: '[角色/场景描述]，少女漫画风格，精致玫瑰花纹背景，星光闪烁，大眼睛光点十足，柔美线条，粉色紫色色调，梦幻浪漫，花瓣飘散 --ar 9:16 --style raw --s 250',
    title: '少女漫画梦幻风格',
    category: '风格模仿',
    module: '模块 1: 艺术理念',
    icon: '🌹',
    tags: ['少女漫', '梦幻', '浪漫']
  },
  // ── 画面生成 ──────────────────────────────────
  {
    id: 'ig-1',
    prompt: '[动漫主角描述]，站在 [场景] 中，即梦AI 4.5生成，动漫写实风，超高清细节，电影级光影，自然姿态，人物比例标准，背景焦外虚化，8K --ar 9:16',
    title: '即梦主角生成',
    category: '画面生成',
    module: '模块 5: 画面生成',
    icon: '🖼️',
    tags: ['即梦', '主角', '写实']
  },
  {
    id: 'ig-2',
    prompt: '[场景构图描述]，Midjourney v7，anime style，cinematic lighting，ultra-detailed，8K resolution，ray tracing，atmospheric depth，award-winning illustration --ar 16:9 --style raw --s 300 --v 7',
    title: 'Midjourney 动漫场景',
    category: '画面生成',
    module: '模块 5: 画面生成',
    icon: '⚡',
    tags: ['Midjourney', '场景', '电影级']
  },
  {
    id: 'ig-3',
    prompt: '[角色全身描述]，通义万相3.0，国风动漫插画，工笔重彩，精致线稿，色彩鲜艳，细节丰富，白色背景，角色设计参考，高清输出',
    title: '通义万相国风角色',
    category: '画面生成',
    module: '模块 5: 画面生成',
    icon: '🎨',
    tags: ['通义万相', '国风', '插画']
  },
  {
    id: 'ig-4',
    prompt: 'masterpiece, best quality, [角色描述], [场景描述], extremely detailed, perfect anatomy, beautiful face, dynamic pose, cinematic composition, volumetric lighting, depth of field, 8k wallpaper, anime style, Negative: ugly, bad hands, blurry, low quality',
    title: 'SD/Flux 高质量动漫',
    category: '画面生成',
    module: '模块 5: 画面生成',
    icon: '🔧',
    tags: ['StableDiffusion', 'Flux', '高质量']
  },
  {
    id: 'ig-5',
    prompt: '[动漫场景]，黄金时刻光线（Golden Hour），暖橙色阳光斜射，长条阴影，逆光轮廓光，天空橙紫渐变，体积光光柱，粒子尘埃，电影感极强 --ar 16:9 --style raw --s 350',
    title: '黄金时刻光线',
    category: '画面生成',
    module: '模块 5: 画面生成',
    icon: '🌅',
    tags: ['黄金时刻', '逆光', '暖色']
  },
  {
    id: 'ig-6',
    prompt: '[场景/人物]，雨夜动漫场景，雨滴打在玻璃上，街道积水反光，霓虹灯倒影，潮湿空气感，人物撑伞，冷蓝色调，孤独氛围 --ar 16:9 --style raw --s 300',
    title: '雨夜霓虹氛围',
    category: '画面生成',
    module: '模块 5: 画面生成',
    icon: '🌧️',
    tags: ['雨夜', '霓虹', '孤独']
  },
  {
    id: 'ig-7',
    prompt: '[人物描述]，动漫人物情绪特写，[情绪：落泪/微笑/愤怒/震惊]，面部细节极致，皮肤质感，睫毛细节，眼中光芒，情绪真实可感，8K --ar 1:1 --style raw --s 400',
    title: '人物情绪特写',
    category: '画面生成',
    module: '模块 5: 画面生成',
    icon: '😢',
    tags: ['情绪', '特写', '表情']
  },
  {
    id: 'ig-8',
    prompt: '[战斗/奔跑场景]，动漫极速运动画面，速度线放射，残影效果，冲击波扩散圈，破碎地面，衣物被气流拉扯，超高动感，热血漫风格 --ar 16:9 --style raw --s 400',
    title: '极速动感热血画面',
    category: '画面生成',
    module: '模块 5: 画面生成',
    icon: '💨',
    tags: ['速度线', '热血', '动感']
  },
  // ── 视频动画 ──────────────────────────────────
  {
    id: 'va-1',
    prompt: '图生视频提示词 | 基础画面：[已生成的静态图描述] | 运动描述：[轻微头发飘动，微风吹过，眨眼一次，嘴角微微上扬] | 幅度：细腻轻微 | 时长：4秒 | 工具：即梦AI / 可灵 / Seedance',
    title: '图生视频·微动效',
    category: '视频动画',
    module: '模块 6: 视频动画',
    icon: '🎬',
    tags: ['图生视频', '微动效', '即梦']
  },
  {
    id: 'va-2',
    prompt: '首尾帧控制提示词 | 首帧：[人物站在原地，背对镜头] | 尾帧：[人物缓缓回头，眼神与镜头对视] | 过渡：自然流畅，头发随转动飘起 | 时长：3秒 | 工具：可灵 / Kling',
    title: '首尾帧叙事控制',
    category: '视频动画',
    module: '模块 6: 视频动画',
    icon: '🖼️',
    tags: ['首尾帧', '控制', '叙事']
  },
  {
    id: 'va-3',
    prompt: '运镜视频提示词 | 画面内容：[场景描述] | 运镜：[缓慢推进/环绕旋转/从地面仰起/从高空俯冲] | 速度：缓慢平稳 | 情绪：[宏大/温柔/紧张] | 时长：5秒 | 工具：Seedance / Wan2.2',
    title: '运镜控制视频',
    category: '视频动画',
    module: '模块 6: 视频动画',
    icon: '📷',
    tags: ['运镜', '镜头控制', '视频']
  },
  {
    id: 'va-4',
    prompt: '对口型配音视频提示词 | 角色描述：[人物外貌] | 台词内容：[具体台词文本] | 情绪：[情绪强度和表情] | 嘴型要求：准确同步 | 头部动作：自然点头/摇头配合语气 | 工具：海螺AI / Vidu',
    title: '对口型配音视频',
    category: '视频动画',
    module: '模块 6: 视频动画',
    icon: '🎤',
    tags: ['对口型', '配音', '视频']
  },
  {
    id: 'va-5',
    prompt: '视频重绘提示词 | 原始视频：[真人/素材描述] | 目标风格：[新海诚/吉卜力/赛博朋克动漫] | 保留内容：人物动作轨迹和镜头运动 | 风格化强度：80% | 工具：Runway Gen-3 / 即梦视频重绘',
    title: '视频风格重绘',
    category: '视频动画',
    module: '模块 6: 视频动画',
    icon: '🔄',
    tags: ['重绘', '风格迁移', 'Runway']
  },
  {
    id: 'va-6',
    prompt: '慢动作情绪放大提示词 | 画面：[情绪顶点的动作，如泪水落下/樱花飘落/拳头击出] | 速度：0.3倍慢镜头 | 细节放大：粒子感/液体流动/布料微动 | 配乐建议：弦乐高潮 | 时长：3秒 | 工具：Seedance / Wan',
    title: '慢动作情绪放大',
    category: '视频动画',
    module: '模块 6: 视频动画',
    icon: '💧',
    tags: ['慢镜头', '情绪', '细节']
  },
  // ── 世界观构建 ──────────────────────────────────
  {
    id: 'wb-1',
    prompt: '为 [架空世界名称] 设计完整的地理环境体系。包含：①大陆板块分布与气候带 ②核心地标（山脉/海洋/城市/禁区）③地理环境对文明发展的影响 ④可视化场景描述词（供AI生成地图参考）。',
    title: '世界地理环境设定',
    category: '世界观构建',
    module: '模块 4: 世界观构建',
    icon: '🗺️',
    tags: ['地理', '世界设定', '地图']
  },
  {
    id: 'wb-2',
    prompt: '为 [世界观] 构建文明体系。包含：①社会结构（阶级/种族/职业体系）②政治制度与权力结构 ③经济体系（货币/贸易/资源分布）④主流价值观与禁忌 ⑤与故事主角的直接关联。',
    title: '文明体系构建',
    category: '世界观构建',
    module: '模块 4: 世界观构建',
    icon: '🏛️',
    tags: ['文明', '社会', '体系']
  },
  {
    id: 'wb-3',
    prompt: '为 [世界观] 设计魔法/超能力/科技体系。要求：①有明确的规则与限制（代价/消耗/禁忌）②等级体系清晰 ③与世界观文化深度绑定 ④设计3种视觉化的能力表现形式（可转化为AI生成提示词）。',
    title: '能力体系规则设定',
    category: '世界观构建',
    module: '模块 4: 世界观构建',
    icon: '⚡',
    tags: ['魔法', '超能力', '规则']
  },
  {
    id: 'wb-4',
    prompt: '为 [世界观] 构建历史神话体系。包含：①创世神话（世界起源传说）②远古时代关键事件（3-5个）③神明/古代存在的设定 ④历史如何影响当下的政治格局 ⑤民间流传的禁忌与传说。',
    title: '历史神话体系',
    category: '世界观构建',
    module: '模块 4: 世界观构建',
    icon: '📜',
    tags: ['神话', '历史', '传说']
  },
  {
    id: 'wb-5',
    prompt: '[架空世界名]，世界地图俯视图，大陆轮廓，山脉海洋标注，主要城市位置，气候带色彩区分，古地图羊皮纸风格，动漫插画质感，细节丰富 --ar 16:9 --style raw --s 350',
    title: '世界地图可视化',
    category: '世界观构建',
    module: '模块 4: 世界观构建',
    icon: '🧭',
    tags: ['地图', '可视化', '俯视']
  },
  // ── 情绪氛围 ──────────────────────────────────
  {
    id: 'em-1',
    prompt: '[治愈场景]，温暖治愈系动漫画面，柔和暖光，金色午后，小动物陪伴，慵懒舒适，安全感满满，淡淡幸福，颗粒质感，浅橙色调 --ar 16:9 --style raw --s 250',
    title: '温暖治愈氛围',
    category: '情绪氛围',
    module: '模块 1: 艺术理念',
    icon: '🌞',
    tags: ['治愈', '温暖', '幸福']
  },
  {
    id: 'em-2',
    prompt: '[孤独场景]，动漫孤独感，人物渺小置于宏大空间，冷蓝色调，空旷安静，城市喧嚣与内心孤寂对比，长焦压缩感，情感克制含蓄 --ar 16:9 --style raw --s 300',
    title: '孤独忧郁氛围',
    category: '情绪氛围',
    module: '模块 1: 艺术理念',
    icon: '🌧️',
    tags: ['孤独', '忧郁', '冷色']
  },
  {
    id: 'em-3',
    prompt: '[热血场景]，动漫热血燃烧感，暖橙红色光芒从背后爆发，逆光剪影，拳头握紧，眼神坚定燃烧，速度线，爆炸粒子，热血漫最强演出 --ar 16:9 --style raw --s 400',
    title: '热血燃烧氛围',
    category: '情绪氛围',
    module: '模块 1: 艺术理念',
    icon: '🔥',
    tags: ['热血', '燃烧', '激昂']
  },
  {
    id: 'em-4',
    prompt: '[恐怖/悬疑场景]，动漫惊悚氛围，高对比黑白，阴影占画面70%，光线从单一方向切割，扭曲空间感，诡异静谧，人物表情恐惧 --ar 16:9 --style raw --s 350',
    title: '恐惧悬疑氛围',
    category: '情绪氛围',
    module: '模块 1: 艺术理念',
    icon: '👁️',
    tags: ['恐怖', '悬疑', '黑暗']
  },
  {
    id: 'em-5',
    prompt: '[浪漫场景]，动漫唯美浪漫，花瓣飘散，星光璀璨，双人剪影，暖粉紫色调，梦幻光晕，时间仿佛静止，少女心满满，电影级构图 --ar 16:9 --style raw --s 300',
    title: '唯美浪漫氛围',
    category: '情绪氛围',
    module: '模块 1: 艺术理念',
    icon: '💕',
    tags: ['浪漫', '唯美', '粉紫']
  },
  // ── 配音配乐 ──────────────────────────────────
  {
    id: 'au-1',
    prompt: '为 [场景/情绪] 生成配乐描述词（供AI音乐生成工具使用）：曲风：[古典弦乐/电子氛围/和风雅乐/史诗管弦]；情绪：[平静→紧张→爆发→释然]；BPM：[80-120]；核心乐器：[钢琴/小提琴/尺八/合成器]；时长：[分钟]。',
    title: 'AI配乐生成描述',
    category: '配音配乐',
    module: '模块 6: 视频动画',
    icon: '🎼',
    tags: ['配乐', 'AI音乐', '生成']
  },
  {
    id: 'au-2',
    prompt: '为 [角色名] 设计配音方向（供AI TTS或配音演员参考）：声线特征：[低沉/清亮/沙哑/温柔]；语速：[慢/中/快]；情绪底色：[冷静/热情/忧郁/活泼]；口音特点；标志性语气词；在[具体场景]中的情绪表现方式。',
    title: '角色配音方向设计',
    category: '配音配乐',
    module: '模块 6: 视频动画',
    icon: '🎙️',
    tags: ['配音', '声线', '角色']
  },
  {
    id: 'au-3',
    prompt: '为 [场景] 设计音效层次：①环境底层音（持续性背景音：风声/城市噪音/自然声）②动作音效（每个关键动作对应音效）③情绪强调音效（冲击感/心跳/静默）④声音的动态变化（由远及近/由弱到强）。',
    title: '多层次音效设计',
    category: '配音配乐',
    module: '模块 6: 视频动画',
    icon: '🔊',
    tags: ['音效', '层次', '环境音']
  },
  {
    id: 'au-4',
    prompt: '为 [故事主题/情感] 创作一段动漫主题曲歌词（16行）。要求：①副歌朗朗上口，适合AI演唱 ②歌词与画面有映射关系 ③东方意象与现代语言结合 ④情感真挚不俗套 ⑤标注每段对应的情绪和场景。',
    title: '主题曲歌词创作',
    category: '配音配乐',
    module: '模块 6: 视频动画',
    icon: '🎵',
    tags: ['歌词', '主题曲', '创作']
  },
  // ── 工作流 ──────────────────────────────────
  {
    id: 'wf-1',
    prompt: '我要制作一部 [时长] 分钟的 [题材] AI动漫短片，请为我设计完整工作流：①剧本（工具+输出物）②角色设计（工具+参数）③场景生成（工具+参数）④分镜制作（工具+格式）⑤视频生成（工具+参数）⑥配音配乐（工具）⑦后期合成（软件+导出格式）。每步标注预计耗时。',
    title: '完整短片工作流',
    category: '工作流',
    module: '工作流总览',
    icon: '⚙️',
    tags: ['工作流', '完整流程', '短片']
  },
  {
    id: 'wf-2',
    prompt: '为 [IP角色名] 设计标准化角色资产工作流：①外貌锁定词文档 ②LoRA训练数据集采集方案（场景/光线/角度分布）③多工具一致性测试方案 ④角色素材库分类标准（按表情/服装/场景分类）⑤后续批量生产的提示词模板。',
    title: 'IP角色资产标准化',
    category: '工作流',
    module: '工作流总览',
    icon: '👤',
    tags: ['IP角色', 'LoRA', '标准化']
  },
  {
    id: 'wf-3',
    prompt: '为竖屏短视频平台（抖音/小红书）设计 60 秒动漫短剧工作流：①3秒钩子画面 ②15秒冲突建立 ③30秒高潮推进 ④12秒情绪收尾。每段标注：分镜数量、单镜时长、AI工具、字幕节奏、背景音乐切换点。',
    title: '竖屏短剧工作流',
    category: '工作流',
    module: '工作流总览',
    icon: '📱',
    tags: ['竖屏', '短剧', '60秒']
  },
  {
    id: 'wf-4',
    prompt: '为 [歌曲名/风格] 设计动漫 MV 制作工作流：①歌词逐句分镜（标注画面内容/景别/运镜）②视觉主题色提取 ③角色在MV中的服装/场景变化 ④高潮段落视觉演出设计 ⑤副歌循环段的视觉处理方式 ⑥AI工具分工与衔接。',
    title: '动漫MV制作工作流',
    category: '工作流',
    module: '工作流总览',
    icon: '🎬',
    tags: ['MV', '音乐视频', '工作流']
  },
]

// 分类列表
const categories = [
  { name: '全部', icon: '📚' },
  { name: '东方美学', icon: '🌸' },
  { name: '角色设计', icon: '👤' },
  { name: '场景营造', icon: '🏙️' },
  { name: '剧本创作', icon: '📝' },
  { name: '镜头语言', icon: '🎬' },
  { name: '风格模仿', icon: '🎨' },
  { name: '画面生成', icon: '🖼️' },
  { name: '视频动画', icon: '🎞️' },
  { name: '世界观构建', icon: '🌍' },
  { name: '情绪氛围', icon: '💫' },
  { name: '配音配乐', icon: '🎵' },
  { name: '工作流', icon: '⚙️' },
]

function PromptLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [searchQuery, setSearchQuery] = useState('')

  // 筛选 Prompt
  const filteredPrompts = useMemo(() => {
    return prompts.filter(prompt => {
      const matchesCategory = selectedCategory === '全部' || prompt.category === selectedCategory
      const matchesSearch = searchQuery === '' || 
        prompt.prompt.includes(searchQuery) ||
        prompt.title.includes(searchQuery) ||
        prompt.tags.some(tag => tag.includes(searchQuery))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-gradient-to-r from-[#6B5FA0] via-[#8B7AB8] to-[#C2649C] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="mr-3">✨</span>
            AI 动漫 Prompt 库
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            覆盖 13 个创作维度，{prompts.length} 个高质量 Prompt，一键复制，即拿即用
          </p>

          {/* 搜索框 */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索 Prompt、标签、关键词..."
                className="w-full px-6 py-4 rounded-2xl text-gray-800 bg-white shadow-2xl
                  focus:outline-none focus:ring-4 focus:ring-[#8B7AB8]/30
                  placeholder-gray-400 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map(category => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300
                flex items-center gap-2
                ${selectedCategory === category.name
                  ? 'bg-gradient-to-r from-[#8B7AB8] to-[#C2649C] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
              {category.name !== '全部' && (
                <span className="text-xs opacity-75">
                  ({prompts.filter(p => p.category === category.name).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* 统计信息 */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            当前显示 <span className="font-bold text-[#8B7AB8]">{filteredPrompts.length}</span> 个 Prompt
            {searchQuery && (
              <span className="ml-2">
                搜索 "<span className="font-bold text-[#C2649C]">{searchQuery}</span>" 的结果
              </span>
            )}
          </p>
        </div>

        {/* Prompt 卡片列表 */}
        <div className="space-y-6">
          {filteredPrompts.length > 0 ? (
            filteredPrompts.map((prompt, index) => (
              <div
                key={prompt.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <PromptCard
                  prompt={prompt.prompt}
                  title={prompt.title}
                  category={prompt.category}
                  icon={prompt.icon}
                  maxWidth={800}
                  fontSize={15}
                />
                {/* 标签和来源 */}
                <div className="flex items-center justify-between mt-3 px-4">
                  <div className="flex flex-wrap gap-2">
                    {prompt.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-violet-50 text-[#6B5FA0] font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <span>📚</span>
                    {prompt.module}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">未找到匹配的 Prompt</h3>
              <p className="text-gray-500">
                尝试其他关键词或选择其他分类
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('全部')
                }}
                className="mt-4 px-6 py-2 bg-[#8B7AB8] text-white rounded-lg hover:bg-[#6B5FA0] transition-colors"
              >
                清除筛选
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 自定义 CSS 动画 */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default PromptLibrary
