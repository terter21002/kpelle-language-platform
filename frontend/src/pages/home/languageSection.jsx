import "./languageSection.css";

const LanguageSection = () => {
  const languages = [
    {
      name: "Kwa Language Group",
      description: "(Largely Spoken in Niger-Congo region)",
      image: "/landing_page/lang_group1.png",
    },
    {
      name: "Krahn Language Group",
      description: "(Largely Spoken in Atlantic-Congo region)",
      image: "/landing_page/lang_group3.png",
    },
    {
      name: "Mande Language Group",
      description: "(Predominantly in the Southern region)",
      image: "/landing_page/lang_group2.png",
    },
    {
      name: "Gur Language Group",
      description: "(Largely Spoken in Eastern region)",
      image: "/landing_page/lang_group4.png",
    },
  ];
  return (
    <div className="pt-52 pb-16 bg-[#C23925] relative">
      <div className="custom-shape-divider-top-1739930429">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 pb-6">
        <div className="text-center text-white mb-24">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Languages to Learn
          </h1>
          <p className="text-lg md:text-xl">
            Start your journey with one of these rich languages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square relative mb-4">
                <img
                  src={language.image}
                  alt={language.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="bg-[#C23925] w-full pt-10">
                <h3 className="font-semibold text-white mb-1 text-xl">
                  {language.name}
                </h3>
                <p className="text-white">{language.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-[#C23925] hover:bg-gray-200 px-6 py-3 rounded-4xl text-lg font-semibold cursor-pointer shadow-xl hover:shadow-2xl">
            Explore Dialect
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSection;
