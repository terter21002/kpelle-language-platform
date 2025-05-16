import { useState, useEffect } from "react";
import {
  BookOpenText,
  Book,
  BarChart2,
  Trophy,
  User,
  HelpCircle,
  Calendar,
  Award,
  Gift,
  User2,
} from "lucide-react";
import { Menu, MenuItem, Button } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const ClassLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [languages, setLanguages] = useState([]);
  const [levels, setLevels] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState("Beginner");
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [levelAnchorEl, setLevelAnchorEl] = useState(null);

  const navItems = [
    {
      icon: <BookOpenText className="w-5 h-5" />,
      label: "Learn",
      router: "/class/learn",
    },
    {
      icon: <Book className="w-5 h-5" />,
      label: "Courses",
      router: "/class/course",
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      label: "Progress Report",
      router: "/class/progress",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      label: "Leaderboards",
      router: "/class/leaderboard",
    },
    {
      icon: <User className="w-5 h-5" />,
      label: "My Profile",
      router: "/class/profile",
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: "Help Center",
      router: "/class/help",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "My Bookings",
      router: "/class/booking",
    },
  ];

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/languages");
        setLanguages(response.data);
        if (response.data.length > 0) {
          setSelectedLanguage(response.data[0]);
          setLevels(response.data[0].levels);
        }
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchLanguages();
  }, []);

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLevelClick = (event) => {
    setLevelAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = (language) => {
    if (language) {
      setSelectedLanguage(language);
      setLevels(language.levels);
      setSelectedLevel(language.levels[0].name);
    }
    setLanguageAnchorEl(null);
  };

  const handleLevelClose = (level) => {
    if (level) setSelectedLevel(level);
    setLevelAnchorEl(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r p-4 space-y-2">
        <div
          className="flex items-center mb-6 ml-2 cursor-pointer"
          onClick={() => navigate("/class")}
        >
          <img
            src="/landing_page/header_logo.png"
            alt="Logo"
            className="h-12 w-12"
          />
          <span className="ml-4 font-bold text-xl text-[#DD4E38]">
            Liberian Voice
          </span>
        </div>

        {navItems.map((item, index) => {
          const isActive = location.pathname.includes(item.router);

          return (
            <div
              key={index}
              className={`flex items-center py-3 px-6 rounded-xl cursor-pointer ${
                isActive ? "bg-[#DD4E38] text-white" : "hover:bg-[#F4F4F4]"
              }`}
              onClick={() => navigate(item.router)}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="">
          <div className="bg-white flex items-center justify-between border-b p-4">
            <div className="flex items-center space-x-2">
              {/* Logo - Mobile */}
              <div
                className="md:hidden flex items-center cursor-pointer"
                onClick={() => navigate("/class")}
              >
                <img
                  src="/landing_page/header_logo.png"
                  alt="Logo"
                  className="h-8 w-8"
                />
                <span className="ml-4 font-bold text-[#DD4E38]">
                  Liberian Voice
                </span>
              </div>

              {/* Language Selector */}
              <div className="md:flex hidden">
                {selectedLanguage && (
                  <>
                    <Button
                      onClick={handleLanguageClick}
                      variant="outlined"
                      style={{
                        borderRadius: "999px",
                        borderColor: "#DD4E38",
                        textTransform: "none",
                        color: "#DD4E38",
                      }}
                      endIcon={<ExpandMoreIcon />}
                    >
                      {selectedLanguage.name}
                    </Button>
                    <Menu
                      anchorEl={languageAnchorEl}
                      open={Boolean(languageAnchorEl)}
                      onClose={() => handleLanguageClose(null)}
                    >
                      {languages.map((lang) => (
                        <MenuItem
                          key={lang._id}
                          onClick={() => handleLanguageClose(lang)}
                        >
                          {lang.name}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )}
              </div>
            </div>

            {/* Level Selector & Achievements */}
            <div className="flex items-center space-x-3">
              {/* Level Selector */}
              <div className="md:flex hidden">
                <Button
                  onClick={handleLevelClick}
                  variant="outlined"
                  style={{
                    borderRadius: "999px",
                    borderColor: "#DD4E38",
                    textTransform: "none",
                    color: "#DD4E38",
                  }}
                  endIcon={<ExpandMoreIcon />}
                >
                  {selectedLevel}
                </Button>
                <Menu
                  anchorEl={levelAnchorEl}
                  open={Boolean(levelAnchorEl)}
                  onClose={() => handleLevelClose(null)}
                >
                  {levels.map((level) => (
                    <MenuItem
                      key={level.name}
                      onClick={() => handleLevelClose(level.name)}
                    >
                      {level.name}
                    </MenuItem>
                  ))}
                </Menu>
              </div>

              {/* Achievements */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-yellow-100 rounded-full p-1 px-2">
                  <span className="text-yellow-600 font-bold">2</span>
                  <Award className="h-5 w-5 text-yellow-500 ml-1" />
                </div>
                <Gift className="h-6 w-6 text-yellow-500" />
                <Trophy className="h-6 w-6 text-yellow-500" />
                <User2 className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
          </div>

          <div className="md:hidden flex justify-between bg-[#F4F4F4] p-4">
            <div className="">
              {selectedLanguage && (
                <>
                  <Button
                    onClick={handleLanguageClick}
                    variant="outlined"
                    style={{ borderRadius: "999px", textTransform: "none" }}
                    endIcon={<ExpandMoreIcon />}
                  >
                    {selectedLanguage.name}
                  </Button>
                  <Menu
                    anchorEl={languageAnchorEl}
                    open={Boolean(languageAnchorEl)}
                    onClose={() => handleLanguageClose(null)}
                  >
                    {languages.map((lang) => (
                      <MenuItem
                        key={lang._id}
                        onClick={() => handleLanguageClose(lang)}
                      >
                        {lang.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
            </div>
            <div className="">
              <Button
                onClick={handleLevelClick}
                variant="outlined"
                style={{ borderRadius: "999px", textTransform: "none" }}
                endIcon={<ExpandMoreIcon />}
              >
                {selectedLevel}
              </Button>
              <Menu
                anchorEl={levelAnchorEl}
                open={Boolean(levelAnchorEl)}
                onClose={() => handleLevelClose(null)}
              >
                {levels.map((level) => (
                  <MenuItem
                    key={level.name}
                    onClick={() => handleLevelClose(level.name)}
                  >
                    {level.name}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-around items-center bg-[#F4F4F4] p-2">
          {navItems.map((item, index) => {
            const isActive = location.pathname.includes(item.router);

            return (
              <div
                key={index}
                className={`p-2 cursor-pointer ${
                  isActive
                    ? "text-[#C84C32]"
                    : "text-gray-500 hover:text-gray-400"
                }`}
                onClick={() => navigate(item.router)}
              >
                {item.icon}
              </div>
            );
          })}
        </div>
        <main className="flex-1 p-4 overflow-auto bg-[#F4F4F4]">
          <Outlet context={{ selectedLanguage, selectedLevel }} />
        </main>
      </div>
    </div>
  );
};

export default ClassLayout;
