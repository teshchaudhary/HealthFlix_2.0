'use client'
import { useRouter } from 'next/navigation';
import './global.css';
import DietPlanCard from '../components/cards/homePageCards/DietPlanCard';
import GymPlanCard from '../components/cards/homePageCards/GymPlanCard';
import banner from '../images/banner.png';
import Image from 'next/image';
import { dietPlans } from '@/data/dietPlans';
import { gymPlans } from '@/data/gymPlans';
import Footer from '@/components/footer/Footer';
import Navbar from "../components/navbar/page";

const Hero = () => {
    const router = useRouter();
    const windowSize = 4;

    return (
        <section>
            <Navbar />
            <div className="bg-black opacity-90 min-h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center py-10 mt-16">
                    <div className="flex items-center">
                        <span className="text-white text-4xl font-extrabold tracking-widest drop-shadow-lg ml-[200px]">Stay Fit, Stay Bright</span>
                        <a onClick={() => router.push("/")} className="cursor-pointer transform transition-transform hover:scale-110">
                            <Image className="rotate" src={banner} alt="HealthFlix Logo" width={500} height={350} />
                        </a>
                        <span className="text-white text-4xl font-extrabold tracking-widest drop-shadow-lg">with HealthFlix by your side!</span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="text-2xl font-semibold text-white mb-10">Diet Plans</div>
                    <div className="flex overflow-hidden pb-9 hide-scroll-bar">
                        <div className="flex flex-nowrap">
                            {dietPlans.slice(0, windowSize).map(plan => (
                                <div key={plan.id} className="inline-block px-3">
                                    <div className="w-64 h-33 max-w-xs overflow-hidden rounded-lg">
                                        <DietPlanCard title={plan.title} description={plan.description} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-end w-full pr-5 mb-5 mt-[-20px]">
                        <button
                            className="bg-red-600 text-white transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-red-600 px-4 py-2 rounded-md mx-[-10px]"
                            onClick={() => router.push('/plans/diet')}
                        >
                            View All
                        </button>
                    </div>
                    <div className="text-2xl font-semibold text-white mb-10">Gym Plans</div>
                    <div className="flex overflow-hidden pb-4 hide-scroll-bar">
                        <div className="flex flex-nowrap">
                            {gymPlans.slice(0, windowSize).map(plan => (
                                <div key={plan.id} className="inline-block px-3">
                                    <div className="w-64 h-33 overflow-hidden rounded-lg">
                                        <GymPlanCard title={plan.title} description={plan.description} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-end w-full pr-5 mb-5">
                        <button
                            className="bg-red-600 text-white transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-red-600 px-5 py-2 mx-[-10px] rounded-md"
                            onClick={() => router.push('/plans/gym')}
                        >
                            View All
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Hero;
