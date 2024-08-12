import axiosInst from '../../Utils/axiosInstance'

const createCategory = async data => {
  const response = await axiosInst.post(`/categories`, data)
  return response.data
}

const getCategories = async (tableParams = {}) => {
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

  const response = await axiosInst.get(`/categories`, { params })

  return response.data
}

const CategoryService = {
  createCategory,
  getCategories,
}

export default CategoryService
