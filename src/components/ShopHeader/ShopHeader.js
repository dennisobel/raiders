import React from 'react';
import './ShopHeader.css';

import { FaList } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import Select from 'react-select';
 
  
// Array of Sorting Options   
const sorting = [
  { value: '', label: 'default', isDisabled: true },
  { value: 'featured', label: 'featured' },
  { value: 'lowPrice', label: 'low price' }, 
  { value: 'highPrice', label: 'high price' }
];

 
const ShopHeader = (props) => {

  // Destructuring props
  const { showing, total, sortOption, handleSort } = props;

  // Find the selected sorting option
  const selectedOption = sorting.find((option) => option.value === sortOption);

  return (
    
    <div className='shop-header'> 

      {/* Showing products count */}
      <div className='showing'>showing {showing} of {total} products </div>

      {/* Styles buttons */}
      <div className='styles'>
        <Link to='/shop-grid'><BsFillGrid3X3GapFill /></Link>
        <Link to='/shop-list'><FaList /></Link>
      </div>

      {/* Sorting Options select input */}
      <Select
          options={sorting}
          value={selectedOption} 
          onChange={handleSort}
          isSearchable={false}
          className="custom-select sorting box"
          classNamePrefix="custom-select-prefix" 
      />
      
    </div>
  )
}

export default ShopHeader;