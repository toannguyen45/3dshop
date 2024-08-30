import React, { useState } from 'react'
import './ProductDetail.scss'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'
import { formatPrice } from '../../../Utils/format'
import { InputNumber } from 'antd'

const ProductDetail = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const [image, setImage] = useState('')

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

  const data = [
    {
      id: 1,
      largeImage: 'https://via.placeholder.com/400',
      smallImg: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      largeImage: 'https://via.placeholder.com/400',
      smallImg: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      largeImage: 'https://via.placeholder.com/400',
      smallImg: 'https://via.placeholder.com/80',
    },
  ]

  const [currentImage, setCurrentImage] = useState(0)

  const goBack = () => {
    setCurrentImage(prev => (prev - 1 + data.length) % data.length)
  }

  const goForward = () => {
    setCurrentImage(prev => (prev + 1) % data.length)
  }

  const setValue = idx => {
    setCurrentImage(idx)
  }

  return (
    <div className="product">
      <MetaSeo title={'sanpham'} description={'sanpham'} keyword={'sanpham'} />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <div className="content">
        <div className="imageContainer">
          <div className="largeImageContainer">
            <img
              className="largeImage"
              src={data[currentImage].largeImage}
              alt="sneakers-photo"
            />
          </div>
          <div className="mobileImageContainer">
            <img
              onClick={goBack}
              className="goBackIcon"
              src={data[currentImage].largeImage}
              alt="go-back"
            />
            <img
              className="mobileImage"
              src={data[currentImage].largeImage}
              alt="sneakers-photo"
            />
            <img
              onClick={goForward}
              className="goForwardIcon"
              src={data[currentImage].largeImage}
              alt="go-forward"
            />
          </div>
          <div className="smallImagesContainer">
            {data.map((img, idx) => (
              <div key={img.id} className="singleImage">
                <img
                  onClick={() => setValue(idx)}
                  className="smallImage"
                  src={img.smallImg}
                  alt="product-photo"
                />
              </div>
            ))}
          </div>
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
