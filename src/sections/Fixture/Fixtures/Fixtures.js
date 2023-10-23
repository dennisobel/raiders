import React from 'react';
import './Fixtures.css';

import { PageTitle } from '../../../components';
import { fixtures } from '../../../constants';
import { getTeamLogo } from '../../../utils';

import { Link } from 'react-router-dom'; 



const Fixtures = () => {

  return ( 
    <> 

      {/* Page Title */}
      <PageTitle title={'FIXTURES'} page={'fixtures'} />

      {/* Fixtures Section */}
      <section className='fixtures'>
        {/* Map over the fixtures array */}
        {fixtures.map((fixture) => {
          return(
            // Link to individual fixture page
            <Link 
              to={{
                // pathname: '/Fixtures/' + fixture.team1 + '-Vs-' + fixture.team2,
              }}
              state={fixture}
              className='fixture-item'
              key={fixture.id}>

                {/* Team-1 Logo and Name */}
                <div className='team-logo'> 
                  <img src={getTeamLogo(fixture.team1)} alt='Event' /> {/* Team-1 Logo */}
                  <h3>{fixture.team1}</h3> {/* Team-1 Name */}
                </div>

                {/* Fixture Content */}
                <div className='fixture-content'>
                  <div className='time'>{fixture.date} - {fixture.time}</div> {/* Fixture Date and Time */}
                  <div className='venue'>{fixture.venue}</div> {/* Fixture Venue */}
                  <div className='result'>{fixture.result}</div> {/* Fixture Result */}
                </div>

                {/* Team-2 Logo and Name */}
                <div className='team-logo'>
                  <img src={getTeamLogo(fixture.team2)} alt='Event' /> {/* Team-2 Logo */}
                  <h3>{fixture.team2}</h3> {/* Team-2 Name */}
                </div>
            </Link>
          )
        })} 

      </section> 
    </>
  )
  
}

export default Fixtures;