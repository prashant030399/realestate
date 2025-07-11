import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const AgentCard = ({ agent }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 text-center">
      <img
        src={agent.image}
        alt={agent.name}
        className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
      />
      <h3 className="text-lg font-bold text-gray-800">{agent.name}</h3>
      <p className="text-gray-500 mb-3">{agent.title}</p>

      <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-blue-600" />
          <a href={`mailto:${agent.email}`} className="hover:underline">
            {agent.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-blue-600" />
          <a href={`tel:${agent.phone}`} className="hover:underline">
            {agent.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
