const LanguageSection = () => {
  const languages = [
    {
      name: "Kwa Language Group",
      description: "(Largely Spoken in the coastal regions)",
      image: "/landing_page/lang_group1.png",
    },
    {
      name: "Mande Language Group",
      description: "(Predominantly in the northwest)",
      image: "/landing_page/lang_group2.png",
    },
    {
      name: "Our Language Group",
      description: "(Largely Spoken in the northern regions)",
      image: "/landing_page/lang_group3.png",
    },
    {
      name: "Kwa Language Group",
      description: "(Largely Spoken in the coastal regions)",
      image: "/landing_page/lang_group4.png",
    },
  ];
  return (
    <div
      className="pt-44"
      style={{
        backgroundImage: "url('/landing_page/bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "105vh",
      }}
    >
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
