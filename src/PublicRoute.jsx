import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const navigate = useNavigate()
  const isAuthenticated = !!localStorage.getItem('token')

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login')
    }
  }, [isAuthenticated, navigate])

  return isAuthenticated ? <Navigate to="/admin/dashboard" /> : children
}

export default PublicRoute
