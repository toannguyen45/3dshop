import { configureStore } from '@reduxjs/toolkit'

import bCategoryReducer from '../features/BlogCategory/blogCategorySlice'

export const store = configureStore({
  reducer: {
    bCategory: bCategoryReducer,
  },
})
