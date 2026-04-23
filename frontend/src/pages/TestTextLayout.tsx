/**
 * 文本布局测试页面
 * 用于验证 Pretext 工具函数和 Hook 是否正常工作
 */

import React, { useState } from 'react'
import { measureText, measureCode, getLineCount } from '../utils/textLayout'
import { useTextLayout, useCodeLayout } from '../hooks/useTextLayout'

function TestTextLayout() {
  const [testText, setTestText] = useState('测试文本：AI 动漫制作全流程教程，学习东方美学与西方美学的融合。')
  const [testCode, setTestCode] = useState('[动漫主体]，东方水墨画留白艺术，极简构图，意境悠远 --ar 16:9')

  // 测试工具函数
  const textResult = measureText(testText, 16, 600)
  const codeResult = measureCode(testCode, 14, 500)
  const lineCount = getLineCount(testText, 16, 600)

  // 测试 Hook
  const { height: hookHeight, lineCount: hookLineCount } = useTextLayout(testText, 16, 600)
  const { height: codeHookHeight } = useCodeLayout(testCode, 14, 500)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🧪 文本布局测试</h1>

        {/* 工具函数测试 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">📐 工具函数测试</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">测试文本:</label>
              <textarea
                value={testText}
                onChange={(e) => setTestText(e.target.value)}
                className="w-full p-3 border rounded-lg"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600 font-semibold">measureText</p>
                <p className="text-2xl font-bold text-blue-800">{textResult.height.toFixed(1)}px</p>
                <p className="text-sm text-blue-600">{textResult.lineCount} 行</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-600 font-semibold">getLineCount</p>
                <p className="text-2xl font-bold text-green-800">{lineCount}</p>
                <p className="text-sm text-green-600">行</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-600 font-semibold">Hook 结果</p>
                <p className="text-2xl font-bold text-purple-800">{hookHeight.toFixed(1)}px</p>
                <p className="text-sm text-purple-600">{hookLineCount} 行</p>
              </div>
            </div>
          </div>
        </div>

        {/* 代码块测试 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">💻 代码块测试</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">测试代码:</label>
              <textarea
                value={testCode}
                onChange={(e) => setTestCode(e.target.value)}
                className="w-full p-3 border rounded-lg font-mono"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-600 font-semibold">measureCode</p>
                <p className="text-2xl font-bold text-orange-800">{codeResult.height.toFixed(1)}px</p>
                <p className="text-sm text-orange-600">{codeResult.lineCount} 行</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="text-sm text-teal-600 font-semibold">useCodeLayout Hook</p>
                <p className="text-2xl font-bold text-teal-800">{codeHookHeight.toFixed(1)}px</p>
                <p className="text-sm text-teal-600">高度</p>
              </div>
            </div>
          </div>
        </div>

        {/* 可视化测试 */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">👁️ 可视化测试</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold mb-2">文本高度预测:</p>
              <div 
                className="bg-gray-50 border border-gray-300 rounded-lg p-4"
                style={{ minHeight: textResult.height }}
              >
                <p className="text-gray-800">{testText}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                预测高度：{textResult.height.toFixed(1)}px | 实际行数：{textResult.lineCount}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold mb-2">代码块高度预测:</p>
              <div 
                className="bg-gray-50 border border-gray-300 rounded-lg p-4 font-mono"
                style={{ minHeight: codeResult.height }}
              >
                <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words">
                  {testCode}
                </pre>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                预测高度：{codeResult.height.toFixed(1)}px | 实际行数：{codeResult.lineCount}
              </p>
            </div>
          </div>
        </div>

        {/* 测试结果 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
          <h2 className="text-2xl font-bold mb-4">✅ 测试结果</h2>
          
          <div className="space-y-2">
            <p className={`flex items-center gap-2 ${textResult.height > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <span>{textResult.height > 0 ? '✅' : '❌'}</span>
              <span>measureText 函数正常</span>
            </p>
            <p className={`flex items-center gap-2 ${lineCount > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <span>{lineCount > 0 ? '✅' : '❌'}</span>
              <span>getLineCount 函数正常</span>
            </p>
            <p className={`flex items-center gap-2 ${codeResult.height > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <span>{codeResult.height > 0 ? '✅' : '❌'}</span>
              <span>measureCode 函数正常</span>
            </p>
            <p className={`flex items-center gap-2 ${hookHeight > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <span>{hookHeight > 0 ? '✅' : '❌'}</span>
              <span>useTextLayout Hook 正常</span>
            </p>
            <p className={`flex items-center gap-2 ${codeHookHeight > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <span>{codeHookHeight > 0 ? '✅' : '❌'}</span>
              <span>useCodeLayout Hook 正常</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestTextLayout
