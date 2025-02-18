import FeatureCard from "../../components/card/FeatureCard";

const WhyChoosePage = () => {
  const features = [
    {
      title: "Interactive Learning Experience",
      description:
        "Our platform transforms traditional language learning into an engaging, hands-on experience. With interactive lessons, quizzes, and games, learners stay motivated while mastering the Kpelle language.",
      imageSrc: "/landing_page/feature_card_1.png",
    },
    {
      title: "Cultural Immersion",
      description:
        "Our platform transforms traditional language learning into an engaging, hands-on experience. With interactive lessons, quizzes, and games, learners stay motivated while mastering the Kpelle language.",
      imageSrc: "/landing_page/feature_card_2.png",
    },
    {
      title: "Games",
      description:
        "Our platform transforms traditional language learning into an engaging, hands-on experience. With interactive lessons, quizzes, and games, learners stay motivated while mastering the Kpelle language.",
      imageSrc: "/landing_page/feature_card_3.png",
    },
    {
      title: "Interactive Quizzes",
      description:
        "Our platform transforms traditional language learning into an engaging, hands-on experience. With interactive lessons, quizzes, and games, learners stay motivated while mastering the Kpelle language.",
      imageSrc: "/landing_page/feature_card_3.png",
    },
    {
      title: "Immersive Experience",
      description:
        "Our platform transforms traditional language learning into an engaging, hands-on experience. With interactive lessons, quizzes, and games, learners stay motivated while mastering the Kpelle language.",
      imageSrc: "/landing_page/feature_card_1.png",
    },
    {
      title: "Instructor Booking Service",
      description:
        "Our platform transforms traditional language learning into an engaging, hands-on experience. With interactive lessons, quizzes, and games, learners stay motivated while mastering the Kpelle language.",
      imageSrc: "/landing_page/feature_card_2.png",
    },
  ];

  return (
    <section className="py-12 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Liberian Native Voice?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChoosePage;
