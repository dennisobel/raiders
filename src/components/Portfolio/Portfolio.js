import React, { useEffect, useState } from 'react';
import './Portfolio.css';

import { PortfolioItem, PortfolioTabs } from '../../components';
import { portfolio } from '../../constants'; 
 
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
 


const Portfolio = () => {
 
  // State
  const [category, setCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  // State to track the index of the currently displayed image
  const [index, setIndex] = useState(-1);

  // Handlers for lightbox navigation
  const currentImage = portfolio[index];
  const nextIndex = (index + 1) % portfolio.length;
  const nextImage = portfolio[nextIndex] || currentImage;
  const prevIndex = (index + portfolio.length - 1) % portfolio.length;
  const prevImage = portfolio[prevIndex] || currentImage;

  const openLightbox = (index) => setIndex(index);
  const closeLightbox = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  // Filter images based on selected category
  useEffect(() => {
    if (category === 'all') { 
      setFilteredImages(portfolio);
    } else {
      const filtered = portfolio.filter((image) =>
        image.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredImages(filtered);
    }
  }, [category]);

  // Get unique categories from the portfolio
  const categories = ['all', ...new Set(portfolio.map(item => item.category))];

  return (
    <div className='portfolio'>

      {/* Render portfolio tabs buttons */} 
      <ul className='controls'>
        {categories.map((item) => { 
          return(
            <PortfolioTabs
            key={item} 
            id={item} 
            title={item}
            setSelected={setCategory}
            active={category == item ? true: false } 
            />
          ) 
        })
        }
      </ul>  

      <div className='box-container'>
        
        {/* Render portfolio items */}
        {filteredImages.map((item, index) => {
          return (
            <PortfolioItem
              key={item.id}
              id={index}
              image={item.image}
              title={item.title}
              category={item.category}
              portfolio={item}
              popup={openLightbox}
            />
          );
        })}

        {/* Render lightbox when index is not -1 */}
        {index !== -1 && (
          <Lightbox
            mainSrc={currentImage.image}
            imageTitle={currentImage.title}
            mainSrcThumbnail={currentImage.image}
            nextSrc={nextImage.image}
            nextSrcThumbnail={nextImage.image}
            prevSrc={prevImage.image}
            prevSrcThumbnail={prevImage.image}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}

      </div>

    </div>
  );
};

export default Portfolio;