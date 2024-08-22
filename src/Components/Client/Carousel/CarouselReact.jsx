import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './CarouselReact.scss'

const CarouselReact = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      stopOnHover
      showThumbs={false}
      emulateTouch={true}
    >
      <div>
        <div className="carousel-img-wrapper">
          <img
            loading="eager"
            src="/images/client/slide-one-new.jpg"
            className="carousel-img"
            alt="slide-one"
          />
        </div>

        <div className="slider-content">
          <p className="text-line-one">In 3D sản xuất hàng loạt</p>
          <p className="text-line-two">Nhanh - Đẹp - Giá tốt</p>
        </div>
      </div>
      <div>
        <div className="carousel-img-wrapper">
          <img
            loading="eager"
            src="/images/client/slide-two-new.jpg"
            className="carousel-img"
            alt="slide-two"
          />
        </div>

        <div className="slider-content">
          <p className="text-line-one">In 3D sản xuất hàng loạt</p>
          <p className="text-line-two">Nhanh - Đẹp - Giá tốt</p>
        </div>
      </div>
    </Carousel>
  )
}

export default CarouselReact
