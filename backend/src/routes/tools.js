import express from 'express'
import { query, get } from '../database/db.js'

const router = express.Router()

// 获取所有工具
router.get('/', async (req, res) => {
  try {
    const tools = await query('SELECT * FROM tools ORDER BY rating DESC')
    res.json(tools)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// 获取单个工具
router.get('/:id', async (req, res) => {
  try {
    const tool = await get('SELECT * FROM tools WHERE id = ?', [req.params.id])
    if (!tool) {
      return res.status(404).json({ error: '工具不存在' })
    }
    res.json(tool)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router