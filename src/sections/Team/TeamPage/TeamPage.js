import React from 'react';
import './TeamPage.css';

import { Heading, Management, PageTitle, Players } from '../../../components';



const TeamPage = () => {
  
  return (  
    <>
    
      {/* Page title */}
      <PageTitle title={'team'} page={'team'} />  

      <section className='team'>
        
        {/* Team management section */}
        <div className='management'>
          <Heading title={'team management'} /> {/* Section heading */}
          <Management />
        </div>

        {/* Team players section */}
        <div className='players'>
          <Heading title={'team players'} /> {/* Section heading */}
          <Players />
        </div>

      </section>

    </>
  )
  
}

export default TeamPage;