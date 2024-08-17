import React, { useState } from 'react'
import './Home.css'
import { Button } from 'antd'
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Slider from '../../../Components/Client/Carousel/Slider'
import HeadTop from '../../../Components/Client/Layout/HeadTop/HeadTop'
import DrawerMobile from '../../../Components/Client/DrawerMobile/DrawerMobile'
import AboutUs from '../../../Components/Client/Session/AboutUs/AboutUs'
import Advise from '../../../Components/Client/Session/Advise/Advise'
import News from '../../../Components/Client/Session/News/News'

const Home = () => {
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
          <a href="/ve-chung-toi" className="navbar-item">
            Về chúng tôi
          </a>
        </div>
        <div className="navbar-right">
          <a href="/cart" className="navbar-cart">
            <ShoppingCartOutlined style={{ fontSize: '25px' }} />
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
      <Slider />
      <AboutUs />
      <News />
      <Advise />
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

export default Home
