import Footer from "../../components/_common/MainFooter";
import Navbar from "../../components/_common/Navbar";
import { Outlet } from "react-router-dom";

const Tutor = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer className="shape-fill-yellow" />
    </div>
  );
};

export default Tutor;
