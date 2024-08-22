import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BlogService from './BlogService'

export const createNewBlog = createAsyncThunk(
  'blog/create-blog',
  async (data, thunkAPI) => {
    try {
      return await BlogService.createBlog(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getBlogs = createAsyncThunk(
  'blog/get-blogs',
  async (tableParams, thunkAPI) => {
    try {
      return await BlogService.getBlogs(tableParams)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getBlog = createAsyncThunk(
  'blog/get-blog',
  async (id, thunkAPI) => {
    try {
      return await BlogService.getBlog(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updateBlog = createAsyncThunk(
  'blog/update-blog',
  async (blog, thunkAPI) => {
    try {
      return await BlogService.updateBlog(blog)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteBlog = createAsyncThunk(
  'category/delete-blog',
  async (id, thunkAPI) => {
    try {
      return await BlogService.deleteBlog(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const resetState = createAction('Reset_all')

const initialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createNewBlog.pending, state => {
        state.isLoading = true
      })
      .addCase(createNewBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.createdBlog = action.payload
      })
      .addCase(createNewBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getBlogs.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.blogs = action.payload
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(resetState, () => initialState)
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.blogTitle = action.payload.data.title
        state.blogContent = action.payload.data.content
        state.blogAuthor = action.payload.data.author
        state.blogImage = action.payload.data.image
        state.blogCategory = action.payload.data.blog_category.id
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(updateBlog.pending, state => {
        state.isLoading = true
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.updatedBlog = action.payload
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(deleteBlog.pending, state => {
        state.isLoading = true
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.deletedBlog = action.payload
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})

export default blogSlice.reducer
