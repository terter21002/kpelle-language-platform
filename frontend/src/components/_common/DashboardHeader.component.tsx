import React from "react";
import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className="p-2 flex items-center justify-between">
      <div>Logo</div>
      <div>Naviate button</div>
      <div>signup button</div>
    </div>
  );
};

export default DashboardHeader;
