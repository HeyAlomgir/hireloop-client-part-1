"use client"
import { useSession } from "@/lib/auth-client";
import { MoonLoader } from "react-spinners";
import { FileText, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';
import DashboardStats from "@/components/dashboard/DashboardStats";

const RecruiterDashboardHomePage = () => {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return (
            <MoonLoader
                color="#1877F2"
                cssOverride={{}}
                loading
                size={140}
                speedMultiplier={1}
            />
        )
    }

    const user = session?.user;

    const recruiterStats = [
        { title: 'Total Job Posts', value: '48', icon: FileText },
        { title: 'Total Applicants', value: '1,284', icon: Persons },
        { title: 'Active Jobs', value: '18', icon: Thunderbolt},
        { title: 'Jobs Closed', value: '32', icon: CircleCheck },
    ];
    return (
        <div>
            <h2>Welcome back, {user?.name}</h2>
            <DashboardStats statsData={recruiterStats} />
        </div>
    );
};

export default RecruiterDashboardHomePage;