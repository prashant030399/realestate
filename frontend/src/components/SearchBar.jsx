import React, { useState } from 'react';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    // For now, just log the values
    console.log('Search:', { keyword, location, priceRange });

    // You can pass these values to a parent via props or context later
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-3">
      <input
        type="text"
        placeholder="Keyword (e.g. apartment, villa)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 text-gray-800 w-full"
      />

      <input
        type="text"
        placeholder="Location (e.g. Mumbai)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 text-gray-800 w-full"
      />

      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 text-gray-800 w-full"
      >
        <option value="">Price Range</option>
        <option value="below-1cr">Below ₹1 Cr</option>
        <option value="1-2cr">₹1 Cr - ₹2 Cr</option>
        <option value="above-2cr">Above ₹2 Cr</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
