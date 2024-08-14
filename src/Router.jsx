import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from './Components/Admin/Layout/AdminLayout'
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard'

import ProductsAdmin from '@pages/Admin/Products/List'
import ProductsAdminCreate from '@pages/Admin/Products/Create'
import ProductsAdminEdit from '@pages/Admin/Products/Edit'
import ProductsAdminDetail from '@pages/Admin/Products/Detail'

import CategoriesAdmin from '@pages/Admin/Categories/List'
import CategoriesAdminCreate from '@pages/Admin/Categories/Create'
import CategoriesAdminEdit from '@pages/Admin/Categories/Edit'
import CategoriesAdminDetail from '@pages/Admin/Categories/Detail'

import BlogCategoriesAdminList from '@pages/Admin/BlogCategories/List'
import BlogCategoriesAdminCreate from '@pages/Admin/BlogCategories/Create'

import BlogsAdminList from '@pages/Admin/Blogs/List'
import BlogsAdminCreate from '@pages/Admin/Blogs/Create'

import AdminNotFoundPage from '@pages/Admin/NotFound/NotFound'

import AdminLoginPage from '@pages/Admin/Auth/Login'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import Home from '@pages/Client/Home/Home'
import NotFound from '@pages/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
