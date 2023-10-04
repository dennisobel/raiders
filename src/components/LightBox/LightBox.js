import React, { useState } from 'react';

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

 
 
const LightBox = (props) => { 

  // Destructuring props
  const { images, className } = props;

  // State to track the index of the currently displayed image
  const [index, setIndex] = useState(-1);

  // Get the current, next, and previous images based on the index
  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  // Event handler to open the lightbox
  const openLightbox = (index) => setIndex(index);
  // Event handler to close the lightbox
  const closeLightbox = () => setIndex(-1);
  // Event handler to move to the previous image
  const handleMovePrev = () => setIndex(prevIndex);
  // Event handler to move to the next image
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className={`${className}-gallery`}>
      <div className='box-container'>
        
        {/* Render all the images */}
        {images.map((item, index) => (
          <img
            onClick={() => openLightbox(index)}
            key={item.id}
            src={item.image}
            alt=''
          />
        ))}

        {/* Render the Lightbox component if an image is currently selected */}
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

export default LightBox;