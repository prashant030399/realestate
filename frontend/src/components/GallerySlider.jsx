import React from 'react';
import Slider from 'react-slick';

const GallerySlider = ({ images }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!images || images.length === 0) {
    return <p className="text-gray-600 text-center">No images available.</p>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Property ${index + 1}`}
              className="w-full h-96 object-cover rounded-lg shadow"
            />
          
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySlider;
