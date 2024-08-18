import { Carousel } from 'antd'
import React from 'react'
import './SliderOld.css'
import slideOne from '/src/assets/images/client/slide-one.jpg';
import slideTwo from '/src/assets/images/client/slide-two.jpg';

export const SliderOld = () => {
    console.log(slideOne, slideTwo);
    return (
        <div className='carousel'>
            {/* <img
                src={slideOne}
                alt="Slide 1"
                className='slider-img' /> */}
            <Carousel autoplay draggable className="slider" autoplaySpeed={3000}>
                <div className='slider-item'>
                    <img
                        src="https://via.placeholder.com/1920x1080"
                        alt="Slide 1"
                        className='slider-img' />
                    {/* <div className='slider-content'>
                        <p className="text-line-one">In 3D sản xuất hàng loạt</p>
                        <p className="text-line-two">Nhanh - Đẹp - Giá tốt</p>
                    </div> */}
                </div>
                {/* <div className='slider-item'>
                    <img
                        src="https://via.placeholder.com/1920x1080"
                        alt="Slide 2"
                        className='slider-img'
                    />
                    <div className='slider-content'>
                        <p className="text-line-one">In 3D sản xuất hàng loạt</p>
                        <p className="text-line-two">Nhanh - Đẹp - Giá tốt</p>
                    </div>
                </div> */}
            </Carousel>
        </div>
    )
}
