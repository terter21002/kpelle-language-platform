"use client";

import { useState } from "react";
import {
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

const Class = () => {
  const lessons = [
    {
      id: 1,
      title: "Lesson 1, Section 1",
      subtitle: "Basic Greetings & Introduction (Beginner)",
      progress: 100,
      imageUrl: "/landing_page/icon_greeting.png",
      activities: [
        { id: 1, title: "Kpelle Greetings", type: "Listening", status: "open" },
        {
          id: 2,
          title: "Kpelle Greetings",
          type: "Speaking",
          status: "locked",
        },
        {
          id: 3,
          title: "Kpelle Greetings",
          type: "Pronunciation",
          status: "locked",
        },
        {
          id: 4,
          title: "Kpelle Greetings",
          type: "Drag and Drop Games",
          status: "locked",
        },
        { id: 5, title: "Kpelle Greetings", type: "Quiz", status: "locked" },
      ],
    },
    {
      id: 2,
      title: "Lesson 2, Section 1",
      subtitle: "Numbers & Counting (Beginner)",
      progress: 10,
      imageUrl: "/landing_page/icon_number.png",
      activities: [
        {
          id: 1,
          title: "Numbers and counting",
          type: "Listening",
          status: "locked",
        },
        {
          id: 2,
          title: "Numbers and counting",
          type: "Speaking",
          status: "continue",
        },
        {
          id: 3,
          title: "Numbers and counting",
          type: "Pronunciation",
          status: "locked",
        },
        {
          id: 4,
          title: "Numbers and counting",
          type: "Drag and Drop Games",
          status: "locked",
        },
        {
          id: 5,
          title: "Numbers and counting",
          type: "Quiz",
          status: "locked",
        },
      ],
    },
  ];

  const navItems = [
    { icon: <Book className="w-5 h-5" />, label: "Learn", active: true },
    { icon: <Book className="w-5 h-5" />, label: "Courses", active: false },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      label: "Progress Report",
      active: false,
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      label: "Leaderboards",
      active: false,
    },
    { icon: <User className="w-5 h-5" />, label: "My Profile", active: false },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: "Help Center",
      active: false,
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "My Bookings",
      active: false,
    },
  ];

  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [levelAnchorEl, setLevelAnchorEl] = useState(null);

  const [selectedLanguage, setSelectedLanguage] = useState("Kpelle Language");
  const [selectedLevel, setSelectedLevel] = useState("Beginner");

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLevelClick = (event) => {
    setLevelAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = (language) => {
    if (language) setSelectedLanguage(language);
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
        <div className="flex items-center mb-6 ml-2">
          <img
            src="/landing_page/header_logo.png"
            alt="Logo"
            className="h-12 w-12"
          />
          <span className="ml-4 font-bold text-xl text-[#DD4E38]">
            Liberian Voice
          </span>
        </div>

        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center py-3 px-6 rounded-xl cursor-pointer ${
              item.active ? "bg-[#DD4E38] text-white" : "hover:bg-[#F4F4F4]"
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="">
          <div className="bg-white flex items-center justify-between border-b p-4">
            <div className="flex items-center space-x-2">
              {/* Logo - Mobile */}
              <div className="md:hidden flex items-center">
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
                <Button
                  onClick={handleLanguageClick}
                  variant="outlined"
                  style={{
                    borderRadius: "999px",
                    textTransform: "none",
                    text: "#DD4E38",
                  }}
                  endIcon={<ExpandMoreIcon />}
                >
                  {selectedLanguage}
                </Button>
                <Menu
                  anchorEl={languageAnchorEl}
                  open={Boolean(languageAnchorEl)}
                  onClose={() => handleLanguageClose(null)}
                >
                  {["Kpelle Language", "Bassa Language", "Vai Language"].map(
                    (lang) => (
                      <MenuItem
                        key={lang}
                        onClick={() => handleLanguageClose(lang)}
                      >
                        {lang}
                      </MenuItem>
                    )
                  )}
                </Menu>
              </div>
            </div>

            {/* Level Selector & Achievements */}
            <div className="flex items-center space-x-3">
              {/* Level Selector */}
              <div className="md:flex hidden">
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
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <MenuItem
                      key={level}
                      onClick={() => handleLevelClose(level)}
                    >
                      {level}
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
              <Button
                onClick={handleLanguageClick}
                variant="outlined"
                style={{ borderRadius: "999px", textTransform: "none" }}
                endIcon={<ExpandMoreIcon />}
              >
                {selectedLanguage}
              </Button>
              <Menu
                anchorEl={languageAnchorEl}
                open={Boolean(languageAnchorEl)}
                onClose={() => handleLanguageClose(null)}
              >
                {["Kpelle Language", "Bassa Language", "Vai Language"].map(
                  (lang) => (
                    <MenuItem
                      key={lang}
                      onClick={() => handleLanguageClose(lang)}
                    >
                      {lang}
                    </MenuItem>
                  )
                )}
              </Menu>
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
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <MenuItem key={level} onClick={() => handleLevelClose(level)}>
                    {level}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-around items-center bg-[#F4F4F4] p-2">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`p-2 cursor-pointer ${
                item.active
                  ? "text-[#C84C32]"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              {item.icon}
            </div>
          ))}
        </div>
        {/* Lesson Content */}
        <div className="flex-1 p-4 overflow-auto bg-[#F4F4F4]">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="mb-8">
              <div
                className={`rounded-md p-4 mb-4 flex items-center justify-between ${
                  lesson.progress == 0
                    ? "bg-[#E1D9D9] text-[rgba(0,0,0,0.2)]"
                    : "bg-[#E95050] text-white"
                }`}
              >
                <div>
                  <h2 className="font-bold">{lesson.title}</h2>
                  <p className="text-sm">{lesson.subtitle}</p>
                </div>
                <div className="flex items-center">
                  <span>Level {lesson.progress}%</span>
                  <div className="ml-2 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <Award className="h-4 w-4 text-[#E95050]" />
                  </div>
                </div>
              </div>

              {/* Activities */}
              <div className="bg-[#E9E9E9] rounded-md p-4">
                <div className="space-y-6 relative">
                  <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-yellow-400"></div>
                  {lesson.activities.map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-teal-500 border-4 border-yellow-400 flex items-center justify-center">
                        <img
                          src={lesson.imageUrl}
                          alt={activity.type}
                          className="h-8 w-8"
                        />
                      </div>
                      <div className="ml-4 flex-1 flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{activity.title}</h3>
                          <p className="text-sm text-gray-600">
                            {activity.type}
                          </p>
                        </div>
                        {(activity.status === "open" ||
                          activity.status === "continue") && (
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "#C23925",
                              borderRadius: "20px",
                            }}
                          >
                            {activity.status === "open" ? "Open" : "Continue"}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Class;
