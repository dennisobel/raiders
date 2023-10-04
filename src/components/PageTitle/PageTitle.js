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
      <div className='link'>
        <Link to='/'><FaHome className='home-icon' /></Link> {/* Link to the home page */}
        <FaAngleDoubleRight className='icon' /> {/* Icon indicating a link */}
        <span className='page'>{page}</span> {/* Page Title */}
      </div>

    </div>
  )
}

export default PageTitle;