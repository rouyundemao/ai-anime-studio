import React, { useState } from 'react'
import { useSettings } from '../context/SettingsContext'

function Settings() {
  const { settings, updateSetting, resetSettings } = useSettings()
  const [saved, setSaved] = useState(false)

  const handleUpdate = <K extends keyof typeof settings>(key: K, value: (typeof settings)[K]) => {
    updateSetting(key, value)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    resetSettings()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
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
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-800">主题模式</h3>
                <p className="text-gray-500 text-sm">选择你喜欢的主题外观</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleUpdate('theme', 'light')}
                  className={`px-6 py-3 rounded-xl transition-all font-medium ${
                    settings.theme === 'light'
                      ? 'bg-primary-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  ☀️ 浅色
                </button>
                <button
                  onClick={() => handleUpdate('theme', 'dark')}
                  className={`px-6 py-3 rounded-xl transition-all font-medium ${
                    settings.theme === 'dark'
                      ? 'bg-gray-800 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  🌙 深色
                </button>
              </div>
            </div>

            {/* 字体大小 */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-800">字体大小</h3>
                <p className="text-gray-500 text-sm">调整内容显示的字号</p>
              </div>
              <div className="flex gap-3">
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => handleUpdate('fontSize', size)}
                    className={`px-6 py-3 rounded-xl transition-all font-medium ${
                      settings.fontSize === size
                        ? 'bg-primary-500 text-white shadow-lg scale-105'
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
                  onChange={(e) => handleUpdate('compactMode', e.target.checked)}
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

          <div className="space-y-4">
            {/* 清除设置数据 */}
            <button
              onClick={() => {
                localStorage.removeItem('anime-studio-settings')
                handleReset()
              }}
              className="w-full bg-orange-50 hover:bg-orange-100 text-orange-600 font-semibold py-3 px-6 rounded-xl transition-all border border-orange-200 flex items-center justify-center gap-2"
            >
              <span>🗑️</span>
              <span>清除设置数据</span>
            </button>

            {/* 恢复默认设置 */}
            <button
              onClick={handleReset}
              className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-3 px-6 rounded-xl transition-all border border-red-200 flex items-center justify-center gap-2"
            >
              <span>🔄</span>
              <span>恢复默认设置</span>
            </button>

            {/* 说明文字 */}
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
              <p className="font-semibold mb-2">📌 说明：</p>
              <ul className="space-y-1">
                <li>• <strong>清除设置数据</strong>：删除浏览器中保存的所有设置，恢复为初始状态</li>
                <li>• <strong>恢复默认设置</strong>：将当前设置重置为默认值（浅色主题、中等字体、关闭紧凑模式）</li>
                <li>• 设置仅保存在你的浏览器中，不会影响其他用户</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
