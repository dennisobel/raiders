import React from 'react';
import './About.css';

import { Button, Heading } from '../../../components';
import { images } from '../../../constants'; 

 
 
const About = () => {

  return ( 

    <section className='about'>

      {/* Section heading */}
      <Heading title={'about us'} />

      <div className='box-container'>

        {/* About images */}
        <div className='image'>
          <img className='sub-image1' src={images.about1} alt='About-Pic' /> {/* First image */}
          <img className='sub-image2' src={images.about2} alt='About-Pic' /> {/* Second image */}
        </div>

        {/* About description */}
        <div className='content'>
          <h3>We play as a team, we win as a team.</h3> {/* Heading */}
          <div className='line'></div> {/* Divider line */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto minima quo, recusandae perspiciatis aspernatur, rerum tempora vitae aperiam enim, dicta maxime? Eum repellat velit perspiciatis eligendi rerum voluptate repellendus.</p> {/* Description */}
          <Button link={'About-us'} title={'read more'} /> {/* About-Us Button */}
        </div>

      </div>
      
    </section>
  );
}

export default About;