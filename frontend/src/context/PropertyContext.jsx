import React, { createContext, useState } from 'react';

export const PropertyContext = createContext();

const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([
    // Initial properties
    {
      title: "Ocean View Villa",
      location: "Goa, India",
      price: "₹1.2 Cr",
      image: "https://source.unsplash.com/300x200/?villa,house",
    },
    {
      title: "Urban Apartment",
      location: "Mumbai, India",
      price: "₹95 Lakh",
      image: "https://source.unsplash.com/300x200/?apartment,city",
    },
    {
      title: "Luxury Penthouse",
      location: "Bangalore, India",
      price: "₹2.5 Cr",
      image: "https://source.unsplash.com/300x200/?penthouse,luxury",
    },
  ]);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
