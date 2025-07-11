import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginForm = ({ role }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check credentials and role
    const matchedUser = users.find(
      (user) =>
        user.email === form.email &&
        user.password === form.password &&
        user.role === role
    );

    if (!matchedUser) {
      alert('Invalid credentials or role mismatch');
      return;
    }

    login(matchedUser); // Save to context/localStorage
    navigate('/');
  };

  return (
    <div className="mt-20 w-full h-[60vh] flex justify-center items-center">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow w-80">
        <h2 className="text-xl mb-4 capitalize">{role} Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="block w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="block w-full mb-3 p-2 border rounded"
          required
        />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

