import React from 'react';
import './Logo.css';

import { images } from '../../constants';

import { Link } from "react-router-dom";

 
 
const Logo = () => {  

  return (
    <Link to='/' className='logo'>

      {/* Render the logo image */} 
      <img src={images.logo} alt='logo' /> 
      
    </Link>
  );

}

export default Logo;