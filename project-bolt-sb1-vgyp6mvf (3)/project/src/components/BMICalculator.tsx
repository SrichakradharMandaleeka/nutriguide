import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric'); // metric or imperial
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      let bmiValue: number;
      
      if (unit === 'metric') {
        const heightInMeters = parseFloat(height) / 100;
        const weightInKg = parseFloat(weight);
        bmiValue = weightInKg / (heightInMeters * heightInMeters);
      } else {
        // Imperial calculation (height in inches, weight in pounds)
        const heightInInches = parseFloat(height);
        const weightInPounds = parseFloat(weight);
        bmiValue = (weightInPounds / (heightInInches * heightInInches)) * 703;
      }

      setBMI(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 25) setCategory('Normal weight');
      else if (bmiValue >= 25 && bmiValue < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateBMI();
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md" role="region" aria-label="BMI Calculator">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 text-green-500 mr-2" aria-hidden="true" />
        <h3 className="text-xl font-semibold">BMI Calculator</h3>
      </div>

      <div className="mb-6">
        <fieldset className="flex gap-4">
          <legend className="sr-only">Choose unit system</legend>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-green-600"
              name="unit"
              value="metric"
              checked={unit === 'metric'}
              onChange={(e) => setUnit(e.target.value)}
            />
            <span className="ml-2">Metric (cm/kg)</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-green-600"
              name="unit"
              value="imperial"
              checked={unit === 'imperial'}
              onChange={(e) => setUnit(e.target.value)}
            />
            <span className="ml-2">Imperial (in/lbs)</span>
          </label>
        </fieldset>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
            Height ({unit === 'metric' ? 'cm' : 'inches'})
          </label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder={`Enter height in ${unit === 'metric' ? 'centimeters' : 'inches'}`}
            aria-describedby="height-description"
          />
          <div id="height-description" className="text-sm text-gray-500 mt-1">
            {unit === 'metric' ? 'Example: 170' : 'Example: 67'}
          </div>
        </div>
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
            Weight ({unit === 'metric' ? 'kg' : 'lbs'})
          </label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder={`Enter weight in ${unit === 'metric' ? 'kilograms' : 'pounds'}`}
            aria-describedby="weight-description"
          />
          <div id="weight-description" className="text-sm text-gray-500 mt-1">
            {unit === 'metric' ? 'Example: 70' : 'Example: 154'}
          </div>
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Calculate BMI"
      >
        Calculate BMI
      </button>

      {bmi !== null && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md" role="alert" aria-live="polite">
          <h4 className="text-lg font-semibold mb-2">Your Results</h4>
          <p className="text-gray-700">Your BMI is: <span className="font-bold">{bmi}</span></p>
          <p className="text-gray-700">Category: <span className="font-bold">{category}</span></p>
          <div className="mt-4 text-sm text-gray-600">
            <h5 className="font-medium mb-2">BMI Categories:</h5>
            <ul className="list-disc list-inside">
              <li>Underweight: Less than 18.5</li>
              <li>Normal weight: 18.5 - 24.9</li>
              <li>Overweight: 25 - 29.9</li>
              <li>Obese: 30 or greater</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;