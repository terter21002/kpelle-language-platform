import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MaskCard from "./MaskCard";
import PropTypes from "prop-types";

const MaskCardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      const calculatedVisible =
        width < 640 ? 1 : width < 1024 ? 2 : width < 1280 ? 3 : 4;
      setVisibleCards(Math.min(calculatedVisible, cards.length));
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + visibleCards;
      return nextIndex >= cards.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - visibleCards;
      return nextIndex < 0
        ? Math.max(
            0,
            cards.length - (cards.length % visibleCards || visibleCards)
          )
        : nextIndex;
    });
  };

  useEffect(() => {
    if (cards.length <= visibleCards) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [visibleCards, cards.length, currentIndex]);

  const visibleCardItems = cards.slice(
    currentIndex,
    currentIndex + visibleCards
  );
  const needsPadding = visibleCardItems.length < visibleCards;

  if (needsPadding) {
    const paddingCount = visibleCards - visibleCardItems.length;
    const paddingCards = cards.slice(0, paddingCount);
    visibleCardItems.push(...paddingCards);
  }
  const getContainerWidth = () => {
    switch (visibleCards) {
      case 1:
        return "w-full max-w-md";
      case 2:
        return "w-full max-w-2xl";
      case 3:
        return "w-full max-w-4xl";
      case 4:
        return "w-full max-w-6xl";
      default:
        return "w-full max-w-md";
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className={`relative ${getContainerWidth()}`}>
        <div className="overflow-hidden px-4">
          <div className="flex gap-4 justify-center">
            {visibleCardItems.map((card, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className={`${
                  visibleCards === 1
                    ? "w-full max-w-md"
                    : visibleCards === 2
                    ? "w-[calc(50%-0.5rem)] max-w-sm"
                    : visibleCards === 3
                    ? "w-[calc(33.333%-0.75rem)] max-w-xs"
                    : "w-[calc(25%-0.75rem)] max-w-xs"
                }`}
              >
                <MaskCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {cards.length > visibleCards && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {Array.from({
                length: Math.ceil(cards.length / visibleCards),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * visibleCards)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / visibleCards) === index
                      ? "bg-blue-600 w-4"
                      : "bg-blue-300"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

MaskCardCarousel.propTypes = {
  cards: PropTypes.string.isRequired,
};

export default MaskCardCarousel;
