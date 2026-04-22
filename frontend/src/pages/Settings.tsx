import React from 'react'

function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">⚙️ 系统设置</h1>
        <p className="text-xl text-gray-600">配置你的 AI 动漫工作室</p>
      </div>

      <div className="card p-8">
        <h2 className="text-2xl font-bold mb-6">偏好设置</h2>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div>
              <h3 className="font-semibold">主题模式</h3>
              <p className="text-gray-600 text-sm">选择你喜欢的主题外观</p>
            </div>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>浅色模式</option>
              <option>深色模式</option>
              <option>动漫主题</option>
            </select>
          </div>

          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div>
              <h3 className="font-semibold">内容分类</h3>
              <p className="text-gray-600 text-sm">选择默认显示的内容分类</p>
            </div>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>全部</option>
              <option>教程</option>
              <option>资源</option>
              <option>工具</option>
            </select>
          </div>

          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div>
              <h3 className="font-semibold">通知设置</h3>
              <p className="text-gray-600 text-sm">是否接收更新通知</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600 rounded-full"></div>
            </label>
          </div>

          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div>
              <h3 className="font-semibold">内容格式</h3>
              <p className="text-gray-600 text-sm">选择内容显示格式</p>
            </div>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>MDX (推荐)</option>
              <option>Markdown</option>
              <option>HTML</option>
            </select>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">数据管理</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="btn-primary">备份数据</button>
            <button className="btn-secondary">恢复数据</button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              清除缓存
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
