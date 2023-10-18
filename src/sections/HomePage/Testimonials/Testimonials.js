import React from 'react';
import './Testimonials.css';

import { Heading } from '../../../components';
import { testiContent } from '../../../constants';

import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';
 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 
// Import Swiper styles 
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Testimonials = () => {
  return (
    <section className='testimonials'>

      {/* Section heading */}
      <Heading title={'our testimonials'} />

      <div className='testimonial-slider'>

        <Swiper
          // Install Swiper modules
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            // When window width is >= 768px
            768: {
              slidesPerView: 1,
            }, 
            // 991: {
            //   slidesPerView: 2,
            // },
          }} 
        >
          {/* Map over the testiContent array to render each testimonial */}
          {testiContent.map((testimonial) => {

            // Destructure testimonial object
            const { id, image, content, name, title } = testimonial;

            return (
              <SwiperSlide className='testi-item' key={id}>

                <img src={image} alt="Testimonial-Pic" /> {/* User Image */}
                <FaQuoteLeft className='quote-left' /> {/* Testimonial quote icon */}
                <p>{content}</p> {/* Testimonial */}

                {/* Author Details */}
                <div className='text'>
                  <h6>{title}</h6> {/* Author title */}
                  <h4>{name}</h4> {/* Author name */}
                </div>

              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;