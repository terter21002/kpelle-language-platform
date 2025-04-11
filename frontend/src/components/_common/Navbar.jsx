import { Link } from "react-router-dom";
import { LogOutIcon } from "lucide-react";
import MainButton from "../button/MainButton";
import { UseAuth } from "../../contexts/authContext";

const Navbar = () => {
  const { state, dispatch } = UseAuth();
  const { isAuthenticated } = state;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token"); // Remove token from local storage
    localStorage.removeItem("user"); // Remove user data from local storage
  };
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link to="/">
        <img
          src="/landing_page/header_logo.png"
          alt="Liberian Native Voice Logo"
          className="w-20 h-20 object-contain"
        />
      </Link>

      <div className="hidden md:flex items-center space-x-8 text-lg">
        <Link to="/" className="text-black hover:text-black/70">
          Home
        </Link>
        <Link to="/tutor" className="text-black hover:text-black/70">
          Tutors
        </Link>
        <Link to="/culture" className="text-black hover:text-black/70">
          Cultural Insight
        </Link>
        <Link to="/subscription" className="text-black hover:text-black/70">
          Subscription Plan
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <>
            {/* <span className="text-white hover:text-white/70 text-lg cursor-pointer">
                    Welcome, {user.firstName}
                  </span> 
                  */}
            <button
              onClick={handleLogout}
              className="text-white hover:text-white/70 text-lg cursor-pointer"
            >
              <LogOutIcon />
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-black hover:text-black/70 text-lg cursor-pointer"
            >
              Login
            </Link>
            <Link to="/sign-up">
              <MainButton title="Sign Up" />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
