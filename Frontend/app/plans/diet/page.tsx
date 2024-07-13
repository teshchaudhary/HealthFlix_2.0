'use client';
import DietPlanCard from '@/components/cards/homePageCards/DietPlanCard';
import { dietPlans } from '@/data/dietPlans';

const DietPlansPage = () => {
    return (
        <div className="bg-black opacity-90 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl font-extrabold tracking-widest drop-shadow-lg mt-10">All Diet Plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                {dietPlans.map(plan => (
                    <div key={plan.id} className="w-64 h-33 max-w-xs overflow-hidden rounded-lg">
                        <DietPlanCard title={plan.title} description={plan.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DietPlansPage;
