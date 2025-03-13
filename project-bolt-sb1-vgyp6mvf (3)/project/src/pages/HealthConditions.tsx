import React from 'react';
import { Heart, Brain, Droplets, Thermometer } from 'lucide-react';

const HealthConditions = () => {
  const conditions = [
    {
      category: "Metabolic Conditions",
      items: [
        {
          title: "Diabetes Management",
          description: "Specialized diet plans for Type 1 and Type 2 diabetes",
          icon: <Droplets className="w-6 h-6 text-blue-500" />,
          recommendations: [
            "Low glycemic index foods",
            "Portion control guidelines",
            "Meal timing strategies",
            "Sugar alternatives"
          ]
        },
        {
          title: "Thyroid Health",
          description: "Nutrition guidance for hypothyroid and hyperthyroid conditions",
          icon: <Thermometer className="w-6 h-6 text-red-500" />,
          recommendations: [
            "Iodine-rich food options",
            "Selenium-rich ingredients",
            "Goitrogen management",
            "Anti-inflammatory foods"
          ]
        }
      ]
    },
    {
      category: "Cardiovascular Health",
      items: [
        {
          title: "Heart Disease",
          description: "Heart-healthy diet plans with Indian food choices",
          icon: <Heart className="w-6 h-6 text-red-500" />,
          recommendations: [
            "Low-sodium alternatives",
            "Heart-healthy fats",
            "Fiber-rich options",
            "Antioxidant-rich foods"
          ]
        },
        {
          title: "Hypertension",
          description: "Dietary approaches to manage blood pressure",
          icon: <Brain className="w-6 h-6 text-purple-500" />,
          recommendations: [
            "DASH diet adaptation",
            "Potassium-rich foods",
            "Sodium reduction tips",
            "Stress-reducing herbs"
          ]
        }
      ]
    }
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Health Condition Specific Plans</h1>
      
      {conditions.map((category, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">{category.category}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {category.items.map((condition, condIdx) => (
              <div key={condIdx} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {condition.icon}
                  <h3 className="text-xl font-medium text-gray-800 ml-3">{condition.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{condition.description}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Dietary Recommendations:</h4>
                  <ul className="space-y-2">
                    {condition.recommendations.map((rec, recIdx) => (
                      <li key={recIdx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                  View Detailed Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-green-50 rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personalized Guidance</h2>
        <p className="text-gray-600 mb-4">
          Our health condition specific plans are designed by expert nutritionists and reviewed by healthcare professionals. Each plan can be customized to your specific needs and severity of the condition.
        </p>
        <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-colors">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default HealthConditions;