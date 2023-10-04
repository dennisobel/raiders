import React from 'react';
import './Button.css';

import { Link } from 'react-router-dom';

   

const Button = (props) => {

  // Destructuring props
  const { title, link } = props;

  // Create a link with the specified title and link path
  return <Link to={`/${link}`} className='btn'>{title}</Link>

} 

export default Button;