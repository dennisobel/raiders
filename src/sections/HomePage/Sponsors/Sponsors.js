import React from 'react';
import './Sponsors.css';

import { Heading } from '../../../components';
import { sponsors } from '../../../constants';
  
 

const Sponsors = () => { 

  return (
    <section className='sponsors'>

      {/* Section heading */}
      <Heading title={'our sponsors'} />

      <div className='box-container'>
        {/* Map over the sponsors array to render each sponsor */}
        {sponsors.map((sponsor, index) => {
            return (
              /* Render the sponsor image */
              <div className='sponsor-item' key={index}><img src={sponsor} alt='' /></div>
            )
          })
        }
        
      </div>
    </section>
  );
}

export default Sponsors;