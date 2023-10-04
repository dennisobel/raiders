import React from 'react';
import './Login.css';

import { PageTitle } from '../../../components';

import { Link } from 'react-router-dom';
 
  

const Login = () => { 

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Reset the form fields
    event.target.reset();
  };

  return (
    <>
      {/* Page Title */}
      <PageTitle title={'login'} page={'login'} />

      <section className='login'>

        {/* Login Form */}
        <form className='account-form' onSubmit={handleSubmit}>

          {/* Heading for the Login Form */}
          <h3>login</h3>

          {/* Email Input */}
          <input type='email' name='email' placeholder='enter your email' id='email' className='box' required />

          {/* Password Input */}
          <input type='password' name='password' placeholder='enter your password' id='password' className='box' required />
 
          {/* Remember me and Forgot password */}
          <div className='info'>

            {/* Remember me Checkbox */}
            <div className='remember'>
              <input type='checkbox' name='remember' id='remember-me' />
              <label htmlFor='remember-me'> remember me </label>
            </div>

            {/* Forgot password Link */}
            <div className='forgot'>
              <Link to='/forgot-pwd' className='link'>forgot password?</Link>
            </div>

          </div>

          {/* Login Button */} 
          <button type='submit' name='submit' id='submit' className='btn'>Login</button>

          {/* Registration Link */}
          <p>don't have an account? <Link to='/register' className='link'>register</Link></p>
        
        </form>

      </section> 
    </> 
  );
}

export default Login;
