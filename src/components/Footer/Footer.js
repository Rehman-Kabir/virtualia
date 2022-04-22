import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import MailIcon from '../../assets/Mail icon.svg'
import './footer.css'
const Footer = () => {
  return (
    <>
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col logo-col">
            <div className="footer-logo">
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <div className="phone-email">
              <span>+1 (123) 456-123</span>
              <span>contact@virtualia.cr</span>
            </div>
            <div className="copy-right">
              <p>© 2022 Virtualia. All rights reserved.</p>
            </div>
          </div>
          <div className="footer-col sitemap-col">
            <h3>Sitemap</h3>
            <ul>
              <li><Link to="/upload">Discover</Link></li>
              <li><Link to="/request">Marketplace</Link></li>
              <li><a href="/">Avatar</a></li>
              <li><a href="/">Community</a></li>
              <li><a href="/">Wallet</a></li>
            </ul>
          </div>
          <div className="footer-col social-col">
            <h3>Socials</h3>
            <ul>
              <li><a href="/">Discord</a></li>
              <li><a href="/">Medium</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">Twitter</a></li>
              <li><a href="/">Telegram</a></li>
            </ul>
          </div>
          <div className="footer-col office-col">
              <h3>Head Office</h3>
              <div className="address">
                <p>12 BD Royal, 2450 Luxembourg. <br /> Luxembourg</p>
              </div>
              <div className="newletter">
                <h4>News Letter</h4>
                <div className="field-mail">
                  <input type="email" placeholder='Enter your email address' />
                  <div className='mail-icon'>
                    <img src={MailIcon} alt="mail icon" />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer