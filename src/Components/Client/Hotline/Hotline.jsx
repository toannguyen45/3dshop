import { PhoneOutlined } from '@ant-design/icons'
import React from 'react'
import './Hotline.scss'

const Hotline = () => {
  return (
    <div className="contact-icons">
      <div className="img-circel fb">
        <a
          href="https://m.me/your_page"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <img src="/src/assets/images/client/Facebook.png" />
        </a>
      </div>

      <div className="img-circel zalo">
        <a
          href="https://zalo.me/your_number"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <img src="/src/assets/images/client/zalo-icon.png" />
        </a>
      </div>

      <div className="img-circel phone">
        <a href="tel:0909123123123" className="contact-icon">
          <img src="/src/assets/images/client/phone.png" />
        </a>
      </div>
    </div>
  )
}

export default Hotline
