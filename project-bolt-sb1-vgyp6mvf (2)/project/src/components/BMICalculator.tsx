import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBMI(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 25) setCategory('Normal weight');
      else if (bmiValue >= 25 && bmiValue < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 text-green-500 mr-2" />
        <h3 className="text-xl font-semibold">BMI Calculator</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="Enter height"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="Enter weight"
          />
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
      >
        Calculate BMI
      </button>

      {bmi !== null && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h4 className="text-lg font-semibold mb-2">Your Results</h4>
          <p className="text-gray-700">Your BMI is: <span className="font-bold">{bmi}</span></p>
          <p className="text-gray-700">Category: <span className="font-bold">{category}</span></p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;