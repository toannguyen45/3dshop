import { configureStore } from '@reduxjs/toolkit'
import blogCategoryReducer from '../Features/BlogCategory/BlogCategorySlice'
import authReducer from '../Features/Auth/AuthSlice'
import categoryReducer from '../Features/Category/CategorySlice'

export const store = configureStore({
  reducer: {
    blogCategory: blogCategoryReducer,
    auth: authReducer,
    category: categoryReducer,
  },
})
