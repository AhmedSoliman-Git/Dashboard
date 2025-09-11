import type React from "react";
import Sidebar from "../Ui/Sidebar";
import DashboardContent from "./DashboardContent";
const Dashboard: React.FC = () => {
  return (
    <main className="flex gap-x-7">
      <Sidebar />
      <DashboardContent />
    </main>
  );
};

export default Dashboard;
