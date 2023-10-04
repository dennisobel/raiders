import React from 'react';

import { PageTitle } from '../../../components';
import { Testimonials } from '../../../sections';



const TestimonialsPage = () => {
  return ( 
    <> 
      {/* Page title */}
      <PageTitle title={'testimonials'} page={'testimonials'} />

      {/* Testimonials section */}
      <Testimonials />
    </>
  );
};

export default TestimonialsPage;