import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from './Components/Admin/Layout/AdminLayout'
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard'

import ProductsAdmin from '@pages/Admin/Products/ProductList'
import ProductsAdminCreate from '@pages/Admin/Products/ProductCreate'
import ProductsAdminEdit from '@pages/Admin/Products/ProductEdit'
import ProductsAdminDetail from '@pages/Admin/Products/ProductDetail'

import CategoriesAdmin from '@pages/Admin/Categories/CateList'
import CategoriesAdminCreate from '@pages/Admin/Categories/CateCreate'

import BlogsAdminList from '@pages/Admin/Blogs/BlogList'
import BlogsAdminCreate from '@pages/Admin/Blogs/BlogCreate'

import AdminNotFoundPage from '@pages/Admin/NotFound/NotFound'

import AdminLoginPage from '@pages/Admin/Auth/Login'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import Home from '@pages/Client/Home/Home'
import NotFoundClient from '@pages/NotFoundClient/NotFoundClient'
import About from '@pages/Client/About/About'
import ClientLayout from './Components/Client/LayoutClient/ClientLayout'
import Blogs from '@pages/Client/Blogs/Blogs'
import Blog from '@pages/Client/Blog/Blog'
import Service from '@pages/Client/Service/Service'
import Shop from '@pages/Client/Shop/Shop'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tin-tuc',
        element: <Blogs />,
      },
      {
        path: '/tin-tuc/:slug',
        element: <Blog />,
      },
      {
        path: '/dich-vu',
        element: <Service />,
      },
      {
        path: '/thuong-mai',
        element: <Shop />,
      },
      {
        path: '/ve-chung-toi',
        element: <About />,
      },
    ],
  },
  {
    path: 'admin/login',
    element: (
      <PublicRoute>
        <AdminLoginPage />
      </PublicRoute>
    ),
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      {
        path: '*',
        element: (
          <PrivateRoute>
            <AdminNotFoundPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: 'products',
        element: (
          <PrivateRoute>
            <ProductsAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: 'products/create',
        element: (
          <PrivateRoute>
            <ProductsAdminCreate />
          </PrivateRoute>
        ),
      },
      {
        path: 'products/:id',
        element: (
          <PrivateRoute>
            <ProductsAdminCreate />
          </PrivateRoute>
        ),
      },
      {
        path: 'products/detail/:id',
        element: (
          <PrivateRoute>
            <ProductsAdminDetail />
          </PrivateRoute>
        ),
      },
      {
        path: 'categories',
        element: (
          <PrivateRoute>
            <CategoriesAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: 'categories/create',
        element: (
          <PrivateRoute>
            <CategoriesAdminCreate />
          </PrivateRoute>
        ),
      },
      {
        path: 'categories/:id',
        element: (
          <PrivateRoute>
            <CategoriesAdminCreate />
          </PrivateRoute>
        ),
      },
      {
        path: 'blogs',
        element: (
          <PrivateRoute>
            <BlogsAdminList />
          </PrivateRoute>
        ),
      },
      {
        path: 'blogs/create',
        element: (
          <PrivateRoute>
            <BlogsAdminCreate />
          </PrivateRoute>
        ),
      },
      {
        path: 'blogs/:id',
        element: (
          <PrivateRoute>
            <BlogsAdminCreate />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundClient />,
  },
])

export default router
