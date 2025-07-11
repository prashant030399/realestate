import React from 'react';
import AgentCard from '../components/AgentCard';

const Agents = () => {
  // Sample agent data
  const agents = [
    {
      id: 1,
      name: 'Rohit Mehra',
      title: 'Senior Property Consultant',
      email: 'rohit@cocoonestate.in',
      phone: '+91-9876543210',
      image: '/images/agent1.jpg',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Luxury Property Expert',
      email: 'priya@cocoonestate.in',
      phone: '+91-9876501234',
      image: '/images/agent2.jpg',
    },
    {
      id: 3,
      name: 'Suresh Reddy',
      title: 'Rental Advisor',
      email: 'suresh@cocoonestate.in',
      phone: '+91-9876007890',
      image: '/images/agent3.jpg',
    },
  ];

  return (
    <div className="pt-20 pb-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Expert Agents</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default Agents;
