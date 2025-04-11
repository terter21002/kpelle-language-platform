import { Link } from "react-router-dom";

const CourseFooter = () => {
  return (
    <div className="flex justify-center text-black text-xl p-8 font-bold">
      <Link to="/terms" className="hover:underline">
        Terms & Conditions
      </Link>
      &nbsp;·&nbsp;
      <Link to="/privacy" className="hover:underline">
        Privacy Statement
      </Link>
    </div>
  );
};

export default CourseFooter;
