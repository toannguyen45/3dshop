import React, { useState } from 'react'
import { Pagination, Select, Button } from 'antd'
import './Shop.scss'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'

const { Option } = Select

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1',
      price: 100,
      image: 'https://example.com/product-1.jpg',
      category: 'Category 1',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2',
      price: 200,
      image: 'https://example.com/product-2.jpg',
      category: 'Category 2',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is product 3',
      price: 300,
      image: 'https://example.com/product-3.jpg',
      category: 'Category 3',
    },
    // Thêm nhiều sản phẩm khác tại đây
  ]

  const categories = ['Category 1', 'Category 2', 'Category 3']

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(2)
  const [sort, setSort] = useState('default')

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const handleSortChange = value => {
    setSort(value)
    // Thêm logic để sắp xếp sản phẩm tại đây
  }

  return (
    <div className="shop">
      <MetaSeo title="Thương mại" description="Thương mại" />

      <div className="content">
        <div className="category-column">
          <h2>Categories</h2>
          {categories.map((category, index) => (
            <Button key={index} className="category">
              {category}
            </Button>
          ))}
        </div>
        <div className="products-column">
          <Select
            defaultValue="default"
            style={{ width: 120 }}
            onChange={handleSortChange}
          >
            <Option value="default">Default</Option>
            <Option value="price-asc">Price (Low to High)</Option>
            <Option value="price-desc">Price (High to Low)</Option>
          </Select>
          {currentProducts.map((product, index) => (
            <div key={index} className="product">
              <img src={product.image} alt={product.name} loading="lazy" />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
          <Pagination
            current={currentPage}
            total={products.length}
            pageSize={productsPerPage}
            onChange={page => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  )
}

export default Shop
