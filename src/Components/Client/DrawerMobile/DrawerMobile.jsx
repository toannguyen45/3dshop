import { ShoppingCartOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import React from 'react'
import './DrawerMobile.css'

const DrawerMobile = ({ onClose, open }) => {
  return (
    <Drawer title="Danh mục" placement="left" onClose={onClose} open={open}>
      <div className="drawer">
        <a href="/" className="navbar-logo">
          3DTeam
        </a>
        <a href="/item1" className="navbar-item">
          Trang chủ
        </a>
        <a href="/item2" className="navbar-item">
          Dịch vụ
        </a>
        <a href="/item2" className="navbar-item">
          Thương mại
        </a>
        <a href="/item2" className="navbar-item">
          Tin tức
        </a>
        <a href="/item2" className="navbar-item">
          Về chúng tôi
        </a>
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
            <ShoppingCartOutlined style={{ fontSize: '25px' }} />
          </a>
        </div>
      </div>
    </Drawer>
  )
}

export default DrawerMobile
