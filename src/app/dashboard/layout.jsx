import { DashBoardSidebar } from "@/components/dashboard/DashBoardSidebar";

const layout = ({children}) => {
    return (
        <div className="flex  min-h-screen">
            <DashBoardSidebar/>
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default layout;