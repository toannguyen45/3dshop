import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h3>Company Name</h3>
        <p>Address, City, Country</p>
        <ul className="footer-links">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
