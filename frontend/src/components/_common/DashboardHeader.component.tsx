import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Play, LogOutIcon } from "lucide-react";
import MainButton from "../button/MainButton";
import { UseAuth } from "../../contexts/authContext";

const DashboardHeader = () => {
  const { state, dispatch } = UseAuth();
  const { isAuthenticated, user } = state;
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token"); // Remove token from local storage
    localStorage.removeItem("user"); // Remove user data from local storage
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/landing_page/mainheader_bg.png')`,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src="/landing_page/header_logo.png"
            alt="Liberian Native Voice Logo"
            className="w-20 h-20 object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-lg">
          <Link to="/" className="text-white hover:text-white/70">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-white hover:text-white/70 cursor-pointer">
              <span>Courses</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <Link
            to="/cultural-insight"
            className="text-white hover:text-white/70"
          >
            Cultural Insight
          </Link>
          <Link to="/subscription" className="text-white hover:text-white/70">
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
                className="text-white hover:text-white/70 text-lg cursor-pointer"
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

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-16 pb-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-5xl mx-auto leading-tight">
          Discover the Beauty of{" "}
          <span className="text-[#FFBC02]">Liberian Native Voice</span> Language
          and <br />
          Culture
        </h1>

        <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
          Start your journey to fluency with our interactive lessons, engaging
          exercises, and immersive cultural insights.
        </p>

        <div className="mt-12 flex justify-center">
          <img
            src="/landing_page/header_book.png"
            alt="Keep Learning"
            width={200}
            height={200}
          />
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 px-3 py-2 rounded-4xl bg-[#C23925]">
            <Link
              to="#"
              className="rounded-full bg-[#E8EAF6] px-6 py-2 text-[#4A2B26] font-medium hover:opacity-90 transition-opacity"
            >
              Start Learning
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">Watch Video</span>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EAF6] text-[#4A2B26] hover:opacity-90 transition-opacity cursor-pointer"
                aria-label="Play video"
              >
                <Play className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardHeader;
