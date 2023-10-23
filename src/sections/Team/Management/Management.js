import React from 'react';

import { Management, PageTitle } from '../../../components';



const ManagementPage = () => {
  
  return ( 
    <>

      {/* Page title */}
      <PageTitle title={'MANAGEMENT'} page={'team'} />  
 
      {/* Management Section */}
      <section>
        <Management />
      </section>
 
    </>
  )
  
}

export default ManagementPage;