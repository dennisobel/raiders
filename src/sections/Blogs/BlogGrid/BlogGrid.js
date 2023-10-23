import React from 'react';
import './BlogGrid.css';

import { PageTitle, BlogSidebar, Blog, PagesNo } from '../../../components';
import { blogContent } from '../../../constants';
import { useBlogFilter } from '../../../utils';

 
 
const BlogGrid = () => {  

  const itemsPerPage = 6;

  // Fetch filtered and paginated blog data using custom hook
  const {
    selectedCategory,
    selectedTag,
    filteredBlogs,
    searchKeyword,
    currentPage,
    handleSearchSubmit,
    displayedBlogs,
    totalPages,
    handlePageChange,
  } = useBlogFilter(blogContent, itemsPerPage);


  return (
    <>

      {/* Page title */}
      <PageTitle title={'BLOGS'} page={'blog grid'} />

      <section className='blog grid'>
        
        {/* Blog sidebar */}
        <BlogSidebar
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          handleSubmit={handleSearchSubmit}
        />

        {/* Blog Container (Grid Layout) */}
        <div className='blog-container grid'>
          {filteredBlogs.length === 0 ? (
            <div className='no-found'>No Result For "{searchKeyword}".</div>
          ) : (
            <>
              {/* Displayed blog items */}
              <div className='blog-items'>
                {displayedBlogs.map((blog) => {
                  return (
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
                  );
                })}
              </div>

              {/* Pagination */}
              <PagesNo
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogGrid;