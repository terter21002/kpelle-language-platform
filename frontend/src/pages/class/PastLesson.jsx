import { Button } from "@mui/material";

const PastLessons = () => {
  const lessons = [
    {
      tutorName: "Matthew Jmaes",
      subject: "Kpelle/Basic greetings in kpelle",
      dateCompleted: "10/02/2025",
      timeCompleted: "11:55 AM",
      duration: "60 mins",
      mode: "Online",
    },
    {
      tutorName: "Matthew Jmaes",
      subject: "Kpelle/Basic greetings in kpelle",
      dateCompleted: "10/02/2025",
      timeCompleted: "11:55 AM",
      duration: "60 mins",
      mode: "Online",
    },
    {
      tutorName: "Matthew Jmaes",
      subject: "Kpelle/Basic greetings in kpelle",
      dateCompleted: "10/02/2025",
      timeCompleted: "11:55 AM",
      duration: "60 mins",
      mode: "Online",
    },
    {
      tutorName: "Matthew Jmaes",
      subject: "Kpelle/Basic greetings in kpelle",
      dateCompleted: "10/02/2025",
      timeCompleted: "11:55 AM",
      duration: "60 mins",
      mode: "Online",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-[#57270E]">Past Lessons</h1>
        <p className="text-[#57270E]">
          View your Previous lessons and manage bookings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map((lesson, index) => (
          <div key={index}>
            <div className="mb-2">Last 10 mins</div>

            <div className="bg-[#FFF5F5] rounded-lg p-6 border-[#D9D9D9] shadow">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">Tutor Name:</span>{" "}
                  {lesson.tutorName}
                </div>
                <div>
                  <span className="font-semibold">Subject:</span>{" "}
                  {lesson.subject}
                </div>
                <div>
                  <span className="font-semibold">Date Completed:</span>{" "}
                  {lesson.dateCompleted}
                </div>
                <div>
                  <span className="font-semibold">Time Completed:</span>{" "}
                  {lesson.timeCompleted}
                </div>
                <div>
                  <span className="font-semibold">Duration:</span>{" "}
                  {lesson.duration}
                </div>
                <div>
                  <span className="font-semibold">Lesson Mode:</span>{" "}
                  {lesson.mode}
                </div>

                <div className="pt-2">
                  <Button
                    style={{
                      backgroundColor: "#C84C32",
                      color: "white",
                      borderRadius: "999px",
                      padding: "5px 20px",
                    }}
                  >
                    View Tutor Feedback
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastLessons;
