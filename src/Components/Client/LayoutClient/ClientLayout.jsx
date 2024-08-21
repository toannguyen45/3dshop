import React from 'react'
import HeadTop from '../Layout/HeadTop/HeadTop'
import { Outlet } from 'react-router-dom'
import './ClientLayout.scss'
import Footer from '../Layout/Footer/Footer'
import NavbarDesktop from '../Layout/NavbarDesktop/NavbarDesktop'
import NavbarMobile from '../Layout/NavbarMobile/NavbarMobile'
import Hotline from '../Hotline/Hotline'
import BackToTop from '../BackToTop/BackToTop'

const ClientLayout = () => {
  return (
    <div className="container">
      <HeadTop />
      <NavbarDesktop />
      <NavbarMobile />

      <main className="main-content">
        <Outlet />
      </main>
      <BackToTop />
      <Hotline />
      <Footer />
    </div>
  )
}

export default ClientLayout
