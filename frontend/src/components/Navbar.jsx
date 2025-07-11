import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
<nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-200 ${
    isScrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-transparent'
  }`}
>

      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">
          RealEstate
        </Link>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-x-6 items-center`}
        >
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          {user?.role === 'buyer' && (
            <>
              <NavLink to="/buy" className="nav-link">
                Buy
              </NavLink>
              <NavLink to="/rent" className="nav-link">
                Rent
              </NavLink>
            </>
          )}

          {user?.role === 'seller' && (
            <NavLink to="/sell" className="nav-link">
              Sell
            </NavLink>
          )}

          {user && (
            <NavLink to="/activity" className="nav-link">
              Activity
            </NavLink>
          )}

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>

          {user ? (
            <button onClick={handleLogout} className="text-red-500">
              Logout
            </button>
          ) : (
            <div className="flex space-x-4">
              {/* Login Dropdown */}
              <div className="relative group">
                <button className="nav-link">Login</button>
                <div className="absolute hidden group-hover:block bg-white shadow p-2 mt-1 rounded z-10">
                  <NavLink to="/login/buyer" className="block px-4 py-1 hover:bg-gray-100">
                    Buyer
                  </NavLink>
                  <NavLink to="/login/seller" className="block px-4 py-1 hover:bg-gray-100">
                    Seller
                  </NavLink>
                  <NavLink to="/login/agent" className="block px-4 py-1 hover:bg-gray-100">
                    Agent
                  </NavLink>
                </div>
              </div>

              {/* Signup Dropdown */}
              <div className="relative group">
                <button className="nav-link">Signup</button>
                <div className="absolute hidden group-hover:block bg-white shadow p-2 mt-1 rounded z-10">
                  <NavLink to="/signup/buyer" className="block px-4 py-1 hover:bg-gray-100">
                    Buyer
                  </NavLink>
                  <NavLink to="/signup/seller" className="block px-4 py-1 hover:bg-gray-100">
                    Seller
                  </NavLink>
                  <NavLink to="/signup/agent" className="block px-4 py-1 hover:bg-gray-100">
                    Agent
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
