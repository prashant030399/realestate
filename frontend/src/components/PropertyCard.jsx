import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PropertyCard = ({ id,image, title, location, price }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
        <Link to={`/property/${id}`}>
     
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>

        <div className="flex items-center text-gray-500 text-sm mb-2">
          <FaMapMarkerAlt className="mr-1 text-blue-500" />
          <span>{location}</span>
        </div>

        <p className="text-blue-600 font-bold text-md">₹ {price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
