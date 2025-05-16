import { useState, useEffect } from "react";
import { Award } from "lucide-react";
import { Button } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

const Class = () => {
  const navigate = useNavigate();
  const { selectedLanguage, selectedLevel } = useOutletContext();
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      if (selectedLanguage && selectedLevel) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/lessons/${selectedLanguage._id}/${selectedLevel}`
          );
          setLessons(response.data);
        } catch (error) {
          console.error("Error fetching lessons:", error);
        }
      }
    };

    fetchLessons();
  }, [selectedLanguage, selectedLevel]);

  const handleActivityClick = (lessonId, activityId) => {
    navigate(`/class/learn/${lessonId}/activity/${activityId}`);
  };

  return (
    <div>
      {lessons.map((lesson) => (
        <div key={lesson._id} className="mb-8">
          <div
            className={`rounded-md p-4 mb-4 flex items-center justify-between ${
              lesson.progress === 0
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
              {lesson.activities.map((activity, index) => {
                const isPreviousComplete =
                  index === 0
                    ? true
                    : lesson.activities[index - 1].unitProgress === 100;

                return (
                  <div
                    key={activity._id || index}
                    className="relative flex items-start"
                  >
                    {/* Connector line */}
                    {index !== 0 && (
                      <div
                        className={`absolute left-7 top-[-24px] h-6 w-0.5 ${
                          isPreviousComplete ? "bg-yellow-400" : "bg-gray-300"
                        }`}
                      ></div>
                    )}

                    {/* Icon with circular progress */}
                    <div className="relative z-10 flex-shrink-0 w-14 h-14">
                      <svg
                        className="absolute top-0 left-0"
                        width="56"
                        height="56"
                      >
                        <circle
                          cx="28"
                          cy="28"
                          r="26"
                          stroke="#E9E9E9"
                          strokeWidth="4"
                          fill="none"
                        />
                        <circle
                          cx="28"
                          cy="28"
                          r="26"
                          stroke="#FACC15"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray={2 * Math.PI * 26}
                          strokeDashoffset={
                            2 * Math.PI * 26 * (1 - activity.unitProgress / 100)
                          }
                          transform="rotate(-90 28 28)"
                        />
                      </svg>
                      <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center">
                        <img
                          src={lesson.imageUrl}
                          alt={activity.type}
                          className="h-8 w-8"
                        />
                      </div>
                    </div>

                    {/* Text and button */}
                    <div className="ml-4 flex-1 flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{activity.title}</h3>
                        <p className="text-sm text-gray-600">{activity.type}</p>
                      </div>
                      {(activity.status === "open" ||
                        activity.status === "continue") && (
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#C23925",
                            borderRadius: "20px",
                          }}
                          onClick={() =>
                            handleActivityClick(lesson._id, activity._id)
                          }
                        >
                          {activity.status === "open" ? "Open" : "Continue"}
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Class;
