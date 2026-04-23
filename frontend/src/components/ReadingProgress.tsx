/**
 * 阅读进度条组件 - 科技感样式
 * 显示页面滚动进度
 */

import React, { useState, useEffect } from 'react'

interface ReadingProgressProps {
  height?: number
  className?: string
}

/**
 * 科技感阅读进度条
 */
function ReadingProgress({
  height = 3,
  className = ''
}: ReadingProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      style={{ height: `${height}px` }}
    >
      {/* 背景轨道 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0, 0, 0, 0.1)'
        }}
      />
      
      {/* 进度条 */}
      <div
        className="h-full"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
          transition: 'width 0.1s ease-out'
        }}
      />
    </div>
  )
}

export default ReadingProgress
