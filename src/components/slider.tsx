import React, { useState, useEffect } from 'react';

const Slider: React.FC = () => {
  const images = [
    'slider1.png',
    'slider2.png',
    'slider3.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically switch to the next slide after 3 seconds
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="overflow-hidden w-[80vw] h-[70vh] lg:w-auto lg:h-auto mx-auto lg:mx-16 my-12">
      <div className="flex w-[240vw] lg:w-[270vw]">
        <span className="">
            <img className='object-fill' src='slider1.png' />
        </span>
        <span className="">
            <img src='slider2.png' />
        </span>
        <span className="">
            <img src='slider3.png' />
        </span>
      </div>
    </div>
  );
};

export default Slider;
