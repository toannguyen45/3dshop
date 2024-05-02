import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./Components/Admin/Layout/AdminLayout";
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard";
import React from "react";

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
    path: "admin",
    element: <AdminLayout />,
    children: [
      //   {
      //     path: "*",
      //     element: <AdminNotFoundPage />,
      //   },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      //   {
      //     path: "products",
      //     element: <ProductsAdmin />,
      //   },
      //   {
      //     path: "products/create",
      //     element: <ProductCreate />,
      //   },
      //   {
      //     path: "products/edit/:id",
      //     element: <ProductEdit />,
      //   },
      //   {
      //     path: "products/detail/:id",
      //     element: <ProductDetail />,
      //   },
      //   {
      //     path: "categories",
      //     element: <CategoriesAdmin />,
      //   },
      //   {
      //     path: "categories/create",
      //     element: <CategoryCreate />,
      //   },
      //   {
      //     path: "categories/edit/:id",
      //     element: <CategoryEdit />,
      //   },
      //   {
      //     path: "categories/detail/:id",
      //     element: <CategoryDetail />,
      //   },
    ],
  },
]);

export default router;
