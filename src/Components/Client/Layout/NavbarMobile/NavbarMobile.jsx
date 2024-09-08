import React, { useState } from 'react'
import DrawerMobile from '../../DrawerMobile/DrawerMobile'
import './NavbarMobile.scss'
import { Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

const NavbarMobile = () => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  return (
    <nav className="mobile-navbar">
      <div className="navbar-content">
        <button onClick={showDrawer} className="navbar-button">
          <MenuOutlined />
        </button>
        <a href="/" className="navbar-logo-mobile">
          3DTeam
        </a>

      </div>
      <DrawerMobile onClose={onClose} open={open} />
    </nav>
  )
}

export default NavbarMobile
