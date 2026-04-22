import express from 'express'
import { query, get, run } from '../database/db.js'

const router = express.Router()

// 获取所有教程
router.get('/', async (req, res) => {
  try {
    const tutorials = await query('SELECT * FROM tutorials ORDER BY created_at DESC')
    res.json(tutorials)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// 获取单个教程
router.get('/:id', async (req, res) => {
  try {
    const tutorial = await get('SELECT * FROM tutorials WHERE id = ?', [req.params.id])
    if (!tutorial) {
      return res.status(404).json({ error: '教程不存在' })
    }
    res.json(tutorial)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// 创建教程
router.post('/', async (req, res) => {
  try {
    const { title, category, tags, duration, description, content } = req.body
    const result = await run(`
      INSERT INTO tutorials (title, category, tags, duration, description, content)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [title, category, tags, duration, description, content])
    res.json({ id: result.lastID, message: '教程创建成功' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// 更新教程
router.put('/:id', async (req, res) => {
  try {
    const { title, category, tags, duration, description, content } = req.body
    await run(`
      UPDATE tutorials 
      SET title = ?, category = ?, tags = ?, duration = ?, description = ?, content = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [title, category, tags, duration, description, content, req.params.id])
    res.json({ message: '教程更新成功' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// 删除教程
router.delete('/:id', async (req, res) => {
  try {
    await run('DELETE FROM tutorials WHERE id = ?', [req.params.id])
    res.json({ message: '教程删除成功' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router