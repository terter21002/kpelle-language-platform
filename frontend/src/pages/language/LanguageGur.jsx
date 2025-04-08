import MaskCardCarousel from "../../components/maskCard/MaskCardCarousel";

const cards = [
  {
    title: "Bundu",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask6.png",
  },
  {
    title: "Kissi",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask7.png",
  },
  {
    title: "Loma",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask7.png",
  },
];

export default function LanguageGur() {
  return (
    <div className="container mx-auto px-4 pt-12 md:pt-18 lg:pt-20 pb-10">
      <div className="text-center mb-16">
        <h3 className="text-lg md:text-xl font-bold">
          Gur Language Group (Coastal Regions)
        </h3>
      </div>

      <div className="mb-8 flex justify-center">
        <img
          src="/landing_page/lang_group3.png"
          alt="Liberian cultural illustrations showing people in traditional clothing and cultural items"
          className="object-contain w-[75%]"
        />
      </div>

      <div>
        <MaskCardCarousel cards={cards} />
      </div>
    </div>
  );
}
