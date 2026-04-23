/**
 * 代码块组件 - 带科技感样式
 * 使用 Pretext 精确计算高度，避免布局跳动
 */

import React, { useMemo, useState, useCallback } from 'react'
import { useCodeLayout } from '../hooks/useTextLayout'

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
 * 
 * 特性:
 * - 精确高度计算，零布局跳动
 * - 渐变边框和光效
 * - 一键复制功能
 * - 可选行号显示
 * 
 * @example
 * ```tsx
 * <CodeBlock 
 *   code="const hello = 'world'"
 *   language="javascript"
 *   title="示例代码"
 * />
 * ```
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
  
  // 使用 Pretext 精确计算高度
  const { height, lineCount } = useCodeLayout(code, fontSize, maxWidth)

  // 复制功能 - 带降级方案
  const handleCopy = useCallback(async () => {
    try {
      // 方法 1: 使用 Clipboard API（需要 HTTPS）
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code)
      } else {
        // 方法 2: 降级方案 - 使用 textarea + execCommand
        const textarea = document.createElement('textarea')
        textarea.value = code
        textarea.style.position = 'fixed'
        textarea.style.left = '-9999px'
        textarea.style.top = '-9999px'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        
        try {
          document.execCommand('copy')
        } catch (err) {
          console.error('复制失败:', err)
        }
        
        document.body.removeChild(textarea)
      }
      
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
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
            <span className="text-sm text-gray-600 font-semibold ml-2">{title}</span>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {language}
          </span>
        </div>
      )}

      {/* 代码块容器 - 科技感样式 */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          minHeight: height + 32, // +32px 内边距
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
        {/* 复制按钮 */}
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 px-3 py-1.5 text-xs font-semibold rounded-lg
            bg-gradient-to-r from-blue-500 to-purple-500 text-white
            hover:from-blue-600 hover:to-purple-600
            transition-all duration-300
            flex items-center gap-1.5
            shadow-md hover:shadow-lg"
          aria-label={copied ? '已复制' : '复制代码'}
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

        {/* 代码内容区 */}
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
  )
}

export default CodeBlock
