import AboutPage from "./AboutUs";
import LanguageSection from "./LanguageSection";
import CultureSection from "./CultureSection";
import Testimonial from "./testimonial";
import WhyChoosePage from "./whyChoose";
import TutorBooking from "./TutorBooking";
import ShopSection from "./ShopeSection";

const Home = () => {
  return (
    <div>
      <AboutPage />
      <LanguageSection />
      <CultureSection />
      <Testimonial />
      <WhyChoosePage />
      <TutorBooking className="bg-[#FFF5F5] py-12 px-6" />
      <ShopSection />
    </div>
  );
};

export default Home;
