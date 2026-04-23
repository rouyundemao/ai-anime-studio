import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/api'

export const api = {
  // 模块相关 API
  modules: {
    getAll: async () => {
      const response = await api.get('/modules')
      return response.data
    },
    
    getById: async (id: string) => {
      const response = await api.get(`/modules/${id}`)
      return response.data
    },
    
    getProgress: async (id: string) => {
      const response = await api.get(`/modules/${id}/progress`)
      return response.data
    },
    
    updateProgress: async (id: string, completed: boolean) => {
      const response = await api.post(`/modules/${id}/progress`, { completed })
      return response.data
    }
  },

  // 教程相关 API
  tutorials: {
    getAll: async () => {
      const response = await api.get('/tutorials')
      return response.data
    },
    
    getById: async (id: string) => {
      const response = await api.get(`/tutorials/${id}`)
      return response.data
    }
  },

  // 资源相关 API
  resources: {
    getAll: async () => {
      const response = await api.get('/resources')
      return response.data
    },
    
    getByCategory: async (category: string) => {
      const response = await api.get(`/resources?category=${category}`)
      return response.data
    }
  },

  // 工具相关 API
  tools: {
    getAll: async () => {
      const response = await api.get('/tools')
      return response.data
    },
    
    getByCategory: async (category: string) => {
      const response = await api.get(`/tools?category=${category}`)
      return response.data
    }
  },

  // 基础 GET 请求
  get: async (endpoint: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}${endpoint}`)
      return response
    } catch (error) {
      console.error(`GET ${endpoint} 失败:`, error)
      throw error
    }
  },

  // 基础 POST 请求
  post: async (endpoint: string, data: any) => {
    try {
      const response = await axios.post(`${API_BASE_URL}${endpoint}`, data)
      return response
    } catch (error) {
      console.error(`POST ${endpoint} 失败:`, error)
      throw error
    }
  }
}

export default api