import React, { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import './ClientLayout.scss'
import ScrollToTop from '../../ScrollToTop/ScrollToTop'
import Spinner from '../../Spinner/Spinner'

const HeadTop = lazy(() => import('../Layout/HeadTop/HeadTop'))
const Footer = lazy(() => import('../Layout/Footer/Footer'))
const NavbarDesktop = lazy(
  () => import('../Layout/NavbarDesktop/NavbarDesktop')
)
const NavbarMobile = lazy(() => import('../Layout/NavbarMobile/NavbarMobile'))
const Hotline = lazy(() => import('../Hotline/Hotline'))
const BackToTop = lazy(() => import('../BackToTop/BackToTop'))

const ClientLayout = () => {
  return (
    <div className="container">
      <Suspense fallback={<Spinner />}>
        <ScrollToTop />
        <HeadTop />
        <NavbarDesktop />
        <NavbarMobile />

        <main className="main-content">
          <Outlet />
        </main>

        <BackToTop />
        <Hotline />
        <Footer />
      </Suspense>
    </div>
  )
}

export default ClientLayout
