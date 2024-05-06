import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from './Components/Admin/Layout/AdminLayout'
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard'

import React from 'react'

import ProductsAdmin from '@pages/Admin/Products/List'
import ProductsAdminCreate from '@pages/Admin/Products/Create'
import ProductsAdminEdit from '@pages/Admin/Products/Edit'
import ProductsAdminDetail from '@pages/Admin/Products/Detail'

import CategoriesAdmin from '@pages/Admin/Categories/List'
import CategoriesAdminCreate from '@pages/Admin/Categories/Create'
import CategoriesAdminEdit from '@pages/Admin/Categories/Edit'
import CategoriesAdminDetail from '@pages/Admin/Categories/Detail'

import AdminNotFoundPage from '@pages/Admin/NotFound/NotFound'

const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <ClientLayout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <ShopPage />,
  //       },
  //       {
  //         path: "*",
  //         element: <NotFoundPage />,
  //       },
  //       {
  //         path: "mens",
  //         element: <CategoryPage />,
  //       },
  //       {
  //         path: "login",
  //         element: <LoginSignup />,
  //       },
  //       {
  //         path: "cart",
  //         element: <CartPage />,
  //       },
  //     ],
  //   },
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
    ],
  },
])

export default router
