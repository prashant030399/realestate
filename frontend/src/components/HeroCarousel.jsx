import React, { useState, useEffect } from 'react';

const HeroCarousel = ({ children }) => {
  const images = [
    '/images/hero-bg1.jpg',
    '/images/hero-bg2.jpg',
    '/images/hero-bg3.jpg',
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center justify-center transition-all duration-700"
      style={{
        backgroundImage: `url(${images[current]})`,
      }}
    >
      {children}
    </div>
  );
};

export default HeroCarousel;
