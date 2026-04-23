/**
 * 文章内容组件 - 带科技感排版
 * 使用 Pretext 精确计算文本高度，支持阅读进度条
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useTextLayout } from '../hooks/useTextLayout'

interface ArticleContentProps {
  content: string
  title?: string
  maxWidth?: number
  fontSize?: number
  showProgress?: boolean
  className?: string
}

/**
 * 科技感文章内容组件
 */
function ArticleContent({
  content,
  title,
  maxWidth = 800,
  fontSize = 16,
  showProgress = true,
  className = ''
}: ArticleContentProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  
  // 使用 Pretext 精确计算高度
  const { height } = useTextLayout(content, fontSize, maxWidth)

  // 滚动进度计算
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 段落分割
  const paragraphs = useMemo(() => {
    return content.split('\n\n').filter(p => p.trim())
  }, [content])

  // 复制功能
  const handleCopy = useCallback(() => {
    const textarea = document.createElement('textarea')
    textarea.value = content
    textarea.style.position = 'fixed'
    textarea.style.left = '0'
    textarea.style.top = '0'
    textarea.style.width = '1px'
    textarea.style.height = '1px'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    textarea.setSelectionRange(0, textarea.value.length)
    
    try {
      document.execCommand('copy')
    } catch (err) {
      console.error('[ArticleContent] 复制失败:', err)
    }
    
    document.body.removeChild(textarea)
  }, [content])

  return (
    <div className={`relative ${className}`}>
      {/* 阅读进度条 */}
      {showProgress && (
        <div
          className="fixed top-0 left-0 right-0 h-1 z-50"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
            width: `${scrollProgress * 100}%`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
            transition: 'width 0.1s ease-out'
          }}
        />
      )}

      {/* 标题 */}
      {title && (
        <h2
          className="font-bold mb-6"
          style={{
            fontSize: `${fontSize * 1.5}px`,
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {title}
        </h2>
      )}

      {/* 文章内容 */}
      <div
        className="relative"
        style={{
          minHeight: height,
          transition: 'all 0.3s ease'
        }}
      >
        {/* 左侧装饰线 */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
          style={{
            background: 'linear-gradient(180deg, #3b82f6, #8b5cf6, #ec4899)',
            opacity: 0.3
          }}
        />

        {/* 段落内容 */}
        <div className="pl-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mb-4 leading-relaxed text-gray-800"
              style={{
                fontSize: `${fontSize}px`,
                lineHeight: `${fontSize * 1.6}px`
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* 底部统计 */}
      <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <span>{paragraphs.length} 段落</span>
          <span>{content.length} 字符</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-1"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>复制全文</span>
        </button>
      </div>
    </div>
  )
}

export default ArticleContent
