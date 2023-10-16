import React from 'react';

import { Home, About, Counter, Testimonials, Blogs, PlayerSlider, Trophies, HomeEvents, ResultAndPoint, HomeShop, Sponsors, PortfolioSection } from '../../sections';



const HomePage = (props) => {

  // Destructuring props
  const { addToCart } = props;

  return (
    <div className='homepage'>
      <Home /> {/* Home Section */}
      <About /> {/* About Section */}
      {/* <HomeEvents />  */}
      {/* <PlayerSlider />  */}
      {/* <ResultAndPoint />  */}
      <PortfolioSection /> 
      <Counter /> 
      {/* <HomeShop addToCart={addToCart} /> */}
      {/* <Trophies /> */}
      <Blogs /> {/* Blogs Section */}
      {/* <Testimonials />  */}
      <Sponsors /> {/* Sponsors Section */}
    </div>
  )
}

export default HomePage;