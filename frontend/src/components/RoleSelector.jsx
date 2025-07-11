import React, { useEffect, useState } from 'react';

const RoleSelector = () => {
  const [role, setRole] = useState(localStorage.getItem('userRole') || '');

  const handleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    localStorage.setItem('userRole', selectedRole);
  };

  return (
    <select
      value={role}
      onChange={handleChange}
      className="text-sm border border-gray-300 px-2 py-1 rounded bg-white"
    >
      <option value="">Role</option>
      <option value="buyer">Buyer</option>
      <option value="seller">Seller</option>
      <option value="agent">Agent</option>
    </select>
  );
};

export default RoleSelector;
