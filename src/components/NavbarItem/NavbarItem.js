import React from 'react';
import './NavbarItem.css';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

 
 
const NavbarItem = (props) => { 
    
    // Destructuring props
    const { id, mainLink, subLink, isActive, onNavLinkClick } = props;

    return ( 
        <div className="nav-link">
            
            {/* Main Navigation Link */}
            <div className={`main-nav-link ${isActive ? 'active' : ''}`} onClick={() => onNavLinkClick(id)}>
                {subLink.length ? <div className='nav-btn'>{mainLink.title}</div> : <Link className='nav-btn' to={mainLink.link}>{mainLink.title}</Link>}
                {subLink.length > 0 && <div className='icon'>{isActive ? <FaMinus /> : <FaPlus />}</div>}
            </div>

            {/* Sub Navigation Links */}
            {(isActive && subLink.length > 0) && (
                <p className="sub-nav-link">
                    {subLink.map((item) => {
                        return (
                            <Link to={item.link} state={item.state} key={item.id}>{item.title}</Link>
                        )
                    })}
                </p>
            )}
        </div>
    )
}

export default NavbarItem;