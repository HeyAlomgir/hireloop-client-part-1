import React from 'react';
import { Card } from '@heroui/react';

export default function StatCard({ title, value, icon: Icon }) {
    return (
        <Card
            className="bg-[#121212] border border-[#222222] text-white w-full h-[160px] rounded-xl shadow-sm"
            variant="default"
        >
            {/* In HeroUI v3, CardBody is replaced by Card.Content. 
        We use custom styling right on the container.
      */}
            <Card.Content className="flex flex-col justify-between p-6 h-full">

                {/* Icon Wrapper */}
                <div className="flex items-center justify-center bg-[#242424] w-10 h-10 rounded-lg text-[#A3A3A3]">
                    {Icon && <Icon width={20} height={20} />}
                </div>

                {/* Content Metadata Area */}
                <div className="flex flex-col gap-1 mt-auto">
                    <span className="text-xs font-normal text-[#A3A3A3] tracking-wide">
                        {title}
                    </span>
                    <span className="text-3xl font-semibold tracking-tight text-white">
                        {value}
                    </span>
                </div>

            </Card.Content>
        </Card>
    );
}