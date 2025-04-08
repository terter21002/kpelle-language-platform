import Testimonial from "../home/testimonial";
import TutorBooking from "../home/TutorBooking";
import LanguageGur from "./LanguageGur";
import LanguageKru from "./LanguageKru";
import LanguageKwa from "./LanguageKwa";
import LanguageMande from "./LanguageMande";
import LanguageOther from "./LanguageOther";

const Language = () => {
  return (
    <div>
      <LanguageKwa />
      <LanguageMande />
      <LanguageGur />
      <LanguageKru />
      <LanguageOther />
      <Testimonial />
      <TutorBooking className="bg-white py-12 px-6" />
    </div>
  );
};

export default Language;
