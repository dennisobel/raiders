import React from 'react';
import './EventSingle.css';

import { MatchSidebar, PageTitle, TeamSquad } from '../../../components';
import { cricketTeams, events } from '../../../constants';
import { getTeamLogo } from '../../../utils/TeamLogo';

import { useLocation } from 'react-router-dom';


 
const EventSingle = () => { 
 
  const location = useLocation();  
  const event = location.state;

  // Function to get team squad based on team name
  function teamSquad(teamName) { 
    for (let i = 0; i < cricketTeams.length; i++) {
      if (cricketTeams[i].name === teamName) {
        return cricketTeams[i].players;
      }
    }
    return null; // Return null if no matching team is found
  }

  return (
    <>
      {/* Page Title */} 
      <PageTitle title={''} page={'event single'} />

      <section className='event-single'>

        <div className='event-info'>

          <div className='event-intro'>

            <div className='intro'>

              {/* Team-1 Logo and Name */}
              <div className='team-logo'>
                <img src={getTeamLogo(event.team1)} alt='Event' /> {/* Team-1 Logo */}
                <h3>{event.team1}</h3> {/* Team-1 Name */}
              </div>

              <h5>VS</h5>

              {/* Team 2 Logo and Name */}
              <div className='team-logo'>
                <img src={getTeamLogo(event.team2)} alt='Event' /> {/* Team-2 Logo */}
                <h3>{event.team2}</h3> {/* Team-2 Name */}
              </div>

            </div>

            {/* Event content */}
            <div className='event-content'>
              <div className='time'>{event.date} - {event.time}</div> {/* Event Date and Time */}
              <div className='venue'>{event.venue}</div> {/* Event Venue */}
            </div>

          </div>

          {/* Team squad for team1 */}
          <TeamSquad teamName={event.team1} teamSquad={teamSquad(event.team1)} />

          {/* Team squad for team2 */}
          <TeamSquad teamName={event.team2} teamSquad={teamSquad(event.team2)} />

          {/* Match details */}
          <div className="match-details">
            <div className="title">match details</div>
            <div className="content">
              {/* Match Number */}
              <div className="item">
                <h3>Match</h3>
                <p>{event.series}, {event.matchNo} match</p>
              </div>
              {/* Date */}
              <div className="item">
                <h3>date</h3>
                <p>{event.date}</p>
              </div>
              {/* Time */}
              <div className="item">
                <h3>time</h3>
                <p>{event.time}</p>
              </div>
              {/* Venue */}
              <div className="item">
                <h3>venue</h3>
                <p>{event.venue}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar displaying upcoming events */}
        <MatchSidebar title={'upcoming events'} matches={events} />        

      </section> 
    </> 
  );
}

export default EventSingle;
