'use client';
import '../global.css';
import ServicesCards from '@/components/cards/servicesCards/ServicesCards';

const Services = () => {
  const services = [
    { id: 1, title: "Personal Training", description: "One-on-one training sessions tailored to your fitness goals" },
    { id: 2, title: "Group Fitness Classes", description: "High-energy classes designed for all fitness levels" },
    { id: 3, title: "Nutrition Counseling", description: "Personalized meal plans and dietary advice" },
    { id: 4, title: "Wellness Coaching", description: "Holistic approach to achieving overall wellness" },
    { id: 5, title: "Yoga Classes", description: "Improve flexibility, strength, and mental clarity" },
    { id: 6, title: "Pilates Sessions", description: "Focus on core strength and overall body conditioning" },
  ];

  return (
    <div className="bg-black opacity-90 min-h-screen flex flex-col items-center justify-center p-6">
      <div className='my-[50px]'></div>
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
        {services.map(plan => (
          <div key={plan.id} className="w-full">
            <ServicesCards title={plan.title} description={plan.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
