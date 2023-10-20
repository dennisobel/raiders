import React from 'react';
import './Home.css';
import { Button } from '../../../components';
import { homeContent } from '../../../constants';
// import Swiper core and required modules 
import { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles  
import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';

const Home = () => {
  return (
    <section className='home'>
      <div className='home-slider'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          navigation
          pagination={{ clickable: true }}
        >
          {
            homeContent.map((home) => {
              return (
                <SwiperSlide className='home-item' key={home.id}>
                  {/* Home image */}
                  <img src={home.image} alt='home-pic' />
                  <>
                  {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FlVLx5KVThc?si=TNuZKMcZDerLRl8-&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                  </>
                  {/* Home content */}
                  <div className='content'>
                    <div className='text'>
                      <h3>{home.title}</h3> {/* Home title */}
                      <p>{home.content}</p> {/* Home content */}
                      <Button link={'contact-us'} title={'contact us'} /> {/* Contact us button */}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Home;