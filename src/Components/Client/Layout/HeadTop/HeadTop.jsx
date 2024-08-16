import React from 'react'
import './HeadTop.css'

const HeadTop = () => {
  return (
    <div className="head-top padding-x-default desktop-head-top">
      <div className="contact-phone">
        <span class="label">Sđt:</span>
        <a href="tel:0965710419" className="value">
          0965710419
        </a>
      </div>
      <div className="contact-email">
        <div className="address">
          <span class="label">Địa chỉ:</span>
          <span class="value">123 Đường ABC, TP.HCM</span>
        </div>
        <div className="email">
          <span class="label">Email:</span>
          <a href="mailto:abc@gmail.com" className="value">
            abc@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeadTop
