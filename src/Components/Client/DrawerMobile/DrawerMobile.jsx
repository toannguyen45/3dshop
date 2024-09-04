import { ShoppingCartOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import React from 'react'
import './DrawerMobile.scss'
import { Link, NavLink } from 'react-router-dom'

const DrawerMobile = ({ onClose, open }) => {
  return (
    <Drawer title="Danh mục" placement="left" onClose={onClose} open={open}>
      <div className="drawer">
        <Link to="/" className="navbar-logo">
          3DTeam
        </Link>
        <NavLink to="/" className="navbar-item" onClick={onClose}>
          Trang chủ
        </NavLink>
        <NavLink to="/dich-vu" className="navbar-item" onClick={onClose}>
          Dịch vụ
        </NavLink>
        <NavLink to="/thuong-mai" className="navbar-item" onClick={onClose}>
          Thương mại
        </NavLink>
        <NavLink to="/tin-tuc" className="navbar-item" onClick={onClose}>
          Tin tức
        </NavLink>
        <NavLink to="/ve-chung-toi" className="navbar-item" onClick={onClose}>
          Về chúng tôi
        </NavLink>
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
          <a href="/gio-hang" className="navbar-cart">
            <span>
              <ShoppingCartOutlined size={50} className="cart" />
              Giỏ hàng
            </span>
          </a>
        </div>
      </div>
    </Drawer>
  )
}

export default DrawerMobile
