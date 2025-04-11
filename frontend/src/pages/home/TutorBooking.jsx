import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import TutorCard from "../../components/card/TutorCard";
import MainButton from "../../components/button/MainButton";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function TutorBooking(props) {
  const navigate = useNavigate();

  const tutors = [
    {
      name: "Mattew j.",
      rating: 5.0,
      price: 900,
      language: "Kpelle Language",
      lessons: 300,
      country: "US",
      description:
        "Hello, I'm John Mattew, a native Kpelle speaker and dedicated language tutor with years of experience. I blend traditional Kpelle cultural insights with modern teaching methods to help you master our beautiful language.",
      imageSrc: "/landing_page/tutor_1.png",
    },
    {
      name: "Hebrew j.",
      rating: 5.0,
      price: 100,
      language: "Bassa Language",
      lessons: 100,
      country: "US",
      description:
        "Hello, I'm John Mattew, a native Kpelle speaker and dedicated language tutor with years of experience. I blend traditional Kpelle cultural insights with modern teaching methods to help you master our beautiful language.",
      imageSrc: "/landing_page/tutor_2.png",
    },
    {
      name: "Marry j.",
      rating: 5.0,
      price: 500,
      language: "Kpelle Language",
      lessons: 300,
      country: "US",
      description:
        "Hello, I'm John Mattew, a native Kpelle speaker and dedicated language tutor with years of experience. I blend traditional Kpelle cultural insights with modern teaching methods to help you master our beautiful language.",
      imageSrc: "/landing_page/tutor_3.png",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12" {...props}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Connect with a Language Tutor
          </h1>
          <p className="text-gray-600">
            Schedule a live session to practice speaking with a native tutor
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 w-full">
          <div className="w-full sm:w-[250px]">
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select defaultValue="" label="Language">
                <MenuItem value="kpelle">Kpelle</MenuItem>
                <MenuItem value="bassa">Bassa</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="w-full sm:w-[250px]">
            <FormControl fullWidth>
              <InputLabel>Price Range</InputLabel>
              <Select defaultValue="" label="Price Range">
                <MenuItem value="0-50">$0 - $50</MenuItem>
                <MenuItem value="51-100">$51 - $100</MenuItem>
                <MenuItem value="101+">$101+</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="w-full sm:w-[250px]">
            <FormControl fullWidth>
              <InputLabel>Availability</InputLabel>
              <Select defaultValue="" label="Availability">
                <MenuItem value="morning">Morning</MenuItem>
                <MenuItem value="afternoon">Afternoon</MenuItem>
                <MenuItem value="evening">Evening</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 sm:gap-6 mb-12">
          {tutors.map((tutor, index) => (
            <TutorCard key={index} {...tutor} />
          ))}
        </div>

        <div className="text-center">
          <MainButton
            onClick={() => navigate("/tutor")}
            title="See All Tutor"
          />
        </div>
      </div>
    </div>
  );
}

TutorBooking.propTypes = {
  props: PropTypes.object.isRequired,
};
