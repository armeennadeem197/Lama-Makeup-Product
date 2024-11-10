import React from 'react';
import Image from 'next/image';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
       <Image src="/Beauty.png" alt="Beauty Product" width={500} height={500} />
     </div>

      <div className="hero-text">
        <h1 className="hero-title">Get All Your Favorite Makeup Product </h1>
        <p className="hero-description">
          Discover the best dining spots, explore new cuisines, and enjoy exceptional service at our curated list of restaurants.
        </p>
      </div>
    </div>
  );
};

export default Hero;
