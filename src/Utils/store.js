import { configureStore } from '@reduxjs/toolkit'

import bCategoryReducer from '../Features/BlogCategory/BlogCategorySlice'

export const store = configureStore({
  reducer: {
    bCategory: bCategoryReducer,
  },
})
