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

export const getCategory = createAsyncThunk(
  'category/get-category',
  async (id, thunkAPI) => {
    try {
      return await CategoryService.getCategory(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updateCategory = createAsyncThunk(
  'category/update-category',
  async (category, thunkAPI) => {
    try {
      return await CategoryService.updateCategory(category)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteCategory = createAsyncThunk(
  'category/delete-category',
  async (id, thunkAPI) => {
    try {
      return await CategoryService.deleteCategory(id)
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
        state.createdCategory = action.payload
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
      .addCase(getCategory.pending, state => {
        state.isLoading = true
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.cateName = action.payload.data.name
        state.cateDesc = action.payload.data.description
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(updateCategory.pending, state => {
        state.isLoading = true
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.updatedCategory = action.payload
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(deleteCategory.pending, state => {
        state.isLoading = true
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.deletedBrand = action.payload
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})

export default categorySlice.reducer