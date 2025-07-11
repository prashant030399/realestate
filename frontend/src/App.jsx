import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import PropertyDetail from './pages/PropertyDetail';

import Blog from './pages/Blog';
import Agents from './pages/Agents';
import About from './pages/About';
import Contact from './pages/Contact';
import Sell from './pages/Sell';
import Activity from './pages/Activity';
import PrivateRoute from './components/PrivateRoute';

// Role-based Login/Signup Pages
import BuyerLogin from './pages/login/BuyerLogin';
import SellerLogin from './pages/login/SellerLogin';
import AgentLogin from './pages/login/AgentLogin';
import BuyerSignup from './pages/signup/Buyersignup';
import SellerSignup from './pages/signup/Sellersignup';
import AgentSignup from './pages/signup/Agentsignup';



// const NotFound = () => <div>404 Not Found</div>;

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
       
        <main className="flex-grow">
          <Routes>

            {/* Pages under main layout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sell" element={<Sell />} />

              <Route
                path="/activity"
                element={
        
                    <Activity />
       
                }
              />
            </Route>

            {/* Auth layout for login/signup */}
            <Route element={<AuthLayout />}>
              {/* Login routes */}
              <Route path="/login/buyer" element={<BuyerLogin />} />
              <Route path="/login/seller" element={<SellerLogin />} />
              <Route path="/login/agent" element={<AgentLogin />} />

              {/* Signup routes */}
              <Route path="/signup/buyer" element={<BuyerSignup />} />
              <Route path="/signup/seller" element={<SellerSignup />} />
              <Route path="/signup/agent" element={<AgentSignup />} />
            </Route>

            {/* 404 fallback (optional) */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      
      </div>
    </Router>
  );
};

export default App;
