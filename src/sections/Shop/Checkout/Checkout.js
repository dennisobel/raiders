import React from 'react';
import './Checkout.css';

import { PageTitle, Heading, ShopSummary, EmptyCart } from '../../../components';
import { payment } from '../../../constants';



const Checkout = (props) => {     

  // Destructuring props
  const {cart} = props;

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Reset the form fields
    event.target.reset(); 
  };

  return ( 
    <> 
      {/* Page title */}
      <PageTitle title={'checkout'} page={'checkout'} />

      {/* Checkout section */}
      <section className='checkout'>

        {cart.length === 0 ? 
          (
            // Empty cart message
            <EmptyCart title={'No items in the cart to checkout'} />
          ) : (

            <>

              {/* Checkout form */}
              <form onSubmit={handleSubmit}>

                <div className='box-1'>  

                  {/* Billing Address */} 
                  <div className='address checkout-item'>
                    <Heading title='billing address' />
                    <div className='form'>
                      <div className='input-box'>
                        {/* First Name */}
                        <input type="text" name="first-name" placeholder="first name" id="b-first-name" className='box' required />
                        {/* Last Name */}
                        <input type="text" name="last-name" placeholder="last name" id="b-last-name" className='box' required />
                      </div>
                      {/* Company */}
                      <input type="text" name="company" placeholder="company" id="b-company" className='box' required />
                      {/* Country */}
                      <input type="text" name="country" placeholder="country" id="b-country" className='box' required />
                      {/* Address */}
                      <input type="text" name="address" placeholder="address" id="b-address" className='box' required />
                      <div className='input-box'>
                        {/* City */}
                        <input type="text" name="city" placeholder="town/city" id="b-city" className='box' required />
                        {/* ZIP */}
                        <input type="text" name="zip" placeholder="postcode/ZIP" id="b-zip" className='box' required />
                      </div>
                      <div className='input-box'>
                        {/* Phone Number */}
                        <input type="number" name="number" placeholder="phone no" id="b-number" className='box' required />
                        {/* Email Address */}
                        <input type="email" name="email" placeholder="email address" id="b-email" className='box' required />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className='address checkout-item'>
                    <Heading title='shipping address' />
                    <div className='form'>
                      <div className='input-box'>
                        {/* First Name */}
                        <input type="text" name="first-name" placeholder="first name" id="s-first-name" className='box' required />
                        {/* Last Name */}
                        <input type="text" name="last-name" placeholder="last name" id="s-last-name" className='box' required />
                      </div>
                      {/* Company */}
                      <input type="text" name="company" placeholder="company" id="s-company" className='box' required />
                      {/* Country */}
                      <input type="text" name="country" placeholder="country" id="s-country" className='box' required />
                      {/* Address */}
                      <input type="text" name="address" placeholder="address" id="s-address" className='box' required />
                      <div className='input-box'>
                        {/* City */}
                        <input type="text" name="city" placeholder="town/city" id="s-city" className='box' required />
                        {/* ZIP */}
                        <input type="text" name="zip" placeholder="postcode/ZIP" id="s-zip" className='box' required />
                      </div>
                      <div className='input-box'>
                        {/* Phone Number */}
                        <input type="number" name="number" placeholder="phone no" id="s-number" className='box' required />
                        {/* Email Address */}
                        <input type="email" name="email" placeholder="email address" id="s-email" className='box' required />
                      </div>
                    </div>
                  </div>

                </div> 

                <div className='box-2'>

                  <div className='container'>

                  {/* Payment Methods */}
                  <div className='payment-methods checkout-item'>
                    <Heading title='payment methods' />
                    <div className='box-container'>
                      { 
                        payment.map((item) => {
                          return(
                            <div className='item' key={item.id}>
                              {/* Payment Method Radio Button */}
                              <input type="radio" id={item.paymentID} name="payment" value={item.value}/>
                              {/* Payment Method Label */}
                              <label htmlFor={item.paymentID}>{item.title}</label>
                              <div className='payment-body active'>
                                {/* Payment Method Content */}
                                <p>{item.content}</p>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div> 
                  </div>

                  {/* Cart Total */}
                  <div className='cart-total checkout-item'>
                    <Heading title='cart total' /> {/* Cart Total Heading */}
                    <ShopSummary cart={cart} /> {/* Shop Summary Component */}
                  </div> 

                  </div>

                  {/* Submit Button */}
                  <button type="submit" name="submit" id="submit" className='btn'>place order</button>

                </div> 
              </form> 

            </>
        )}

      </section>
    </>
  )
}

export default Checkout 