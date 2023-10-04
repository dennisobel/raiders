import React from 'react';

import { Home, About, Counter, Testimonials, Blogs, PlayerSlider, Trophies, HomeEvents, ResultAndPoint, HomeShop, Sponsors, PortfolioSection } from '../../sections';



const HomePage = (props) => {

  // Destructuring props
  const { addToCart } = props;

  return (
    <div className='homepage'>
      <Home /> {/* Home Section */}
      <About /> {/* About Section */}
      <HomeEvents /> {/* Upcoming Events */}
      <PlayerSlider /> {/* Player Slider Section */}
      <ResultAndPoint /> {/* Latest Result & Point Table Section */}
      <PortfolioSection /> {/* Portfolio Section */}
      <Counter /> {/* Counter Container */}
      {/* <HomeShop addToCart={addToCart} /> */}
      <Trophies /> {/* Trophies Section */}
      <Blogs /> {/* Blogs Section */}
      <Testimonials /> {/* Testimonials Section */}
      <Sponsors /> {/* Sponsors Section */}
    </div>
  )
}

export default HomePage;