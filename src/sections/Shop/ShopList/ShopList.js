import React from 'react';
import './ShopList.css';

import { PageTitle, ShopSidebar, ShopHeader, Product, PagesNo } from '../../../components';
import { productsContent } from '../../../constants';
import { useShopFilter } from '../../../utils';
 

 
const ShopList = (props) => { 

  // Destructuring props
  const {addToCart} = props;

  const itemsPerPage = 4; 
 
  // Use the useShopFilter hook to handle product filtering and pagination
  const {
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
  } = useShopFilter(productsContent, itemsPerPage);

  return (
    <>
      {/* Page title */}
      <PageTitle title={'shop list'} page={'shop list'} />

      <section className='shop'>
        {/* Shop sidebar */}
        <ShopSidebar priceRange={priceRange} setPriceRange={setPriceRange} selectedCategory={selectedCategory} />

        <div className='shop-container'>
          {/* Shop header */}
          <ShopHeader 
          showing={displayedProducts.length} 
          total={filteredProductsByPrice.length}
          sortOption={sortOption} 
          handleSort={handleSort}  />

          <div className='product-container list'>
            {/* Render products */}
            {displayedProducts.map((product) => {
              return (
                <Product
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  disprice={product.disprice}
                  price={product.price}
                  content={product.content}
                  product={product}
                  addToCart={addToCart}
                />
              ); 
            })}
          </div> 

          {/* Pagination */}
          <PagesNo currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
        </div>
      </section>
    </>
  );
};

export default ShopList;