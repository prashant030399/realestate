import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow">
    <Outlet/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
