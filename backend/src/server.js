import express from 'express'
import cors from 'cors'
import { initDatabase } from './database/db.js'
import tutorialsRouter from './routes/tutorials.js'
import resourcesRouter from './routes/resources.js'
import toolsRouter from './routes/tools.js'
import modulesRouter from './routes/modules.js'

const app = express()
const PORT = 4000

// 中间件
app.use(cors())
app.use(express.json())

// 初始化数据库
initDatabase()

// 路由
app.use('/api/tutorials', tutorialsRouter)
app.use('/api/resources', resourcesRouter)
app.use('/api/tools', toolsRouter)
app.use('/api/modules', modulesRouter)

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 AI 动漫工作室后端服务运行在 http://localhost:${PORT}`)
  console.log(`📚 API 文档: http://localhost:${PORT}/api/health`)
})