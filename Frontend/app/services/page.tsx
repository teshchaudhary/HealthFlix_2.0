'use client'
import '../global.css';
import ServicesCards from '@/components/cards/servicesCards/ServicesCards';
import { useState } from 'react';

const Services = () => {
  const services = [
    { id: 1, title: "Personal Training", description: "One-on-one training sessions tailored to your fitness goals" },
    { id: 2, title: "Group Fitness Classes", description: "High-energy classes designed for all fitness levels" },
    { id: 3, title: "Nutrition Counseling", description: "Personalized meal plans and dietary advice" },
    { id: 4, title: "Wellness Coaching", description: "Holistic approach to achieving overall wellness" },
    { id: 5, title: "Yoga Classes", description: "Improve flexibility, strength, and mental clarity" },
    { id: 6, title: "Pilates Sessions", description: "Focus on core strength and overall body conditioning" },
  ];

  const [servicesIndex, setServicesIndex] = useState(0);
  const windowSize = 3;

  const onNextServices = () => {
    if (servicesIndex + windowSize < services.length) {
      setServicesIndex(prevIndex => prevIndex + 1);
    }
  };

  const onPrevServices = () => {
    if (servicesIndex > 0) {
      setServicesIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className="bg-black opacity-90 min-h-screen flex flex-col items-center justify-center">
      <div className="text-2xl font-semibold text-gray-300 mb-10">Our Services</div>
      <div className="flex overflow-hidden pb-4 hide-scroll-bar">
        <button className="text-white" onClick={onPrevServices} disabled={servicesIndex === 0}>
          &lt;
        </button>
        <div className="flex flex-nowrap">
          {services.slice(servicesIndex, servicesIndex + windowSize).map(plan => (
            <div key={plan.id} className="inline-block px-3">
              <div className="w-162 h-84 overflow-hidden rounded-lg">
                <ServicesCards title={plan.title} description={plan.description} />
              </div>
            </div>
          ))}
        </div>
        <button className={`text-gray-300 focus:outline-none transform hover:scale-110 transition-transform duration-300 ${servicesIndex + windowSize >= services.length ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={onNextServices} disabled={servicesIndex + windowSize >= services.length}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Services;
