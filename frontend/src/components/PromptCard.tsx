/**
 * Prompt 卡片组件 - 带科技感样式
 * 使用 Pretext 精确计算高度，避免布局跳动
 */

import React, { useState, useCallback } from 'react'
import { useTextLayout } from '../hooks/useTextLayout'
import { NavIcon } from './NavIcons'

interface PromptCardProps {
  prompt: string
  title?: string
  category?: string
  icon?: 'palette' | 'book' | 'user' | 'globe' | 'image' | 'film' | 'sparkles' | 'rocket' | 'target' | 'diamond' | 'tools' | 'tutorials' | 'prompts' | 'resources' | 'workflow' | 'home' | 'search' | 'chart' | 'spiral' | 'pencil' | 'headphone' | 'clapperboard'
  maxWidth?: number
  fontSize?: number
  className?: string
}

/**
 * 科技感 Prompt 卡片组件
 */
function PromptCard({
  prompt,
  title,
  category,
  icon = 'sparkles',
  maxWidth = 600,
  fontSize = 14,
  className = ''
}: PromptCardProps) {
  const [copied, setCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  // 使用 Pretext 精确计算高度
  const { height, lineCount } = useTextLayout(prompt, fontSize, maxWidth)

  // 复制功能
  const handleCopy = useCallback(() => {
    const textarea = document.createElement('textarea')
    textarea.value = prompt
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
      const successful = document.execCommand('copy')
      if (successful) {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (err) {
      console.error('[PromptCard] 复制失败:', err)
    }
    
    document.body.removeChild(textarea)
  }, [prompt])

  return (
    <div
      className={`my-6 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'all 0.3s ease'
      }}
    >
      {/* 卡片容器 - 科技感样式 */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          minHeight: height + 80,
          background: isHovered
            ? 'linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%)'
            : 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
          border: '2px solid transparent',
          backgroundImage: isHovered
            ? `
              linear-gradient(#f0f9ff, #f3e8ff),
              linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)
            `
            : `
              linear-gradient(#f9fafb, #f3f4f6),
              linear-gradient(135deg, #3b82f6, #8b5cf6)
            `,
          backgroundOrigin: 'padding-box, border-box',
          backgroundClip: 'padding-box, border-box',
          boxShadow: isHovered
            ? '0 8px 30px rgba(59, 130, 246, 0.25)'
            : '0 4px 20px rgba(59, 130, 246, 0.1)',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* 标题栏 */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3">
          <div className="flex items-center gap-3">
            {icon && (
              <NavIcon type={icon} size={24} />
            )}
            <div>
              {title && (
                <h4 className="text-lg font-bold text-gray-800">{title}</h4>
              )}
              {category && (
                <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-full">
                  {category}
                </span>
              )}
            </div>
          </div>
          
          {/* 复制按钮 */}
          <button
            onClick={handleCopy}
            className="px-4 py-2 text-xs font-semibold rounded-lg
              bg-gradient-to-r from-blue-500 to-purple-500 text-white
              hover:from-blue-600 hover:to-purple-600
              transition-all duration-300
              flex items-center gap-1.5
              shadow-md hover:shadow-lg
              active:scale-95"
            style={{ cursor: 'pointer' }}
            aria-label={copied ? '已复制' : '复制 Prompt'}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>已复制</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>复制</span>
              </>
            )}
          </button>
        </div>

        {/* Prompt 内容 */}
        <div className="px-6 py-4">
          <p
            className="text-gray-800 leading-relaxed"
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: `${fontSize * 1.6}px`
            }}
          >
            {prompt}
          </p>
        </div>

        {/* 底部信息 */}
        <div className="px-6 pb-4 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>{lineCount} 行</span>
            <span>{prompt.length} 字符</span>
          </div>
          <div className="flex items-center gap-1">
            <NavIcon type="sparkles" size={14} />
            <span>AI 动漫 Prompt</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptCard
