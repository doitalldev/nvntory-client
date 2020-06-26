import React from 'react';
import './MainHome.css';
const heroimage = require('../../images/hero1.jpg');
const MainHome = () => {
  return (
    <main>
      <section className='hero1'>
        <img src={heroimage} alt='warehouse' />
      </section>
    </main>
  );
};

export default MainHome;
