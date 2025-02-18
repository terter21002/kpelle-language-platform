const AboutPage = () => {
  return (
    <div className="w-full">
      {/* About Us Section */}
      <section className="container mx-auto px-4 pt-12 md:pt-16 lg:pt-20">
        <div className="grid gap-24 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C4392A]">
              About Us
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Our Platform is designed to help you learn Liberian Most Spoken
              dialect is an interactive and educational platform designed to
              teach the Kpelle language while immersing learners in the rich and
              vibrant culture of the Kpelle people. The website offers fun and
              engaging activities, including quizzes, games, and multimedia
              lessons, to make learning enjoyable and effective for all skill
              levels—from beginners to advanced learners. Through its authentic
              and culturally rich content, the platform celebrates Kpelle
              traditions, music, and proverbs, fostering a deeper connection to
              the language&apos;s heritage.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[430px]">
            <img
              className="object-contain w-full h-full"
              style={{
                backgroundImage: "url('landing_page/about.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
