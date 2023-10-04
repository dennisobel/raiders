import React from 'react';
import './HomeEvents.css';

import { Link } from 'react-router-dom';

import { Heading } from '../../../components';
import { events } from '../../../constants';
import { getTeamLogo } from '../../../utils';


 
const HomeEvents = () => {    

  // Get the first 3 upcoming events
  const homeEvents = events.slice(0, 3);

  return (

    <section className='home-events linear-bg'> 

      {/* Section heading */}
      <Heading title={'upcoming events'} /> 

      {/* Render each upcoming event */}
      <div className='box-container'>
        {homeEvents.map((event) => {
          return( 
            <div className='upcoming-item' key={event.id}>
              <div className='content'>
                <div className='time'>{event.date} - {event.time}</div> {/* Event date and time */}
                <div className='team-content'>
                  <div className='team-logo'>
                    <img src={getTeamLogo(event.team1)} alt='Event' /> {/* Team 1 logo */}
                    <h3>{event.team1}</h3> {/* Team 1 name */}
                  </div>
                  <h6>vs</h6>
                  <div className='team-logo'>
                    <img src={getTeamLogo(event.team2)} alt='Event' /> {/* Team 2 logo */}
                    <h3>{event.team2}</h3> {/* Team 2 name */}
                  </div>
                </div>
                <div className='venue'>{event.venue}</div> {/* Event venue */}
              </div>
              <div className='btn-container'>
                <a href="#" className='btn'>ticket</a>  {/* Ticket button */}
                <Link 
                  to={{
                    pathname: '/Events/' + event.team1+'-Vs-'+event.team2,
                  }}
                  state={event}
                  className='btn'>details
                </Link> {/* Details button */}
              </div>
            </div>
          )
        })}
      </div>

    </section>
  );
}

export default HomeEvents;