import axios from 'axios'
import { config } from '../../Utils/axios-config'
import { base_url } from '../../Utils/baseUrl'

const login = async user => {
  const response = await axios.post(`${base_url}user/admin-login`, user)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const authService = {
  login,
}

export default authService
