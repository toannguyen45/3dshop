import React, { useState } from 'react'
import './ProductDetail.scss'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'
import { formatPrice } from '../../../Utils/format'
import { InputNumber } from 'antd'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProductDetail = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()

  const items = [
    {
      href: '/thuong-mai',
      title: 'Sản phẩm',
    },
    {
      title: 'Máy in 3D neptune 2',
    },
  ]

  const product = {
    title: 'Máy in 3D neptune 2',
    price: 7500000,
    description: 'Máy in 3D neptune 2',
    category: 'Máy in',
  }

  const smallImages = [
    '/images/client/product/MAY-QUET-3D-CR-SCAN-LIZARD-1.webp',
    '/images/client/product/MAY-QUET-3D-CR-SCAN-LIZARD-2.webp',
    '/images/client/product/MAY-QUET-3D-CR-SCAN-LIZARD-3.webp',
    '/images/client/product/MAY-QUET-3D-CR-SCAN-LIZARD-4.webp'
  ];

  return (
    <div className="product">
      <MetaSeo title={'sanpham'} description={'sanpham'} keyword={'sanpham'} />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <div className="content">
        <div className="image-container">
          <Carousel
            autoPlay
            infiniteLoop
            stopOnHover
            showThumbs={true}
            emulateTouch={true}
            dynamicHeight
          >
            {smallImages.map((src, index) => (
              <div key={index} className='small-img-child' onClick={() => handleThumbnailClick(src)}>
                <img src={src} className='small-img-item' alt={`small-img-${index}`} width={'100%'} height={'100%'} loading='lazy'/>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-summary">
            <span className="summary-label">Tình trạng: </span>
          </p>
          <p className="product-price">
            <span className="price-label">Giá:</span>
            <span className="price-value">{formatPrice(product.price)}</span>
            VNĐ
          </p>
          <hr className="divider" />
          <div className="quantity-selector">
            <span className="quantity-label">Số lượng: </span>
            <InputNumber min={1} defaultValue={1} />
          </div>
          <button className="add-to-cart">Thêm vào giỏ hàng</button>
          <p className="product-category">
            <span className="category-label">Danh mục: </span>
            {product.category}
          </p>
        </div>
      </div>
      <div className="description"></div>
    </div>
  )
}

export default ProductDetail
