import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items?: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, items }) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      role="article"
    >
      <div 
        className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-100"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {items && (
        <ul className="list-disc list-inside text-gray-600 space-y-1" role="list">
          {items.map((item, index) => (
            <li key={index} className="text-sm">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeatureCard;