import MaskCardCarousel from "../../components/maskCard/MaskCardCarousel";

const cards = [
  {
    title: "Mande",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask4.png",
  },
  {
    title: "Mandigo",
    description:
      "Mano - Spoken by the Mano people in parts of Nimba and Grand Gedeh counties",
    imageUrl: "/landing_page/mask5.png",
  },
];

export default function LanguageMande() {
  return (
    <div className="bg-[#FFF5F5]">
      <div className="container mx-auto px-4 pt-12 md:pt-18 lg:pt-20 pb-10">
        <div className="text-center mb-16">
          <h3 className="text-lg md:text-xl font-bold">
            Mande Language Group (Predominantly in the northwest)
          </h3>
        </div>

        <div className="mb-8 flex justify-center">
          <img
            src="/landing_page/lang_group2.png"
            alt="Liberian cultural illustrations showing people in traditional clothing and cultural items"
            className="object-contain w-[75%]"
          />
        </div>

        <div>
          <MaskCardCarousel cards={cards} />
        </div>
      </div>
    </div>
  );
}
