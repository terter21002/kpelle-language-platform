import { Clock, BookOpen } from "lucide-react";
import MainButton from "../../components/button/MainButton";

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "Kpelle Greetings",
      description: "Learn the basics greeting in kpelle",
      image: "/landing_page/course_greeting.png",
      lessons: 12,
      duration: "1 hr 30 min",
    },
    {
      id: 2,
      title: "Numbering",
      description: "Learn the basics greeting in kpelle",
      image: "/landing_page/course_number.png",
      lessons: 12,
      duration: "1 hr 30 min",
    },
    {
      id: 3,
      title: "Every words & Object",
      description: "Learn the basics greeting in kpelle",
      image: "/landing_page/course_word.png",
      lessons: 12,
      duration: "1 hr 30 min",
    },
    {
      id: 4,
      title: "Kpelle Greetings",
      description: "Learn the basics greeting in kpelle",
      image: "/landing_page/course_greeting.png",
      lessons: 12,
      duration: "1 hr 30 min",
    },
    {
      id: 5,
      title: "Numbering",
      description: "Learn the basics greeting in kpelle",
      image: "/landing_page/course_number.png",
      lessons: 12,
      duration: "1 hr 30 min",
    },
    {
      id: 6,
      title: "Every words & Object",
      description: "Learn the basics greeting in kpelle",
      image: "/landing_page/course_word.png",
      lessons: 12,
      duration: "1 hr 30 min",
    },
    {
      id: 7,
      title: "Kpelle Greetings",
      description: "Learn the basics greeting in kpelle",
      image: "/landing_page/course_greeting.png",
      lessons: 12,
      duration: "1 hr 30 min",
    },
    {
      id: 8,
      title: "Numbering",
      description: "Learn the basics greeting in kpelle",
      image: "/landing_page/course_number.png",
      lessons: 12,
      duration: "1 hr 30 min",
    },
    {
      id: 9,
      title: "Every words & Object",
      description: "Learn the basics greeting in kpelle",
      image: "/landing_page/course_word.png",
      lessons: 12,
      duration: "1 hr 30 min",
    },
  ];

  return (
    <main className="min-h-full bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#57270E]">
            Kpelle Language
          </h1>
        </header>

        {/* Hero Banner */}
        <div className="bg-[#FFC3E2] rounded-xl overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-6 md:p-8 xl:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold text-[#DD4E38] mb-2">
                Start Your Kpelle Learning Journey
              </h2>
              <p className="text-[#CD2727] mb-4 text-[18px]">
                Choose a Course and Build Your Skills Step by Step
              </p>
              <MainButton title="Buy Course" />
            </div>
            <div className="relative md:h-auto xl:flex hidden">
              <img
                src="/landing_page/course_books.png"
                alt="Stack of colorful books"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#57270E] mb-1">
                  {course.title}
                </h3>
                <p className="text-[#57270E] text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center text-[#FFBC02]">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span className="text-[rgba(0,0,0,0.7)]">
                      {course.lessons} Lessons
                    </span>
                  </div>
                  <div className="flex items-center text-[#FFBC02]">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-[rgba(0,0,0,0.7)]">
                      {course.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
