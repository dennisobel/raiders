import React from 'react';
import './Blogs.css';

import { Blog, Heading } from '../../../components';
import { blogContent } from '../../../constants';
import { latestItems } from '../../../utils';
 
 
 
const Blogs = () => {
 
  // Get the latest blogs
  const blogs = latestItems(blogContent);

  return (
    
    <section className='blog main' id='blog'>

      {/* Section heading */}
      {/* <Heading title={'blogs'} /> */}
            <h2 style={{
          fontWeight: "500",
          fontSize: "4rem",  
          color: "red",
          textTransform: "capitalize",
          position: "relative",
          paddingBottom: "0.5rem",
          textAlign: "center"
      }}>Blogs</h2>

      <div className='box-container'>
        {/* Render each blog */}
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            image={blog.image}
            date={blog.date}
            admin={blog.admin}
            heading={blog.heading}
            content={blog.content}
            category={blog.category}
            blog={blog}
          />
        ))}
      </div>

    </section>
  );
}

export default Blogs;