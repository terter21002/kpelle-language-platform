import { Star } from "lucide-react";
import "./testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Amara T.",
      role: "Beginner Learner",
      image: "/landing_page/testimonial_1.png",
      content:
        "This platform has completely transformed the way I learn Kpelle. The interactive lessons are fun, the cultural insights are fascinating, and I love how easy it is to track my progress. Whether you're a beginner or just looking to brush up, this site has everything you need!",
    },
    {
      name: "John D.",
      role: "Language Enthusiast",
      image: "/landing_page/testimonial_2.png",
      content:
        "An incredible learning tool! The lessons are well-structured, engaging, and easy to follow. The cultural aspects add so much depth to the experience.",
    },
  ];
  return (
    <div className="relative bg-[#C23925] py-36">
      {/* Top Curve */}
      <div className="custom-shape-divider-top-1739894898">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg md:text-xl">What Our Learners Are Saying</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg px-16 py-12"
            >
              <div className="flex flex-col items-center text-center">
                {/* User Image */}
                <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 mb-4">{testimonial.role}</p>

                {/* Star Ratings */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 italic">
                  {testimonial.content}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-16">
          {[...Array(8)].map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="custom-shape-divider-bottom-1739894438">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </div>
  );
};

export default Testimonial;
