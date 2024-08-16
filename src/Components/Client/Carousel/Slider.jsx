import { Carousel } from 'antd'
import React from 'react'
import './Slider.css'

const Slider = () => {
  return (
    <Carousel autoplay draggable className="slider" autoplaySpeed={5000}>
      <div className="slide-one">
        <p className="text-line-one">In 3D sản xuất hàng loạt</p>
        <p className="text-line-two">Nhanh - Đẹp - Giá tốt</p>
        <button className="contact-button">Liên hệ</button>
      </div>
      <div className="slide-two">
        <p className="text-line-one">Máy quét 3D laser</p>
        <p className="text-line-two">Chính xác - Nhanh chóng</p>
        <button className="contact-button">Liên hệ</button>
      </div>
    </Carousel>
  )
}

export default Slider
