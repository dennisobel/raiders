import React, { useState } from 'react';
import './MobileNavbar.css';

import { NavbarItem } from '../../components';
import { navbar } from '../../constants';

import { FaTimes } from 'react-icons/fa';
 
 
  
/* Mobile Navbar container */
const MobileNavbar = (props) => { 

  // Destructuring props
  const { close } = props;

  // State to manage the active nav link
  const [activeNavLinkId, setActiveNavLinkId] = useState(null);

  // Function to handle nav link click event
  const handleNavLinkClick = (id) => {
    setActiveNavLinkId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className='mobile-menu'>

      {/* Close sidebar button */}
      <div id='close-side-bar' onClick={close}><FaTimes /></div>

      {/* Navigation items */}  
      <nav className='mobile-navbar'>
        {navbar.map((item) => {
          return (
            <NavbarItem key={item.id} id={item.id} {...item}               
            isActive={item.id === activeNavLinkId}
            onNavLinkClick={handleNavLinkClick} />
          )
        })}
      </nav>
      
    </div>
  )
}

export default MobileNavbar;