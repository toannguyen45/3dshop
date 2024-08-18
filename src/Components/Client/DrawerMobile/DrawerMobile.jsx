import { ShoppingCartOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import React from 'react'
import './DrawerMobile.css'
import { Link } from 'react-router-dom'

const DrawerMobile = ({ onClose, open }) => {
  return (
    <Drawer title="Danh mục" placement="left" onClose={onClose} open={open}>
      <div className="drawer">
        <Link to="/" className="navbar-logo">3DTeam</Link>
        <Link to="/" className="navbar-item">Trang chủ</Link>
        <Link to="/dich-vu" className="navbar-item">Dich vụ</Link>
        <Link to="/thuong-mai" className="navbar-item">Thương mại</Link>
        <Link to="/tin-tuc" className="navbar-item">Tin tức</Link>
        <Link to="/ve-chung-toi" className="navbar-item">Về chúng tôi</Link>
        <div className="contact contact-phone">
          <span className="label">Sđt:</span>
          <a href="tel:0965710419" className="value">
            0965710419
          </a>
        </div>
        <div className="contact contact-email">
          <span className="label">Email:</span>
          <a href="mailto:abc@gmail.com" className="value">
            abc@gmail.com
          </a>
        </div>
        <div className="contact contact-address">
          <span className="label">Địa chỉ:</span>
          <span className="value">123 Đường ABC, TP.HCM</span>
        </div>
        <div className="cart">
          <a href="/cart" className="navbar-cart">
          <span>
          <ShoppingCartOutlined size={50} className='cart'/>
          Giỏ hàng
          </span>
          </a>
        </div>
      </div>
    </Drawer>
  )
}

export default DrawerMobile
