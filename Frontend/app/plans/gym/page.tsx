'use client';
import GymPlanCard from '@/components/cards/homePageCards/GymPlanCard';
import { gymPlans } from '@/data/gymPlans';

const GymPlansPage = () => {
    return (
        <div className="bg-black opacity-90 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl font-extrabold tracking-widest drop-shadow-lg mt-10">All Gym Plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                {gymPlans.map(plan => (
                    <div key={plan.id} className="w-64 h-33 max-w-xs overflow-hidden rounded-lg">
                        <GymPlanCard title={plan.title} description={plan.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GymPlansPage;
