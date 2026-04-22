import sqlite3 from 'sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dbPath = path.join(__dirname, '../../data/anime-studio.db')

// Promise 包装的数据库查询
export const query = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) reject(err)
    })
    
    db.all(sql, params, (err, rows) => {
      if (err) reject(err)
      else resolve(rows)
      db.close()
    })
  })
}

export const run = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) reject(err)
    })
    
    db.run(sql, params, function(err) {
      if (err) reject(err)
      else resolve({ lastID: this.lastID, changes: this.changes })
      db.close()
    })
  })
}

export const get = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) reject(err)
    })
    
    db.get(sql, params, (err, row) => {
      if (err) reject(err)
      else resolve(row)
      db.close()
    })
  })
}

export const exec = (sql) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) reject(err)
    })
    
    db.exec(sql, (err) => {
      if (err) reject(err)
      else resolve()
      db.close()
    })
  })
}

// 初始化数据库表
export async function initDatabase() {
  // 确保数据目录存在
  const fs = await import('fs')
  const dataDir = path.join(__dirname, '../../data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  // 教程表
  await exec(`
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
  await exec(`
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
  await exec(`
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
  await seedData()
}

// 初始化示例数据
async function seedData() {
  const tutorialCount = await get('SELECT COUNT(*) as count FROM tutorials')
  
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
      await run(`
        INSERT INTO tutorials (title, category, tags, duration, description, content)
        VALUES (?, ?, ?, ?, ?, ?)
      `, [tutorial.title, tutorial.category, tutorial.tags, tutorial.duration, tutorial.description, tutorial.content])
    }

    console.log('✅ 示例教程数据已初始化')
  }

  const toolCount = await get('SELECT COUNT(*) as count FROM tools')
  
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
      await run(`
        INSERT INTO tools (name, developer, category, price, rating, description, features, url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `, [tool.name, tool.developer, tool.category, tool.price, tool.rating, tool.description, tool.features, tool.url])
    }

    console.log('✅ 示例工具数据已初始化')
  }
}