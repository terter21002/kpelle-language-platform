import MainButton from "../../components/button/MainButton";
import { useNavigate } from "react-router-dom";

const Culture = () => {
  const navigate = useNavigate();

  const languages = [
    {
      name: "Kwa Language Group",
      image: "/landing_page/kwa_culture.png",
    },
    {
      name: "Mende Language Group",
      image: "/landing_page/mende_culture.png",
    },
    {
      name: "Gur",
      image: "/landing_page/gur_culture.png",
    },
    {
      name: "Loma",
      image: "/landing_page/kru_culture.png",
    },
  ];

  const dishes = [
    {
      name: "Palm Butter Soup",
      image: "/landing_page/soup.png",
      description:
        "A rich soup made from palm fruit extract, often cooked with fish, chicken, or beef and flavored with spices.",
    },
    {
      name: "Cassava Leave Soup",
      image: "/landing_page/soup.png",
      description:
        "A thick stew made from finely chopped cassava leaves, usually cooked with meat and flavored with palm oil and spices.",
    },
    {
      name: "Fufu and Soup",
      image: "/landing_page/soup.png",
      description:
        "A rich soup made from palm fruit extract, often cooked with fish, chicken, or beef and flavored with spices.",
    },
    {
      name: "Jollof Rice",
      image: "/landing_page/soup.png",
      description:
        "A rich soup made from palm fruit extract, often cooked with fish, chicken, or beef and flavored with spices.",
    },
    {
      name: "Pepper Soup",
      image: "/landing_page/soup.png",
      description:
        "A rich soup made from palm fruit extract, often cooked with fish, chicken, or beef and flavored with spices.",
    },
  ];

  return (
    <>
      <section className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 text-center md:text-left pt-2 md:pt-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#C23925]">
              Indigenous Languages of Liberia
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Representing different aspects of Liberian Traditions and Culture
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {languages.map((language) => (
              <div key={language.name} className="text-center">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-44 sm:h-40 md:h-44 lg:h-48 overflow-visible">
                    <img
                      src={language.image || "/placeholder.svg"}
                      alt={`${language.name} illustration`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h2 className="mt-2 font-medium text-lg text-gray-800">
                  {language.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C23925] text-white px-4 md:px-8 py-30 md:py-40 relative">
        <div className="custom-shape-divider-top-1739894898">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-10 mb-12">
            {/* Left Column - Title and Text */}
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold mb-4">
                Liberian Traditional Clothing and Art
              </h1>

              <p className="mb-4 text-sm md:text-base">
                Traditional Liberian clothing varies by ethnic group but often
                includes colorful fabrics with intricate patterns. Women
                commonly wear “lappas,” long pieces of cloth wrapped around the
                waist, along with matching headscarves, while men wear tailored
                shirts made from local fabrics.
              </p>

              <p className="mb-4 text-sm md:text-base">
                Liberia is also known for its vibrant art scene, with skilled
                artisans creating beautiful handicrafts such as woven baskets,
                wood carvings, and masks that hold cultural and spiritual
                significance. The “Gbetu Mask,” for example, is used in
                ceremonies to represent spiritual protection and ancestral
                guidance.
              </p>

              <p className="text-sm md:text-base">Conclusion</p>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="w-full h-64 md:h-72">
                <img
                  src="landing_page/art.png"
                  alt="Traditional Liberian clothing illustrations"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Column - Image */}
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="w-full h-64 md:h-72">
                <img
                  src="landing_page/clothing.png"
                  alt="Traditional Liberian clothing and masks"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="md:w-1/2">
              <p className="mb-4 text-sm md:text-base">
                Traditional Liberian clothing varies by ethnic group but often
                includes colorful fabrics with intricate patterns. Women
                commonly wear “lappas,” long pieces of cloth wrapped around the
                waist, along with matching headscarves, while men wear tailored
                shirts made from local fabrics.
              </p>

              <p className="mb-4 text-sm md:text-base">
                Liberia is also known for its vibrant art scene, with skilled
                artisans creating beautiful handicrafts such as woven baskets,
                wood carvings, and masks that hold cultural and spiritual
                significance. The “Gbetu Mask,” for example, is used in
                ceremonies to represent spiritual protection and ancestral
                guidance.
              </p>

              <p className="text-sm md:text-base">Conclusion</p>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1739894438">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pt-8 md:pb-16 pb-8">
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 order-1 md:order-2 text-[#C23925]">
              <span>
                A Deep Dive into Liberia&apos;s Rich Cultural Heritage:
                Traditions, Customs, and Way of Life
              </span>
            </h2>
            <p className="text-[rgba(0,0,0,0.7)] text-base py-0 md:py-2">
              Liberia, a vibrant West African nation, boasts a rich and diverse
              cultural heritage that reflects its unique history, ethnic
              diversity, and strong sense of identity. The culture of Liberia is
              deeply rooted in traditions passed down through generations,
              influenced by indigenous African customs, the legacy of freed
              African-American settlers, and interactions with neighboring West
              African countries. From its languages and cuisine to its music,
              festivals, and social norms, Liberia&apos;s culture is a
              fascinating blend of old and new, reflecting the resilience and
              spirit of its people.
            </p>
            <MainButton
              onClick={() => navigate("/culture/learn-more")}
              title="Learn More"
            />
          </div>
          <div className="relative order-1 md:order-2">
            <img
              className="object-contain w-full h-full"
              src="/landing_page/dance.png"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-16 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="text-center">
              <div className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-visible">
                  <img
                    src="/landing_page/heritage1.png"
                    alt="heritage"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="mt-5 font-medium text-base md:text-lg text-gray-800">
                A Deep Dive into Liberia&opas;s Rich Cultural Heritage:
                Traditions, Customs, and Way of Life
              </p>
            </div>
            <div className="text-center">
              <div className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-visible">
                  <img
                    src="/landing_page/heritage2.png"
                    alt="heritage"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="mt-5 font-medium text-base md:text-lg text-gray-800">
                A Deep Dive into Liberia&opas;s Rich Cultural Heritage:
                Traditions, Customs, and Way of Life
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#C23925] text-white p-6 md:p-10 relative">
        <div className="max-w-7xl mx-auto pb-24 pt-2 md:pt-6">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-4">
            Ethnic Diversity and Traditional Practices
          </h1>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column - Image and Text */}
            <div className="md:w-3/5">
              <div className="relative w-full mb-4">
                <img
                  src="/landing_page/tradition.png"
                  alt="Silhouettes of people in traditional African dress"
                  className="object-cover"
                />
              </div>

              <p className="text-sm md:text-base">
                Liberia is home to over 16 indigenous ethnic groups, each
                contributing to the country&opas;s rich cultural tapestry. The
                major ethnic groups include the Kpelle, Bassa, Gio, Kru, Mano,
                Lorma, Grebo, Kissi, Gola, and Vai, among others. Each of these
                groups has its own language, traditions, and cultural
                expressions that define their unique identities.
              </p>
              <p className="text-sm md:text-base mt-4">
                Traditional Liberian society places a strong emphasis on
                community, respect for elders, and collective responsibility.
                Many cultural practices are centered around rites of passage,
                such as birth, initiation into adulthood, marriage, and death.
                Secret societies, such as the Poro (for men) and the Sande (for
                women), play a significant role in the cultural and social
                organization of many ethnic groups, teaching young people
                important values, life skills, and societal responsibilities.
              </p>
            </div>

            {/* Right Column - Africa Day Graphic */}
            <div className="md:w-2/5 hidden md:flex">
              <div className="flex flex-col items-center">
                <div className="relative w-full">
                  <img
                    src="/landing_page/Africa_day.png"
                    alt="Africa Day celebration graphic with traditional masks and instruments"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1739894438">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>

      <section className="bg-white p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[#C23925] mb-6 md:mb-12 text-center">
            Music and Dance
          </h1>

          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-4 md:mb-8">
            {/* Left Column - Image */}
            <div className="md:w-1/2">
              <div className="relative w-full">
                <img
                  src="/landing_page/MD1.png"
                  alt="Traditional Liberian drummers and musicians"
                  className="w-full h-54 object-cover rounded"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-sm md:text-base text-gray-700">
                Dance is a powerful cultural expression in Liberia, with each
                ethnic group having its own unique dance traditions. Special
                occasions like weddings, harvest festivals, and initiation
                ceremonies feature traditional dances.
              </p>

              <p className="text-sm md:text-base text-gray-700 mt-3">
                Popular traditional dances include the Gbetu Dance, often
                performed at cultural events and symbolizing ancestral spirits,
                and the Kru War Dance, which represents strength and unity.
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Left Column - Text */}
            <div className="md:w-1/2 flex flex-col justify-center order-2 md:order-1">
              <p className="text-sm md:text-base text-gray-700">
                Music and dance are an essential part of Liberian culture, used
                for storytelling, celebration, and spiritual purposes.
                Traditional music is often characterized by the use of
                indigenous instruments such as the balafon (a type of
                xylophone), talking drums, and kondi (a stringed instrument).
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative w-full">
                <img
                  src="/landing_page/MD2.png"
                  alt="Traditional Liberian drummer performing"
                  className="w-full h-54 object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Center Image */}
            <div className="md:w-1/2 mx-auto">
              <div className="relative w-full">
                <img
                  src="/landing_page/MD3.png"
                  alt="Modern Liberian dancers in colorful clothing"
                  className="w-full h-54 object-cover rounded"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-sm md:text-base text-gray-700">
                Liberian folk music varies by ethnic group, but common themes in
                songs include love, history, and moral lessons. Modern genres
                such as hip-hop and Afrobeat have gained popularity among the
                youth, blending traditional rhythms with contemporary styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-4 pt-8 md:pt-16 md:pb-16 pb-8">
          <div className="grid md:grid-cols-2 items-center gap-4 md:gap-8">
            <div className="relative">
              <img
                className="object-contain w-full h-full rounded"
                src="/landing_page/festival.png"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 order-1 md:order-2 text-[#C23925]">
                <span>Festivals and Celebrations</span>
              </h2>
              <p className="text-[rgba(0,0,0,0.7)] text-base py-0 md:py-1 font-bold">
                Liberia is a country that loves celebrations, and various
                festivals are held throughout the year to honor cultural
                heritage, religious beliefs, and national pride. Some of the
                most significant celebrations include:
              </p>
              <p className="text-[rgba(0,0,0,0.7)] text-base py-0 md:py-1">
                Independence Day (July 26): Liberia’s most important national
                holiday, marked by parades, cultural displays, and community
                gatherings.
              </p>
              <p className="text-[rgba(0,0,0,0.7)] text-base py-0 md:py-1">
                Liberian Thanksgiving (First Thursday of November): A day of
                gratitude and family gatherings with feasts and religious
                observances. Christmas and New Year: Celebrated with music,
                food, and festivities across the country.
              </p>
              <p className="text-[rgba(0,0,0,0.7)] text-base py-0 md:py-1">
                Kukatornon Festival: A traditional celebration among the Lorma
                people, featuring storytelling, dance, and ancestral veneration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-4 md:p-8">
        <div className="max-w-7xl mx-auto md:px-4 px-0">
          <h1 className="text-3xl font-bold text-[#FFBC02] mb-4 mt-0 md:mt-4">
            Liberian Cuisine
          </h1>

          <p className="text-[rgba(0,0,0,0.7)] mb-8">
            Liberian food is a delicious reflection of the country&opas;s
            agricultural abundance and cultural influences. Rice is the staple
            food and is often served with a variety of hearty soups and stews.
            Some popular traditional dishes include:
          </p>

          <div className="w-full overflow-x-auto pb-4">
            <div className="flex justify-around min-w-max gap-6">
              {dishes.map((dish, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-3 md:w-40 md:h-40 w-30 h-30">
                    <img
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>

                  <h2 className="font-bold text-[rgba(0,0,0,0.9)] mb-2">
                    {dish.name}
                  </h2>

                  <p className="text-sm text-[rgba(0,0,0,0.7)] max-w-[150px]">
                    {dish.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Culture;
