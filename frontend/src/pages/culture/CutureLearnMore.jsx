import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CultureLearnMore = () => {
  const slides = [
    {
      id: 1,
      image: "/landing_page/traditional_clothing1.png",
      title:
        "A Deep Dive into Liberia's Rich Cultural Heritage: Traditions, Customs, and Way of Life",
    },
    {
      id: 2,
      image: "/landing_page/traditional_clothing2.png",
      title:
        "A Deep Dive into Liberia's Rich Cultural Heritage: Traditions, Customs, and Way of Life",
    },
    {
      id: 3,
      image: "/landing_page/traditional_clothing3.png",
      title:
        "A Deep Dive into Liberia's Rich Cultural Heritage: Traditions, Customs, and Way of Life",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getVisibleSlides = () => {
    const slidesCount = slides.length;
    const prevIndex = (currentIndex - 1 + slidesCount) % slidesCount;
    const nextIndex = (currentIndex + 1) % slidesCount;

    return [
      { index: prevIndex, slide: slides[prevIndex] },
      { index: currentIndex, slide: slides[currentIndex] },
      { index: nextIndex, slide: slides[nextIndex] },
    ];
  };

  const features = [
    {
      id: 1,
      title: "Modern Architetectural Design Features",
      description: "Incorporates innovative and contemporary home layouts.",
    },
    {
      id: 2,
      title: "Modern Architetectural Design Features",
      description: "Incorporates innovative and contemporary home layouts.",
    },
    {
      id: 3,
      title: "Modern Architetectural Design Features",
      description: "Incorporates innovative and contemporary home layouts.",
    },
    {
      id: 4,
      title: "Modern Architetectural Design Features",
      description: "Incorporates innovative and contemporary home layouts.",
    },
  ];

  return (
    <>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 pt-8 md:pt-16 md:pb-16 pb-8">
          <div className="grid md:grid-cols-2 items-center gap-4 md:gap-8">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2 order-1 md:order-2 text-[#C23925]">
                <span>Indigenous Language of Liberia</span>
              </h2>
              <p className="text-[rgba(0,0,0,0.7)] text-[18px] py-0 md:pb-1 font-bold">
                Representing different aspects of Liberian Traditions and
                Culture
              </p>
              <p className="text-[rgba(0,0,0,0.7)] text-base py-0 md:py-1 font-bold">
                Liberia is a country that loves celebrations, and various
                festivals are held throughout the year to honor cultural
                heritage, religious beliefs, and national pride. Some of the
                most significant celebrations include:
              </p>
              <p className="text-[rgba(0,0,0,0.7)] text-base py-0 md:py-1">
                Independence Day (July 26): Liberia’s most important national
                holiday, marked by parades, cultural displays, and community
                gatherings.
              </p>
              <p className="text-[rgba(0,0,0,0.7)] text-base py-0 md:py-1">
                Liberian Thanksgiving (First Thursday of November): A day of
                gratitude and family gatherings with feasts and religious
                observances.
              </p>
              <p className="text-[rgba(0,0,0,0.7)] text-base py-0 md:py-1">
                Christmas and New Year: Celebrated with music, food, and
                festivities across the country.
              </p>
            </div>

            <div className="relative">
              <img
                className="object-contain w-full h-full rounded"
                src="/landing_page/indigenous.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-16 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 flex items-center gap-2 order-1 md:order-2 text-[#C23925]">
            <span>Liberian Traditional Clothing and Art</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column - Image + List */}
            <div className="lg:w-1/2 w-full bg-[#FFF5F5] p-4 rounded">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Image */}
                <div className="w-full sm:w-1/2">
                  <img
                    src="/landing_page/traditiona_clothing.png"
                    alt="Traditional Liberian clothing and cultural items"
                    className="w-full h-full object-cover rounded shadow-md"
                  />
                </div>

                {/* Text & List */}
                <div className="w-full sm:w-1/2 text-base">
                  <p className="text-[rgba(0,0,0,0.7)] mb-4">
                    Traditional Liberian clothing varies by ethnic group but
                    often includes colorful fabrics with intricate patterns.
                    Women commonly wear “lappas”.
                  </p>

                  <ul className="list-none space-y-4 text-[15px]">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>
                        <span className="font-medium">
                          Liberian Thanksgiving
                        </span>{" "}
                        (First Thursday of November): A day of gratitude and
                        family gatherings with feasts and religious observances.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>
                        <span className="font-medium">
                          Christmas and New Year:
                        </span>{" "}
                        Celebrated with music, food, and festivities across the
                        country.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Grid Content */}
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                {Array(4)
                  .fill(
                    "Traditional Liberian clothing varies by ethnic group but often includes colorful fabrics with intricate patterns. Women commonly wear lappas."
                  )
                  .map((text, idx) => (
                    <div key={idx} className="bg-[#FFF5F5] p-5 rounded">
                      <p className="text-sm text-[rgba(0,0,0,0.7)]">{text}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#C23925]">
              Some Liberia Traditional Clothing and Art Attire
            </h1>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="flex gap-4 transition-transform duration-500 ease-out">
              {getVisibleSlides().map(({ index, slide }) => (
                <div
                  key={slide.id}
                  className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] flex-shrink-0"
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={`Traditional Liberian clothing slide ${index + 1}`}
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h2 className="text-white text-sm md:text-base font-medium">
                        {slide.title}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4] px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-12 text-[#C23925]">
            The Liberia Beautiful Festival And Cultural Moment
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:h-[500px]">
            <div className="md:w-1/2 h-full">
              <div className="bg-yellow-400 rounded-lg overflow-hidden h-full">
                <img
                  src="/landing_page/festival.png"
                  alt="Traditional Liberian drummers at festival"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-between h-full space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    index === 1 ? "bg-black text-white" : "bg-gray-50 border"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      index === 1
                        ? "bg-white text-black"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    <span className="font-bold">{feature.id}</span>
                  </div>
                  <div>
                    <h2 className="font-bold">{feature.title}</h2>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="text-center">
              <div className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-visible">
                  <img
                    src="/landing_page/heritage1.png"
                    alt="heritage"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="mt-5 font-medium text-base md:text-lg text-gray-800">
                A Deep Dive into Liberia&opas;s Rich Cultural Heritage:
                Traditions, Customs, and Way of Life
              </p>
            </div>
            <div className="text-center">
              <div className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-visible">
                  <img
                    src="/landing_page/heritage2.png"
                    alt="heritage"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="mt-5 font-medium text-base md:text-lg text-gray-800">
                A Deep Dive into Liberia&opas;s Rich Cultural Heritage:
                Traditions, Customs, and Way of Life
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CultureLearnMore;
