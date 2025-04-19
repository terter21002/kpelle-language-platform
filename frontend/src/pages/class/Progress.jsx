import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Progress = () => {
  const proficiency = 65;
  const modulesCompleted = 10;
  const totalModules = 50;
  const [progress, setProgress] = useState(0);
  const circleRef = useRef(null);
  const gradientId = "gradientStroke";

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress > proficiency) {
        clearInterval(interval);
        currentProgress = proficiency;
      }
      setProgress(currentProgress);
    }, 20);

    return () => clearInterval(interval);
  }, [proficiency]);

  const strokeDasharray = 2 * Math.PI * 72;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * progress) / 100;
  const performanceData = [
    {
      category: "Vocabulary",
      value: 75,
      total: 100,
      label: "Words Learned (75/100)",
    },
    {
      category: "Listening",
      value: 85,
      total: 100,
      label: "Comprehension (85% accuracy)",
    },
    {
      category: "Grammar quiz",
      value: 60,
      total: 100,
      label: "Exercise (60% average)",
    },
    {
      category: "Pronunciation",
      value: 80,
      total: 100,
      label: "Words Learned (B+)",
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const weeklyActivity = [
    { day: "Mon", minutes: 15 },
    { day: "Tue", minutes: 22 },
    { day: "Wed", minutes: 10 },
    { day: "Thu", minutes: 30 },
    { day: "Fri", minutes: 60 },
    { day: "Sat", minutes: 30 },
    { day: "Sun", minutes: 5 },
  ];

  const totalLearningTime = "8hrs/20mins";

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Progress Overview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold text-[#57270E] mb-4">
            Progress Overview
          </h2>
          <div className="flex items-center">
            <div className="bg-[#F99898] text-white rounded-full w-12 h-12 p-2 flex items-center justify-center mr-4">
              <img src="/landing_page/icon_progress.png" alt="progress icon" />
            </div>
            <div>
              <p className="text-[#57270E] font-medium">
                Kpelle Proficiency: {proficiency}%
              </p>
              <p className="text-sm text-[#57270E]">
                Complete 10 more lessons to reach intermediate
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="my-8 relative w-40 h-40">
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 160 160"
              >
                <defs>
                  <linearGradient id={gradientId}>
                    <stop offset="0%" stopColor="#00AB94" />
                    <stop
                      offset={`${(progress / proficiency) * 100}%`}
                      stopColor="#FFBC02"
                    />
                  </linearGradient>
                </defs>
                <circle
                  cx="80"
                  cy="80"
                  r="72"
                  stroke="#D9D9D9"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  ref={circleRef}
                  cx="80"
                  cy="80"
                  r="72"
                  stroke={`url(#${gradientId})`}
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  transform="rotate(-90 80 80)"
                  style={{ transition: "stroke-dashoffset 0.3s ease-out" }}
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-xl font-semibold">{progress}%</p>
                <p className="text-sm">
                  {modulesCompleted}/{totalModules} Module
                </p>
              </div>
            </div>
          </div>

          <p className="text-center">
            Lessons Completed {modulesCompleted}/{totalModules} Module
          </p>
        </div>

        {/* Performance Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold text-[#57270E] mb-6">
            Performance Breakdown
          </h2>
          {performanceData.map((item, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between text-[#57270E] text-sm mb-1">
                <span>{item.category}</span>
                <span>{item.label}</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded overflow-hidden">
                <div
                  className={`h-full bg-[#FFBC02] rounded transition-all duration-2000 ease-in-out`}
                  style={{
                    width: animate
                      ? `${(item.value / item.total) * 100}%`
                      : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#57270E]">
              Weekly Activity Chart
            </h2>
            <div className="relative bg-white">
              <button className="flex items-center border rounded px-3 py-1 text-gray-700 cursor-pointer">
                This Week <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <div className="w-12 h-12 p-2 rounded-full bg-[#F99898] flex items-center justify-center mr-4">
              <img src="/landing_page/icon_prize.png" alt="progress icon" />
            </div>
            <div>
              <p className="font-medium text-[#57270E]">Activity Tracker</p>
              <p className="text-sm text-[#57270E]">
                Bar Chart showing daily learning time
              </p>
            </div>
          </div>

          <div className="mb-12 font-medium text-[#57270E]">
            Total Learning Time {totalLearningTime}
          </div>

          <div className="relative h-[200px] mb-2">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
              {[60, 50, 40, 30, 20, 10].map((m, i) => (
                <div key={i}>
                  {m}
                  <sub>min</sub>
                </div>
              ))}
              <div></div>
            </div>

            {/* Bars */}
            <div className="ml-10 h-full flex items-end">
              {weeklyActivity.map((day, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="relative w-full flex justify-center">
                    {day.day === "Fri" && (
                      <div className="absolute -top-8">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z"
                            fill="#FFD700"
                            stroke="#E6B800"
                          />
                        </svg>
                      </div>
                    )}
                    <div
                      className="w-6 bg-yellow-400 rounded-t transition-all duration-2000 ease-in-out"
                      style={{
                        height: animate
                          ? `${(day.minutes / 60) * 180}px`
                          : "0px",
                      }}
                    ></div>
                  </div>
                  <div className="mt-2 text-xs">{day.day}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold text-[#57270E] mb-6">
            Achievements & Rewards
          </h2>

          <div className="mb-6">
            <div className="bg-[#C23925] rounded-lg p-4 flex flex-col items-center text-white">
              <img
                src="/landing_page/cup.png"
                alt="cup"
                className="object-cover w-24 h-24"
              />
              <div className="font-bold text-center">Achievement Master</div>
              <div className="text-sm text-center">500 Words Learned</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 p-2 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-2">
                    <img
                      src="/landing_page/bassa_game.png"
                      alt="bassa game"
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#87380E] text-white text-xs px-2 py-1 rounded-full text-center whitespace-nowrap">
                    Complete 20 lessons
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
