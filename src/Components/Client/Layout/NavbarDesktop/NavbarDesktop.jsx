import { ShoppingCartOutlined } from '@ant-design/icons'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavbarDesktop.scss'

const NavbarDesktop = () => {
  return (
    <nav className="session-navbar padding-x-default desktop-navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          3DTeam
        </Link>
        <NavLink to="/" className="navbar-item">
          Trang chủ
        </NavLink>
        <NavLink to="/dich-vu" className="navbar-item">
          Dịch vụ
        </NavLink>
        <NavLink to="/thuong-mai" className="navbar-item">
          Thương mại
        </NavLink>
        <NavLink to="/tin-tuc" className="navbar-item">
          Tin tức
        </NavLink>
        <NavLink to="/ve-chung-toi" className="navbar-item">
          Về chúng tôi
        </NavLink>
      </div>
      <div className="navbar-right">
        <a href="/gio-hang" className="navbar-cart">
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
