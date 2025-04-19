import { useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

// Progress Bar Component
export function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className="bg-yellow-400 h-3 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

// Character Component
export function Character() {
  return (
    <div className="relative">
      <button className="absolute -top-5 -right-4 bg-blue-100 p-1 rounded-full cursor-pointer z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      </button>
      <div className="relative z-10">
        <img
          src="/landing_page/symbol.png"
          alt="Chinpoo character"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}

// Success Modal Component
export function SuccessModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-40 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Lesson Completed!</h2>
          <p className="mb-6 text-gray-600">You’ve finished all steps.</p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#C23925] text-white rounded-full hover:bg-[#8A3523] transition cursor-pointer"
          >
            Continue
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Drag Item Component
export function DragItem({ id, text, onDrop }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "GREETING",
    item: { id, text },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult && onDrop) {
        onDrop(item.id, dropResult.id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 bg-[rgba(0,0,0,0.7)] text-white rounded cursor-move ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {text}
    </div>
  );
}

// Drop Target Component
export function DropTarget({ id, accept, children, onDrop }) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept,
    drop: () => ({ id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-2 border-2 rounded min-h-[40px] bg-white ${
        isOver && canDrop ? "border-green-500 bg-green-50" : "border-gray-300"
      }`}
      onClick={() => onDrop(id)}
    >
      {children}
    </div>
  );
}

// Lesson Step 1
export function LessonStep1() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <Character />
      <div className="w-full">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <p className="text-gray-800 font-medium">Ya tua Means Hello</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="/landing_page/lesson_hello.png"
            alt="Children greeting"
            className="w-full h-80 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

// Lesson Step 2
export function LessonStep2() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <Character />
      <div className="w-full">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <p className="text-gray-800 font-medium">
            I kaa lɔŋ mean How are you
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="/landing_page/children_talking.png"
            alt="Children talking"
            className="w-full h-80 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

// Lesson Step 3
export function LessonStep3() {
  const [matches, setMatches] = useState({
    hello: "",
    howareyou: "",
  });

  const handleDrop = (dragId, targetId) => {
    setMatches((prev) => ({
      ...prev,
      [targetId]: dragId,
    }));
  };

  return (
    <div>
      {/* <div className="absolute inset-0 -z-10 bg-sky-400 rounded-xl overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1/2 h-1/6 bg-gray-400 rounded-full transform -translate-y-1/2"></div>
        <div className="absolute top-10 left-10 w-20 h-12 bg-gray-300 rounded-full"></div>
        <div className="absolute top-5 right-20 w-24 h-16 bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-green-600 rounded-full"></div>
      </div> */}

      <div className="relative z-10 py-8 ">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Character />
          <div className="flex-1">
            <h2 className="text-center text-[#57270E] font-bold mb-4">
              Drag the Kpelle greetings to their correct English translations.
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <DropTarget id="hello" accept="GREETING" onDrop={() => {}}>
                {matches.hello
                  ? matches.hello === "yatua"
                    ? "Ya tua"
                    : "I kaa lɔŋ"
                  : "Hello"}
              </DropTarget>
              <DropTarget id="howareyou" accept="GREETING" onDrop={() => {}}>
                {matches.howareyou
                  ? matches.howareyou === "ikaalon"
                    ? "I kaa lɔŋ"
                    : "Ya tua"
                  : ""}
              </DropTarget>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <img
                src="/landing_page/lesson_hello.png"
                alt="Children greeting"
                className="w-full h-80 object-contain"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              <DragItem id="yatua" text="Ya tua" onDrop={handleDrop} />
              <DragItem id="ikaalon" text="I kaa lɔŋ" onDrop={handleDrop} />
              <DragItem id="boremune" text="Bore mu ne?" onDrop={handleDrop} />
              <DragItem id="namope" text="Namo pɛ" onDrop={handleDrop} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Lesson Step 4
export function LessonStep4() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <Character />
      <div className="flex-1">
        <h2 className="text-center font-bold text-[#57270E] mb-4">
          Complete the sentence
        </h2>

        <div className="flex items-center gap-2 mb-6">
          <p className="text-[#57270E]">
            What is the correct translation of Ya tua in Kpelle?
          </p>
          <div className="flex-1 border-b-1 border-gray-300"></div>
        </div>

        <div className="space-y-3">
          {[
            { id: "howareyou", text: "How are you" },
            { id: "come", text: "Come" },
            { id: "hello", text: "Hello" },
            { id: "bye", text: "Bye" },
          ].map((option) => (
            <button
              key={option.id}
              className={`w-full p-3 text-left rounded cursor-pointer ${
                selectedAnswer === option.id
                  ? "bg-[rgba(0,0,0,0.8)] text-white"
                  : "bg-[rgba(0,0,0,0.6)] text-white hover:bg-[rgba(0,0,0,0.8)]"
              }`}
              onClick={() => setSelectedAnswer(option.id)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Lesson Step 5
export function LessonStep5() {
  const [selectedPronunciation, setSelectedPronunciation] = useState(null);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div onClick={playAudio}>
        <Character />
      </div>

      <audio ref={audioRef} src="/pronunciation.mp3" />

      <div className="flex-1">
        <h2 className="text-center font-bold text-[#57270E] mb-6">
          Listen and choose the correct Pronunciation
        </h2>

        <div className="space-y-3">
          {[
            { id: "yatua", text: "Ya tua" },
            { id: "ikaalon", text: "I kaa lɔŋ" },
            { id: "boremune", text: "Bore mu ne?" },
            { id: "namope", text: "Namo pɛ" },
          ].map((option) => (
            <button
              key={option.id}
              className={`w-full p-3 text-left rounded ${
                selectedPronunciation === option.id
                  ? "bg-[rgba(0,0,0,0.8)] text-white"
                  : "bg-[rgba(0,0,0,0.6)] text-white hover:bg-[rgba(0,0,0,0.8)]"
              }`}
              onClick={() => setSelectedPronunciation(option.id)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

SuccessModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

DragItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onDrop: PropTypes.func,
};

DropTarget.propTypes = {
  id: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onDrop: PropTypes.func.isRequired,
};
