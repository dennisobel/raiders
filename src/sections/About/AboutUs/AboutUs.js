import React from 'react';
import './AboutUs.css';

import { Heading, Management, PageTitle } from '../../../components';
import { About, Testimonials, Counter, Sponsors, Trophies } from '../../../sections';



const AboutUs = () => {
  return ( 
    <> 
      {/* Page title */}
      <PageTitle title={'about us'} page={'about'} />

      <section className='about-us'>
        
        {/* About section */}
        <About />

        {/* Counter section */}
        <Counter />

        {/* Management section */}
        <section>
          <Heading title={'team management'} />
          <Management />
        </section>

        {/* Tropies section */}
        <Trophies />

        {/* Testimonials section */}
        <Testimonials />

        {/* Sponsors Section */}
        <Sponsors />

      </section>
    </>
  );
}

export default AboutUs;