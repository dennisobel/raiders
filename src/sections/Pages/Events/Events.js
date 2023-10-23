import React from 'react';
import './Events.css';

import { PageTitle } from '../../../components';
import { events } from '../../../constants';
import { getTeamLogo } from '../../../utils';

import { FaArrowRight, FaTicketAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

  
 
const Events = () => {

  return ( 
    <>
      {/* Page Title */}
      <PageTitle title={'EVENTS'} page={'Events'} />

      {/* Section for upcoming events */}
      <section className='upcoming-events'>

        <div className='box-container'>

          {/* Mapping through events array */}
          {events.map((event) => {
            return( 
              <div className='event-item' key={event.id}>
                {/* Link to individual event page */}
                <Link  
                  to={{
                    pathname: '/Events/' + event.team1+'-Vs-'+event.team2,
                  }}
                  state={event}
                  className='fixture-event'>

                    {/* Team-1 Logo and Name */}
                    <div className='team-logo'>
                      <img src={getTeamLogo(event.team1)} alt='Event' /> {/* Team-1 Logo */}
                      <h3>{event.team1}</h3> {/* Team-1 Name */}
                    </div>

                    {/* Event content */}
                    <div className='fixture-content'>
                      <div className='time'>{event.date} - {event.time}</div> {/* Event Date and Time */}
                      <div className='venue'>{event.venue}</div> {/* Event Venue */}
                    </div>

                    {/* Team 2 Logo and Name */}
                    <div className='team-logo'>
                      <img src={getTeamLogo(event.team2)} alt='Event' /> {/* Team-2 Logo */}
                      <h3>{event.team2}</h3> {/* Team-2 Name */}
                    </div>

                </Link>

                {/* Actions for the event */}
                <div className='action'>
                  <a href="#">ticket <FaTicketAlt /></a> {/* Link for purchasing tickets */}
                  <Link
                    to={{
                      pathname: '/Events/' + event.team1+'-Vs-'+event.team2,
                    }}
                    state={event}>report <FaArrowRight /> {/* Link to individual event page */}
                  </Link>
                </div>
              </div>
            )
          })}

        </div>

      </section> 
    </> 
  );
}

export default Events;
