// src/services/api.js
import axios from 'axios'

// instância configurada do Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
})

export default api