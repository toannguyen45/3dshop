import axiosInst from '../../Utils/axiosInstance'

const createProduct = async data => {
  const response = await axiosInst.post(`/products`, data)
  return response.data
}

const getProducts = async (tableParams = {}) => {
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

  const response = await axiosInst.get(`/products`, { params })

  return response.data
}

const getProduct = async id => {
  const response = await axiosInst.get(`/products/${id}`)

  return response.data
}

const updateProduct = async data => {
  const response = await axiosInst.put(`products/${data.id}`, {
    name: data.productData.name,
    description: data.productData.description,
  })

  return response.data
}

const deleteProduct = async id => {
  const response = await axiosInst.delete(`/products/${id}`)

  return response.data
}

const ProductService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
}

export default ProductService
