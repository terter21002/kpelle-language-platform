import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  SuccessModal,
  ProgressBar,
  LessonStep1,
  LessonStep2,
  LessonStep3,
  LessonStep4,
  LessonStep5,
} from "./Lesson/LessonComponent";

export default function LessonPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    setProgress(currentStep * 20);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowSuccessModal(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    setShowSuccessModal(false);
    navigate("/class");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative p-4 flex items-center justify-between">
        <button className="text-gray-500">
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
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="flex-1 mx-4">
          <ProgressBar progress={progress} />
        </div>
        <button className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <DndProvider backend={HTML5Backend}>
          {currentStep === 1 && <LessonStep1 />}
          {currentStep === 2 && <LessonStep2 />}
          {currentStep === 3 && <LessonStep3 />}
          {currentStep === 4 && <LessonStep4 />}
          {currentStep === 5 && <LessonStep5 />}
        </DndProvider>

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-white text-[#C23925] rounded-full border border-[#C23925] hover:bg-gray-100 cursor-pointer"
          >
            Back
          </button>

          <button
            onClick={handleNext}
            className="px-6 py-2 bg-[#C23925] text-white rounded-full hover:bg-[#8A3523] cursor-pointer"
          >
            {currentStep >= 3 ? "Check" : "Continue"}
          </button>
        </div>
      </div>

      {showSuccessModal && <SuccessModal onClose={handleFinish} />}
    </div>
  );
}
