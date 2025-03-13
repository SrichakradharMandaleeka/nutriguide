import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import DietPlans from './pages/DietPlans';
import HealthConditions from './pages/HealthConditions';
import Fitness from './pages/Fitness';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diet-plans" element={<DietPlans />} />
          <Route path="/health-conditions" element={<HealthConditions />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;