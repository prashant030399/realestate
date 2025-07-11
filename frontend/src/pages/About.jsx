import React from 'react';

const About = () => {
  return (
    <div className="pt-20 pb-16 px-4 max-w-5xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        About Cocoon Estate
      </h1>

      {/* Intro */}
      <p className="text-gray-600 leading-relaxed mb-6 text-center">
        Cocoon Estate is a modern real estate platform dedicated to helping people discover their dream homes across India. From luxurious apartments to smart investment opportunities, we bring transparency, trust, and technology to real estate.
      </p>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To simplify the home buying, renting, and selling process by connecting people with the right properties and providing professional guidance every step of the way.
          </p>
        </div>
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To become India’s most trusted real estate companion by blending human expertise with smart technology, ensuring a seamless experience for every customer.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Core Values</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>🏡 Transparency in every transaction</li>
          <li>💬 Clear and honest communication</li>
          <li>🧠 Smart use of technology</li>
          <li>💼 Professionalism and integrity</li>
          <li>👥 Customer-first approach</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
