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

const router = createBrowserRouter([
  {
    path: 'admin/login',
    element: <AdminLoginPage />,
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      {
        path: '*',
        element: <AdminNotFoundPage />,
      },
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'products',
        element: <ProductsAdmin />,
      },
      {
        path: 'products/create',
        element: <ProductsAdminCreate />,
      },
      {
        path: 'products/edit/:id',
        element: <ProductsAdminEdit />,
      },
      {
        path: 'products/detail/:id',
        element: <ProductsAdminDetail />,
      },
      {
        path: 'categories',
        element: <CategoriesAdmin />,
      },
      {
        path: 'categories/create',
        element: <CategoriesAdminCreate />,
      },
      {
        path: 'categories/edit/:id',
        element: <CategoriesAdminEdit />,
      },
      {
        path: 'categories/detail/:id',
        element: <CategoriesAdminDetail />,
      },
      {
        path: 'blog-categories',
        element: <BlogCategoriesAdminList />,
      },
      {
        path: 'blog-categories/create',
        element: <BlogCategoriesAdminCreate />,
      },
      {
        path: 'blogs',
        element: <BlogsAdminList />,
      },
      {
        path: 'blogs/create',
        element: <BlogsAdminCreate />,
      },
    ],
  },
])

export default router
