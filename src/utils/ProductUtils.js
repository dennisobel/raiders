/*****  
*)-useShopFilter: 
* A custom React Hook that facilitates filtering and pagination of a list of products or items based on selected category, tag, price range, and current page. 
* It returns an object with relevant state variables and functions.

1)-handleCategoryChange: Handles the change of selected category and updates the filtered products accordingly. It returns the matching products based on the selected category.
 * searchProductsByCategory: Filters the products/products based on the specified category.

2)-handleTag: Handles the change of selected tag and updates the filtered products accordingly. It returns the matching products based on the selected tag.
 * searchProductsByTag: Filters the products based on the specified tag.

3)-handleSortOptions: Handle the sorting of products based on the selected sort option.

4)-searchProductsByPrice: Filters the products/products based on the specified price range.

5)-handlePageChange: Handles the change of current page.

*****/  

import { useEffect, useState } from 'react';

import { productsContent } from '../constants';

import { useParams } from 'react-router-dom';
import { getPopular } from './PopularItems';


export const useShopFilter = (initialProducts, itemsPerPage) => {

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 250, max: 750 });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('');

  const { category, tag } = useParams();


  // Update selected category and tag when the route parameters change
  useEffect(() => { 
    setSelectedCategory(category || '');
    setSelectedTag(tag || '');
  }, [category, tag]);


  // Filter the initial products based on selected category and tag
  useEffect(() => {
    
    // Initialize the matching products with the initial products
    let matchingProducts = initialProducts;
  
    // Filter products based on the selected category
    if (selectedCategory) {
      matchingProducts = handleCategoryChange(selectedCategory);
    }
  
    // Filter products based on the selected tag
    if (selectedTag) {
      matchingProducts = handleTag(selectedTag);
    }
  
    // Sort the matching products based on the selected sort option
    matchingProducts = handleSortOptions(matchingProducts, sortOption);
  
    // Set the filtered products and reset the current page to 1
    setFilteredProducts(matchingProducts);
    setCurrentPage(1);
  }, [selectedCategory, selectedTag, sortOption, initialProducts]);
  

  /*************** 1-Product By Category  ***************/
  /**
     * Handle the change of selected category.
     * categoryTitle - The title of the selected category.
     * Return The filtered products based on the selected category.
     */
  const handleCategoryChange = (categoryTitle) => {
    const category = categoryTitle.toLowerCase();
    setSelectedCategory(category);
    if (category === "all") {
      return productsContent;
    } else {
      const matchingProducts = searchProductsByCategory(initialProducts, categoryTitle);
      return matchingProducts;
    }
  };

  /*****
   * Search products by category.
   * products - The array of shop items.
   * category - The category to search for.
   * Return The filtered products based on the category.
   */
  const searchProductsByCategory = (products, category) => {
    return products.filter((product) => product.category.find((c) => c.toLowerCase() === category.toLowerCase()));
  };


  /*************** 2-Product By Tags ***************/
  /**
   * Handle the change of selected tag.
   * tagTitle - The title of the selected tag.
   * Return - The filtered products based on the selected tag.
   */
  const handleTag = (tagTitle) => {
    setSelectedTag(tagTitle.toLowerCase());
    const matchingProducts = searchProductsByTag(initialProducts, tagTitle);
    return matchingProducts;
  };

  /*****
   * Search products by tag.
   * products - The array of shop items.
   * tag - The tag to search for.
   * Return - The filtered products based on the tag.
   */
  const searchProductsByTag = (products, tag) => {
    return products.filter((product) => {
      return product.tags.some((tagObj) => tagObj.toLowerCase() === tag.toLowerCase());
    });
  };


  /*************** 3-Product Based on Sort Options  ***************/
  /**
   * Handle the sorting of products based on the selected sort option.
   * @param {Array} products - The array of products to be sorted.
   * @param {string} sortOption - The selected sort option.
   * @returns {Array} - The sorted products based on the selected option.
   */
  const handleSortOptions = (products, sortOption) => {
    switch (sortOption) {
      case "featured":
        return getPopular(products);
      case "lowPrice":
        return products.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      case "highPrice":
        return products.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      default:
        return products;
    }
  };

  /**
   * Handle the change of sorting option.
   * @param {string} selectedOption - The selected sorting option.
   */
  const handleSort = (selectedOption) => {
    setSortOption(selectedOption ? selectedOption.value : '');
  };

  
  /*************** 4-Products By Price Range  ***************/
  // Search products by price range. 
  const searchProductsByPrice = (products, range) => {
    return products.filter((product) => product.price >= range.min && product.price <= range.max);
  };


  /*************** 5-Page Change ***************/
  // Get the products to display based on filtering 
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : productsContent;
  const filteredProductsByPrice = searchProductsByPrice(displayProducts, priceRange);

  // Calculate start and end index based on current page and items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the products to display on the current page
  const displayedProducts = filteredProductsByPrice.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProductsByPrice.length / itemsPerPage);

  // Handle the change of current page.
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }; 

  return {
    selectedCategory,
    priceRange,
    setPriceRange,
    filteredProductsByPrice,
    sortOption,
    handleSort,
    displayedProducts,
    currentPage,
    totalPages,
    handlePageChange,
  };
};