import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader.component";

const Layout = () => {
  return (
    <div className="min-h-screen relative">
      <header className=" bg-gray-100 z-10">
        <DashboardHeader />
      </header>

      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
