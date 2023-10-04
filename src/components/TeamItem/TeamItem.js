import React from 'react';
import './TeamItem.css';

import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


  
const TeamItem = (props) => {

    // Destructuring props
    const { id, image, name, title, player, accounts } = props;

    return (
        <div className='team-item' key={id}>

            {/* Team member image Container */}
            <div className='image'> 
            
                {/* Team member Picture */}
                <img src={image} alt='Team-Pic' />

                {/* Social media icons */}
                <div className='icon-container'>
                    <a className='icon' href={accounts.facebook}><FaFacebookF /></a>
                    <a className='icon' href={accounts.linkedin}><FaLinkedin /></a>
                    <a className='icon' href={accounts.twitter}><FaTwitter /></a>
                    <a className='icon' href={accounts.instagram}><FaInstagram /></a>
                </div>

            </div> 

            {/* Team member content */}
            <div className='content'>
                {/* Conditional rendering based on the player data */}
                {player ? ( // If player data exists, render the Link
                    <Link
                        to={{
                            pathname: '/Team/Players/' + name,
                        }}
                        state={player}
                        className='main-heading'
                    >
                        <h2>{name}</h2>
                    </Link>
                ) : ( // If player data doesn't exist, render just the name
                    <h2>{name}</h2>
                )}  
                <h5>{title}</h5> {/* Team member title */}
            </div>
            
        </div>
    );
}

export default TeamItem;