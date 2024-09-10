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
  async (data, thunkAPI) => {
    try {
      return await BlogService.updateBlog(data)
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

export const getBlogClient = createAsyncThunk(
  'blog/get-blog-client',
  async (id, thunkAPI) => {
    try {
      return await BlogService.getBlogClient(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getBlogsClient = createAsyncThunk(
  'blog/get-blogs-client',
  async (currentPage, thunkAPI) => {
    try {
      return await BlogService.getBlogsClient(currentPage)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getBlogsHome = createAsyncThunk(
  'blog/get-blogs-home',
  async (_, thunkAPI) => {
    try {
      return await BlogService.getBlogsHome()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const resetBlogState = createAction('blog/resetState')

const initialState = {
  blogs: [],
  blog: null,
  createdBlog: null,
  updatedBlog: null,
  deletedBlog: null,
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
      .addCase(resetBlogState, () => initialState)
      .addCase(getBlog.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.blogTitle = action.payload.data.title
        state.blogContent = action.payload.data.content
        state.blogSummary = action.payload.data.summary
        state.blogAuthor = action.payload.data.author
        state.blogImage = action.payload.data.image
        state.blogSlug = action.payload.data.slug
        state.metaTitle = action.payload.data.meta_title
        state.metaDescription = action.payload.data.meta_description
        state.metaKeyword = action.payload.data.meta_keyword
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
      .addCase(getBlogClient.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlogClient.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.blog = action.payload.data
      })
      .addCase(getBlogClient.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getBlogsClient.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlogsClient.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.blogsClient = action.payload.data
      })
      .addCase(getBlogsClient.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getBlogsHome.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlogsHome.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.blogsHome = action.payload.data
      })
      .addCase(getBlogsHome.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})

export default blogSlice.reducer
