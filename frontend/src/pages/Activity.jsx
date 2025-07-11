import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import PropertyCard from '../components/PropertyCard';

const Activity = () => {
  const { user, activity } = useAuth();
  const [pendingProperties, setPendingProperties] = useState([]);

  useEffect(() => {
    if (user?.role === 'agent') {
      const listings = JSON.parse(localStorage.getItem('listings')) || [];
      const pending = listings.filter((p) => p.status === 'pending');
      setPendingProperties(pending);
    }
  }, [user]);

  const handleApprove = (id) => {
    const listings = JSON.parse(localStorage.getItem('listings')) || [];
    const updatedListings = listings.map((p) =>
      p.id === id ? { ...p, status: 'approved' } : p
    );
    localStorage.setItem('listings', JSON.stringify(updatedListings));
    setPendingProperties(updatedListings.filter((p) => p.status === 'pending'));
    alert('Property approved successfully!');
  };

  return (
    <div className="pt-20 pb-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Activity</h1>

      {/* Agent Dashboard */}
      {user?.role === 'agent' ? (
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Agent Dashboard</h2>
          {pendingProperties.length === 0 ? (
            <p className="text-gray-500">No pending listings.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {pendingProperties.map((property) => (
                <div key={property.id} className="bg-white rounded shadow p-4">
                  <PropertyCard {...property} />
                  <button
                    onClick={() => handleApprove(property.id)}
                    className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                  >
                    Approve
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        // Buyer/Seller Activity View
        <div>
          {activity.length === 0 ? (
            <p className="text-gray-600">No recent activity yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {activity.map((item, index) => (
                <div key={index} className="bg-white rounded shadow p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded mb-2"
                  />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 capitalize">{item.type}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Activity;
