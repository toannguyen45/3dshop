import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './CarouselReact.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

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
          <LazyLoadImage
            src="/images/client/slide-one-new.jpg"
            width={'100%'}
            height={650}
            alt="slide-one"
            effect="blur"
          />
        </div>

        <div className="slider-content">
          <p className="text-line-one">In 3D sản xuất hàng loạt</p>
          <p className="text-line-two">Nhanh - Đẹp - Giá tốt</p>
          <Link to="/dich-vu" className="slider-button">
            Xem thêm
          </Link>
        </div>
      </div>
      <div>
        <div className="carousel-img-wrapper">
          <LazyLoadImage
            src="/images/client/slide-two-new.jpg"
            width={'100%'}
            height={650}
            alt="slide-two"
            effect="blur"
          />
        </div>

        <div className="slider-content">
          <p className="text-line-one">Máy quét 3D laser</p>
          <p className="text-line-two">Chính xác - Nhanh chóng</p>
          <Link to="/dich-vu" className="slider-button">
            Xem thêm
          </Link>
        </div>
      </div>
    </Carousel>
  )
}

export default CarouselReact
