import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ProductService from './ProductService'

export const createNewProduct = createAsyncThunk(
  'product/create-product',
  async (data, thunkAPI) => {
    try {
      return await ProductService.createProduct(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getProducts = createAsyncThunk(
  'product/get-categories',
  async (tableParams, thunkAPI) => {
    try {
      return await ProductService.getProducts(tableParams)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getProduct = createAsyncThunk(
  'product/get-product',
  async (id, thunkAPI) => {
    try {
      return await ProductService.getProduct(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updateProduct = createAsyncThunk(
  'product/update-product',
  async (data, thunkAPI) => {
    try {
      return await ProductService.updateProduct(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  'product/delete-product',
  async (id, thunkAPI) => {
    try {
      return await ProductService.deleteProduct(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const resetState = createAction('Reset_all')

const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createNewProduct.pending, state => {
        state.isLoading = true
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.createdProduct = action.payload
      })
      .addCase(createNewProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getProducts.pending, state => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(resetState, () => initialState)
      .addCase(getProduct.pending, state => {
        state.isLoading = true
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.prodName = action.payload.data.name
        state.prodDesc = action.payload.data.description
        state.prodPrice = action.payload.data.price
        state.prodQuantity = action.payload.data.quantity
        state.prodImages = action.payload.data.images
        state.prodCategoryId = action.payload.data.category_id
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(updateProduct.pending, state => {
        state.isLoading = true
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.updatedProduct = action.payload
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(deleteProduct.pending, state => {
        state.isLoading = true
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.deletedProduct = action.payload
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})

export default productSlice.reducer
