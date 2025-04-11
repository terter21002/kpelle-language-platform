import MainButton from "../../components/button/MainButton";
import { useNavigate } from "react-router-dom";

const AboutLanguage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <section className="container mx-auto px-4 pt-12 md:pt-20 lg:pt-24 pb-10">
        <div className="grid md:grid-cols-3 items-center ">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2 order-1 md:order-2">
              <span>About Kpelle Language</span>
            </h2>
            <p className="text-[rgba(0,0,0,0.8)] text-base md:text-lg py-0 md:py-2">
              The Bassa Language Learning Website is an interactive and
              educational platform designed to teach the Kpelle language while
              immersing learners in the rich and vibrant culture of the Kpelle
              people. The website offers fun and engaging activities, including
              quizzes, games, and multimedia lessons, to make learning enjoyable
              and effective for all skill levels—from beginners to advanced
              learners. Through its authentic and culturally rich content, the
              platform celebrates Kpelle traditions, music, and proverbs,
              fostering a deeper connection to the language&apos;s heritage.
            </p>
            <MainButton
              onClick={() => navigate("/course")}
              title="Start Learning"
            />
          </div>
          <div className="relative h-[400px] md:h-[530px] col-span-2 order-1 md:order-2">
            <img
              className="object-contain w-full h-full"
              src="/landing_page/aboutLanguage.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutLanguage;
