import React, { useState } from 'react'
import { useSettings } from '../context/SettingsContext'

function Settings() {
  const { settings, updateSetting, resetSettings, exportSettings, importSettings } = useSettings()
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  // Wrap updateSetting to show save indicator
  const update = <K extends keyof typeof settings>(key: K, value: (typeof settings)[K]) => {
    updateSetting(key, value)
    handleSave()
  }

  const handleReset = () => {
    resetSettings()
    handleSave()
  }

  const handleExport = () => {
    exportSettings()
  }

  const handleImport = () => {
    importSettings()
    handleSave()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            ⚙️ 系统设置
          </h1>
          <p className="text-gray-600 text-lg">个性化你的 AI 动漫工作室</p>
        </div>

        {/* 保存提示 */}
        {saved && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center animate-fade-in">
            <span className="text-green-700 font-semibold">✅ 设置已保存</span>
          </div>
        )}

        {/* 外观设置 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>🎨</span> 外观设置
          </h2>
          
          <div className="space-y-6">
            {/* 主题模式 */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-800">主题模式</h3>
                <p className="text-gray-500 text-sm">选择你喜欢的主题外观</p>
              </div>
              <div className="flex gap-2">
                {(['light', 'dark', 'anime'] as const).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => update('theme', theme)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      settings.theme === theme
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {theme === 'light' ? '☀️ 浅色' : theme === 'dark' ? '🌙 深色' : '🎭 动漫'}
                  </button>
                ))}
              </div>
            </div>

            {/* 字体大小 */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-800">字体大小</h3>
                <p className="text-gray-500 text-sm">调整内容显示的字号</p>
              </div>
              <div className="flex gap-2">
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => update('fontSize', size)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      settings.fontSize === size
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {size === 'small' ? '小' : size === 'medium' ? '中' : '大'}
                  </button>
                ))}
              </div>
            </div>

            {/* 紧凑模式 */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">紧凑模式</h3>
                <p className="text-gray-500 text-sm">减少间距，一屏显示更多内容</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.compactMode}
                  onChange={(e) => update('compactMode', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* 内容设置 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>📚</span> 内容设置
          </h2>
          
          <div className="space-y-6">
            {/* 内容分类 */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-800">默认内容分类</h3>
                <p className="text-gray-500 text-sm">首页默认显示的内容类型</p>
              </div>
              <select
                value={settings.contentFilter}
                onChange={(e) => update('contentFilter', e.target.value as typeof settings.contentFilter)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">全部</option>
                <option value="tutorials">教程</option>
                <option value="resources">资源</option>
                <option value="tools">工具</option>
              </select>
            </div>

            {/* 内容格式 */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-800">内容格式</h3>
                <p className="text-gray-500 text-sm">教程内容的渲染格式</p>
              </div>
              <select
                value={settings.contentFormat}
                onChange={(e) => update('contentFormat', e.target.value as typeof settings.contentFormat)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="mdx">MDX（推荐）</option>
                <option value="markdown">Markdown</option>
                <option value="html">HTML</option>
              </select>
            </div>

            {/* 语言 */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">语言</h3>
                <p className="text-gray-500 text-sm">界面显示语言</p>
              </div>
              <select
                value={settings.language}
                onChange={(e) => update('language', e.target.value as typeof settings.language)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="zh-CN">简体中文</option>
                <option value="zh-TW">繁體中文</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>

        {/* 功能设置 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>⚡</span> 功能设置
          </h2>
          
          <div className="space-y-6">
            {/* 通知设置 */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-800">更新通知</h3>
                <p className="text-gray-500 text-sm">有新教程或资源时通知你</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.notifications}
                  onChange={(e) => update('notifications', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            {/* 自动保存 */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">自动保存进度</h3>
                <p className="text-gray-500 text-sm">自动记录学习进度</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={settings.autoSave}
                  onChange={(e) => update('autoSave', e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* 数据管理 */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>💾</span> 数据管理
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button
              onClick={handleExport}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              📤 导出设置
            </button>
            <button
              onClick={handleImport}
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              📥 导入设置
            </button>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <button
              onClick={handleReset}
              className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-3 px-6 rounded-xl transition-all border border-red-200"
            >
              🗑️ 恢复默认设置
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
