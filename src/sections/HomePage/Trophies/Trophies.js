import React from 'react';
import './Trophies.css';

import { Heading } from '../../../components';
import { trophies } from '../../../constants';

// Import Swiper core and required modules
import { Autoplay } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles 
import 'swiper/css';    



const Trophies = () => {

  return (
    <section className='trophies linear-bg'>

      {/* Section heading */}
      <Heading title={'our trophies'} />

      <div className='trophy-slider'>

        <Swiper
          // Install Swiper modules
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
        {/* Map over the trophies array to render each trophy */}
        {trophies.map((trophy) => {
          return (
            <SwiperSlide className='trophy-item' key={trophy.id}>
              <img src={trophy.image} alt={trophy.title} /> {/* Trophy Image */}
              <h4> {trophy.title} <br/> {trophy.year} </h4> {/* Trophy Title and Year */}
            </SwiperSlide>
          )
          })
        }
        </Swiper>
      </div>
    </section>
  );
}

export default Trophies;