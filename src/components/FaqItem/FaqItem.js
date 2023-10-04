import React from 'react';
import './FaqItem.css';

import { FaPlus, FaMinus } from 'react-icons/fa';

   

const FaqItem = (props) => {

  // Destructuring props
  const { id, title, content, isActive, onAccordionClick } = props;
 
  return ( 

    <div className={`accordion ${isActive ? 'active' : ''}`}>

      {/* Accordion heading */}
      <div className='accordion-heading' onClick={() => onAccordionClick(id)}>
        <h3>{title}</h3>
        <div className='icon'>{isActive ? <FaMinus /> : <FaPlus />}</div>
      </div>

      {/* Accordion content */}
      {isActive && <p className='accordion-content'>{content}</p>}

    </div>
    
  );
};

export default FaqItem;