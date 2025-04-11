import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Button } from "@mui/material";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import TutorCard from "../../components/card/TutorCard";

const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [language, setLanguage] = useState("");
  const [availability, setAvailability] = useState("");
  const [price, setPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const today = new Date();
  const initialStartOfWeek = new Date(today);
  initialStartOfWeek.setDate(today.getDate() - today.getDay());
  const [startOfWeek, setStartOfWeek] = useState(initialStartOfWeek);

  useEffect(() => {
    console.log("Selected tutor:", selectedTutor);
  }, [selectedTutor]);

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

  const openModal = (tutor) => {
    setSelectedTutor(tutor);
    setIsModalOpen(true);
  };

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   const timeSlots = [
  //     { time: "11:00 AM", available: true },
  //     { time: "12:00 PM", available: false },
  //     { time: "1:00 PM", available: true },
  //     { time: "2:00 PM", available: true },
  //     { time: "3:00 PM", available: true },
  //   ];

  return (
    <main className="bg-[#f8f7e4] px-4 md:px-6 py-8 md:py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-[#57270E] mb-2">
            Find Expert Tutors for Liberia&opas;s Native Languages
          </h1>
          <p className="text-[#57270E] max-w-2xl mx-auto">
            Connect with experienced tutors and learn Liberian native languages
            through personalized lessons tailored to your needs.
          </p>
        </div>

        {/* Filters */}
        <Box
          sx={{
            p: 2,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 1,
            mb: 4,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Language I want to learn</InputLabel>
                <Select
                  value={language}
                  label="Language I want to learn"
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <MenuItem value="kpelle">Kpelle</MenuItem>
                  <MenuItem value="bassa">Bassa</MenuItem>
                  <MenuItem value="vai">Vai</MenuItem>
                  <MenuItem value="grebo">Grebo</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>My Availability</InputLabel>
                <Select
                  value={availability}
                  label="My Availability"
                  onChange={(e) => setAvailability(e.target.value)}
                >
                  <MenuItem value="morning">Morning</MenuItem>
                  <MenuItem value="afternoon">Afternoon</MenuItem>
                  <MenuItem value="evening">Evening</MenuItem>
                  <MenuItem value="weekend">Weekend</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Price/Lesson</InputLabel>
                <Select
                  value={price}
                  label="Price/Lesson"
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <MenuItem value="0-50">$0 - $50</MenuItem>
                  <MenuItem value="50-100">$50 - $100</MenuItem>
                  <MenuItem value="100-150">$100 - $150</MenuItem>
                  <MenuItem value="150+">$150+</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <MenuItem value="relevance">Relevance</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="rating">Rating</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor, index) => (
            <TutorCard
              onclick={() => openModal(tutor)}
              key={index}
              {...tutor}
            />
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <div>
            <DialogTitle className="text-center">
              Book a Trial Lesson
            </DialogTitle>
            <p className="text-center text-sm text-gray-500">
              Choose your preferred date and select a personalized learning plan
            </p>
          </div>

          <div className="mt-4">
            <div className="flex justify-between items-center mb-2 ml-5">
              <span className="text-sm font-bold">
                {new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                }).format(startOfWeek)}{" "}
                -{" "}
                {new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                }).format(
                  new Date(
                    startOfWeek.getFullYear(),
                    startOfWeek.getMonth(),
                    startOfWeek.getDate() + 6
                  )
                )}
              </span>
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => {
                    const newStart = new Date(startOfWeek);
                    newStart.setDate(startOfWeek.getDate() - 7);
                    setStartOfWeek(newStart);
                  }}
                >
                  <span className="sr-only">Previous week</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => {
                    const newStart = new Date(startOfWeek);
                    newStart.setDate(startOfWeek.getDate() + 7);
                    setStartOfWeek(newStart);
                  }}
                >
                  <span className="sr-only">Next week</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Calendar */}
            <div className="grid grid-cols-7 gap-1 mb-6">
              {weekdays.map((day) => (
                <div key={day} className="text-center text-xs font-medium">
                  {day}
                </div>
              ))}
              {Array.from({ length: 7 }).map((_, i) => {
                const date = new Date(startOfWeek);
                date.setDate(startOfWeek.getDate() + i);

                const isSelected =
                  selectedDate.toDateString() === date.toDateString();
                const isToday = today.toDateString() === date.toDateString();

                return (
                  <button
                    key={i}
                    className={`text-center py-2 text-sm rounded-full transition-all ${
                      isSelected
                        ? "bg-[#C4392A] text-white"
                        : isToday
                        ? "border border-[#C4392A] text-[#C4392A]"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-gray-500 mb-4">
              In your time zone, Africa/Lagos (GMT +1:00)
            </p>

            {/* Time Slots */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Morning Section</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center py-2 border rounded text-sm">
                    11:00 AM
                  </div>
                  <div className="text-center py-2 border rounded text-sm">
                    11:00 AM
                  </div>
                  <div className="text-center py-2 border rounded text-sm">
                    11:00 AM
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Afternoon Section</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center py-2 border rounded text-sm">
                    11:00 AM
                  </div>
                  <div className="text-center py-2 border rounded text-sm">
                    11:00 AM
                  </div>
                  <div className="text-center py-2 border rounded text-sm">
                    11:00 AM
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Evening Section</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center py-2 border rounded text-sm">
                    11:00 AM
                  </div>
                  <div className="text-center py-2 border rounded text-sm">
                    11:00 AM
                  </div>
                  <div className="text-center py-2 border rounded text-sm">
                    11:00 AM
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pb-4 flex gap-2 justify-center">
              <button className="bg-[#C4392A] hover:bg-[#A32E22] text-white py-1 px-4 rounded-3xl cursor-pointer transition-all duration-300 shadow-xl">
                Schedule Now
              </button>
              <button
                className="border-2 border-[#C4392A] text-[#C4392A] hover:bg-[#C4392A] hover:text-white py-1 px-9 rounded-4xl text-lg cursor-pointer transition-all duration-300 shadow-xl"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Booking;
