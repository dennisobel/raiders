import React from 'react';

import { TeamItem } from '../../components';
import { players } from '../../constants';



const Players = () => {
 
  return (   
    <div className='team'>
      <div className='box-container'>
        {
          // Map over the players array to render each player
          players.map((player) => {
            return (
              <TeamItem 
                key={player.id}
                image={player.image}
                name={player.name}
                title={player.title}
                accounts={player.accounts}
                player={player}
              />
            )
          })
        }
      </div>
    </div>
  )
  
}

export default Players;