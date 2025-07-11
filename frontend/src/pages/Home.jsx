import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import HeroCarousel from '../components/HeroCarousel'; // ✅ import carousel
import React from 'react';

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury Villa in Santorini',
      location: 'Santorini, Greece',
      price: '₹ 2.5 Cr',
      image: '/images/property-sample.jpg',
    },
    {
      id: 2,
      title: 'Modern Apartment in Athens',
      location: 'Athens, Greece',
      price: '₹ 1.2 Cr',
      image: '/images/property-sample.jpg',
    },
  ];

  return (
    <div className="pt-16">
      {/* ✅ Hero Carousel Section */}
      <HeroCarousel>
        <div className="bg-black bg-opacity-50 p-8 rounded text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="mb-6">Buy • Rent • Renovate • Escape</p>
          <SearchBar />
        </div>
      </HeroCarousel>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`}>
              <PropertyCard
                image={property.image}
                title={property.title}
                location={property.location}
                price={property.price}
              />
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/buy" className="text-blue-600 font-semibold hover:underline">
            View All Properties →
          </Link>
        </div>
      </section>

      {/* Renovation Highlight */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <img src="/images/renovation.jpg" alt="Renovation" className="w-full md:w-1/2 rounded-lg shadow" />
          <div>
            <h3 className="text-2xl font-bold mb-4">Metamorphoses: Our Signature Renovations</h3>
            <p className="mb-4">
              We transform spaces into stunning homes with our premium renovation service. Explore our before & after gallery.
            </p>
            <Link to="/renovations" className="text-blue-600 font-semibold hover:underline">
              Explore Renovations →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">List Your Property with Us</h2>
        <p className="mb-6">Join the CocoonEstate network and reach qualified buyers across the globe.</p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
