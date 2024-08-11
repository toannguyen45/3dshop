import axios from 'axios'
import { config } from '../../Utils/axios-config'
import { base_url } from '../../Utils/baseUrl'

const login = async user => {
  const response = await axios.post(`${base_url}/admin/login`, user)
  return response.data
}

const AuthService = {
  login,
}

export default AuthService
