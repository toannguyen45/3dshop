import React from 'react'
import './Home.css'
import AboutUs from '../../../Components/Client/Session/AboutUs/AboutUs'
import Advise from '../../../Components/Client/Session/Advise/Advise'
import News from '../../../Components/Client/Session/News/News'
import CarouselReact from '../../../Components/Client/Carousel/CarouselReact'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'

const Home = () => {
  return (
    <>
      <MetaSeo title="Trang chủ" description="Trang chủ" />
      <CarouselReact />
      <AboutUs />
      <News />
      <Advise />
    </>
  )
}

export default Home
