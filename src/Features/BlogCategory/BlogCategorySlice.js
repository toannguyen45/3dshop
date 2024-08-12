import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BlogCategoryService from './BlogCategoryService'

export const createNewblogCat = createAsyncThunk(
  'blogCategory/create-category',
  async (catData, thunkAPI) => {
    try {
      return await BlogCategoryService.createBlogCategory(catData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getBlogCategories = createAsyncThunk(
  'blogCategory/get-categories',
  async (tableParams, thunkAPI) => {
    try {
      return await BlogCategoryService.getBlogCategories(tableParams)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const resetState = createAction('Reset_all')

const initialState = {
  blogCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

export const blogCategorySlice = createSlice({
  name: 'blogCategories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createNewblogCat.pending, state => {
        state.isLoading = true
      })
      .addCase(createNewblogCat.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.createBlogCategory = action.payload
      })
      .addCase(createNewblogCat.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getBlogCategories.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlogCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.blogCategories = action.payload
      })
      .addCase(getBlogCategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(resetState, () => initialState)
  },
})

export default blogCategorySlice.reducer
