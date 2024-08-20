import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <img
          src="https://www.royalcanin.com/~/media/Royal-Canin/Feature-Images/RC_logo.png"
          alt="Royal Canin"
        />
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <h3>Company Name</h3>
          <p>Address, City, Country</p>
          <p>Phone: 0965710419</p>
          <p>Email: info@company.com</p>
        </div>
        <div className="footer-column">
          <h3>Dịch Vụ</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Dịch vụ 1</a>
            </li>
            <li>
              <a href="/">Dịch vụ 2</a>
            </li>
            <li>
              <a href="/">Dịch vụ 3</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Liên Kết</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Zalo</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
