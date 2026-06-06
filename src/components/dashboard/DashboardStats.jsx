import React from 'react';
import StatCard from './StatCard';

/**
 * StatsGrid Component
 * @param {Array} items - Array of dashboard metrics objects containing title, value, and a Gravity UI icon component.
 */
export default function DashboardStats({statsData = [] }) {
    if (!statsData || statsData.length === 0) {
        return (
            <div className="text-zinc-500 text-sm p-4 border border-dashed border-[#222222] rounded-xl text-center">
                No stats available.
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Responsive dashboard row setup. 
        Perfectly splits into 4 columns matching your asset layout when space permits. 
      */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                {statsData.map((statsData, index) => (
                    <StatCard
                        key={statsData.id || index}
                        title={statsData.title}
                        value={statsData.value}
                        icon={statsData.icon}
                    />
                ))}
            </div>
        </div>
    );
}