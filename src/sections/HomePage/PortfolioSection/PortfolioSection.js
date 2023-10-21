import React from 'react';

import { Heading, Portfolio } from '../../../components';


 
const PortfolioSection = () => {
  return (
    <section> 
      {/* Section heading */}
      <Heading title={'portfolio'} />
      {/* Portfolio Component */}
      <Portfolio />
    </section>
  ); 
}

export default PortfolioSection;