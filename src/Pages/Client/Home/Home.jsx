import React from 'react'
import './Home.css'
import AboutUs from '../../../Components/Client/Session/AboutUs/AboutUs'
import Advise from '../../../Components/Client/Session/Advise/Advise'
import News from '../../../Components/Client/Session/News/News'
import CarouselReact from '../../../Components/Client/Carousel/CarouselReact'

const Home = () => {
  return (
    <>
      <CarouselReact />
      <AboutUs />
      <News />
      <Advise />
    </>
  )
}

export default Home
