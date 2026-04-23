/**
 * 文本布局 React Hook
 * 使用 Pretext 库进行精确的文本高度计算
 * 
 * @module useTextLayout
 */

import { useMemo, useState, useEffect, useCallback } from 'react'
import { measureText, measureCode, type LayoutResult } from '../utils/textLayout'

/**
 * 文本布局 Hook
 * 
 * @param text - 文本内容
 * @param fontSize - 字体大小（像素）
 * @param maxWidth - 容器最大宽度（像素）
 * @param options - 可选配置
 * @returns 布局结果（高度、行数）
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { height, lineCount } = useTextLayout('Hello World', 16, 600)
 *   
 *   return (
 *     <div style={{ minHeight: height }}>
 *       <p>Hello World</p>
 *     </div>
 *   )
 * }
 * ```
 */
export function useTextLayout(
  text: string,
  fontSize: number = 16,
  maxWidth: number = 600,
  options?: {
    lineHeight?: number
    letterSpacing?: number
    wordBreak?: 'normal' | 'keep-all'
  }
): LayoutResult {
  return useMemo(() => {
    if (!text) {
      return { height: 0, lineCount: 0 }
    }
    return measureText(text, fontSize, maxWidth, options)
  }, [text, fontSize, maxWidth, options?.lineHeight, options?.letterSpacing, options?.wordBreak])
}

/**
 * 代码块布局 Hook
 * 
 * @param code - 代码内容
 * @param fontSize - 字体大小（默认 14px）
 * @param maxWidth - 容器最大宽度（默认 600px）
 * @returns 布局结果
 * 
 * @example
 * ```tsx
 * function CodeBlock({ code }) {
 *   const { height } = useCodeLayout(code)
 *   
 *   return (
 *     <pre style={{ height }}>
 *       <code>{code}</code>
 *     </pre>
 *   )
 * }
 * ```
 */
export function useCodeLayout(
  code: string,
  fontSize: number = 14,
  maxWidth: number = 600
): LayoutResult {
  return useMemo(() => {
    if (!code) {
      return { height: 0, lineCount: 0 }
    }
    return measureCode(code, fontSize, maxWidth)
  }, [code, fontSize, maxWidth])
}

/**
 * 响应式文本布局 Hook
 * 自动根据窗口宽度调整 maxWidth
 * 
 * @param text - 文本内容
 * @param fontSize - 字体大小
 * @param baseMaxWidth - 基础最大宽度
 * @returns 布局结果
 * 
 * @example
 * ```tsx
 * function ResponsiveText({ text }) {
 *   const { height } = useResponsiveTextLayout(text, 16, 800)
 *   
 *   return <div style={{ minHeight: height }}>{text}</div>
 * }
 * ```
 */
export function useResponsiveTextLayout(
  text: string,
  fontSize: number = 16,
  baseMaxWidth: number = 800
): LayoutResult {
  const [containerWidth, setContainerWidth] = useState(baseMaxWidth)

  useEffect(() => {
    const updateWidth = () => {
      const width = Math.min(window.innerWidth - 32, baseMaxWidth)
      setContainerWidth(width)
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [baseMaxWidth])

  return useTextLayout(text, fontSize, containerWidth)
}

/**
 * 防抖文本布局 Hook
 * 避免频繁重新计算，提升性能
 * 
 * @param text - 文本内容
 * @param fontSize - 字体大小
 * @param maxWidth - 容器最大宽度
 * @param delay - 防抖延迟（毫秒）
 * @returns 布局结果
 */
export function useDebouncedTextLayout(
  text: string,
  fontSize: number = 16,
  maxWidth: number = 600,
  delay: number = 150
): LayoutResult {
  const [debouncedText, setDebouncedText] = useState(text)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay])

  return useTextLayout(debouncedText, fontSize, maxWidth)
}

/**
 * 虚拟滚动 Hook
 * 只渲染可见区域的文本行
 * 
 * @param text - 文本内容
 * @param fontSize - 字体大小
 * @param maxWidth - 容器宽度
 * @param viewportHeight - 视口高度
 * @returns 可见行数据和滚动配置
 */
export function useVirtualScroll(
  text: string,
  fontSize: number = 16,
  maxWidth: number = 600,
  viewportHeight: number = 600
) {
  const layout = useTextLayout(text, fontSize, maxWidth)
  const [scrollTop, setScrollTop] = useState(0)

  const lineHeight = fontSize * 1.6
  const visibleLines = Math.ceil(viewportHeight / lineHeight)
  const startLine = Math.floor(scrollTop / lineHeight)
  const endLine = Math.min(startLine + visibleLines, layout.lineCount)

  const scrollTo = useCallback((line: number) => {
    setScrollTop(line * lineHeight)
  }, [lineHeight])

  return {
    ...layout,
    scrollTop,
    setScrollTop,
    visibleLines,
    startLine,
    endLine,
    scrollTo
  }
}
