import React from 'react';
import './Heading.css';

 

const Heading = (props) => {

  // Destructuring props
  const { title } = props;

  return ( 
 
    <div className='heading'>

      {/* Heading title */}
      <h2>{title}</h2>

    </div>
    
  );

};

export default Heading;