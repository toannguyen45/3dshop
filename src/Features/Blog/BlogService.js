import axiosInst from '../../Utils/axiosInstance'

const createBlog = async data => {
  const response = await axiosInst.post(`/blogs`, data)

  return response.data
}

const getBlogs = async (tableParams = {}) => {
  const { pagination, sortOrder, sortField } = tableParams

  // Prepare the parameters for the API
  const params = {
    page: pagination?.current,
    per_page: pagination?.pageSize,
  }

  // Add sorting parameters if they are available
  if (sortOrder && sortField) {
    params.sort = [`${sortField}:${sortOrder === 'ascend' ? 'asc' : 'desc'}`]
  }

  const response = await axiosInst.get(`/blogs`, { params })

  return response.data
}

const getBlog = async id => {
  const response = await axiosInst.get(`/blogs/${id}`)

  return response.data
}

export const updateBlog = async ({ id, data }) => {
  const response = await axiosInst.post(`/blogs/${id}`, data)

  return response.data
}

const deleteBlog = async id => {
  const response = await axiosInst.delete(`/blogs/${id}`)

  return response.data
}

const getBlogClient = async slug => {
  const response = await axiosInst.get(`/blogs-client/${slug}`)

  return response.data
}

const getBlogsClient = async currentPage => {
  const response = await axiosInst.get(`/blogs-client?page=${currentPage}`)

  return response.data
}

const getBlogsHome = async () => {
  const response = await axiosInst.get('/blogs-home')

  return response.data
}

const BlogService = {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
  getBlog,
  getBlogClient,
  getBlogsClient,
  getBlogsHome,
}

export default BlogService
