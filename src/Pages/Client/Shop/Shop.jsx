import React, { useEffect, useState } from 'react'
import { Pagination, Select, Button } from 'antd'
import './Shop.scss'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../Features/Product/ProductSlice'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import { storage_url } from '../../../Utils/baseUrl'
import { getCategories } from '../../../Features/Category/CategorySlice'
import { Link } from 'react-router-dom'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { formatPrice } from '../../../Utils/format'
import SkeletonProd from './SkeletonProd'

const { Option } = Select

const Shop = () => {
  const dispatch = useDispatch()
  const [viewMode, setViewMode] = useState('grid')

  const { products, isLoading } = useSelector(state => state.product)
  const { categories, isLoading: isLoadingCate } = useSelector(
    state => state.category
  )

  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = () => {
    dispatch(getProducts(currentPage))
  }

  useEffect(() => {
    fetchData()
    dispatch(getCategories())
  }, [currentPage])

  const items = [
    {
      title: 'Thương mại',
    },
  ]

  return (
    <div className="shop">
      <MetaSeo title="Thương mại" description="Thương mại" />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <div className="content">
        <div className="category-column">
          <h2>Danh mục</h2>
          <hr className="divider" />
          <ul className="cate-list">
            {categories?.data?.data.map(category => (
              <li key={category.id}>
                <label>
                  <input type="checkbox" value={category.name} />
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="products-column">
          <img
            src="/images/client/poster-shop.jpg"
            width={'100%'}
            alt="poster-shop"
            className="poster-shop"
          />
          <div className="product-controls">
            <div className="product-view-options">
              <button
                onClick={() => setViewMode('grid')}
                className={`grid-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              >
                <AppstoreOutlined className="grid-icon icon-order" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`list-view-grid ${viewMode === 'list' ? 'active' : ''}`}
              >
                <UnorderedListOutlined className="list-icon icon-order" />
              </button>
              <p>Showing 1 - 12 of 32 results</p>
            </div>
            <Select defaultValue="default" style={{ width: 120 }}>
              <Option value="default">Default</Option>
              <Option value="price-asc">Price (Low to High)</Option>
              <Option value="price-desc">Price (High to Low)</Option>
            </Select>
          </div>

          {isLoading ? (
            <SkeletonProd amount={2} />
          ) : viewMode === 'grid' ? (
            <div className="product-grid">
              {products?.data?.data?.map((product, index) => (
                <div key={index} className="product-card">
                  <Link to={`/products/${product.id}`} className="product-link">
                    <img
                      src={`${storage_url}/${product.images[0].image}`}
                      alt={product.name}
                      loading="lazy"
                      width={'100%'}
                      height={100}
                      className="product-image"
                    />
                    <div className="product-title">
                      <h2>{product.name}</h2>
                    </div>
                    <div className="product-bottom">
                      <p className="product-price">
                        {formatPrice(product.price)} đ
                      </p>
                      <button className="add-to-cart">Thêm vào giỏ hàng</button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="product-list">
              {products?.data?.data?.map((product, index) => (
                <div key={index} className="product-card">
                  <img
                    src={`${storage_url}/${product.images[0].image}`}
                    alt={product.name}
                    loading="lazy"
                    width={'30%'}
                    height={100}
                    className="product-image"
                  />
                  <div className="product-info">
                    <Link to={`/products/${product.id}`}>
                      <h2 className="product-title">{product.name}</h2>
                      <p className="product-price">
                        {formatPrice(product.price)} đ
                      </p>
                    </Link>
                    <button className="add-to-cart">Thêm vào giỏ hàng</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pagination-bottom">
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
    </div>
  )
}

export default Shop
