import React from 'react';
import logo from '../images/logo.png';
import './header.css';

const HomeHeader = () => {
  return (
    <header>
      <nav>
        <div className='logo-div'>
          <a href='/'>
            <img src={logo} alt='NVNTORY Logo' />
          </a>
        </div>
        <div className='dashboard'>
          <a href='/dashboard'>
            <button>Go To Dashboard</button>
          </a>
        </div>
      </nav>
    </header>
  );
};

const DashboardHeader = () => {
  return (
    <header>
      <nav>
        <div className='logo-div'>
          <a href='/dashboard'>
            <img src={logo} alt='NVNTORY Logo' />
          </a>
        </div>
        <div className='add-item-container'>
          <div className='add-item'>
            <a href='/add-item'>
              <button className='button-add'>Add Item</button>
            </a>
          </div>
          <div className='home'>
            <a href='/'>
              <button>Home</button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { DashboardHeader, HomeHeader };
