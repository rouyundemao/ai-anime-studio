/**
 * 代码块组件 - 带科技感样式
 * 使用 Pretext 精确计算高度，避免布局跳动
 */

import React, { useMemo, useState, useCallback, useRef } from 'react'
import { useCodeLayout } from '../hooks/useTextLayout'
import CollectionButton from './CollectionButton'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
  maxWidth?: number
  fontSize?: number
  className?: string
}

/**
 * 科技感代码块组件
 */
function CodeBlock({
  code,
  language = 'text',
  title,
  showLineNumbers = false,
  maxWidth = 600,
  fontSize = 14,
  className = ''
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  // 使用 Pretext 精确计算高度
  const { height, lineCount } = useCodeLayout(code, fontSize, maxWidth)

  // 复制功能
  const handleCopy = useCallback(() => {
    console.log('[CodeBlock] 复制按钮被点击')
    
    // 使用 textarea 方案（最兼容）
    const textarea = document.createElement('textarea')
    textarea.value = code
    textarea.style.position = 'fixed'
    textarea.style.left = '0'
    textarea.style.top = '0'
    textarea.style.width = '1px'
    textarea.style.height = '1px'
    textarea.style.opacity = '0'
    textarea.setAttribute('readonly', '')
    document.body.appendChild(textarea)
    textarea.select()
    textarea.setSelectionRange(0, textarea.value.length)
    
    try {
      const successful = document.execCommand('copy')
      console.log('[CodeBlock] execCommand copy 结果:', successful)
      
      if (successful) {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } else {
        console.warn('[CodeBlock] execCommand copy 返回 false')
      }
    } catch (err) {
      console.error('[CodeBlock] 复制失败:', err)
    }
    
    document.body.removeChild(textarea)
  }, [code])

  // 生成行号
  const lineNumbers = useMemo(() => {
    if (!showLineNumbers) return null
    return Array.from({ length: lineCount }, (_, i) => i + 1).join('\n')
  }, [showLineNumbers, lineCount])

  return (
    <div className={`my-6 ${className}`}>
      {/* 标题栏 */}
      {title && (
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold ml-2">{title}</span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            {language}
          </span>
        </div>
      )}

      {/* 代码块容器 */}
      <div className="relative rounded-xl" style={{ zIndex: 1 }}>
        {/* 操作按钮组 */}
        <div className="absolute top-3 right-3 z-50 flex items-center gap-2">
          {/* 收藏按钮 */}
          <CollectionButton
            id={`code_${title || Date.now()}`}
            title={title || '代码片段'}
            content={code}
            type={language === 'prompt' ? 'prompt' : 'template'}
          />
          
          {/* 复制按钮 */}
          <button
            ref={buttonRef}
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg
              bg-blue-500 text-white hover:bg-blue-600
              transition-all duration-300
              flex items-center gap-1.5
              shadow-md hover:shadow-lg"
            aria-label={copied ? '已复制' : '复制代码'}
            style={{ cursor: 'pointer' }}
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

        {/* 代码内容 - 带渐变边框和光效 */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            minHeight: height + 32,
            background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
            border: '2px solid transparent',
            backgroundImage: `
              linear-gradient(#f9fafb, #f3f4f6),
              linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)
            `,
            backgroundOrigin: 'padding-box, border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.2)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.1)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <div className="relative flex p-4 font-mono text-sm overflow-x-auto">
            {/* 行号 */}
            {showLineNumbers && (
              <div
                className="select-none text-gray-400 text-right pr-4 mr-4 border-r border-gray-300"
                style={{
                  lineHeight: `${fontSize * 1.5}px`,
                  minWidth: '3rem'
                }}
              >
                {lineNumbers}
              </div>
            )}

            {/* 代码 */}
            <pre
              className="flex-1 text-gray-800 whitespace-pre-wrap break-words"
              style={{
                lineHeight: `${fontSize * 1.5}px`,
                fontSize: `${fontSize}px`
              }}
            >
              <code>{code}</code>
            </pre>
          </div>

          {/* 底部状态栏 */}
          <div className="px-4 pb-3 flex items-center justify-between text-xs text-gray-500">
            <span>{lineCount} 行</span>
            <span>{language.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeBlock
