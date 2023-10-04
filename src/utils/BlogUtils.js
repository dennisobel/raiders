/***** 
*)-useBlogFilter: A custom React Hook that facilitates filtering and pagination of a list of blogs based on selected category, tag, and search keyword. 
 * It manages state variables and provides functions for handling category, tag, and search changes, as well as search form submission and page navigation.

1)-handleCategory: Handles the change of selected category and updates the filtered blogs accordingly.
 * searchBlogsByCategory: Filters blogs by the specified category.

2)-handleTag: Handles the change of selected tag and updates the filtered blogs accordingly.
 * searchBlogsByTag: Filters blogs by the specified tag.

3)-handleSearch: Handles the change of search keyword and updates the filtered blogs accordingly.
 * searchBlogsByTitle: Filters blogs by the specified search keyword in the heading.
 * handleSearchSubmit: Handles the submission of the search form and navigates to the search results page.

*****/ 


import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


/***
 * A custom React Hook that facilitates filtering and pagination of a list of blogs based on selected category, tag, and search keyword.
 * initialBlogs - The initial array of blogs to filter.
 * itemsPerPage - The number of blogs to display per page.
 * Return An object with relevant state variables and functions for filtering and pagination.
 */

export const useBlogFilter = (initialBlogs, itemsPerPage) => {

  // Router navigation
  const navigate = useNavigate();
  
  // State variables
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Get category, tag, and search params from the URL
  const { category, tag, search } = useParams();


  // Set selected category, tag, and search keyword based on URL params
  useEffect(() => {
    setSelectedCategory(category || '');
    setSelectedTag(tag || '');
    setSearchKeyword(search || '');
  }, [category, tag, search]);
    

  useEffect(() => {

    let matchingBlogs = initialBlogs;
  
    // Filter blogs based on the selected category
    if (selectedCategory) {
      matchingBlogs = handleCategory(selectedCategory);
    }
  
    // Filter blogs based on the selected tag
    if (selectedTag) {
      matchingBlogs = handleTag(selectedTag);
    }
  
    // Filter blogs based on the search keyword
    if (searchKeyword) {
      matchingBlogs = handleSearch(searchKeyword);
    }
  
    // Set the filtered blogs or empty array if no matching blogs
    setFilteredBlogs(matchingBlogs.length > 0 ? matchingBlogs : []);
  
    // Reset the current page to 1
    setCurrentPage(1);
    
  }, [selectedCategory, selectedTag, searchKeyword, initialBlogs]);  


  /*************** 1-Blogs By Category  ***************/
  // Handle category change
  const handleCategory = (categoryTitle) => {
    setSelectedCategory(categoryTitle.toLowerCase());
    const matchingBlogs = searchBlogsByCategory(initialBlogs, categoryTitle);
    return matchingBlogs;
  };

  /**
   * Filter blogs by category.
   * blogs - The array of blogs to filter.
   * category - The category to filter by.
   * Return the filtered array of blogs.
  */
  const searchBlogsByCategory = (blogs, category) => {
    return blogs.filter((blog) => blog.category.toLowerCase() === category.toLowerCase());
  };


  /*************** 2-Blogs By Tags ***************/
  // Handle tag change
  const handleTag = (tagTitle) => {
    setSelectedTag(tagTitle.toLowerCase());
    const matchingBlogs = searchBlogsByTag(initialBlogs, tagTitle);
    return matchingBlogs;
  };

  /**
   * Filter blogs by tag.
   * blogs - The array of blogs to filter.
   * tag - The tag to filter by. 
   * Return The filtered array of blogs.
  */
  const searchBlogsByTag = (blogs, tag) => {
    return blogs.filter((blog) => {
      return blog.tags.some((tagObj) => tagObj.toLowerCase() === tag.toLowerCase());
    });
  };


  /*************** 3-Blogs By Title  ***************/
  // Handle search keyword change
  const handleSearch = (searchValue) => { 
    setSearchKeyword(searchValue.toLowerCase());
    const matchingBlogs = searchBlogsByTitle(initialBlogs, searchValue);
    return matchingBlogs;
  };

  /**
   * Filter blogs by title.
   * blogs - The array of blogs to filter.
   * heading - The search keyword to filter by.
   * Return The filtered array of blogs.
  */
  const searchBlogsByTitle = (blogs, heading) => {
    const filteredBlogs = blogs.filter((blog) => blog.heading.toLowerCase().includes(heading));
    return filteredBlogs.length > 0 ? filteredBlogs : [];
  };

  // Handle search form submission
  const handleSearchSubmit = (selectedSearchQuery) => {
    navigate(`/Blogs/search/${selectedSearchQuery}`);
  };


  /*************** 4-Page Change ***************/
  const displayBlogs = filteredBlogs.length > 0 ? filteredBlogs : initialBlogs;

  // Calculate start and end index based on current page and items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the blogs to display on the current page
  const displayedBlogs = displayBlogs.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(displayBlogs.length / itemsPerPage);

  // Update current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return {
    selectedCategory,
    selectedTag,
    filteredBlogs,
    searchKeyword, 
    currentPage,
    handleSearchSubmit,
    displayedBlogs,
    totalPages,
    handlePageChange,
  };
}; 