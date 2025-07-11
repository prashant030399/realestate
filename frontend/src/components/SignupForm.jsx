import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ role }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // ✅ Prevent duplicate email
    const emailExists = existingUsers.some(
      (user) => user.email === form.email
    );
    if (emailExists) {
      alert('Email is already registered. Please log in instead.');
      return;
    }

    // ✅ Restrict to only one agent
    const existingAgents = existingUsers.filter(user => user.role === 'agent');
    if (role === 'agent' && existingAgents.length >= 1) {
      alert('Only one agent is allowed!');
      return;
    }

    const newUser = { ...form, role };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert(`${role.toUpperCase()} signup successful! Please log in.`);
    navigate(`/login/${role}`);
  };

  return (
    <div className="pt-20 min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 shadow rounded-lg">
        <h2 className="text-xl font-bold text-center mb-6">
          Sign Up as {role.toUpperCase()}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
