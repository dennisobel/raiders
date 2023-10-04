import React from 'react';
import './MatchSidebar.css';

import { SidebarHeading } from '../../components';

import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

  
 
const MatchSidebar = (props) => {  

  // Destructuring props
  const { title, matches } = props;

  // Function to get initials from full name
  function getInitials(fullName) {
    const names = fullName.split(" ");
    const initials = names.map(name => name[0].toUpperCase());
    return initials.join("");
  }

  return ( 

    <div className='match-sidebar'>

      {/* Sidebar Heading */}
      <SidebarHeading title={title} /> 
  
      <div className='box-container'>

        {/* Render individual matches */}
        {matches.map((match) => {  
          return(
            <Link
            to={{
              pathname: '/Events/' + match.team1+'-Vs-'+match.team2,
            }}
            state={match}
            key={match.id}>
            <FaAngleRight className='icon' />
            <h3>{getInitials(match.team1)} v {getInitials(match.team2)}, {match.date}</h3></Link> 
          )
        })}  
        
      </div>

    </div>

  )
  
}

export default MatchSidebar;