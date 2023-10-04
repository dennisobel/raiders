import React from 'react';

import { PageTitle, PointTable } from '../../../components';


  
const PointTablePage = () => {
  
  return ( 
    <>
      {/* Page Title */}
      <PageTitle title={'point table'} page={'point table'} />

      {/* Point Table Section */}
      <section className='point-table'>
        <PointTable />
      </section> 
    </> 
  );
}

export default PointTablePage;
