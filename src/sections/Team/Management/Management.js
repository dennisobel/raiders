import React from 'react';

import { Management, PageTitle } from '../../../components';



const ManagementPage = () => {
  
  return ( 
    <>

      {/* Page title */}
      <PageTitle title={'MEET THE STAFF'} page={'team'} />  
 
      {/* Management Section */}
      <section>
        <Management />
      </section>
 
    </>
  )
  
}

export default ManagementPage;