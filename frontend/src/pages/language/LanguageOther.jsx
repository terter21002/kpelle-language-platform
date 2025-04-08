import MaskCardCarousel from "../../components/maskCard/MaskCardCarousel";

const cards = [
  {
    title: "Mano",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask10.png",
  },
  {
    title: "Ge(Dio)",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask10.png",
  },
];

export default function LanguageOther() {
  return (
    <div className="container mx-auto px-4 pt-12 md:pt-18 lg:pt-20 pb-10">
      <div className="text-center mb-16">
        <h3 className="text-lg md:text-xl font-bold">Other Languages</h3>
      </div>

      <div className="mb-8 flex justify-center">
        <img
          src="/landing_page/lang_group4.png"
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
