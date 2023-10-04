import React from 'react';
import './PortfolioTabs.css';


// Portfolio list component
const PortfolioTabs = (props) => { 

  // Destructuring props
  const { id, title, active, setSelected } = props;

  return ( 
    <li   
      key={id}
      className={active ? "button active" : "button"}
      onClick={() => setSelected(id)}>
      {title} {/* Display the title */}
    </li>
  );
} 

export default PortfolioTabs;