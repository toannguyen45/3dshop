import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Features/Auth/AuthSlice'
import categoryReducer from '../Features/Category/CategorySlice'
import productReducer from '../Features/Product/ProductSlice'
import blogReducer from '../Features/Blog/BlogSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    blog: blogReducer,
  },
})
