import MainButton from "../../components/button/MainButton";
import "./culture.css";

const Culture = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left column */}
          <div className="relative">
            <img
              src="/landing_page/culture.png"
              alt="Liberian cultural illustration with traditional masks and patterns"
              className="w-[100%] h-auto"
            />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Liberian Culture and its Native Language
            </h1>

            <p className="text-gray-600 text-lg">
              Our platform is designed with inclusivity in mind, making it
              accessible and enjoyable for learners of all ages. Whether
              you&apos;re a young child, a teenager, an adult, or a senior, our
              tools and resources are tailored to meet your unique needs.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="font-semibold text-gray-900">
                  For&nbsp;Kids:
                </span>
                <span className="text-gray-600">
                  Interactive games, colorful visuals, and fun challenges make
                  language learning exciting and engaging.
                </span>
              </li>

              <li className="flex gap-2">
                <span className="font-semibold text-gray-900">
                  For&nbsp;Teens:
                </span>
                <span className="text-gray-600">
                  Structured lessons and progress trackers help build confidence
                  and fluency while maintaining a modern, dynamic learning
                  experience.
                </span>
              </li>

              <li className="flex gap-2">
                <span className="font-semibold text-gray-900">
                  For&nbsp;Adults:
                </span>
                <span className="text-gray-600">
                  Comprehensive resources and culturally rich content provide a
                  deeper understanding of the language and its heritage.
                </span>
              </li>

              <li className="flex gap-2">
                <span className="font-semibold text-gray-900">
                  For&nbsp;Seniors:
                </span>
                <span className="text-gray-600">
                  Easy-to-navigate interfaces and practical lessons ensure that
                  anyone can connect with the Kpelle language and culture.
                </span>
              </li>
            </ul>

            <p className="text-gray-600 text-lg">
              Discover a learning journey that&apos;s as adaptable as it is
              effective—because learning has no age limit!
            </p>

            <MainButton title="Start Learning" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Culture;
