import React from 'react';

const galleryImages = [
  '/images/reno1.jpg',
  '/images/reno2.jpg',
  '/images/reno3.jpg',
  '/images/reno4.jpg',
  '/images/reno5.jpg',
  '/images/reno6.jpg',
  '/images/reno7.jpg',
  '/images/reno8.jpg',

];

const RenovationGallery = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Our Work Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={src}
              alt={`Renovation ${index + 1}`}
              className="w-full h-60 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenovationGallery;
