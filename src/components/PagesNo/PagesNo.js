import React from 'react';
import './PagesNo.css';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';


 
const PagesNo = (props) => {

  // Destructuring props
  const { currentPage, totalPages, handlePageChange } = props;

  // Handle page click event
  const handlePageClick = (pageNumber) => {
    handlePageChange(pageNumber);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <div className='pages-no'>

      <div className='container'>
        {/* Previous page button */}
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className='item'
        >
          <BsArrowLeft />
        </button>

        <div className='numbers'>
          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              disabled={currentPage === index + 1}
              className={`item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Next page button */}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='item'
        >
          <BsArrowRight />
        </button>
      </div>
      
    </div>
  );
};

export default PagesNo;