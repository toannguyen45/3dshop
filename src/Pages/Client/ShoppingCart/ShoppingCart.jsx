import React from 'react'
import './ShoppingCart.scss'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import { Button, InputNumber, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeFromCart,
  updateQuantity,
} from '../../../Features/Cart/CartSlice'
import { storage_url } from '../../../Utils/baseUrl'
import { formatPrice } from '../../../Utils/format'
import ButtonCustom from '../../../Components/ButtonCustom/ButtonCustom'
import { useNavigate } from 'react-router-dom'

const ShoppingCart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart)

  // Tính toán tổng giá trị giỏ hàng
  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  )
  const shippingFee = 32000

  // Tổng tiền
  const total = subtotal + shippingFee

  const handleRemove = id => {
    dispatch(removeFromCart(id))
  }

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  const items = [
    {
      title: 'Giỏ hàng',
    },
  ]

  const columns = [
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => {
        const primaryImage = record.images.find(img => img.is_primary === 1)

        return primaryImage ? (
          <img
            src={`${storage_url}/${primaryImage.image}`}
            alt="Primary"
            style={{ width: 100, height: 100, objectFit: 'cover' }}
          />
        ) : (
          <span>Không có ảnh</span>
        )
      },
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) => {
        return <p className="product-price">{formatPrice(record.price)} đ</p>
      },
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text, record) => {
        return (
          <InputNumber
            min={0}
            defaultValue={record.quantity}
            onChange={value => handleQuantityChange(record.id, value)}
          />
        )
      },
    },
    {
      title: 'Thành tiền',
      dataIndex: 'total',
      key: 'total',
      render: (text, record) => {
        // Tính tổng = quantity * price
        const total = record.quantity * record.price

        return <p className="product-price">{formatPrice(total)} đ</p>
      },
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => {
        return (
          <Button danger onClick={() => handleRemove(record.id)}>
            Xóa
          </Button>
        )
      },
    },
  ]

  return (
    <div className="shopping-cart">
      <MetaSeo title="Giỏ hàng" description="Giỏ hàng" />
      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <h2 className="title">Giỏ hàng</h2>
      <hr className="divider" />

      <div className="content">
        <div className="table-cart">
          <Table columns={columns} dataSource={cart} />
        </div>
        <div className="summary">
          <div className="card-total">
            <h2 className="summary-title">Thông tin đơn hàng</h2>
            <p className='info-money'>
              <span className="label">Tạm tính:</span>
              <span className="value">{formatPrice(subtotal)} đ</span>
            </p>
            <p className='info-money'>
              <span className="label">Tiền ship:</span>
              <span className="value">{formatPrice(shippingFee)} đ</span>
            </p>
            <p className='info-money'>
              <span className="label">Tổng:</span>
              <span className="value">{formatPrice(total)} đ</span>
            </p>
            <ButtonCustom title="Tiến hành thanh toán" onClick={() => navigate('/gio-hang/thanh-toan')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
