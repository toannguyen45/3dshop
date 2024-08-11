import { configureStore } from '@reduxjs/toolkit'
import blogCategoryReducer from "../Features/BlogCategory/BlogCategorySlice";

export const store = configureStore({
  reducer: {
    bCategory: blogCategoryReducer,
  },
})
