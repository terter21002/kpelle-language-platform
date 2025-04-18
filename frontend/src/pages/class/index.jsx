import { Award } from "lucide-react";
import { Button } from "@mui/material";

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

  return (
    <div>
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
  );
};

export default Class;
