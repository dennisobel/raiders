import React from 'react';

import { Header, Footer, ScrollTop, ScrollToTop } from './components';
import { HomePage, AboutUs, TestimonialsPage, Faqs, BlogGrid, BlogList, BlogSingle, Login, Register, ForgotPwd, ShopGrid, ShopList, Cart, Checkout, Contact, ProductSingle, TeamPage, Management, Players, PlayerSingle, PointTable, Events, EventSingle, PortfolioPage, PortfolioSingle, Fixtures, FixtureSingle } from './sections';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCart } from './utils/CartUtils';



const App = () => {

  // Use the useCart hook
  const { cart, setCart, addToCart, removeFromCart, removeCompletely } = useCart(); 

  return ( 
    
    <div className='App'>

      <ScrollToTop />
      <Header cart={cart} />

      <Routes>

        {/*Home*/}
        <Route path='/' element={<HomePage addToCart={addToCart} />} />

        {/*About*/}
        <Route path='/About-us' element={<AboutUs />} />
        <Route path='/Testimonials' element={<TestimonialsPage />} /> 
        <Route path='/Faqs' element={<Faqs />} />    

        {/*Pages*/}
        <Route path='/Point-Table' element={<PointTable />} />  
        <Route path='/Events' element={<Events />} />   
        <Route path='/Events/:id' element={<EventSingle />} />  
        <Route path='/Events/EventSingle' element={<EventSingle />} />
        <Route path='/Portfolio' element={<PortfolioPage />} />  
        <Route path='/Portfolio/:id' element={<PortfolioSingle />} /> 
        <Route path='/Portfolio/PortfolioSingle' element={<PortfolioSingle />} />   
        <Route path='/Login' element={<Login />} />  
        <Route path='/Register' element={<Register />} /> 
        <Route path='/Forgot-pwd' element={<ForgotPwd />} /> 

        {/*Team*/}
        <Route path='/Team' element={<TeamPage />} />   
        <Route path='/Team/Management' element={<Management />} />  
        <Route path='/Team/Players' element={<Players />} />  
        <Route path='/Team/Players/:id' element={<PlayerSingle />} /> 
        <Route path='/Team/Players/PlayersSingle' element={<PlayerSingle />} /> 

        {/*Fixture*/}
        <Route path='/Fixtures' element={<Fixtures/>} />    
        <Route path='/Fixtures/:id' element={<FixtureSingle />} />   
        <Route path='/Fixtures/FixtureSingle' element={<FixtureSingle />} /> 
  
        {/*Blogs*/}
        <Route path='/Blog-grid' element={<BlogGrid />} /> 
        <Route path='/Blogs/category/:category' element={<BlogList />} /> 
        <Route path='/Blogs/tag/:tag' element={<BlogList />} /> 
        <Route path='/Blogs/search/:search' element={<BlogList />} /> 
        <Route path='/Blog-list' element={<BlogList />} /> 
        <Route path='/Blogs/:id' element={<BlogSingle  />} />
        <Route path='/Blogs/Blog-Single' element={<BlogSingle />} />

        {/*Shop*/}
        <Route path='/Shop-grid' element={<ShopGrid addToCart={addToCart} />} />  
        <Route path='/Shop/category/:category' element={<ShopList addToCart={addToCart} />} /> 
        <Route path='/Shop/tag/:tag' element={<ShopList addToCart={addToCart} />} /> 
        <Route path='/Shop-list' element={<ShopList addToCart={addToCart} />} />
        <Route path='/Shop/:id' element={<ProductSingle cart={cart} setCart={setCart} addToCart={addToCart} />} />
        <Route path='/Shop/Product-Single' element={<ProductSingle cart={cart} setCart={setCart} addToCart={addToCart} />} /> 
        <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} addToCart={addToCart} removeCompletely={removeCompletely} />} />
        <Route path='/Checkout' element={<Checkout cart={cart} />} />
 
        {/*Contact*/}
        <Route path='/contact-us' element={<Contact />} />

      </Routes>

      <Footer />
      <ScrollTop />
      
    </div>
  )
}

export default App;
