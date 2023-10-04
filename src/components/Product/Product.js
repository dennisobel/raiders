import React from 'react';
import './Product.css';

import { calculateAverageRating } from '../../utils';

import { Link } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';
import { BsCartPlusFill } from 'react-icons/bs';

  
 
const Product = (props) => {

  // Destructuring props
  const { image, name, product, content, disprice, price, addToCart } = props;

  // Calculate the average rating for the product
  const averageRating = calculateAverageRating(product);

  return (

    <div className='product-item'>

      <div className='image'>
        {/* Cart button */}
        <Link to='/cart' onClick={() => addToCart(product)}><BsCartPlusFill className='icon' /></Link>
        {/* Product image */}
        <img src={image} alt={name} /> 
      </div>
 
      <div className='content'>
        {/* Star rating */}
        <div className='rating'>
          <div className='icon'>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          {/* Display average rating and number of comments */}
          {product.comments.length > 0 ? (
            <h5> {averageRating} ({product.comments.length}) </h5>
          ) : (
            <h5>Not rated</h5>
          )}
        </div>
        {/* Product name */}
        <Link  
          to={{
            pathname: '/Shop/' + name,
          }}
          location={{ product }}
          state={product}><h3>{name}</h3>
        </Link>
        <p>{content}</p> {/* Product description */}
        <div className='price'>
          <p>${disprice} <span>${price}</span></p>{/* Discounted price and original price */}
        </div>
      </div>

    </div>
  );
};

export default Product;