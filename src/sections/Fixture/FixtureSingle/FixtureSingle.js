import React from 'react';
import './FixtureSingle.css';

import { MatchSidebar, PageTitle, TeamInning } from '../../../components';
import { fixtures } from '../../../constants';
import { getTeamLogo } from '../../../utils'; 

import { useLocation } from 'react-router-dom';



const FixtureSingle = () => {  

  const location = useLocation();   
  const fixture = location.state;

  return ( 
    
    <>

      {/* Page Title */}
      <PageTitle title={'FIXTURE'} page={'fixture single'} />

      <section className='fixture-single'>

        <div className='fixture-info'>

          <div className='fixture-intro'>
            <div className='intro'>

              {/* Team-1 Result */}
              <div className='team-result'>
                <div className='name'>
                  <img src={getTeamLogo(fixture.team1)} alt='Team-Logo' /> {/* Team-1 Logo */}
                  <h3>{fixture.team1}</h3> {/* Team-1 Name */}
                </div>
                <div className='result'>
                  <h5>{fixture.team1Inning.score}</h5> {/* Team-1 Inning Score */}
                  <p>({fixture.team1Inning.overs})</p> {/* Team-1 Inning overs played */}
                </div>
              </div>

              {/* Team-2 Result */}
              <div className='team-result'>
                <div className='result'>
                  <h5>{fixture.team2Inning.score}</h5> {/* Team-2 Inning Score */}
                  <p>({fixture.team2Inning.overs})</p> {/* Team-2 Inning Overs Played */}
                </div>
                <div className='name'>
                  <img src={getTeamLogo(fixture.team2)} alt='Event' /> {/* Team-2 Logo */}
                  <h3>{fixture.team2}</h3> {/* Team-2 Name */}
                </div>
              </div>
            </div>

            {/* Fixture content */}
            <div className='fixture-content'>
              <div className='time'>{fixture.date} - {fixture.time}</div> {/* Date and Time of the fixture */}
              <div className='venue'>{fixture.venue}</div> {/* Venue of the fixture */}
              <div className='result'>{fixture.result}</div> {/* Result of the fixture */}
            </div> 
          </div>
 
          {/* Team-1 Inning */}
          <TeamInning teamTitle={fixture.team1} team={fixture.team1Inning} />

          {/* Team-2 Inning */}
          <TeamInning teamTitle={fixture.team2} team={fixture.team2Inning} />
 
          {/* Match Details Title */}
          <div className="match-details">

            <div className="title">match details</div> {/* Match Details Title */}
            
            <div className="content">

              {/* Match Number */}
              <div className="item">
                <h3>Match</h3>
                <p>{fixture.series}, {fixture.matchNo} match</p>
              </div>

              {/* Fixture Date */}
              <div className="item">
                <h3>date</h3>
                <p>{fixture.date}</p>
              </div>

              {/* Fixture Time */}
              <div className="item"> 
                <h3>time</h3>
                <p>{fixture.time}</p>
              </div>

              {/* Fixture Venue */}
              <div className="item">
                <h3>venue</h3>
                <p>{fixture.venue}</p>
              </div>

              {/* Fixture Toss */}
              <div className="item">
                <h3>toss</h3>
                <p>{fixture.toss}</p>
              </div>

              {/* Player of the Match */}
              <div className="item">
                <h3>player of the match</h3>
                <p>{fixture.POM}</p>
              </div>

            </div>
          </div>

        </div>

        {/* Sidebar displaying Recent Fixtures */}
        <MatchSidebar title={'recent Fixtures'} matches={fixtures} />  

      </section> 

    </>

  )
  
}

export default FixtureSingle;