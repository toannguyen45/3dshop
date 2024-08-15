import React from 'react'
import './Home.css'
import { Button, Carousel, Col, Form, Input, Row } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

const Home = () => {
  return (
    <div className="container">
      <div className="head-top">Home</div>
      <nav className="navbar padding-x-default">
        <div className="navbar-left">
          <a href="/" className="navbar-logo">
            Logo
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
        </div>
        <div className="navbar-right">
          <a href="/cart" className="navbar-cart">
            <ShoppingCartOutlined />
          </a>
        </div>
      </nav>
      <Carousel autoplay className="slider">
        <div className="slide-one"></div>
        <div className="slide-two"></div>
      </Carousel>
      <div class="news-section padding-x-default padding-y-default">
        <h2>Tin tức</h2>
        <div class="news-items">
          <div class="news-item">
            <div class="news-image">
              <span class="date">01/01/2022</span>
            </div>
            <h3>Tiêu đề tin tức 1</h3>
            <p>Mô tả ngắn về tin tức 1...</p>
            <a href="#">Đọc thêm</a>
          </div>
          <div class="news-item">
            <div class="news-image">
              <span class="date">01/01/2022</span>
            </div>
            <h3>Tiêu đề tin tức 1</h3>
            <p>Mô tả ngắn về tin tức 1...</p>
            <a href="#">Đọc thêm</a>
          </div>
          <div class="news-item">
            <div class="news-image">
              <span class="date">01/01/2022</span>
            </div>
            <h3>Tiêu đề tin tức 1</h3>
            <p>Mô tả ngắn về tin tức 1...</p>
            <a href="#">Đọc thêm</a>
          </div>
        </div>
        <a href="#" class="view-more">
          Xem thêm
        </a>
      </div>
      <div className="advise padding-x-default">
        <div className="advise-left">
          <h3 className="advise-title">Liên hệ ngay để nhận tư vấn dịch vụ</h3>
          <form name="layout-multiple-horizontal" className="advise-form">
            <div>
              <label>
                Họ và tên *
                <input
                  type="text"
                  name="name"
                  className="input-advise"
                  required
                />
              </label>
              <label>
                Số điện thoại *
                <input
                  type="tel"
                  name="phone"
                  required
                  className="input-advise"
                />
              </label>
            </div>
            <label>
              Nội dung *
              <textarea
                name="content"
                required
                className="input-advise"
              ></textarea>
            </label>
            <button type="submit" className="submit-advise">
              Nhận tư vấn
            </button>
          </form>
        </div>
        <div className="advise-right"></div>
      </div>
      <footer class="site-footer">
        <div class="footer-content">
          <h3>Company Name</h3>
          <p>Address, City, Country</p>
          <ul class="footer-links">
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
