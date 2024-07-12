'use client'
import { useRouter } from 'next/navigation';
import './global.css';
import DietPlanCard from '../components/cards/homePageCards/DietPlanCard';
import GymPlanCard from '../components/cards/homePageCards/GymPlanCard';
import { useState } from 'react';
import banner from '../images/banner.png'
import Image from 'next/image';


const Hero = () => {
    const router = useRouter();
    const dietPlans = [
        { id: 1, title: "Keto Diet", description: "A high-fat, low-carb diet" },
        { id: 2, title: "Mediterranean Diet", description: "A diet inspired by the eating habits of Greece and Italy" },
        { id: 3, title: "Paleo Diet", description: "Based on the types of foods presumed to have been eaten by early humans" },
        { id: 4, title: "Whole30 Diet", description: "A 30-day dietary program aimed at improving health and reducing inflammation" },
        { id: 5, title: "Intermittent Fasting", description: "An eating pattern that cycles between periods of fasting and eating" },
        { id: 6, title: "Vegetarian Diet", description: "Excludes meat and sometimes other animal products" },
        { id: 7, title: "Vegan Diet", description: "Excludes all animal products" },
        { id: 8, title: "Low-Carb Diet", description: "Limits carbohydrates such as those found in sugary foods, pasta, and bread" },
        { id: 9, title: "Low-Fat Diet", description: "Restricts fat intake to promote weight loss or improve health" },
        { id: 10, title: "DASH Diet", description: "Designed to prevent and lower high blood pressure" },
        { id: 11, title: "Flexitarian Diet", description: "Primarily vegetarian but occasionally eats meat or fish" },
        { id: 12, title: "Atkins Diet", description: "Focuses on reducing carbs while increasing protein and fat intake" },
        { id: 13, title: "South Beach Diet", description: "Emphasizes the consumption of 'good' carbs and 'good' fats" },
        { id: 14, title: "Zone Diet", description: "Balances protein, carbs, and fat in a 30-30-40 ratio" },
        { id: 15, title: "Raw Food Diet", description: "Consists of mostly or completely raw and unprocessed foods" },
    ];

    const gymPlans = [
        { id: 1, title: "Strength Training", description: "Build muscle and strength" },
        { id: 2, title: "Cardio Workout", description: "Improve cardiovascular health" },
        { id: 3, title: "HIIT (High-Intensity Interval Training)", description: "Alternates between short bursts of intense exercise and periods of rest or lower-intensity exercise" },
        { id: 4, title: "Yoga", description: "Improves flexibility, strength, and balance through a series of poses and breathing exercises" },
        { id: 5, title: "Pilates", description: "Focuses on core strength, flexibility, and overall body conditioning" },
        { id: 6, title: "CrossFit", description: "Incorporates elements from high-intensity interval training, Olympic weightlifting, plyometrics, powerlifting, gymnastics, calisthenics, and other exercises" },
        { id: 7, title: "Circuit Training", description: "Moves participants quickly through a series of exercises targeting different muscle groups with minimal rest" },
        { id: 8, title: "Swimming", description: "Improves cardiovascular fitness, endurance, and muscle strength" },
        { id: 9, title: "Running", description: "Increases cardiovascular fitness, burns calories, and improves mental well-being" },
        { id: 10, title: "Cycling", description: "Enhances cardiovascular fitness, builds muscle, and aids in weight management" },
        { id: 11, title: "Rowing", description: "Engages the entire body while providing a low-impact cardio workout" },
        { id: 12, title: "Kickboxing", description: "Combines martial arts techniques with fast-paced cardio" },
        { id: 13, title: "Zumba", description: "Involves dance and aerobic movements performed to energetic music" },
        { id: 14, title: "Barre Workout", description: "Focuses on low-impact, high-intensity movements to sculpt muscles" },
        { id: 15, title: "Bootcamp", description: "Combines strength training and aerobic exercises in a high-intensity format" },
    ];

    const [dietPlanIndex, setDietPlanIndex] = useState(0);
    const [gymPlanIndex, setGymPlanIndex] = useState(0);
    const windowSize = 4;

    const onNextDietPlan = () => {
        if (dietPlanIndex + windowSize < dietPlans.length) {
            setDietPlanIndex(prevIndex => prevIndex + 1);
        }
    };

    const onPrevDietPlan = () => {
        if (dietPlanIndex > 0) {
            setDietPlanIndex(prevIndex => prevIndex - 1);
        }
    };

    const onNextGymPlan = () => {
        if (gymPlanIndex + windowSize < gymPlans.length) {
            setGymPlanIndex(prevIndex => prevIndex + 1);
        }
    };

    const onPrevGymPlan = () => {
        if (gymPlanIndex > 0) {
            setGymPlanIndex(prevIndex => prevIndex - 1);
        }
    };

    return (
        <section>
            <div className="bg-black opacity-90 min-h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center py-10 mt-16">
                    <div className="flex items-center">
                        <span className="text-white text-4xl font-extrabold tracking-widest drop-shadow-lg ml-[200px]">Stay fit, stay bright</span>
                        <a onClick={() => router.push("/")} className="cursor-pointer transform transition-transform hover:scale-110">
                            <Image className="rotate" src={banner} alt="HealthFlix Logo" width={500} height={350} />
                        </a>
                        <span className="text-white text-4xl font-extrabold tracking-widest drop-shadow-lg">with HealthFlix by your side!</span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="text-2xl font-semibold text-white mb-10">Diet Plans</div>
                    <div className="flex overflow-hidden pb-9 hide-scroll-bar">
                        <button className="text-white" onClick={onPrevDietPlan} disabled={dietPlanIndex === 0}>
                            &lt;
                        </button>
                        <div className="flex flex-nowrap">
                            {dietPlans.slice(dietPlanIndex, dietPlanIndex + windowSize).map(plan => (
                                <div key={plan.id} className="inline-block px-3">
                                    <div className="w-64 h-33 max-w-xs overflow-hidden rounded-lg">
                                        <DietPlanCard title={plan.title} description={plan.description} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="text-white" onClick={onNextDietPlan} disabled={dietPlanIndex + windowSize >= dietPlans.length}>
                            &gt;
                        </button>
                    </div>
                    <div className="text-2xl font-semibold text-white mb-10">Gym Plans</div>
                    <div className="flex overflow-hidden pb-4 hide-scroll-bar">
                        <button className="text-white" onClick={onPrevGymPlan} disabled={gymPlanIndex === 0}>
                            &lt;
                        </button>
                        <div className="flex flex-nowrap">
                            {gymPlans.slice(gymPlanIndex, gymPlanIndex + windowSize).map(plan => (
                                <div key={plan.id} className="inline-block px-3">
                                    <div className="w-64 h-33 overflow-hidden rounded-lg">
                                        <GymPlanCard title={plan.title} description={plan.description} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className={`text-gray-300 focus:outline-none transform hover:scale-110 transition-transform duration-300 ${gymPlanIndex + windowSize >= gymPlans.length ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={onNextGymPlan} disabled={gymPlanIndex + windowSize >= gymPlans.length}>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;