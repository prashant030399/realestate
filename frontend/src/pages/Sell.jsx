import React, { useContext, useState } from 'react';
import { PropertyContext } from '../context/PropertyContext';
import { useAuth } from '../context/AuthContext';

const Sell = () => {
  const { setProperties } = useContext(PropertyContext);
  const { recordActivity } = useAuth();

  const [form, setForm] = useState({
    title: '',
    location: '',
    price: '',
    rent: '',
    image: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem('currentUser')); // get logged in seller

  const newListing = {
    ...form,
    id: Date.now().toString(),
    status: 'pending',               // 👈 pending approval
    addedBy: user?.email || 'N/A',   // 👈 seller’s email
  };

  const existingListings = JSON.parse(localStorage.getItem('listings')) || [];
  const updatedListings = [...existingListings, newListing];

  localStorage.setItem('listings', JSON.stringify(updatedListings));
  setProperties(updatedListings);
  recordActivity('sell', form.title, form.image);

  alert('Property submitted for approval. Only agent can approve.');
  setForm({ title: '', location: '', price: '', rent: '', image: '' });
};


  return (
    <div className="pt-20 pb-16 px-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Sell a Property</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="price"
          placeholder="Sale Price (leave empty if rental)"
          value={form.price}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="rent"
          placeholder="Monthly Rent (leave empty if for sale)"
          value={form.rent}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
        >
          List Property
        </button>
      </form>
    </div>
  );
};

export default Sell;
