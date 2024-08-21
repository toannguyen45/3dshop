import { PhoneOutlined } from '@ant-design/icons'
import React from 'react'
import './Hotline.scss'

const Hotline = () => {
  return (
    <div className="contact-icons">
      <div className="img-circel fb">
        <a
          href="https://m.me/nguyenminhtoan45"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <img
            src="/images/client/mess.png"
            alt="icon-messenger"
            width={27}
            height={27}
          />
        </a>
      </div>

      <div className="img-circel zalo">
        <a
          href="https://zalo.me/0965710419"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <img
            src="/images/client/zalo.png"
            alt="icon-zalo"
            width={27}
            height={27}
          />
        </a>
      </div>

      <div className="img-circel phone">
        <a href="tel:0965710419" className="contact-icon">
          <img
            src="/images/client/phone.png"
            alt="icon-call"
            width={27}
            height={27}
          />
        </a>
      </div>
    </div>
  )
}

export default Hotline
