import React from 'react';
import './PortfolioItem.css';

import { FaExpandAlt, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 


const PortfolioItem = (props) => { 

  // Destructuring props
  const { id, image, title, category, popup, portfolio } = props;
 
  return (
    <div className='portfolio-item' key={id}>
 
      {/* Portfolio image */} 
      <img src={image} alt={title} /> 
 
      {/* Portfolio Content */} 
      <div className='content'> 

        {/* <div className='text'>

    
          <p><span></span>{category}</p>

          <Link
            to={{
              pathname: '/Portfolio/' + title,
            }}
            state={portfolio}>
            <h3>{title}</h3>
          </Link>

        </div> */}

        {/* Button Container */}
        <div className='btn-container'>

          {/* Trigger popup function */}
          <a onClick={() => {popup(id)}}><FaExpandAlt className='icon' /></a>  
          
          
          {/* <Link
            to={{
              pathname: '/Portfolio/' + title,
            }}
            state={portfolio}
            className='main-heading' >
            <FaLink className='icon' /> 
          </Link> */}

        </div>

      </div>

    </div>  
  ) 

}

export default PortfolioItem;