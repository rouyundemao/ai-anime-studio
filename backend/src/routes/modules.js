import express from 'express'
import { query, run, get } from '../database/db.js'

const router = express.Router()

// 获取所有模块
router.get('/', (req, res) => {
  try {
    const modules = query('SELECT * FROM modules ORDER BY module_order ASC')
    
    // 解析 JSON 字段
    const parsedModules = modules.map(m => ({
      ...m,
      related: m.related ? JSON.parse(m.related) : [],
      features: m.features ? JSON.parse(m.features) : []
    }))
    
    res.json({
      success: true,
      data: parsedModules,
      count: parsedModules.length
    })
  } catch (error) {
    console.error('获取模块列表失败:', error)
    res.status(500).json({
      success: false,
      error: '获取模块列表失败',
      message: error.message
    })
  }
})

// 获取单个模块
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params
    const module = get('SELECT * FROM modules WHERE id = ?', [id])
    
    if (!module) {
      return res.status(404).json({
        success: false,
        error: '模块不存在'
      })
    }
    
    // 解析 JSON 字段
    const parsedModule = {
      ...module,
      related: module.related ? JSON.parse(module.related) : [],
      features: module.features ? JSON.parse(module.features) : []
    }
    
    res.json({
      success: true,
      data: parsedModule
    })
  } catch (error) {
    console.error('获取模块详情失败:', error)
    res.status(500).json({
      success: false,
      error: '获取模块详情失败',
      message: error.message
    })
  }
})

// 获取模块进度
router.get('/:id/progress', (req, res) => {
  try {
    const { id } = req.params
    const progress = get('SELECT * FROM module_progress WHERE module_id = ?', [id])
    
    res.json({
      success: true,
      data: progress || { module_id: id, completed: false, completed_at: null }
    })
  } catch (error) {
    console.error('获取模块进度失败:', error)
    res.status(500).json({
      success: false,
      error: '获取模块进度失败',
      message: error.message
    })
  }
})

// 更新模块进度
router.post('/:id/progress', (req, res) => {
  try {
    const { id } = req.params
    const { completed } = req.body
    
    if (completed) {
      run(`
        INSERT OR REPLACE INTO module_progress (module_id, completed, completed_at)
        VALUES (?, 1, CURRENT_TIMESTAMP)
      `, [id])
    } else {
      run('DELETE FROM module_progress WHERE module_id = ?', [id])
    }
    
    res.json({
      success: true,
      data: { module_id: id, completed }
    })
  } catch (error) {
    console.error('更新模块进度失败:', error)
    res.status(500).json({
      success: false,
      error: '更新模块进度失败',
      message: error.message
    })
  }
})

export default router