import React from 'react';
import './PlayerSlider.css';

import { Heading, TeamItem } from '../../../components';
import { players } from '../../../constants';

// Import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper';

// Import Swiper React components 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles 
import 'swiper/css';   
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const PlayerSlider = () => {
  return (
    <section className='players'>

      {/* Section heading */}
      <Heading title={'players'} />

      <div className='player-slider'>

        {/* Swiper Slider */}
        <Swiper
          // Install Swiper modules
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
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
        {
          // Map over the players array to render each player
          players.map((team) => { 
            return (
              <SwiperSlide key={team.id}>
                {/* Render team item */}
                <TeamItem
                  key={team.id}
                  image={team.image}
                  name={team.name}
                  title={team.title}
                  accounts={team.accounts}
                  team={team}
                />
              </SwiperSlide>

            )
          })
        }
        </Swiper>
      </div>
    </section>
  );
}

export default PlayerSlider;