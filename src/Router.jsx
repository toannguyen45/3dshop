import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from './Components/Admin/Layout/AdminLayout'
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard'

import ProductsAdmin from '@pages/Admin/Products/ProductList'
import ProductsAdminCreate from '@pages/Admin/Products/ProductCreate'
import ProductsAdminEdit from '@pages/Admin/Products/ProductEdit'
import ProductsAdminDetail from '@pages/Admin/Products/ProductDetail'

import CategoriesAdmin from '@pages/Admin/Categories/CateList'
import CategoriesAdminCreate from '@pages/Admin/Categories/CateCreate'

import BlogCategoriesAdminList from '@pages/Admin/BlogCategories/BlogCateList'
import BlogCategoriesAdminCreate from '@pages/Admin/BlogCategories//BlogCateCreate'

import BlogsAdminList from '@pages/Admin/Blogs/BlogList'
import BlogsAdminCreate from '@pages/Admin/Blogs/BlogCreate'

import AdminNotFoundPage from '@pages/Admin/NotFound/NotFound'

import AdminLoginPage from '@pages/Admin/Auth/Login'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import Home from '@pages/Client/Home/Home'
import NotFound from '@pages/NotFound/NotFound'
import About from '@pages/Client/About/About'
import ClientLayout from './Components/Client/LayoutClient/ClientLayout'
import Blogs from '@pages/Client/Blogs/Blogs'
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
        path: 'products/edit/:id',
        element: (
          <PrivateRoute>
            <ProductsAdminEdit />
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
        path: 'categories/detail/:id',
        element: (
          <PrivateRoute>
            <CategoriesAdminDetail />
          </PrivateRoute>
        ),
      },
      {
        path: 'blog-categories',
        element: (
          <PrivateRoute>
            <BlogCategoriesAdminList />
          </PrivateRoute>
        ),
      },
      {
        path: 'blog-categories/create',
        element: (
          <PrivateRoute>
            <BlogCategoriesAdminCreate />
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
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
