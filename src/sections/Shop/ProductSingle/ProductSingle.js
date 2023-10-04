import React, { useState } from 'react';
import './ProductSingle.css';

import { Button, Comments, PageTitle, Product } from '../../../components';
import { productsContent } from '../../../constants';
import { calculateAverageRating, countCommentsAndReplies, getPopular } from '../../../utils';

import { FaStar } from 'react-icons/fa';

import { Link, useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';  

 
  
const ProductSingle = (props) => {

  // Destructuring props
  const {cart, setCart, addToCart } = props;
  
  const [selectedOption, setSelectedOption] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const product = location.state;

  const productComments = product.comments;


  /********** 1-Average rating for product **********/
  const averageRating = calculateAverageRating(product);


  /********** 2-Handle Quantity Change **********/
  // Handle quantity change
  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  // Increment quantity
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Decrement quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  /********** 3-Add to cart **********/
  // Check if the product is already in the cart
  const isProductInCart = cart.some(item => item.id === product.id);

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    if (!isProductInCart) {
      const updatedCart = [...cart, { ...product, quantity }];
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    }
  };


  /********** 4-Product Information Tabs Change **********/
  // Handle option change for the product information tabs
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };  

  /********** 5-total number of comments and replies for the product **********/
  let totalCommentsAndReplies = 0;
  if (productComments) {
    totalCommentsAndReplies = countCommentsAndReplies(productComments);
  }


  /********** 6-Handle form submission for the product review **********/
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Reset the form fields
    event.target.reset();
  };


  /********** 7-Related Products **********/
  // Get the category titles of the main product
  const mainProductCategoryTitles = product.category.map((cat) => cat.title);

  // Get popular products
  const popularProducts = getPopular(productsContent);

  // Filter and limit related popular products based on the same category titles
  const filteredRelatedProducts = popularProducts
    .filter(
      (relatedProduct) =>
        relatedProduct.category.some((cat) => mainProductCategoryTitles.includes(cat.title)) &&
        relatedProduct.id !== product.id
    )
    .slice(0, 4);


  // Create an array of images for the image gallery
  const image = [
    {
      original: product.gallery.image1,
      thumbnail: product.gallery.image1,
    },
    {
      original: product.gallery.image2,
      thumbnail: product.gallery.image2,
    },
    {
      original: product.gallery.image3,
      thumbnail: product.gallery.image3,
    },
    {
      original: product.gallery.image4,
      thumbnail: product.gallery.image4,
    },
  ];


  return ( 
    <>
      <PageTitle title={'product single'} page={'product single'} />
      <section className='product-single'>

        <div className='product-des'>

          <div className='product-container'>

            {/* Product Image Gallery */}
            <div className='product-image'>
              <ImageGallery items={image} />
            </div>

            {/* Product Content */}
            <div className='product-content'>
              <div className='text'>
                {/* Product Intro */}
                <div className='product-intro'>
                  <h3>{product.name}</h3> {/* Product Name */}

                  <div className='rating'>  {/* Product Rating */}
                    <div className='icon'>            
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> 
                    </div> 
                    {/* Render average rating and comment count */}
                    {product.comments.length > 0 ? (
                      <h5>{averageRating} ({product.comments.length})</h5>
                    ) : (
                      <h5>Not rated</h5>
                    )}
                  </div>

                  <div className='price'>${product.disprice}/- <span>${product.price}</span></div> {/* Product Price */}

                </div>
                <p>{product.content}</p> 
                <div className='box'>
                  {/* Quantity */} 
                  <div className='quantity'>
                    <input type="button" defaultValue="-" className="minus" onClick={handleDecrement} /> {/* Button to decrement the quantity */}
                    <input type="number" step="1" min='1' max="100" name="quantity" value={quantity} className="input-text" onChange={handleQuantityChange} readOnly /> {/* Input field to display and edit the quantity */}
                    <input type="button" defaultValue="+" className="plus" onClick={handleIncrement} /> {/* Button to increment the quantity */}
                  </div>
                  {/* Add to cart button */}
                  <button type="submit" onClick={handleAddToCart}>
                    <Button link={'cart'} title={'add to cart'} />
                  </button>
                </div>
                <div className='categories'> 
                  <h6>Categories:</h6>
                  {/* Render categories */}
                  {(product.category).map((item, index) => {
                    return(          
                      <Link
                        key={index}
                        to={`/Shop/category/${item}`}>
                        {item}
                      </Link>
                      ) 
                    })} 
                </div>
                <div className='tags'>
                  <h6>Tags:</h6>
                  {/* Render tags */}
                  {(product.tags).map((item, index) => {
                    return(                        
                      <Link
                        key={index}
                        to={`/Shop/tag/${item}`}>
                        {item}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Product More Information */}
          <div className='product-info'>

            {/* Product Information Tab */}
            <div className="product-info-tabs">
              {/* Description Tab */}
              <button
                type="button"
                className={`info-btn ${selectedOption === 'description' ? 'active' : ''}`}
                onClick={() => handleOptionChange('description')}
              >description
              </button>
              {/* Additional Information Tab */}
              <button
                type="button"
                className={`info-btn ${selectedOption === 'additionalInfo' ? 'active' : ''}`}
                onClick={() => handleOptionChange('additionalInfo')}
              >additional information
              </button>
              {/* Reviews Tab */}
              <button
                type="button"
                className={`info-btn ${selectedOption === 'reviews' ? 'active' : ''}`}
                onClick={() => handleOptionChange('reviews')}
              >reviews ({totalCommentsAndReplies})
              </button>
            </div>

            {/* Description Container */}
            {selectedOption === 'description' && (
              <div className="description product-info-gallery">
                
                <p>{product.description}</p>
              </div>
            )} 

            {/* Additional Information Container */}
            {selectedOption === 'additionalInfo' && (
              <div className='additional-info product-info-gallery'>
                
                {(product.addInfo).map((item) => {
                  return (
                    <div className='item' key={item.id}>
                      <h3>{item.title}</h3>
                      <span>{item.content}</span>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Reviews Container */}
            {selectedOption === 'reviews' && (
              <div className='reviews product-info-gallery'>

                {/* Reviews */}
                <Comments comments={productComments} />

                <div className='product-review'>
                  {/* Leave a Comment Form */}
                  <form className='form' onSubmit={handleSubmit}>
                    
                    <h3>leave a comment</h3> {/* Comment Form Title */}

                    {/* Input Fields */}
                    <div className='input-box'>
                      <input type="text" name="name" className='box' id="name" placeholder="name" required /> {/* Name Input Field */}
                      <input type="email" name="email" className='box' id="email" placeholder="email" required /> {/* Email Input Field */}
                    </div>
                    
                    <textarea cols="30" rows="10" name="comment" className='box' id="comment" placeholder="comment"></textarea> {/* Comment Textarea */}
                    
                    <button type="submit" name="submit" id="submit" className='btn'>submit</button> {/* Submit Button */}

                  </form>

                </div>
              </div>
            )}

          </div>
        </div>

        {/* Related Products */}
        <div className='related-items'>
          {/* Sidebar Heading */}
          <div className='sidebar-heading'>
            <h2>Related Products</h2>
          </div>

          {/* Related Product List */}
          <div className='box-container'>
            {
              filteredRelatedProducts.map((product) => {
                return(
                  <Product  
                    key={product.id} 
                    image={product.image}
                    name={product.name}
                    disprice={product.disprice}
                    price={product.price}
                    product={product}
                    addToCart={addToCart}
                  />
                )
              })
            }
          </div>
        </div>

      </section>
    </>
  )
}

export default ProductSingle;