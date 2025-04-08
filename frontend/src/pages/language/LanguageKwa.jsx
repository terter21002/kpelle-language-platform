import MaskCardCarousel from "../../components/maskCard/MaskCardCarousel";

const cards = [
  {
    title: "Kpelle",
    description:
      "Kplelle- Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask1.png",
  },
  {
    title: "Bassa",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask2.png",
  },
  {
    title: "Grebo",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask3.png",
  },
  {
    title: "Via",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask4.png",
  },
  {
    title: "Kpelle",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask5.png",
  },
  {
    title: "Bassa",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask6.png",
  },
];

export default function LanguageKwa() {
  return (
    <div className="container mx-auto px-4 pt-12 md:pt-20 lg:pt-24 pb-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Select Liberian Dialects by Language Family
        </h2>
        <h3 className="text-lg md:text-xl font-bold">
          Kwa Language Group (Coastal Regions)
        </h3>
      </div>

      <div className="mb-8 flex justify-center">
        <img
          src="/landing_page/lang_group1.png"
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
