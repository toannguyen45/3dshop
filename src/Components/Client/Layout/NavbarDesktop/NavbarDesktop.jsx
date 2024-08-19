import { ShoppingCartOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarDesktop.scss'

const NavbarDesktop = () => {
  return (
    <nav className="session-navbar padding-x-default desktop-navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          3DTeam
        </Link>
        <Link to="/" className="navbar-item">
          Trang chủ
        </Link>
        <Link to="/dich-vu" className="navbar-item">
          Dich vụ
        </Link>
        <Link to="/thuong-mai" className="navbar-item">
          Thương mại
        </Link>
        <Link to="/tin-tuc" className="navbar-item">
          Tin tức
        </Link>
        <Link to="/ve-chung-toi" className="navbar-item">
          Về chúng tôi
        </Link>
      </div>
      <div className="navbar-right">
        <a href="/cart" className="navbar-cart">
          <span>
            <ShoppingCartOutlined size={50} className="cart" />
            Giỏ hàng
          </span>
        </a>
      </div>
    </nav>
  )
}

export default NavbarDesktop
