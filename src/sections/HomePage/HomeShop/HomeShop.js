import React from 'react';
import './HomeShop.css';

import { productsContent } from '../../../constants';
import { Heading, Product } from '../../../components';
import { getPopular } from '../../../utils';

 

const HomeShop = (props) => {
  
  // Destructuring props
  const { addToCart } = props;
 
  // Get popular products
  const popularProducts = getPopular(productsContent).slice(0, 8);
 
  return (  
    <section className='home-shop'>

      {/* Section heading */}
      <Heading title={'products'} /> 

      <div className='box-container'>
        { 
        // Render each popular product
          popularProducts.map((product) => {
            return (
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

    </section>
  )
  
}

export default HomeShop;