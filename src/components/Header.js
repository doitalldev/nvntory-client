import React from 'react';
import logo from '../images/logo.png';
const Header = () => {
  return (
    <header>
      <nav>
        <div className='logo-div'>
          <img src={logo} alt='NVNTORY Logo' />
        </div>
        <div className='login-signup-container'>
          <div className='login'>
            <a href='/login'>Log In</a>
          </div>
          <div className='signup'>
            <a href='/signup'>Sign Up</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
