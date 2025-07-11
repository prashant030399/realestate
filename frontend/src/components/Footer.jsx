import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            Cocoon<span className="text-blue-500">Estate</span>
          </Link>
          <p className="mt-4 text-sm">
            Boutique real estate agency offering premium properties for sale, rent, and renovation in prime locations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/buy" className="hover:text-white">Buy</Link></li>
            <li><Link to="/rent" className="hover:text-white">Rent</Link></li>
            <li><Link to="/renovations" className="hover:text-white">Renovations</Link></li>
            <li><Link to="/agents" className="hover:text-white">Agents</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>+91 91319 15144</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span>info@cocoonestate.com</span>
            </li>
            <li>
              Neo Psychiko, Athens, Greece
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white text-blue-500 text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white text-blue-500 text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white text-blue-500 text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CocoonEstate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
