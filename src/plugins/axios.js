import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://serverexpress.onrender.com' // Укажите ваш базовый URL
})

// Добавляем интерсептор для добавления токена в заголовки всех запросов
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // Получаем токен из localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
