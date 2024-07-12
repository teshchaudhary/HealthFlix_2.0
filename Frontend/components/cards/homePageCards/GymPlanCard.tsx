import React from 'react';

interface GymPlanCardProps {
    title: string;
    description: string;
}

const GymPlanCard: React.FC<GymPlanCardProps> = ({ title, description }) => {
    return (
        <div className="bg-neutral-800 rounded-[-20px] shadow-lg p-4 h-full">
            <h3 className="text-xl font-semibold overflow-hidden whitespace-nowrap mb-2 text-white">{title}</h3>
            <hr className='py-2'></hr>
            <p className="text-sm text-white overflow-hidden whitespace-nowrap max-w-xs overflow-ellipsis h-10">{description}</p>
            <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Check Out</button>
        </div>
    );
};

export default GymPlanCard;
