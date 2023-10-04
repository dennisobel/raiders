import React from 'react';

import { PageTitle, Portfolio } from '../../../components';



const PortfolioPage = () => {

  return (
    <>  
      {/* Page Title */}
      <PageTitle title={'Portfolio'} page={'Portfolio'} />

      {/* Portfolio Section */}
      <section> 
        <Portfolio />
      </section>
    </>
  );
  
}

export default PortfolioPage;