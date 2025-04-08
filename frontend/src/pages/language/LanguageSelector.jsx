import MaskCardCarousel from "../../components/maskCard/MaskCardCarousel";

const cards = [
  {
    title: "Mountain Adventure",
    description:
      "Explore the majestic peaks and valleys of the mountain ranges.",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  },
  {
    title: "Ocean Sunset",
    description:
      "Experience the breathtaking views of the sun setting over the ocean.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Forest Retreat",
    description: "Find peace and tranquility in the heart of ancient forests.",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b",
  },
  {
    title: "Desert Safari",
    description: "Embark on an adventure through golden sand dunes.",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
  },
  {
    title: "Northern Lights",
    description:
      "Witness the magical aurora borealis dancing in the night sky.",
    imageUrl: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73",
  },
  {
    title: "Tropical Paradise",
    description:
      "Relax on pristine beaches surrounded by crystal clear waters.",
    imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
  },
];

export default function LanguageSelector() {
  return (
    <div className="container mx-auto px-4 pt-12 md:pt-20 lg:pt-24 pb-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Select Liberian Dialects by Language Family
        </h2>
        <p className="text-lg md:text-xl">
          Kwa Language Group (Coastal Regions)
        </p>
      </div>

      <div className="mb-8 flex justify-center">
        <img
          src="/landing_page/lang_group1.png"
          alt="Liberian cultural illustrations showing people in traditional clothing and cultural items"
          className="object-contain w-[80%]"
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <MaskCardCarousel cards={cards} />
      </div>
    </div>
  );
}
