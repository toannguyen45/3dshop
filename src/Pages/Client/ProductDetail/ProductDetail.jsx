import React from 'react'
import './ProductDetail.scss'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'

const ProductDetail = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()

  const items = [
    {
      href: '/san-pham',
      title: 'Sản phẩm',
    },
    {
      title: 'Máy in 3D neptune 2',
    },
  ]

  return (
    <div className="product">
      <MetaSeo title={'sanpham'} description={'sanpham'} keyword={'sanpham'} />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <div className="content"></div>
    </div>
  )
}

export default ProductDetail
