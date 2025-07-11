import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';

const Buy = () => {
  const [properties, setProperties] = useState([]);
  const { recordActivity } = useAuth();

useEffect(() => {
  const staticProps = [
    {
      id: '1',
      title: 'Elegant Villa in Goa',
      location: 'Candolim, Goa',
      price: '3.2 Cr',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
    },
    {
      id: '2',
      title: '2BHK Apartment in Mumbai',
      location: 'Andheri West, Mumbai',
      price: '1.65 Cr',
      image: '/images/property2.jpg',
    },
    {
      id: '3',
      title: 'Modern Duplex in Pune',
      location: 'Koregaon Park, Pune',
      price: '2.1 Cr',
      image: '/images/property3.jpg',
    },
    {
      id: '4',
      title: 'Luxury Condo in Delhi',
      location: 'Vasant Kunj, Delhi',
      price: '2.9 Cr',
      image: '/images/property4.jpg',
    },
  ];

  const allListings = JSON.parse(localStorage.getItem('listings')) || [];

  // 👇 Only show listings that are marked as approved
  const approved = allListings.filter((prop) => prop.price && prop.status === 'approved');

  setProperties([...approved, ...staticProps]);
}, []);


  const handleBuy = (property) => {
    recordActivity('buy', property.title, property.image);
    alert(`You successfully bought: ${property.title}`);
    console.log("clicked");
    
  };

  return (
    <div className="pt-20 pb-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Properties for Sale</h1>

      {/* Optional Filters */}
      <div className="bg-gray-100 p-4 rounded-md shadow-sm mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search by location"
            className="px-4 py-2 rounded border border-gray-300 w-full"
          />
          <select className="px-4 py-2 rounded border border-gray-300 w-full">
            <option value="">Price Range</option>
            <option value="low">Below ₹1 Cr</option>
            <option value="mid">₹1 Cr - ₹2.5 Cr</option>
            <option value="high">Above ₹2.5 Cr</option>
          </select>
          <select className="px-4 py-2 rounded border border-gray-300 w-full">
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="duplex">Duplex</option>
          </select>
        </div>
      </div>

      {/* Property Listings */}
      {properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded shadow p-4">
               <Link 
               to={`/property/${property.id}`}
               key={property.id}
               className='block'
               onClick = {() => {
                localStorage.setItem('selectedProperty',JSON.stringify(property))
               }}
               >
    <PropertyCard
      id={property.id}
      image={property.image}
      title={property.title}
      location={property.location}
      price={property.price}
    />
  </Link>
              <button
                onClick={() => handleBuy(property)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          No properties found for sale at the moment.
        </p>
      )}
    </div>
  );
};

export default Buy;

