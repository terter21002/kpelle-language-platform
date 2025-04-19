import { useState } from "react";
import { ChevronRight, Edit2 } from "lucide-react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UpcomingClasses() {
  const [currentMonth, setCurrentMonth] = useState("April 2025");
  const [selectedDate, setSelectedDate] = useState(18);
  const navigate = useNavigate();

  // Sample class details
  const classDetails = {
    tutorName: "Matthew James",
    subject: "Kpelle/Basic greetings in kpelle",
    date: "10/02/2025",
    time: "11:55 AM",
    duration: "60 mins",
    mode: "Online",
  };

  // Sample calendar data
  const calendarDays = [
    { day: "Sun", dates: [1, 8, 15, 22, 29] },
    { day: "Mon", dates: [2, 9, 16, 23] },
    { day: "Tue", dates: [3, 10, 17, 24] },
    { day: "Wed", dates: [4, 11, 18, 25] },
    { day: "Thu", dates: [5, 12, 19, 26] },
    { day: "Fri", dates: [6, 13, 20, 27] },
    { day: "Sat", dates: [7, 14, 21, 28] },
  ];

  // Sample lessons
  const lessons = [
    {
      id: "1",
      group: "Kwa Language Group",
      language: "Kpelle",
      tutor: "Fredrick James",
      time: "Tue 1 PM - 2PM",
      status: "pending",
    },
    {
      id: "2",
      group: "Kwa Language Group",
      language: "Kpelle",
      tutor: "Fredrick James",
      time: "Tue 1 PM - 2PM",
      status: "confirmed",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <h1 className="text-xl font-bold text-[#57270E]">Upcoming Classes</h1>
          <p className="text-[#57270E]">
            View your scheduled lessons and manage bookings
          </p>
        </div>
        <div className="pt-3">
          <Button
            variant="outlined"
            sx={{
              color: "#C23925",
              borderColor: "#C23925",
              borderRadius: "999px",
              textTransform: "none",
            }}
            onClick={() => navigate("/class/booking/past-lesson")}
          >
            View Past lessons
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Class Details Card */}
        <div>
          <div className="bg-white border-[#D9D9D9] rounded-lg p-6 shadow">
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Tutor Name:</span>{" "}
                {classDetails.tutorName}
              </div>
              <div>
                <span className="font-semibold">Subject:</span>{" "}
                {classDetails.subject}
              </div>
              <div>
                <span className="font-semibold">Date:</span> {classDetails.date}
              </div>
              <div>
                <span className="font-semibold">Time:</span> {classDetails.time}
              </div>
              <div>
                <span className="font-semibold">Duration:</span>{" "}
                {classDetails.duration}
              </div>
              <div>
                <span className="font-semibold">Lesson Mode:</span>{" "}
                {classDetails.mode}
              </div>

              <div className="flex space-x-4 pt-4 gap-4">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#C23925",
                    color: "#fff",
                    borderRadius: "999px",
                  }}
                  sx={{ ":hover": { backgroundColor: "#8A3523" } }}
                >
                  Join Class
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#C23925",
                    borderColor: "#C23925",
                    borderRadius: "999px",
                    textTransform: "none",
                  }}
                >
                  Cancel Class
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar and Lessons */}
        <div className="bg-white rounded-lg border p-6 shadow">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Schedule</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-yellow-500 font-medium">
                {currentMonth}
              </span>
              <ChevronRight
                onClick={() => setCurrentMonth("April 2025")}
                className="h-5 w-5 text-yellow-500 cursor-pointer"
              />
            </div>

            {/* Calendar */}
            <div className="grid grid-cols-7 gap-2">
              {/* Day headers */}
              {calendarDays.map((col) => (
                <div key={col.day} className="text-center text-sm font-medium">
                  {col.day}
                </div>
              ))}

              {/* Calendar dates */}
              {calendarDays.map((col) => (
                <div key={`dates-${col.day}`} className="flex flex-col gap-2">
                  {col.dates.map((date) => (
                    <div
                      key={`${col.day}-${date}`}
                      className={`text-center p-1 rounded-full text-sm cursor-pointer
                        ${
                          date === selectedDate
                            ? "bg-yellow-400 text-white font-bold"
                            : "hover:bg-gray-100"
                        }`}
                      onClick={() => setSelectedDate(date)}
                    >
                      {date}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Lessons */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Lessons</h2>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`border rounded-lg p-4 relative
                    ${
                      lesson.status === "pending"
                        ? "border-l-4 border-l-yellow-400"
                        : "border-l-4 border-l-green-400"
                    }`}
                >
                  <div className="absolute right-4 top-4">
                    <Edit2 className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="font-medium">{lesson.group}</div>
                  <div className="text-gray-600">{lesson.language}</div>

                  <div className="flex items-center mt-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      <span className="text-xs font-medium">FJ</span>
                    </div>
                    <div className="text-sm">{lesson.tutor}</div>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <div className="text-xs text-gray-500">{lesson.time}</div>
                    <div
                      className={`text-xs px-2 py-1 rounded-full
                        ${
                          lesson.status === "pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                        }`}
                    >
                      {lesson.status === "pending" ? "Pending" : "Confirmed"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
