import React from 'react';
import './Blog.css';

import { countCommentsAndReplies } from '../../utils';

import { FaUserCircle, FaComment } from 'react-icons/fa';

import { Link } from 'react-router-dom';

  
   
const Blog = (props) => {

  // Destructuring props
  const { id, image, date, heading, content, blog, admin, category } = props;

  // Initializing the totalComments variable
  let totalComments = 0;

  // Checking if comments exist
  if (blog.comments) {
    // Calling the countCommentsAndReplies function to count the comments and replies
    totalComments = countCommentsAndReplies(blog.comments);
  }

  return (

    <div className='blog-item' key={id}>

      {/* Blog image */}
      <div className='image'>
        <img src={image} alt='Blog' />
        {/* <div className='date'>{date.substring(0, date.indexOf(","))}</div> */}
      </div>

      <div className='content'>

        {/* Blog category */}
        <Link
          className='category'
          key={blog.id}
          to={`/Blogs/category/${category}`}>
          {category}
        </Link> 
        
        {/* Link to the individual blog post */}
        <Link
          to={{
            pathname: '/Blogs/' + heading,
          }}
          state={blog}
          className='main-heading' >
          {/* Blog heading */}
          {heading}
        </Link>

        {/* Blog content */}
        <p>{content}</p>

        {/* Blog Details section */}
        <div className='details'>
          <h3><FaUserCircle className='icon' /><span>By {admin}</span></h3> {/* blog admin */}
          <h3><FaComment className='icon' /><span>{totalComments} comments</span></h3> {/* blog comments count */}
        </div>
        
      </div>
      
    </div>
  );
};

export default Blog;