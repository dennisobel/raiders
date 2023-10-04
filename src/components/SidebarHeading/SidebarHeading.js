import React from 'react';
import './SidebarHeading.css';



// Component for the sidebar heading
const SidebarHeading = (props) => {

  // Destructuring props
  const { title } = props;

  return (
    <div className='sidebar-heading'>
      <h2>{title}</h2> {/* Sidebar Heading Title */}
    </div>
  );
  
}  

export default SidebarHeading;