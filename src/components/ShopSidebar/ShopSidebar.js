import React from 'react';
import './ShopSidebar.css';

import { Link } from 'react-router-dom';

import { FaAngleRight } from 'react-icons/fa';

import { SidebarHeading, PriceFilter, Product } from '../../components';
import { productsContent } from '../../constants';
import { getPopular } from '../../utils';

   

const ShopSidebar = (props) => { 

  // Destructuring props
  const { priceRange, setPriceRange, selectedCategory } = props;
  
  /***** 1-Category Names and Quantities *****/ 

  // Get the unique category names
  const categoryNames = ['all', ...new Set(productsContent.flatMap(product => product.category.map(category => category.toLowerCase())))];

  // Count the quantity of products in each category
  const categoryCount = {};
  productsContent.forEach(product => {
    product.category.forEach(category => {
      const categoryName = category.toLowerCase(); // Convert category to lowercase

      categoryCount[categoryName] = categoryCount[categoryName] ? categoryCount[categoryName] + 1 : 1;
    });
  });

  // Calculate the total quantity of all products
  const totalQuantity = productsContent.length;

  // Extract the category name and quantity
  const categoryDetails = categoryNames.map(category => ({
    name: category,
    quantity: categoryCount[category] || 0,
  }));

  // Set the quantity for the "all" category
  categoryDetails[0].quantity = totalQuantity;

  /***** 2-Get popular products *****/
  const popularProducts = getPopular(productsContent);
  const topProducts = popularProducts.slice(0, 3);
  

  return (
    <div className='sidebar shop-sidebar'>

      {/* Product Category */}
      <div className='category sidebar-item'>
        {/* Sidebar Heading */}
        <SidebarHeading title='categories' />
        {/* Category List */}
        <div className='box-container'>
          {categoryDetails.map((category, index) => (
            <Link
              className={`item ${category.name.toLowerCase() === selectedCategory.toLowerCase() ? 'active' : ''}`}
              key={index}
              to={`/Shop/category/${category.name}`}
            >
              <span><FaAngleRight className='icon' /> {category.name}</span>
              <p>({category.quantity})</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Price Filter section */}
      <div className='filter sidebar-item'>
        {/* Sidebar Heading */}
        <SidebarHeading title='price filter' />
        {/* Price Filter */}
        <PriceFilter
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>

      {/* Popular Products section */}
      <div className='popular sidebar-item'>
        {/* Sidebar Heading */}
        <SidebarHeading title='popular products' />
        {/* Popular Products List */}
        <div className='box-container'>
          {topProducts.map((product) => (
            <Product
              key={product.id}
              image={product.image}
              name={product.name}
              disprice={product.disprice}
              price={product.price}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopSidebar;