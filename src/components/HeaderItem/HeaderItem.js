import React from 'react';
import './HeaderItem.css';

import { FaAngleDown } from 'react-icons/fa';

import { Link } from 'react-router-dom';

  

const HeaderItem = (props) => { 
  
  // Destructuring props
  const { id, mainLink, subLink } = props;

  return (
    <div className='nav-item' key={id}>

      {/* Dropdown Menu */} 
      <div className='dropdown-menu'>
        {subLink.length ? (
          <div className='nav-btn'>{mainLink.title}</div>
        ) : (
          <Link className='nav-btn' to={mainLink.link}>
            {mainLink.title}
          </Link>
        )}
        {subLink.length > 0 && <div className='icon'><FaAngleDown /></div>}
      </div>

      {/* Dropdown Content */}
      {subLink.length > 0 && (
        <div className='dropdown-content'>
          {subLink.map((item) => {
            return (
              <Link to={item.link} state={item.state} key={item.id}>
                {item.title}
              </Link>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default HeaderItem;