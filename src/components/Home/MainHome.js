import React from 'react';
import './MainHome.css';
import { HomeHeader } from '../Header';

const heroimage = require('../../images/hero1.jpg');
const MainHome = () => {
  return (
    <>
      <HomeHeader />
      <main>
        <section className='hero1'>
          <img src={heroimage} alt='warehouse' />
        </section>
      </main>
    </>
  );
};

export default MainHome;
