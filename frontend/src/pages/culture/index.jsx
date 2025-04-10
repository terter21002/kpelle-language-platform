const Culture = () => {
  const languages = [
    {
      name: "Kwa Language Group",
      image: "/landing_page/kwa_culture.png",
    },
    {
      name: "Mende Language Group",
      image: "/landing_page/mende_culture.png",
    },
    {
      name: "Gur",
      image: "/landing_page/gur_culture.png",
    },
    {
      name: "Loma",
      image: "/landing_page/kru_culture.png",
    },
  ];
  return (
    <>
      <main className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-800">
              Indigenous Languages of Liberia
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Representing different aspects of Liberian Traditions and Culture
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {languages.map((language) => (
              <div key={language.name} className="text-center">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-44 sm:h-40 md:h-44 lg:h-48 overflow-visible">
                    <img
                      src={language.image || "/placeholder.svg"}
                      alt={`${language.name} illustration`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h2 className="mt-2 font-medium text-lg text-gray-800">
                  {language.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </main>

      <main className="bg-[#C23925] text-white p-30 md:p-40 relative">
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
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-10 mb-12">
            {/* Left Column - Title and Text */}
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold mb-4">
                Liberian Traditional Clothing and Art
              </h1>

              <p className="mb-4 text-sm md:text-base">
                Traditional Liberian clothing varies by ethnic group but often
                includes colorful fabrics with intricate patterns. Women
                commonly wear “lappas,” long pieces of cloth wrapped around the
                waist, along with matching headscarves, while men wear tailored
                shirts made from local fabrics.
              </p>

              <p className="mb-4 text-sm md:text-base">
                Liberia is also known for its vibrant art scene, with skilled
                artisans creating beautiful handicrafts such as woven baskets,
                wood carvings, and masks that hold cultural and spiritual
                significance. The “Gbetu Mask,” for example, is used in
                ceremonies to represent spiritual protection and ancestral
                guidance.
              </p>

              <p className="text-sm md:text-base">Conclusion</p>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="w-full h-64 md:h-72">
                <img
                  src="landing_page/art.png"
                  alt="Traditional Liberian clothing illustrations"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Column - Image */}
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="w-full h-64 md:h-72">
                <img
                  src="landing_page/clothing.png"
                  alt="Traditional Liberian clothing and masks"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="md:w-1/2">
              <p className="mb-4 text-sm md:text-base">
                Traditional Liberian clothing varies by ethnic group but often
                includes colorful fabrics with intricate patterns. Women
                commonly wear “lappas,” long pieces of cloth wrapped around the
                waist, along with matching headscarves, while men wear tailored
                shirts made from local fabrics.
              </p>

              <p className="mb-4 text-sm md:text-base">
                Liberia is also known for its vibrant art scene, with skilled
                artisans creating beautiful handicrafts such as woven baskets,
                wood carvings, and masks that hold cultural and spiritual
                significance. The “Gbetu Mask,” for example, is used in
                ceremonies to represent spiritual protection and ancestral
                guidance.
              </p>

              <p className="text-sm md:text-base">Conclusion</p>
            </div>
          </div>
        </div>
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
      </main>
    </>
  );
};

export default Culture;
