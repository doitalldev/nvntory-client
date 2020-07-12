import React from 'react';
import logo from '../../images/logo.png';
import './header.css';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <header>
      <nav>
        <div className='logo-div'>
          <Link to={`/`}>
            <img src={logo} alt='NVNTORY Logo' />
          </Link>
        </div>
        <div className='dashboard'>
          <Link to={`/dashboard`}>
            <button>Go To Dashboard</button>
          </Link>
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
          <Link to={`/dashboard`}>
            <img src={logo} alt='NVNTORY Logo' />
          </Link>
        </div>
        <div className='add-item-container'>
          <div className='add-item'>
            <Link to={`/add-item`}>
              <button className='button-add'>Add Item</button>
            </Link>
          </div>
          <div className='home'>
            <Link to={`/`}>
              <button>Home</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { DashboardHeader, HomeHeader };
