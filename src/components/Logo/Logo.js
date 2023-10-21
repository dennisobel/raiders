import React from 'react';
import './Logo.css';

import { images } from '../../constants';

import { Link } from "react-router-dom";

 
 
const Logo = () => {  

  return (
    <Link to='/' className='logo'>

      {/* Render the logo image */} 
      <img src={images.logo} alt='logo' />
      {/* <h1 style={{fontSize:""}}>AWASI ROVERS ACADEMY</h1>  */}
      
    </Link>
  );

}

export default Logo;