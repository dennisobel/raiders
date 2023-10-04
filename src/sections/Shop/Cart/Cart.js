import React from 'react';
import './Cart.css';

import { PageTitle, Button, ShopSummary, ShopTitle, EmptyCart } from '../../../components';

import { RiDeleteBin5Fill } from 'react-icons/ri';

 
  
const Cart = (props) => {

  // Destructuring props
  const { cart, removeFromCart, addToCart, removeCompletely } = props;

  return (
    <> 
    
      {/* Page title */}
      <PageTitle title={'cart'} page={'cart'} />

      <section className='cart'>

        {cart.length === 0 ? 
          (
            // Empty cart message
            <EmptyCart title={'No items in the cart'} />
          ) : (
        <> 

          <div className='shopping-cart'>
            <div className='container'>

              {/* Shop title */}
              <ShopTitle titles={['product', 'price', 'quantity', 'total', 'action']} />

              <div className='box-container'> 
                {/* Render cart items */} 
                {cart.map((item) => {

                  // Calculate the total price based on the quantity
                  const totalPrice = item.price * item.quantity;

                  return (
                    <div className='cart-item' key={item.id}>
                      <div className='box product'>
                        <img className='image' src={item.image} alt='' /> {/* Product Image */}
                        <div className='name'>{item.name}</div> {/* Product Name */}
                      </div> 
                      <div className='box price'>${item.price}</div> {/* Product Price */}
                      <div className='box quantity'> 
                        <input type="button" defaultValue="-" className="minus" onClick={() => removeFromCart(item)} /> {/* Button to decrement the quantity */}
                        <input type="number" step="1" min="1" max="100" name="quantity" value={item.quantity} className="input-text" readOnly /> {/* Input field to display and edit the quantity */}
                        <input type="button" defaultValue="+" className="plus" onClick={() => addToCart(item)} /> {/* Button to increment the quantity */}
                      </div>
                      <div className='box total'>${totalPrice}</div> {/* Total Price */}
                      <div className='box action'>
                        {/* Remove item button */}
                        <button type='submit' onClick={() => removeCompletely(item)}>
                          <RiDeleteBin5Fill className='icon delete' />
                        </button>
                      </div> 
                    </div>
                  );
                })}
              </div> 
            </div> 
          </div> 

          <div className='cart-total'>
            {/* Shop summary */} 
            <ShopSummary cart={cart} />
            {/* Proceed to checkout button */}
            <Button link={'checkout'} title={'proceed to checkout'} />
          </div>

        </>
        )}
      </section>
    </> 
  );
};

export default Cart;