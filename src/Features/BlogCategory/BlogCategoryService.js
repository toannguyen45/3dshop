import axios from 'axios'
import { base_url } from '../../Utils/baseUrl'

const createBlogCategory = async data => {
  const response = await axios.post(`${base_url}blogcategory/`, data)

  return response.data
}

const BlogCategoryService = {
  createBlogCategory,
}

export default BlogCategoryService
