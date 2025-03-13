import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import BMICalculator from '../components/BMICalculator';
import { Salad, Activity, Heart, Brain, BookOpen, MessageCircle } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Main Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Discover Indian Diet Plans for Better Health
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Salad className="w-8 h-8 text-green-500" />}
            title="Regional Diet Plans"
            description="Customized meal plans based on your regional preferences"
            items={[
              "North Indian Diet Plan",
              "South Indian Diet Plan",
              "Gujarat/Rajasthani Diet",
              "Bengali Diet Plan"
            ]}
          />
          <FeatureCard
            icon={<Activity className="w-8 h-8 text-blue-500" />}
            title="Fitness & Yoga Diet"
            description="Specialized diets for fitness enthusiasts and yoga practitioners"
            items={[
              "Pre/Post Workout Meals",
              "Vegetarian Protein Plans",
              "Ayurvedic Diet Plans",
              "Weight Management"
            ]}
          />
          <FeatureCard
            icon={<Heart className="w-8 h-8 text-red-500" />}
            title="Health Conditions"
            description="Indian diet plans for managing specific health conditions"
            items={[
              "Diabetes Management",
              "Heart Healthy Diet",
              "PCOS Diet Plan",
              "Thyroid Diet"
            ]}
          />
          <FeatureCard
            icon={<Brain className="w-8 h-8 text-purple-500" />}
            title="Expert Guidance"
            description="Professional nutrition advice combining modern science with traditional wisdom"
            items={[
              "Ayurvedic Consultation",
              "Diet Chart Planning",
              "Nutritionist Support",
              "Lifestyle Guidance"
            ]}
          />
          <FeatureCard
            icon={<BookOpen className="w-8 h-8 text-yellow-500" />}
            title="Healthy Living Resources"
            description="Comprehensive guides on Indian nutrition and wellness"
            items={[
              "Seasonal Diet Tips",
              "Festival Food Guide",
              "Fasting Diet Plans",
              "Recipe Collections"
            ]}
          />
          <FeatureCard
            icon={<MessageCircle className="w-8 h-8 text-indigo-500" />}
            title="Community Support"
            description="Connect with others on their health journey"
            items={[
              "Success Stories",
              "Recipe Sharing",
              "Diet Challenges",
              "Expert Q&A"
            ]}
          />
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Calculate Your BMI
          </h2>
          <BMICalculator />
        </div>
      </section>
    </div>
  );
};

export default Home;