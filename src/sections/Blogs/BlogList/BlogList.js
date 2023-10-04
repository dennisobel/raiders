import React from 'react';
import './BlogList.css';

import { PageTitle, BlogSidebar, Blog, PagesNo } from '../../../components';
import { blogContent } from '../../../constants';
import { useBlogFilter } from '../../../utils';

  

const BlogList = () => {

  const itemsPerPage = 4;

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
      <PageTitle title={'blog list'} page={'blog list'} />

      <section className='blog list'>

        {/* Blog sidebar */}
        <BlogSidebar
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          handleSubmit={handleSearchSubmit}
        />

        {/* Blog Container (List Layout) */}
        <div className='blog-container list'>
          {filteredBlogs.length === 0 ? (
            <div className='no-found'>No Result For "{searchKeyword}".</div>
          ) : (
            <>
              {/* Displayed blog items */}
              {displayedBlogs.map((blog) => (
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

export default BlogList;