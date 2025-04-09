import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader.component";
import Footer from "./MainFooter";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const footerClass =
    location.pathname == "/language-id"
      ? "shape-fill-yellow"
      : "shape-fill-white";

  return (
    <div className="min-h-screen relative">
      <header className=" bg-gray-100 z-10">
        <DashboardHeader />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer className={footerClass} />
    </div>
  );
};

export default Layout;
