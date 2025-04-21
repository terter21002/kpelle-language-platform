import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function LevelCheck() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    goal: "",
    ageGroup: "",
    timeCommitment: "",
    nickname: "",
  });
  const navigate = useNavigate();

  const totalSteps = 4;
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  const handleOptionSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleContinue = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form or navigate to next page
      console.log("Form submitted:", formData);
      navigate("/class");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#f5f5dc] flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-[#f5f5dc] rounded-lg p-6">
        {/* Progress Bar */}
        <div className="w-full h-3 bg-white rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-yellow-400 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Mascot */}
          <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative">
            <img
              src="/landing_page/symbol.png"
              alt="symbol"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="flex-grow">
            {/* Step 1: Goals */}
            {currentStep === 0 && (
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#5D2E1A]">
                  what are you looking to achieve?
                </h2>
                <div className="space-y-3">
                  <OptionButton
                    text="Just learn the basics"
                    selected={formData.goal === "basics"}
                    onClick={() => handleOptionSelect("goal", "basics")}
                  />
                  <OptionButton
                    text="Get Conversational"
                    selected={formData.goal === "conversational"}
                    onClick={() => handleOptionSelect("goal", "conversational")}
                  />
                  <OptionButton
                    text="Speak with ease in any situation"
                    selected={formData.goal === "fluent"}
                    onClick={() => handleOptionSelect("goal", "fluent")}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Age Group */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#5D2E1A]">
                  <span className="mr-2">🎓</span> Select Your Age Group
                </h2>
                <p className="text-[#5D2E1A]">
                  We use this information to personalize your experience.
                </p>
                <div className="space-y-3">
                  <OptionButton
                    text="Under 18"
                    selected={formData.ageGroup === "under18"}
                    onClick={() => handleOptionSelect("ageGroup", "under18")}
                  />
                  <OptionButton
                    text="18 - 24"
                    selected={formData.ageGroup === "18-24"}
                    onClick={() => handleOptionSelect("ageGroup", "18-24")}
                  />
                  <OptionButton
                    text="25 - 34"
                    selected={formData.ageGroup === "25-34"}
                    onClick={() => handleOptionSelect("ageGroup", "25-34")}
                  />
                  <OptionButton
                    text="35 - 44"
                    selected={formData.ageGroup === "35-44"}
                    onClick={() => handleOptionSelect("ageGroup", "35-44")}
                  />
                  <OptionButton
                    text="45 - 54"
                    selected={formData.ageGroup === "45-54"}
                    onClick={() => handleOptionSelect("ageGroup", "45-54")}
                  />
                  <OptionButton
                    text="55 - 64"
                    selected={formData.ageGroup === "55-64"}
                    onClick={() => handleOptionSelect("ageGroup", "55-64")}
                  />
                  <OptionButton
                    text="70 Above"
                    selected={formData.ageGroup === "70+"}
                    onClick={() => handleOptionSelect("ageGroup", "70+")}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Time Commitment */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#5D2E1A]">
                  How much time do you want to put in learning Bassa Language?
                </h2>
                <div className="space-y-3">
                  <OptionButton
                    text="5 mins / day"
                    selected={formData.timeCommitment === "5min"}
                    onClick={() => handleOptionSelect("timeCommitment", "5min")}
                  />
                  <OptionButton
                    text="15mins / day"
                    selected={formData.timeCommitment === "15min"}
                    onClick={() =>
                      handleOptionSelect("timeCommitment", "15min")
                    }
                  />
                  <OptionButton
                    text="30mins / day"
                    selected={formData.timeCommitment === "30min"}
                    onClick={() =>
                      handleOptionSelect("timeCommitment", "30min")
                    }
                  />
                  <OptionButton
                    text="60mins / day"
                    selected={formData.timeCommitment === "60min"}
                    onClick={() =>
                      handleOptionSelect("timeCommitment", "60min")
                    }
                  />
                  <OptionButton
                    text="I'm not sure"
                    selected={formData.timeCommitment === "unsure"}
                    onClick={() =>
                      handleOptionSelect("timeCommitment", "unsure")
                    }
                  />
                </div>
              </div>
            )}

            {/* Step 4: Nickname */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#5D2E1A]">
                  What Your Nickname
                </h2>
                <input
                  type="text"
                  name="nickname"
                  placeholder="Enter Nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C84C32] focus:border-[#C84C32] transition-all"
                />
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-8 space-x-3">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="border border-[#5D2E1A] text-[#5D2E1A] hover:bg-[#5D2E1A]/10 px-4 py-2 rounded-md transition-all"
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={handleContinue}
            className={`px-4 py-2 rounded-md transition-all text-white ${
              (currentStep === 0 && !formData.goal) ||
              (currentStep === 1 && !formData.ageGroup) ||
              (currentStep === 2 && !formData.timeCommitment) ||
              (currentStep === 3 && !formData.nickname)
                ? "bg-[#C84C32] opacity-50 cursor-not-allowed"
                : "bg-[#C84C32] hover:bg-[#A33D28]"
            }`}
            disabled={
              (currentStep === 0 && !formData.goal) ||
              (currentStep === 1 && !formData.ageGroup) ||
              (currentStep === 2 && !formData.timeCommitment) ||
              (currentStep === 3 && !formData.nickname)
            }
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function OptionButton({ text, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full py-3 px-4 rounded-md text-left transition-all ${
        selected
          ? "bg-white border-2 border-[#C84C32] text-[#5D2E1A] font-medium"
          : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
      }`}
    >
      {text}
    </button>
  );
}

OptionButton.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
