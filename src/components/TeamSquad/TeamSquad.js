import React from 'react';
import './TeamSquad.css';

  
 
const TeamSquad = (props) => {

  // Destructuring props
  const { teamName, teamSquad } = props;

  return ( 

    <div className='team-squad'>

      {/* Team name */}
      <div className='title'>{teamName}</div>

      <div className='box-container'>

        {/* Column headers for the squad */}
        <div className='sub-heading'>
          <h3>#</h3>
          <h3>player</h3>
          <h3>playing role</h3>
        </div>

        {/* Squad Details */}
        <div className='squad-content'>
          {/* Render each player in the squad */}
          { teamSquad.map((player) => {
            return(
              <div className='squad-item' key={player.id}>
                <h3>{player.id}</h3> {/* Player number */}
                <h3>{player.name}</h3> {/* Player name */}
                <p>{player.role}</p> {/* Player playing role */}
              </div>
            )
          })}
        </div>

      </div>

    </div>

  );
}

export default TeamSquad;
