import React from 'react';
import './PointTable.css';

import { pointTable } from '../../constants';
import { getTeamLogo } from '../../utils';

  
  
const PointTable = () => {

  return (

    <div className='points-container'>

      {/* Table title */}
      <div className='table-title'>
        <h3 className='name'>Team</h3>
        <h3>M</h3>
        <h3>W</h3>
        <h3>L</h3>
        <h3>NRR</h3>
        <h3>Pts</h3>
      </div>

      {/* Points */}
      <div className='points'>
        {pointTable.map((team, index) => {
          return(
            <div className='point-item' key={index}>
              <div className='box name'>
                <img src={getTeamLogo(team.name)} alt='' /> {/* Team logo */}
                <span>{team.name}</span> {/* Team name */}
              </div>
              {/* Team statistics */}
              {(team.stats).map((stat, index) => {
                return <div key={index} className='box'>{stat}</div>
              })}
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default PointTable;
