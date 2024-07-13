import React from 'react';

interface DietPlanCardProps {
    title: string;
    description: string;
}

const DietPlanCard: React.FC<DietPlanCardProps> = ({ title, description }) => {
    return (
        <div className="bg-neutral-800 rounded-lg shadow-lg p-4 h-full flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2 overflow-hidden whitespace-nowrap">{title}</h3>
            <hr className='py-2' />
            <p className="text-sm text-white line-clamp-2 h-16 overflow-hidden"> {/* Fixed height */}
                {description}
            </p>
            <button 
                type="button" 
                className="mt-4 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Check Out
            </button>
        </div>
    );
};

export default DietPlanCard;
