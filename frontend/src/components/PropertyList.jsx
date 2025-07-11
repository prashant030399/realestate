import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return <p className="text-center text-gray-600">No properties found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          image={property.image}
          title={property.title}
          location={property.location}
          price={property.price}
        />
      ))}
    </div>
  );
};

export default PropertyList;
