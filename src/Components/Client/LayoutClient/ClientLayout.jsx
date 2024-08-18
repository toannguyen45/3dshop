import React, { useState } from 'react'
import HeadTop from '../Layout/HeadTop/HeadTop'
import { Button, Slider } from 'antd'
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import DrawerMobile from '../DrawerMobile/DrawerMobile'
import { Link, Outlet } from 'react-router-dom'
import './ClientLayout.css'

const ClientLayout = () => {
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    return (
        <div className="container">
            <HeadTop />
            <nav className="navbar padding-x-default desktop-navbar">
                <div className="navbar-left">
                    <Link to="/" className="navbar-logo">3DTeam</Link>
                    <Link to="/" className="navbar-item">Trang chủ</Link>
                    <Link to="/dich-vu" className="navbar-item">Dich vụ</Link>
                    <Link to="/thuong-mai" className="navbar-item">Thương mại</Link>
                    <Link to="/tin-tuc" className="navbar-item">Tin tức</Link>
                    <Link to="/ve-chung-toi" className="navbar-item">Về chúng tôi</Link>
                </div>
                <div className="navbar-right">
                    <a href="/cart" className="navbar-cart">
                        <span>
                            <ShoppingCartOutlined size={50} className='cart'/>
                            Giỏ hàng
                        </span>

                    </a>
                </div>
            </nav>
            <nav className="mobile-navbar">
                <div className="navbar-content">
                    <a href="/" className="navbar-logo-mobile">
                        3DTeam
                    </a>
                    <Button type="primary" onClick={showDrawer} className="navbar-button">
                        <MenuOutlined />
                    </Button>
                </div>
                <DrawerMobile onClose={onClose} open={open} />
            </nav>

            <main className="main-content">
                <Outlet />
            </main>

            <footer className="site-footer">
                <div className="footer-content">
                    <h3>Company Name</h3>
                    <p>Address, City, Country</p>
                    <ul className="footer-links">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default ClientLayout