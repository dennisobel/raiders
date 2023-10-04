import React from 'react';
import './Register.css';

import { PageTitle } from '../../../components';

import { Link } from 'react-router-dom';
 
 
 
const Register = () => {

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Reset the form fields
    event.target.reset();
  };

  return ( 
    <>
      {/* Page Title */}
      <PageTitle title={'register'} page={'register'} />

      <section className='register'>

        {/* Registration Form */}
        <form className='account-form' onSubmit={handleSubmit}>

          {/* Heading for the register form */}
          <h3>register</h3>

          {/* Name Input */}
          <input type='text' name='name' placeholder='enter your name' id='name' className='box' required />

          {/* Email Input */}
          <input type='email' name='email' placeholder='enter your email' id='email' className='box' required />

          {/* Password Input */}
          <input type='password' name='password' placeholder='enter your password' id='password' className='box' required />

          {/* Repeat Password Input */}
          <input type='password' name='repeat-password' placeholder='repeat your password' id='repeat-password' className='box' required />

          {/* Terms and Conditions Checkbox */}
          <div className='terms'>
            <input type='checkbox' name='remember-me' id='remember-me' />
            <label htmlFor='remember-me'> i agree with the <span>terms & conditions</span> </label>
          </div>

          {/* Register Button */}
          <button type='submit' name='submit' id='submit' className='btn'>register</button>

          {/* Login Link */}
          <p>already have an account? <Link to='/login' className='link'>login</Link></p>

        </form>
        
      </section> 
    </>
  );
}

export default Register;