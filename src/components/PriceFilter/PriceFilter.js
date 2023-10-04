import React, { useState } from 'react';
import './PriceFilter.css';


 
const PriceFilter = (props) => {

  // Destructuring props
  const { priceRange, setPriceRange } = props;
  
  const [minPrice, setMinPrice] = useState(priceRange.min);
  const [maxPrice, setMaxPrice] = useState(priceRange.max);

  const rangeInputMax = 1000;
  const priceGap = 10; // Update the price gap to 10
  const sliderStep = 10; // Update the slider step to 10

  // Handle change for minimum price input
  const handleRangeMinChange = (e) => {
    const newMinVal = parseInt(e.target.value);
    if (maxPrice - newMinVal >= priceGap) {
      setMinPrice(newMinVal);
      setPriceRange({ ...priceRange, min: newMinVal });
    }
  };

  // Handle change for maximum price input
  const handleRangeMaxChange = (e) => {
    const newMaxVal = parseInt(e.target.value);
    if (newMaxVal - minPrice >= priceGap) {
      setMaxPrice(newMaxVal);
      setPriceRange({ ...priceRange, max: newMaxVal });
    }
  };

  // Calculate the style for the price range progress bar
  const calculateRangeStyle = () => {
    const leftPercentage = (minPrice / rangeInputMax) * 100;
    const rightPercentage = 100 - (maxPrice / rangeInputMax) * 100;
    return {
      left: `${leftPercentage}%`,
      right: `${rightPercentage}%`,
    };
  };

  return (
    <div className="price-filter">

      <div className="price-input">
        {/* Minimum price field */} 
        <div className='field'>
          <h3>min</h3>
          <span>${minPrice}</span>
        </div>
        <div className="separator">-</div>
        {/* Maximum price field */}
        <div className='field'>
          <h3>max</h3>
          <span>${maxPrice}</span>
        </div>
      </div>

      <div className="slider">
        {/* Price range progress bar */}
        <div className="progress" style={calculateRangeStyle()}></div>
      </div>

      <div className="range-input">
        {/* Minimum price input */}
        <input
          type="range"
          className="range-min"
          min="0"
          max={rangeInputMax}
          value={minPrice}
          step={sliderStep}
          onChange={handleRangeMinChange}
        />
        {/* Maximum price input */}
        <input
          type="range"
          className="range-max"
          min="0"
          max={rangeInputMax}
          value={maxPrice}
          step={sliderStep}
          onChange={handleRangeMaxChange}
        />
      </div>

    </div>
  );
};

export default PriceFilter;