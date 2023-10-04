import React from 'react';
import './ShopSummary.css'; 
   
 

const ShopSummary = (props) => {
    
    const { cart } = props;
 

    /***** 1- Calculate Sub Total prices *****/ 
    const subTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);


    /***** 2- Calculate Delivery Fee *****/ 
    const baseDeliveryFee = 5; // Base delivery fee amount
    // Calculate delivery fee based on sub total
    let deliveryFee = baseDeliveryFee;

    if (subTotal >= 300) {
        deliveryFee = 0; // Free delivery for orders over $300
    }

    /***** 3- Calculate Total Discount given *****/ 
    const discountedAmount = cart.reduce((total, item) => total + ((item.price - item.disprice) * item.quantity), 0);


    /***** 4- Calculate Total Tax Amount *****/ 
    const taxRate = 0.1; // 10% tax rate
    const taxAmount = subTotal * taxRate;


    /***** 5- Calculate Total Cost *****/ 
    const cartTotal = subTotal + taxAmount + deliveryFee - discountedAmount;


    return ( 
        <div className='shop-summary'>

            {/* Display the sub total */}
            <div className='summary-item'>
                <div className='box name'>sub total</div>
                <div className='box value'>${subTotal}</div>
            </div>

            {/* Display the Delivery fee */}
            <div className='summary-item'>
                <div className='box name'>delivery fee</div>
                <div className='box value'>${deliveryFee}</div>
            </div>

            {/* Display the Total Discount Price */}
            <div className='summary-item'>
                <div className='box name'>discount</div>
                <div className='box value'>${discountedAmount}</div>
            </div>

            {/* Display the Total Tax Amount */}
            <div className='summary-item'>
                <div className='box name'>tax</div>
                <div className='box value'>${taxAmount}</div>
            </div>

            {/* Display the Total cost */}
            <div className='summary-item'>
                <div className='box name'>total</div>
                <div className='box value'>${cartTotal}</div>
            </div>

        </div>
    )
}

export default ShopSummary;