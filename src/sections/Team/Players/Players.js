import React from 'react';

import { PageTitle, Players } from '../../../components';



const PlayersPage = () => {

  return ( 
    <> 
 
      {/* Page title */}
      <PageTitle title={''} page={'players'} /> 
 
      {/* Players Section */}
      <section>
        <Players />
      </section>
    </>

  )
  
}

export default PlayersPage;