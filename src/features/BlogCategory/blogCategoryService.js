import axiosInst from '../../Utils/axiosInstance'

const createBlogCategory = async data => {
  const response = await axiosInst.post(`/blog-categories`, data)

  return response.data
}

const getBlogCategories = async (tableParams = {}) => {
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

  const response = await axiosInst.get(`/blog-categories`, { params })

  return response.data
}

const BlogCategoryService = {
  createBlogCategory,
  getBlogCategories,
}

export default BlogCategoryService
