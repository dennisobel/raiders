import React from 'react';
import './ShopTitle.css';



const ShopTitle = (props) => {

  // Destructuring props
  const { titles } = props;

  return (  

    <div className='shoplist-title'>
      {/* Render each title */}
      {titles.map((title) => {
        return <h3 key={title}>{title}</h3>;
      })}
    </div>  

  );
  
};

export default ShopTitle;