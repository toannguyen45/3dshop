import { configureStore } from '@reduxjs/toolkit'
import blogCategoryReducer from '../Features/BlogCategory/BlogCategorySlice'
import authReducer from '../Features/Auth/AuthSlice'

export const store = configureStore({
  reducer: {
    blogCategory: blogCategoryReducer,
    auth: authReducer,
  },
})
