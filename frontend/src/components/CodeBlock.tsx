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

  const isPrompt = language === 'prompt'

  // 根据语言类型选择视觉风格
  const containerStyle = isPrompt ? {
    minHeight: height + 32,
    background: 'linear-gradient(135deg, #FDFAF5 0%, #FBF7F0 100%)',
    border: '1.5px solid transparent',
    backgroundImage: `
      linear-gradient(#FDFAF5, #FBF7F0),
      linear-gradient(120deg, #8B7AB8 0%, #C2649C 50%, #C23B22 100%)
    `,
    backgroundOrigin: 'padding-box, border-box',
    backgroundClip: 'padding-box, border-box',
    boxShadow: '0 2px 16px rgba(139, 122, 184, 0.10)',
    transition: 'all 0.3s ease'
  } : {
    minHeight: height + 32,
    background: 'linear-gradient(135deg, #1e2030 0%, #22243a 100%)',
    border: '1.5px solid transparent',
    backgroundImage: `
      linear-gradient(#1e2030, #22243a),
      linear-gradient(120deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%)
    `,
    backgroundOrigin: 'padding-box, border-box',
    backgroundClip: 'padding-box, border-box',
    boxShadow: '0 2px 16px rgba(79, 70, 229, 0.12)',
    transition: 'all 0.3s ease'
  }

  return (
    <div className={`my-5 ${className}`}>
      {/* 标题栏 */}
      {title && (
        <div
          className="flex items-center justify-between px-4 py-2.5 rounded-t-xl"
          style={{
            background: isPrompt
              ? 'linear-gradient(90deg, rgba(139,122,184,0.12) 0%, rgba(194,59,34,0.07) 100%)'
              : 'linear-gradient(90deg, #2d2f4a 0%, #353760 100%)',
            borderBottom: isPrompt ? '1px solid rgba(139,122,184,0.18)' : '1px solid rgba(255,255,255,0.06)'
          }}
        >
          <div className="flex items-center gap-2.5">
            {isPrompt ? (
              <span className="text-sm text-[#8B7AB8]">✦</span>
            ) : (
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
              </div>
            )}
            <span className={`text-xs font-semibold tracking-wide ${isPrompt ? 'text-[#6B5FA0]' : 'text-gray-400'}`}>
              {isPrompt ? '✦ AI Prompt' : title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
              isPrompt
                ? 'bg-[#8B7AB8]/15 text-[#8B7AB8]'
                : 'bg-white/10 text-gray-400'
            }`}>
              {language.toUpperCase()}
            </span>
          </div>
        </div>
      )}

      {/* 代码块容器 */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* 操作按钮组 */}
        <div className="absolute top-3 right-3 z-50 flex items-center gap-1.5">
          <CollectionButton
            id={`code_${title || Date.now()}`}
            title={title || '代码片段'}
            content={code}
            type={language === 'prompt' ? 'prompt' : 'template'}
          />
          <button
            ref={buttonRef}
            onClick={handleCopy}
            className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg
              transition-all duration-200
              flex items-center gap-1.5 ${
              copied
                ? 'bg-green-500 text-white'
                : isPrompt
                  ? 'bg-[#8B7AB8]/20 text-[#6B5FA0] hover:bg-[#8B7AB8]/30 border border-[#8B7AB8]/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
            aria-label={copied ? '已复制' : '复制'}
            style={{ cursor: 'pointer' }}
          >
            {copied ? (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>已复制</span>
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>复制</span>
              </>
            )}
          </button>
        </div>

        {/* 代码内容 */}
        <div
          className={title ? 'rounded-b-xl overflow-hidden' : 'rounded-xl overflow-hidden'}
          style={containerStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = isPrompt
              ? '0 4px 24px rgba(139, 122, 184, 0.18)'
              : '0 4px 24px rgba(79, 70, 229, 0.2)'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = isPrompt
              ? '0 2px 16px rgba(139, 122, 184, 0.10)'
              : '0 2px 16px rgba(79, 70, 229, 0.12)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <div className="relative flex p-4 pt-5 font-mono overflow-x-auto">
            {showLineNumbers && (
              <div
                className={`select-none text-right pr-4 mr-4 ${isPrompt ? 'text-[#8B7AB8]/40 border-r border-[#8B7AB8]/15' : 'text-gray-600 border-r border-white/10'}`}
                style={{ lineHeight: `${fontSize * 1.6}px`, minWidth: '2.5rem' }}
              >
                {lineNumbers}
              </div>
            )}

            <pre
              className={`flex-1 whitespace-pre-wrap break-words ${isPrompt ? 'text-gray-700' : 'text-gray-100'}`}
              style={{ lineHeight: `${fontSize * 1.6}px`, fontSize: `${fontSize}px` }}
            >
              <code>{code}</code>
            </pre>
          </div>

          <div className={`px-4 pb-2.5 flex items-center justify-between text-[11px] ${isPrompt ? 'text-[#8B7AB8]/60' : 'text-gray-600'}`}>
            <span>{lineCount} 行</span>
            {isPrompt && <span className="text-[#8B7AB8]/50">可直接复制使用</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeBlock
