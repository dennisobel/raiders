import React from 'react';
import './BlogSingle.css';

import { BlogSidebar, Comments, Lightbox, PageTitle } from '../../../components';
import { blogContent } from '../../../constants';
import { countCommentsAndReplies, useBlogFilter } from '../../../utils';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaUserCircle, FaComment, FaQuoteLeft, FaCircleNotch } from 'react-icons/fa';

import { Link, useLocation } from "react-router-dom";
 


const BlogSingle = () => { 

  // Extract necessary data and functions from useBlogFilter
  const { 
    selectedCategory,
    selectedTag,
    handleSearchSubmit,
  } = useBlogFilter(blogContent);

  const location = useLocation();
  const blog = location.state;

  const blogComments = blog.comments;

  // Initializing the totalComments variable
  let totalComments = 0;

  // Checking if comments exist
  if (blogComments) {
    // Calling the countCommentsAndReplies function to count the comments and replies
    totalComments = countCommentsAndReplies(blogComments); 
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Reset the form fields
    event.target.reset();
  };

  return (
    <> 
      {/* Page title */}
      <PageTitle title={'blog single'} page={'blog single'} />

      {/* Blog Single Section */}
      <section className='blog-single'>
        <div className='blog-container'>
          <div className='blog-info' key={blog.id}>

            {/* Blog Image Container */}
            <div className='image'>
              <img src={blog.image} alt='Blog' /> {/* Blog image */}
              <div className='date'>{blog.date.substring(0, blog.date.indexOf(","))}</div> {/* Blog publication date */}
            </div>

            <div className='content'>

              <div className='details'>

                {/* Blog category */}
                <Link
                  className='category'
                  key={blog.id}
                  to={`/Blogs/category/${blog.category}`}>
                  {blog.category}
                </Link>

                {/* Blog author and Comments Count */}
                <h3><FaUserCircle className='icon' /><span>By {blog.admin}</span> </h3> {/* Blog author */}
                <h3><FaComment className='icon' /><span>{totalComments} comments</span></h3> {/* blog comments count */}

              </div> 

              {/* Blog heading */}
              <h3 className='main-heading'>{blog.heading}</h3>

              {/* Blog paragraphs */}
              {(blog.paragraph).map((para, index) => {
                return <p key={index}>{para}</p>
              }) 
              }

              {/* Important quote */}
              <div className='important'>
                <FaQuoteLeft className='icon' />
                {blog.important}
              </div>

              <div className='blog-points'>

                <h4>{blog.subSection.subHeading}</h4> {/* Display the subheading */}
                <ul>
                  {(blog.subSection.points).map((point, index) => {
                    return <li key={index}><FaCircleNotch className='icon' />{point}</li> /* Display each point in a list */
                  })}
                </ul>

                {/* Blog image gallery */}
                <Lightbox images={blog.gallery} className={'blog'} /> {/* Display the image gallery using the Lightbox component */}

              </div>

              <div className='end-details'>
                {/* Blog tags */}
                <div className='tags'>
                  {blog.tags.map((item, index) => (
                    <Link
                      className='item'
                      key={index}
                      to={`/Blogs/tag/${item}`}>
                      {item}
                    </Link>
                  ))}
                </div> 

                {/* Share buttons */}
                <div className='share'>
                  <h3>share:</h3>
                  <FaFacebookF className='icon' />
                  <FaLinkedin className='icon' />
                  <FaTwitter className='icon' />
                  <FaInstagram className='icon' />
                </div>
              </div>
            </div>
          </div>

          {/* Comments section */}
          <Comments comments={blogComments} />

          {/* Leave a comment */}
          <div className='leave-reply'>
            <form className='form' onSubmit={handleSubmit}>
              <h3>leave a comment</h3> {/* Heading for the comment form */}
              <div className='input-box'>
                <input type="text" name="name" className='box' id="name" placeholder="name" required /> {/* Input field for name */}
                <input type="email" name="email" className='box' id="email" placeholder="email" required /> {/* Input field for email */}
              </div>
              <textarea cols="30" rows="10" name="comment" className='box' id="comment" placeholder="comment"></textarea> {/* Textarea for the comment */}
              <button type="submit" name="submit" id="submit" className='btn'>submit</button> {/* Submit button */}
            </form>
          </div>

        </div>

        {/* Blog Sidebar */}
        <BlogSidebar
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          handleSubmit={handleSearchSubmit}
        /> 

      </section>

    </>

  )
}

export default BlogSingle;