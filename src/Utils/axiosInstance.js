import axios from 'axios'

import { logout } from '../Features/Auth/AuthSlice'
import { base_url } from './baseUrl'

// Create an axios instance
const instance = axios.create({
  baseURL: base_url,
})

// Add a request interceptor
instance.interceptors.request.use(
  config => {
    // Get the auth token from the store
    const token = localStorage.getItem('token')

    if (token) {
      // If the token is present, add it to the request headers
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => Promise.reject(error)
)

// Add a response interceptor
instance.interceptors.response.use(
  response => response,
  error => {
    // Check if error response status is 401 - Unauthorized
    if (error.response.status === 401) {
      // If it is, logout the user
      logout()
    }

    return Promise.reject(error)
  }
)

export default instance
