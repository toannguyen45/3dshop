import React from 'react'
import './HeadTop.scss'
import { HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'

const HeadTop = () => {
  return (
    <div className="head-top padding-x-default desktop-head-top">
      <div className="contact-phone">
        <span className="label">
          <PhoneOutlined />
        </span>
        <a href="tel:0965710419" className="value">
          0965710419
        </a>
      </div>
      <div className="contact-email">
        <div className="address">
          <span className="label">
            <HomeOutlined />
          </span>
          <span className="value">123 Đường ABC, TP.HCM</span>
        </div>
        <div className="email">
          <span className="label">
            <MailOutlined />
          </span>
          <a href="mailto:abc@gmail.com" className="value">
            abc@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeadTop
