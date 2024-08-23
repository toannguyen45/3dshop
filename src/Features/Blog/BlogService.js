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

const updateBlog = async blog => {
  const response = await axiosInst.put(`blogs/${blog.id}`, {
    name: blog.data.name,
    description: blog.data.description,
  })

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

const getBlogsClient = async (currentPage, category) => {
  const response = await axiosInst.get(
    `/blogs-client?page=${currentPage}&danhmuc=${category}`
  )

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
}

export default BlogService
