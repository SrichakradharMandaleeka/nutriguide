import React from 'react';
import { Leaf, Utensils, Clock, Calendar } from 'lucide-react';

const DietPlans = () => {
  const dietCategories = [
    {
      title: "Weight Management",
      plans: [
        { name: "Weight Loss Diet Plan", duration: "8 weeks", meals: 6 },
        { name: "Weight Gain Diet Plan", duration: "12 weeks", meals: 6 },
        { name: "Maintenance Diet", duration: "Ongoing", meals: 5 }
      ]
    },
    {
      title: "Regional Plans",
      plans: [
        { name: "North Indian Diet Plan", duration: "4 weeks", meals: 4 },
        { name: "South Indian Diet Plan", duration: "4 weeks", meals: 5 },
        { name: "Bengali Diet Plan", duration: "4 weeks", meals: 4 }
      ]
    },
    {
      title: "Lifestyle Plans",
      plans: [
        { name: "Vegetarian Plan", duration: "4 weeks", meals: 5 },
        { name: "Vegan Plan", duration: "4 weeks", meals: 6 },
        { name: "Keto-Friendly Indian", duration: "6 weeks", meals: 5 }
      ]
    }
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Diet Plans</h1>
      
      <div className="grid gap-8">
        {dietCategories.map((category, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{category.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {category.plans.map((plan, planIdx) => (
                <div key={planIdx} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">{plan.name}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-green-500" />
                      <span>Duration: {plan.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Utensils className="w-5 h-5 mr-2 text-green-500" />
                      <span>{plan.meals} meals per day</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                    View Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-green-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our Diet Plans?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start">
            <Leaf className="w-6 h-6 text-green-500 mr-3 mt-1" />
            <div>
              <h3 className="font-medium text-gray-800">Culturally Appropriate</h3>
              <p className="text-gray-600">Plans that respect Indian dietary preferences and restrictions</p>
            </div>
          </div>
          <div className="flex items-start">
            <Calendar className="w-6 h-6 text-green-500 mr-3 mt-1" />
            <div>
              <h3 className="font-medium text-gray-800">Flexible Duration</h3>
              <p className="text-gray-600">Choose plans that fit your schedule and goals</p>
            </div>
          </div>
          <div className="flex items-start">
            <Utensils className="w-6 h-6 text-green-500 mr-3 mt-1" />
            <div>
              <h3 className="font-medium text-gray-800">Balanced Nutrition</h3>
              <p className="text-gray-600">Scientifically designed for optimal health benefits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlans;