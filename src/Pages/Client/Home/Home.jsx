import React from 'react'
import './Home.css'
import Slider from '../../../Components/Client/Carousel/Slider'
import AboutUs from '../../../Components/Client/Session/AboutUs/AboutUs'
import Advise from '../../../Components/Client/Session/Advise/Advise'
import News from '../../../Components/Client/Session/News/News'
import { SliderOld } from '../../../Components/Client/Carousel/SliderOld'

const Home = () => {
  return (
    <>
      {/* <Slider autoSlide={true} autoSlideInterval={4000}>
        <img src='/src/assets/images/client/slide-one.jpg' className='img-slide' />
        <img src='/src/assets/images/client/slide-two.jpg' className='img-slide' />
      </Slider> */}
      {/* <SliderOld/> */}
      <AboutUs />
      <News />
      <Advise />
    </>
  )
}

export default Home
