import { useNavigate } from "react-router-dom";

export default function CourseLevel() {
  const navigate = useNavigate();

  const levels = [
    {
      title: "Beginner",
      image: "/landing_page/beginner.png",
      description:
        "Your Journey to Learning Liberian Native voice: Now—Explore Simple Lessons for Beginners",
      color: "bg-[#C84C32]",
    },
    {
      title: "Intermediate",
      image: "/landing_page/intermediate.png",
      description:
        "Your Journey to Learning Liberian Native voice: Now—Explore Simple Lessons for Beginners",
      color: "bg-[#C84C32]",
    },
    {
      title: "Expert",
      image: "/landing_page/expert.png",
      description:
        "Your Journey to Learning Liberian Native voice: Now—Explore Simple Lessons for Beginners",
      color: "bg-[#C84C32]",
    },
  ];

  return (
    <div className="py-10 px-10 flex h-full items-center">
      <div className="container mx-auto max-w-6xl flex flex-col justify-center">
        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto mt mb-10">
          <div className="h-3 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FFBC02] rounded-full"
              style={{ width: "30%" }}
            ></div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#5D2E1A] mb-14">
          How much Bassa Language do you know
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-105"
              onClick={() => navigate("/course/level-check")}
            >
              <div className="relative h-48 w-full">
                <img
                  src={level.image}
                  alt={`${level.title} level illustration`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="">
                <span
                  className={`inline-block px-4 py-2 text-white text-sm font-semibold rounded-br-sm ${level.color} mb-2`}
                >
                  {level.title}
                </span>
                <p className="text-gray-700 text-sm px-6 pt-3 pb-6">
                  {level.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
