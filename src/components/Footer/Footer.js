import React from 'react';
import './Footer.css';

import { contactContent } from '../../constants';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaRegCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

 
 
const Footer = () => {   
   
  return (
    <footer className='footer'>
      
      <div className='box-container'>

        {/* About Section */}
        <div className='footer-item'> 
          <Link to='/' className='logo'><h2>About Us</h2></Link> 
          <p>The Falcon is the popular and most powerful team in the Tournament. It is establish to provide an opportunity to improve cricketing skill of young talented cricketers.</p>
          <div className='social'>
            <a href="/#"><FaFacebookF className='icon' /></a>
            <a href="/#"><FaTwitter className='icon' /></a>
            <a href="/#"><FaInstagram className='icon' /></a>
            <a href="/#"><FaLinkedin className='icon' /></a>
          </div>
        </div> 

        {/* Useful Links Section */}
        <div className='footer-item'> 
          <h2>useful links</h2>
          <div className='info links pages'> 
            <div className='links-item'>
              <p><FaRegCircle className='icon' /><Link to='/'>home</Link></p> 
              <p><FaRegCircle className='icon' /><Link to='/about-us'>about</Link></p>
              <p><FaRegCircle className='icon' /><Link to='/Faqs'>FAQs</Link></p> 
              <p><FaRegCircle className='icon' /><Link to='/Team'>Team</Link></p>
              <p><FaRegCircle className='icon' /><Link to='/Fixtures'>Fixtures</Link></p>
            </div>
            <div className='links-item'> 
              <p><FaRegCircle className='icon' /><Link to='/Portfolio'>Portfolio</Link></p>
              <p><FaRegCircle className='icon' /><Link to='/Blog-list'>blogs</Link></p>
              <p><FaRegCircle className='icon' /><Link to='/Shop-list'>shop</Link></p>
              <p><FaRegCircle className='icon' /><Link to='/Contact-us'>contact</Link></p>
            </div>
          </div>
        </div> 
  
        {/* Contact Info Section */}
        <div className='footer-item'>  
          <h2>contact info</h2> 
          <div className='info connect'> 
            {contactContent.map((contact) => {
              return (contact.content).map((value, index) => {
                return <p key={index}><span className='icon'>{contact.icon}</span>{value}</p>
              })
            })}
          </div>
 
        </div>

      </div>
 
      <div className='content'>
        <p>designed by <span>AS_Designs</span> | all rights reserved</p>
      </div>
      
    </footer>
  )
}

export default Footer;