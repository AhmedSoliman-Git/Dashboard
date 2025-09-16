import type React from "react";
import Sidebar from "../Ui/Sidebar";
import DashboardContent from "./DashboardContent";
import { Outlet } from "react-router";
const Dashboard: React.FC = () => {
  return (
    <>
      <Outlet />

      <section>
        <main className="flex gap-x-7">
          <Sidebar />
          <DashboardContent />
        </main>
      </section>
    </>
  );
};

export default Dashboard;
