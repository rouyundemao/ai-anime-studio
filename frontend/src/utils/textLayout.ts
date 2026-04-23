/**
 * 文本测量工具函数
 * 使用 Pretext 库进行精确的文本高度和行数计算
 * 
 * @module textLayout
 */

import { prepare, layout, type LayoutResult } from '@chenglou/pretext'

// 导出类型
export type { LayoutResult }

// 字体配置
const FONT_CONFIG = {
  body: '"LXGW WenKai", system-ui, sans-serif',
  code: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
  heading: '"LXGW WenKai", system-ui, sans-serif'
} as const

/**
 * 测量文本高度
 * 
 * @param text - 要测量的文本内容
 * @param fontSize - 字体大小（像素）
 * @param maxWidth - 容器最大宽度（像素）
 * @param options - 可选配置
 * @returns 布局结果（包含高度和行数）
 * 
 * @example
 * ```typescript
 * const { height, lineCount } = measureText('测试文本', 16, 600)
 * console.log(`高度：${height}px, 行数：${lineCount}`)
 * ```
 */
export function measureText(
  text: string,
  fontSize: number = 16,
  maxWidth: number = 600,
  options: {
    lineHeight?: number
    letterSpacing?: number
    wordBreak?: 'normal' | 'keep-all'
  } = {}
): LayoutResult {
  const {
    lineHeight = fontSize * 1.6,
    letterSpacing = 0,
    wordBreak = 'keep-all'
  } = options

  const prepared = prepare(text, `${fontSize}px ${FONT_CONFIG.body}`, {
    whiteSpace: 'pre-wrap',
    wordBreak,
    letterSpacing
  })

  return layout(prepared, maxWidth, lineHeight)
}

/**
 * 测量代码块高度
 * 
 * @param code - 代码内容
 * @param fontSize - 字体大小（默认 14px）
 * @param maxWidth - 容器最大宽度（默认 600px）
 * @returns 布局结果
 * 
 * @example
 * ```typescript
 * const { height } = measureCode('console.log("Hello")', 14, 500)
 * ```
 */
export function measureCode(
  code: string,
  fontSize: number = 14,
  maxWidth: number = 600
): LayoutResult {
  const prepared = prepare(code, `${fontSize}px ${FONT_CONFIG.code}`, {
    whiteSpace: 'pre-wrap'
  })

  return layout(prepared, maxWidth, fontSize * 1.5)
}

/**
 * 测量标题高度
 * 
 * @param title - 标题文本
 * @param fontSize - 字体大小（默认 24px）
 * @param maxWidth - 容器最大宽度
 * @returns 布局结果
 */
export function measureHeading(
  title: string,
  fontSize: number = 24,
  maxWidth: number = 800
): LayoutResult {
  return measureText(title, fontSize, maxWidth, {
    lineHeight: fontSize * 1.4,
    wordBreak: 'keep-all'
  })
}

/**
 * 计算文本行数
 * 
 * @param text - 文本内容
 * @param fontSize - 字体大小
 * @param maxWidth - 容器宽度
 * @returns 行数
 */
export function getLineCount(
  text: string,
  fontSize: number = 16,
  maxWidth: number = 600
): number {
  const { lineCount } = measureText(text, fontSize, maxWidth)
  return lineCount
}

/**
 * 计算文本是否溢出容器
 * 
 * @param text - 文本内容
 * @param fontSize - 字体大小
 * @param maxWidth - 容器宽度
 * @param maxHeight - 容器最大高度
 * @returns 是否溢出
 */
export function isOverflow(
  text: string,
  fontSize: number = 16,
  maxWidth: number = 600,
  maxHeight: number = 200
): boolean {
  const { height } = measureText(text, fontSize, maxWidth)
  return height > maxHeight
}

/**
 * 截断文本以适应容器
 * 
 * @param text - 文本内容
 * @param fontSize - 字体大小
 * @param maxWidth - 容器宽度
 * @param maxHeight - 容器最大高度
 * @param suffix - 截断后缀（默认 "..."）
 * @returns 截断后的文本
 */
export function truncateText(
  text: string,
  fontSize: number = 16,
  maxWidth: number = 600,
  maxHeight: number = 200,
  suffix: string = '...'
): string {
  if (!isOverflow(text, fontSize, maxWidth, maxHeight)) {
    return text
  }

  let truncated = text
  while (truncated.length > 0) {
    truncated = truncated.slice(0, -1)
    if (!isOverflow(truncated + suffix, fontSize, maxWidth, maxHeight)) {
      return truncated + suffix
    }
  }

  return suffix
}

// 导出字体配置
export { FONT_CONFIG }
