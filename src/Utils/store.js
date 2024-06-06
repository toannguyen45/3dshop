import { configureStore } from '@reduxjs/toolkit'
import bCategoryReducer from "../Features/BlogCategory/blogCategorySlice";

export const store = configureStore({
  reducer: {
    bCategory: bCategoryReducer,
  },
})
