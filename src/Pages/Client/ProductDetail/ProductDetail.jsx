import React, { useEffect, useState } from 'react'
import './ProductDetail.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'
import { formatPrice } from '../../../Utils/format'
import { InputNumber } from 'antd'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { getProduct } from '../../../Features/Product/ProductSlice'
import { storage_url } from '../../../Utils/baseUrl'
import { addToCart } from '../../../Features/Cart/CartSlice'
import SkeletonProductDetail from './SkeletonProductDetail'

const ProductDetail = () => {
  // const { slug } = useParams()
  const dispatch = useDispatch()
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getProduct(id))
    }
  }, [id])

  const {
    isSuccess,
    isError,
    isLoading,
    prodName,
    prodDesc,
    prodPrice,
    prodQuantity,
    prodImages,
    prodCate,
  } = useSelector(state => state.product)

  const handleAddToCart = (data) => {
    console.log("Product Data:", data);    // Log sản phẩm
    console.log("Quantity:", quantity);    // Log số lượng
    dispatch(addToCart({ item: data, quantity: Number(quantity) }))
  }

  const items = [
    {
      href: '/thuong-mai',
      title: 'Sản phẩm',
    },
    {
      title: prodName,
    },
  ]

  return (
    <div className="product">
      <MetaSeo title={prodName} description={'sanpham'} keyword={'sanpham'} />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>
      <div className="content">
        {isLoading ? <SkeletonProductDetail /> : (
          <>
            <div className="image-container">
              <Carousel
                autoPlay
                infiniteLoop
                stopOnHover
                showThumbs={true}
                emulateTouch={true}
                dynamicHeight
              >
                {prodImages?.map((item, index) => {
                  return (
                    <div key={index} className='small-img-child'>
                      <img
                        src={`${storage_url}/${item?.image}`}
                        className='small-img-item' alt={`small-img-${index}`} width={'100%'} height={'100%'} loading='lazy' />
                    </div>
                  )
                })}
              </Carousel>
            </div>

            <div className="product-info">
              <h1 className="product-title">{prodName}</h1>
              <p className="product-summary">
                <span className="summary-label">Tình trạng: </span>
              </p>
              <p className="product-price">
                <span className="price-label">Giá:</span>
                <span className="price-value">{formatPrice(prodPrice)}</span>
                VNĐ
              </p>
              <hr className="divider" />
              <div className="quantity-selector">
                <span className="quantity-label">Số lượng: </span>
                <InputNumber min={1} defaultValue={quantity} onChange={e => setQuantity(Number(e.target.value))} />
              </div>
              <button className="add-to-cart" onClick={() => {
                handleAddToCart({
                  id: Number(id),
                  name: prodName,
                  price: prodPrice,
                  images: prodImages
                })
              }}>Thêm vào giỏ hàng</button>
              <p className="product-category">
                <span className="category-label">Danh mục: </span>
                {prodCate?.name}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="description">
        <h2 className="title">Mô tả sản phẩm</h2>
        <hr className="divider" />
        {isSuccess &&
          <div className='content' dangerouslySetInnerHTML={{ __html: prodDesc }} />
        }
      </div>
    </div>
  )
}

export default ProductDetail
