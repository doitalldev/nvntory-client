import React from 'react';
import { HomeHeader } from './Header';
const heroimage = require('../images/hero1.jpg');

const MainHome = () => {
  return (
    <>
      <HomeHeader />

      <section className='hero1'>
        <img src={heroimage} alt='warehouse' />
      </section>
    </>
  );
};

export default MainHome;
