import Navbar from "../../../components/_common/Navbar";
import CourseFooter from "../../../components/_common/CourseFooter";
import { Outlet } from "react-router-dom";
// import CourseLevel from "./CourseLevel";
// import LevelCheck from "./LevelCheck";

const Course = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-[#F5F5DC] flex items-center justify-center">
        <Outlet />
      </div>
      <CourseFooter />
    </div>
  );
};

export default Course;
