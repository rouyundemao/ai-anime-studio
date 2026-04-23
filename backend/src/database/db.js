import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dbPath = path.join(__dirname, '../../data/anime-studio.db')

// 确保数据目录存在
const dataDir = path.dirname(dbPath)
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

let dbInstance = null

// 获取数据库实例
function getDb() {
  if (!dbInstance) {
    dbInstance = new Database(dbPath)
    dbInstance.pragma('journal_mode = WAL')
  }
  return dbInstance
}

// 数据库查询
export const query = (sql, params = []) => {
  const db = getDb()
  const stmt = db.prepare(sql)
  return stmt.all(...params)
}

export const run = (sql, params = []) => {
  const db = getDb()
  const stmt = db.prepare(sql)
  const info = stmt.run(...params)
  return { lastID: info.lastInsertRowid, changes: info.changes }
}

export const get = (sql, params = []) => {
  const db = getDb()
  const stmt = db.prepare(sql)
  return stmt.get(...params)
}

export const exec = (sql) => {
  const db = getDb()
  return db.exec(sql)
}

// 初始化数据库表
export function initDatabase() {
  // 模块表
  exec(`
    CREATE TABLE IF NOT EXISTS modules (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      subtitle TEXT NOT NULL,
      path TEXT NOT NULL,
      module_order INTEGER NOT NULL,
      prerequisite TEXT,
      next_module TEXT,
      related TEXT,
      duration TEXT,
      color TEXT,
      icon TEXT,
      description TEXT,
      features TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // 模块进度表
  exec(`
    CREATE TABLE IF NOT EXISTS module_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_id TEXT NOT NULL,
      completed INTEGER DEFAULT 0,
      completed_at DATETIME,
      UNIQUE(module_id)
    )
  `)

  // 教程表
  exec(`
    CREATE TABLE IF NOT EXISTS tutorials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      tags TEXT,
      duration TEXT,
      description TEXT,
      content TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // 资源表
  exec(`
    CREATE TABLE IF NOT EXISTS resources (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      tags TEXT,
      downloads INTEGER DEFAULT 0,
      description TEXT,
      file_path TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // 工具表
  exec(`
    CREATE TABLE IF NOT EXISTS tools (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      developer TEXT,
      category TEXT NOT NULL,
      price TEXT,
      rating REAL,
      description TEXT,
      features TEXT,
      url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // 初始化示例数据
  seedModules()
  seedData()
}

// 初始化模块数据
function seedModules() {
  const moduleCount = get('SELECT COUNT(*) as count FROM modules')
  
  if (moduleCount.count === 0) {
    const modules = [
      {
        id: 'module1',
        title: 'Module 1',
        subtitle: '艺术理念',
        path: '/module-1',
        module_order: 1,
        prerequisite: null,
        next_module: 'module2',
        related: JSON.stringify(['module2', 'module3', 'module4', 'module5', 'module6', 'module7']),
        duration: '深度研习',
        color: 'from-blue-500 to-purple-500',
        icon: '🎨',
        description: '东方美学与西方美学融合，建立动漫美学体系',
        features: JSON.stringify(['美学是灵魂', '意境营造', '留白艺术'])
      },
      {
        id: 'module2',
        title: 'Module 2',
        subtitle: '故事创作艺术',
        path: '/module-2',
        module_order: 2,
        prerequisite: 'module1',
        next_module: 'module3',
        related: JSON.stringify(['module1', 'module3', 'module4']),
        duration: '深度创作',
        color: 'from-green-500 to-teal-500',
        icon: '📖',
        description: '电影级剧本结构，人物弧光设计，情感节奏把控',
        features: JSON.stringify(['故事是核心', '动人情感', '三幕式结构'])
      },
      {
        id: 'module3',
        title: 'Module 3',
        subtitle: '角色设计体系',
        path: '/module-3',
        module_order: 3,
        prerequisite: 'module1',
        next_module: 'module4',
        related: JSON.stringify(['module1', 'module2', 'module4']),
        duration: '精细打磨',
        color: 'from-pink-500 to-rose-500',
        icon: '👤',
        description: '五官美学，发型服装设计，风格统一性控制',
        features: JSON.stringify(['人物是标识', '精致美丽', '五官比例'])
      },
      {
        id: 'module4',
        title: 'Module 4',
        subtitle: '世界构建方法',
        path: '/module-4',
        module_order: 4,
        prerequisite: 'module1',
        next_module: 'module5',
        related: JSON.stringify(['module1', 'module2', 'module3']),
        duration: '宏大构建',
        color: 'from-amber-500 to-orange-500',
        icon: '🌍',
        description: '地理生态设定，文明文化创造，历史神话体系',
        features: JSON.stringify(['世界是舞台', '丰富沉浸', '文明设定'])
      },
      {
        id: 'module5',
        title: 'Module 5',
        subtitle: '电影级画面生成',
        path: '/module-5',
        module_order: 5,
        prerequisite: 'module4',
        next_module: 'module6',
        related: JSON.stringify(['module1', 'module3', 'module4']),
        duration: '极致追求',
        color: 'from-cyan-500 to-blue-500',
        icon: '🖼️',
        description: '电影级画面构建，三层光影设计，细节精度控制',
        features: JSON.stringify(['画面是呈现', '电影质感', '三层光影'])
      },
      {
        id: 'module6',
        title: 'Module 6',
        subtitle: '电影级动画生成',
        path: '/module-6',
        module_order: 6,
        prerequisite: 'module5',
        next_module: 'module7',
        related: JSON.stringify(['module1', 'module3', 'module5']),
        duration: '精细调控',
        color: 'from-violet-500 to-purple-500',
        icon: '🎬',
        description: '物理真实感动画，情感动画表现，艺术化运动表达',
        features: JSON.stringify(['动画是生命', '丝滑流畅', '物理真实感'])
      },
      {
        id: 'module7',
        title: 'Module 7',
        subtitle: '混合媒体艺术',
        path: '/module-7',
        module_order: 7,
        prerequisite: 'module6',
        next_module: 'module8',
        related: JSON.stringify(['module1', 'module2', 'module3', 'module4', 'module5', 'module6']),
        duration: '艺术探索',
        color: 'from-fuchsia-500 to-pink-500',
        icon: '✨',
        description: '水墨与数字融合，手绘与 AI 结合，电影级后期制作',
        features: JSON.stringify(['融合是创新', '艺术创新', '混合媒体'])
      },
      {
        id: 'module8',
        title: 'Module 8',
        subtitle: '完整的 AI 动漫制作流程',
        path: '/module-8',
        module_order: 8,
        prerequisite: 'module7',
        next_module: null,
        related: JSON.stringify(['module1', 'module2', 'module3', 'module4', 'module5', 'module6', 'module7']),
        duration: '全流程实战',
        color: 'from-amber-500 to-orange-500',
        icon: '📊',
        description: '完整的 AI 动漫制作全流程实战',
        features: JSON.stringify(['全流程', '实战', '综合应用'])
      }
    ]

    for (const module of modules) {
      run(`
        INSERT INTO modules (id, title, subtitle, path, module_order, prerequisite, next_module, related, duration, color, icon, description, features)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [
        module.id, module.title, module.subtitle, module.path, module.module_order,
        module.prerequisite, module.next_module, module.related, module.duration,
        module.color, module.icon, module.description, module.features
      ])
    }

    console.log('✅ 模块数据已初始化')
  }
}

// 初始化示例数据
function seedData() {
  const tutorialCount = get('SELECT COUNT(*) as count FROM tutorials')
  
  if (tutorialCount.count === 0) {
    const tutorials = [
      {
        title: 'AI短剧全流程教学',
        category: '教程',
        tags: '新手,完整流程',
        duration: '4小时',
        description: '从故事脚本到视频发布的完整流程，包含分镜设计、角色生成、动态效果等核心技能',
        content: ''
      },
      {
        title: '角色设计秘籍',
        category: '设计',
        tags: '专业,角色',
        duration: '3小时',
        description: '打造独特动漫角色的秘密武器，包含五官比例、服装设计、表情库等专业技巧',
        content: ''
      },
      {
        title: '图生视频高级技巧',
        category: '进阶',
        tags: '高级,视频',
        duration: '2小时',
        description: '掌握即梦AI、可灵AI图生视频的核心参数，让静态图片变成流畅动画',
        content: ''
      }
    ]

    for (const tutorial of tutorials) {
      run(`
        INSERT INTO tutorials (title, category, tags, duration, description, content)
        VALUES (?, ?, ?, ?, ?, ?)
      `, [tutorial.title, tutorial.category, tutorial.tags, tutorial.duration, tutorial.description, tutorial.content])
    }

    console.log('✅ 示例教程数据已初始化')
  }

  const toolCount = get('SELECT COUNT(*) as count FROM tools')
  
  if (toolCount.count === 0) {
    const tools = [
      {
        name: '即梦AI 5.0',
        developer: '字节跳动',
        category: '图像/视频',
        price: '¥30-499/月',
        rating: 4.8,
        description: '中文理解最佳，支持文生图/图生图/文生视频/图生视频',
        features: '中文优化,高质量,多模态,稳定可靠',
        url: ''
      },
      {
        name: '可灵AI 3.0',
        developer: '快手',
        category: '视频',
        price: '¥30-100/月',
        rating: 4.6,
        description: '最长2分钟视频生成，图生视频最稳定',
        features: '长视频,稳定,高效,易用',
        url: ''
      },
      {
        name: 'Runway Gen-4',
        developer: 'Runway',
        category: '专业视频',
        price: '$12-76/月',
        rating: 4.9,
        description: '专业级AI视频生成，支持运动笔刷控制',
        features: '专业,电影级,精细控制,高质量',
        url: ''
      }
    ]

    for (const tool of tools) {
      run(`
        INSERT INTO tools (name, developer, category, price, rating, description, features, url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `, [tool.name, tool.developer, tool.category, tool.price, tool.rating, tool.description, tool.features, tool.url])
    }

    console.log('✅ 示例工具数据已初始化')
  }
}