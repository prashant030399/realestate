import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext'; 

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

useEffect(() => {
  const savedListings = JSON.parse(localStorage.getItem('listings')) || [];
  const found = savedListings.find((prop) => prop.id === id);

  if (found) {
    setProperty(found);
  } else {
    // fallback: check if selectedProperty was saved in localStorage
    const backup = JSON.parse(localStorage.getItem('selectedProperty'));
    if (backup?.id === id) {
      setProperty(backup);
    }
  }
}, [id]);

const {recordActivity} = useAuth();

  const handleBuyNow = () => {
     recordActivity('buy', property.title, property.image);
    localStorage.setItem('lastBought', JSON.stringify(property));
    navigate('/activity');
  };

  if (!property) {
    return (
      <div className="pt-20 text-center text-red-500 font-semibold">
        Property not found.
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 px-4 max-w-6xl mx-auto">
      {/* Title and Location */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{property.title}</h1>
        <div className="flex items-center text-gray-500">
          <FaMapMarkerAlt className="mr-2 text-blue-500" />
          <span>{property.location}</span>
        </div>
      </div>

      {/* Gallery */}
      <div className="mb-10">
        <img
          src={property.image || property.images?.[0]}
          alt={property.title}
          className="w-full mx-auto rounded-lg shadow-md max-w-[90%] md:max-w-5xl"
        />
      </div>

      {/* CTA */}
      <div className="bg-white   px-10 rounded-lg mb-9">
    
        <button
          onClick={handleBuyNow}
          className="inline-block bg-blue-600  text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition duration-200"
        >
          Buy Now
        </button>
      </div>

      {/* Price */}
      <div className="text-2xl font-semibold text-blue-600 mb-6">
        {property.price || `₹${property.rent} / month`}
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 text-gray-700">
        <div className="flex items-center gap-2">
          <FaBed className="text-blue-500" />
          <span>{property.bedrooms || 'N/A'} Bedrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <FaBath className="text-blue-500" />
          <span>{property.bathrooms || 'N/A'} Bathrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRulerCombined className="text-blue-500" />
          <span>{property.area || 'N/A'}</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-2">Property Description</h2>
        <p className="text-gray-600 leading-relaxed">{property.description || 'No description available.'}</p>
      </div>

      {/* Contact CTA */}
      <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg text-center">
        <h3 className="text-lg font-semibold mb-2">Interested in this property?</h3>
        <p className="text-gray-600 mb-4">Contact us now to schedule a viewing or get more details.</p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Contact Agent
        </a>
      </div>
    </div>
  );
};

export default PropertyDetail;
