import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import PropertyCard from '../components/PropertyCard';

const Rent = () => {
  const [properties, setProperties] = useState([]);
  const { recordActivity } = useAuth();

  useEffect(() => {
    const savedListings = JSON.parse(localStorage.getItem('listings')) || [];
    setProperties(savedListings); // Show all listings with rent or price
  }, []);

  const handleRent = (property) => {
    recordActivity('rent', property.title, property.image);
    alert(`You rented: ${property.title}`);
  };

  return (
    <div className="pt-20 pb-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Properties for Rent</h1>

      <div className="bg-gray-100 p-4 rounded-md shadow-sm mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search by location"
            className="px-4 py-2 rounded border border-gray-300 w-full"
          />
          <select className="px-4 py-2 rounded border border-gray-300 w-full">
            <option value="">Rent Range</option>
            <option value="low">Below ₹30K</option>
            <option value="mid">₹30K - ₹75K</option>
            <option value="high">Above ₹75K</option>
          </select>
          <select className="px-4 py-2 rounded border border-gray-300 w-full">
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="studio">Studio</option>
          </select>
        </div>
      </div>

      {properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded shadow p-4">
              <PropertyCard
                id={property.id}
                image={property.image}
                title={property.title}
                location={property.location}
                price={
                  property.rent
                    ? `₹${property.rent} / month`
                    : property.price
                    ? `₹${property.price}`
                    : 'Price Not Available'
                }
              />
              {property.rent && (
                <button
                  onClick={() => handleRent(property)}
                  className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Rent Now
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          No rental properties found at the moment.
        </p>
      )}
    </div>
  );
};

export default Rent;
