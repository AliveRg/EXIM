import axios from 'axios'
import router from '@/router/index'

const instance = axios.create({
  baseURL: 'http://localhost:8081'
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token')
      router.push('/admin')
    }
    return Promise.reject(error)
  }
)

export default instance
