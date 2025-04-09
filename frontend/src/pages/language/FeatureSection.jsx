import {
  Play,
  Volume2,
  PuzzleIcon as PuzzlePiece,
  HelpCircle,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Videos",
      description:
        "Engaging English videos build confidence in speaking for learners of all ages through interactive repetition and practical lessons.",
      icon: <Play className="h-6 w-6 text-white" />,
    },
    {
      title: "Audio",
      description:
        "Engaging English videos build confidence in speaking for learners of all ages through interactive repetition and practical lessons.",
      icon: <Volume2 className="h-6 w-6 text-white" />,
    },
    {
      title: "Games",
      description:
        "Engaging English videos build confidence in speaking for learners of all ages through interactive repetition and practical lessons.",
      icon: <PuzzlePiece className="h-6 w-6 text-white" />,
    },
    {
      title: "Quiz",
      description:
        "Engaging English videos build confidence in speaking for learners of all ages through interactive repetition and practical lessons.",
      icon: <HelpCircle className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#C23925] mb-2">
          What&apos;s Included in Kpelle Liberia Native Voice Learning?
        </h2>
        <p className="text-[rgba(0,0,0,0.7)">
          Discover everything Liberia Native Voice has to offer to enrich your
          language-learning and cultural experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 flex items-center"
          >
            <div className="mr-4 flex-shrink-0">
              <div className="bg-purple-500 rounded-full w-18 h-18 flex items-center justify-center">
                {feature.icon}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-[rgba(0,0,0,0.7) text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
