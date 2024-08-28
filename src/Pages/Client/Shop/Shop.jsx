import React, { useEffect, useState } from 'react'
import { Pagination, Select, Button } from 'antd'
import './Shop.scss'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../Features/Product/ProductSlice'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import { storage_url } from '../../../Utils/baseUrl'

const { Option } = Select

const Shop = () => {
  const dispatch = useDispatch()

  const { products, isLoading } = useSelector(state => state.product)

  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = () => {
    dispatch(getProducts(currentPage))
  }

  useEffect(() => {
    fetchData()
  }, [currentPage])

  const items = [
    {
      title: 'Thương mại',
    },
  ]
  console.log(products)
  return (
    <div className="shop">
      <MetaSeo title="Thương mại" description="Thương mại" />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <div className="content">
        <div className="category-column">
          <h2>Categories</h2>
          {/* {categories.map((category, index) => (
            <Button key={index} className="category">
              {category}
            </Button>
          ))} */}
        </div>
        <div className="products-column">
          <Select
            defaultValue="default"
            style={{ width: 120 }}
            // onChange={handleSortChange}
          >
            <Option value="default">Default</Option>
            <Option value="price-asc">Price (Low to High)</Option>
            <Option value="price-desc">Price (High to Low)</Option>
          </Select>
          {products?.data?.data?.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={`${storage_url}/${product.images[0].image}`}
                alt={product.name}
                loading="lazy"
                width={'100%'}
                height={100}
              />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </div>
          ))}
          <Pagination
            className="pagination-custom"
            current={currentPage}
            total={products?.total}
            pageSize={20}
            onChange={page => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  )
}

export default Shop
