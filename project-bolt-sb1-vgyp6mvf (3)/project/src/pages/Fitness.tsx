import React from 'react';
import { Dumbbell, FileWarning as Running, Cog as Yoga, Clock } from 'lucide-react';

const Fitness = () => {
  const workoutPlans = [
    {
      title: "Yoga & Meditation",
      description: "Traditional yoga practices combined with proper nutrition",
      icon: <Yoga className="w-6 h-6 text-purple-500" />,
      features: [
        "Morning yoga routines",
        "Meditation sessions",
        "Breathing exercises",
        "Diet recommendations"
      ]
    },
    {
      title: "Strength Training",
      description: "Build muscle with Indian vegetarian protein sources",
      icon: <Dumbbell className="w-6 h-6 text-blue-500" />,
      features: [
        "Weight training plans",
        "Protein-rich meal plans",
        "Recovery nutrition",
        "Supplement guidance"
      ]
    },
    {
      title: "Cardio Fitness",
      description: "Endurance training with balanced nutrition",
      icon: <Running className="w-6 h-6 text-green-500" />,
      features: [
        "Running programs",
        "HIIT workouts",
        "Pre/post workout meals",
        "Hydration guide"
      ]
    }
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Fitness Programs</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {workoutPlans.map((plan, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {plan.icon}
              <h2 className="text-xl font-semibold text-gray-800 ml-3">{plan.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <ul className="space-y-2">
              {plan.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
              Start Program
            </button>
          </div>
        ))}
      </div>

      <div className="bg-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personalized Fitness Journey</h2>
        <p className="text-gray-600 mb-6">
          Get a customized fitness and nutrition plan tailored to your goals, lifestyle, and dietary preferences.
          Our experts will help you achieve sustainable results through a balanced approach to exercise and nutrition.
        </p>
        <button className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors">
          Schedule Consultation
        </button>
      </div>
    </div>
  );
};

export default Fitness;