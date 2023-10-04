import React from 'react';
import './Comment.css';

import { FaReply, FaStar } from 'react-icons/fa';

 

const Comment = (props) => { 
       
  // Destructuring props
  const { id, image, name, date, rating, content } = props;

  return (
    <div className='comment' key={id}>
      {/* User Image */}
      <div className='comment-image'>
        <img src={image} alt='' /> 
      </div>

      {/* Comment Content Container */}
      <div className='comment-content'>
        {/* Comment Intro */}
        <div className='intro'>
          <div className='name'>
            <h3>{name}</h3> {/* User Name */}
            <h6>{date}</h6> {/* Comment Date */}
          </div>
          {/* Render rating if it's greater than 0 */}
          {rating > 0 && (
            <div className='rating'>
              <div className='icon'>
                <FaStar />
              </div>
              <h5>{rating}</h5>
            </div>
          )}
        </div>
        {/* Comment Text */}
        <p className='text'>{content}</p>
        {/* Reply Icon */}
        <div className='icon-item'>
          <FaReply className='icon' />
          <span>reply</span>
        </div>
      </div> 
    </div>
  );
};

export default Comment;