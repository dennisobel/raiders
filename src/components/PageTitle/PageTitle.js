import React from 'react';
import './PageTitle.css';

import { FaHome, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


 
const PageTitle = (props) => {

  // Destructuring props
  const { title, page } = props;

  return ( 
    <div className='page-title'>
 
      {/* Title Container */}
      <div className='title'> 
        <h2>{title}</h2> 
      </div> 

      {/* Link and page Container */}
      {/* <div className='link'>
        <Link to='/'><FaHome className='home-icon' /></Link> 
        <FaAngleDoubleRight className='icon' /> 
        <span className='page'>{page}</span>
      </div> */}

    </div>
  )
}

export default PageTitle;