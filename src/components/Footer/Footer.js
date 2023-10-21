import React from 'react';
import './Footer.css';

import { contactContent } from '../../constants';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaRegCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

 
 
const Footer = () => {   
   
  return (
    <footer className='footer'>
      
      <div className='box-container'>

        {/* About Section */}
        <div className='footer-item'>
          <Logo/>
          {/* <Link to='/' className='logo'><h2>The Academy</h2></Link> 
          <p>Rovers is the popular and most powerful team in the Tournament. It is establish to provide an opportunity to improve soccer skills of young talented soccer players.</p> */}
          {/* <div className='social'>
            <a href="/#"><FaFacebookF className='icon' /></a>
            <a href="/#"><FaTwitter className='icon' /></a>
            <a href="/#"><FaInstagram className='icon' /></a>
            <a href="/#"><FaLinkedin className='icon' /></a>
          </div> */}
        </div> 

        {/* Useful Links Section */}
        <div className='footer-item'> 
          <h2>the academy</h2>
          <div className='info links pages'> 
            <div className='links-item'>
              <p><FaRegCircle className='icon' /><Link to='/'>home</Link></p> 
              <p><FaRegCircle className='icon' /><Link to='/about-us'>about</Link></p>
              <p><FaRegCircle className='icon' /><Link to='/Faqs'>FAQs</Link></p> 
              <p><FaRegCircle className='icon' /><Link to='/Team'>Meet Our Staff</Link></p>
              {/* <p><FaRegCircle className='icon' /><Link to='/Fixtures'>Fixtures</Link></p> */}
            </div>
            <div className='links-item'> 
              <p><FaRegCircle className='icon' /><Link to='/Portfolio'>Portfolio</Link></p>
              <p><FaRegCircle className='icon' /><Link to='/Blog-list'>blogs</Link></p>
              {/* <p><FaRegCircle className='icon' /><Link to='/Shop-list'>shop</Link></p> */}
              <p><FaRegCircle className='icon' /><Link to='/Contact-us'>contact</Link></p>
            </div>
          </div>
        </div> 
  
        {/* Contact Info Section */}
        <div className='footer-item'>  
          <h2>address</h2> 
          <div className='info connect'> 
            {contactContent.map((contact) => {
              return (contact.content).map((value, index) => {
                return <p key={index}><span className='icon'>{contact.icon}</span>{value}</p>
              })
            })}
          </div>
 
        </div>

      </div>
 
      {/* <div className='content'>
        <p>designed by <span>AS_Designs</span> | all rights reserved</p>
      </div> */}
      
    </footer>
  )
}

export default Footer;