import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CategoryService from './CategoryService'

export const createNewCat = createAsyncThunk(
  'category/create-category',
  async (catData, thunkAPI) => {
    try {
      return await CategoryService.createCategory(catData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getCategories = createAsyncThunk(
  'category/get-categories',
  async (tableParams, thunkAPI) => {
    try {
      return await CategoryService.getCategories(tableParams)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const resetState = createAction('Reset_all')

const initialState = {
  categories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createNewCat.pending, state => {
        state.isLoading = true
      })
      .addCase(createNewCat.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.createCategory = action.payload
      })
      .addCase(createNewCat.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getCategories.pending, state => {
        state.isLoading = true
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.categories = action.payload
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(resetState, () => initialState)
  },
})

export default categorySlice.reducer
