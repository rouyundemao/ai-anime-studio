import express from 'express'
import { query, run } from '../database/db.js'

const router = express.Router()

// 获取所有资源
router.get('/', async (req, res) => {
  try {
    const resources = await query('SELECT * FROM resources ORDER BY downloads DESC')
    res.json(resources)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// 增加下载次数
router.post('/:id/download', async (req, res) => {
  try {
    await run('UPDATE resources SET downloads = downloads + 1 WHERE id = ?', [req.params.id])
    res.json({ message: '下载次数更新成功' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router