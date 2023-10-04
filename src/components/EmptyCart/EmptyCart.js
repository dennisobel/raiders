import React from 'react';
import './EmptyCart.css';

import { Button } from '../../components';

import { FaCartArrowDown } from 'react-icons/fa';

  
 
const EmptyCart = (props) => {

  // Destructuring props
  const { title } = props;

  return ( 
 
    // Empty cart message
    <div className='empty-cart'>
      <div><FaCartArrowDown className='icon' /></div>
      <h3>{title}</h3>
      <Button link={'Shop-List'} title={'shop now'} /> {/* Shop Button */}
    </div>

  );
};

export default EmptyCart;