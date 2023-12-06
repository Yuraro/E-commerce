import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/needle.svg'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_logo from '../Assets/pinterest_logo.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
      <div className='footer'>
          <div className='footer-logo'>
              <img src={footer_logo} alt="footer_logo" width="80px"/>
              <p>NEEDLE</p>
          </div>
          <ul className="footer-links">
              <li>Company</li>
              <li>Products</li>
              <li>Offices</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
          <div className="footer-socials-icon">
              <div className="footer-icons-container">
                  <img src={instagram_icon} alt="instagram_icon" width="40px" />
              </div>
              <div className="footer-icons-container">
                  <img src={pinterest_logo} alt="pinterest_logo" width="40px" />
              </div>
              <div className="footer-icons-container">
                  <img src={whatsapp_icon} alt="whatsapp_icon" width="40px"/>
              </div>
          </div>
          <div className="footer-copyright">
              <hr />
              <p>Copyright @2023 All Rights Reserved.</p>
          </div>
    </div>
  )
}
