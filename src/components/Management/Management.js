import React from 'react';

import { TeamItem } from '../../components';
import { management } from '../../constants';

 

const Management = () => {
  
  return ( 
    <div className='team'>

      <div className='box-container'>
        {
          // Map over the management array to render each management member
          management.map((team) => {
            return (
              <TeamItem
                key={team.id}
                image={team.image}
                name={team.name}
                title={team.title}
                accounts={team.accounts}
              />
            )
          })
        }
      </div>
      
    </div>

  )
  
}

export default Management;