import React from 'react';
import { HomeHeader } from './Header';
import './home.css';
const heroimage = require('../images/hero1.jpg');

const MainHome = () => {
  return (
    <>
      <HomeHeader />
      <h3>
        NVNTORY is a new style of inventory management software. Aimed at the
        small to medium sized businesses that need plenty of features to compete
        with the larger corporations.
      </h3>
      {/* <section className='hero1'>
        <img src={heroimage} alt='warehouse' />
      </section> */}
    </>
  );
};

export default MainHome;
