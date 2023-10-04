import React from 'react';

import { PageTitle } from '../../../components';

import { Link } from 'react-router-dom';

 
  
const ForgotPwd = () => { 

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Reset the form fields
    event.target.reset();
  };

  return (
    <> 
      {/* Page Title */}
      <PageTitle title={'Reset Password'} page={'Reset Password'} />

      <section className='reset-pwd'>

        {/* Forgot Password Form */}
        <form className='account-form' onSubmit={handleSubmit}>

          {/* Heading for the Forgot Password Form */}
          <h3>forgot password!</h3>

          {/* Email Input */} 
          <input type="email" name="email" placeholder="enter your email" id="email" className='box' required />

          {/* Send Link Button */} 
          <button type="submit" name="submit" id="submit" className='btn'>send reset link</button>
          
          {/* Registration Link */}
          <p>don't have an account? <Link to='/register' className='link'>register</Link></p>
        
        </form>
        
      </section>
    </>
  )
}

export default ForgotPwd;