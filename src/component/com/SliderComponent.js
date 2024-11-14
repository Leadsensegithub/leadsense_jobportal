
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/SliderComponent.css'
const SliderComponent = ({ images }) => {
  const settings = {              // Show navigation dots
    infinite: true,           // Infinite scroll
    speed: 500,               // Transition speed in ms
    slidesToShow: 1,          // Show one slide at a time
    slidesToScroll: 1,        // Scroll one slide at a time
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 3000,      // Autoplay speed in ms
    arrows: true,             // Show navigation arrows
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
