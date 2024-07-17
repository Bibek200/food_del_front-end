import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-conten">
      <div className="footer-left">
        <img className='footer-logo' src={assets.resturent_logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, vero quos impedit dicta ipsum consequatur commodi, ratione ipsa aut magni vitae quaerat magnam rem? Eveniet quam error asperiores necessitatibus recusandae.</p>
        <div className="social-media">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
  
      </div>

      <div className="footer-center">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy  </li>
        </ul>
      </div>

      <div className="footer-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+1 758-406-56440</li>
            <li>contect@tomato.com</li>
        </ul>
      </div>
      </div>
      <hr />
      <p className="copyright">Copyright © 2024 Tomato.com ~ All rights reserved.</p>
    </div>
  )
}

export default Footer
