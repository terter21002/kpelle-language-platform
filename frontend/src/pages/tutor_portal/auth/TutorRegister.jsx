import { useState } from "react";
import { Eye, EyeOff, Upload, X, Check } from "lucide-react";

import {
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Box,
  TextField,
  Button,
} from "@mui/material";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const timezoneOptions = [
  "UTC",
  "UTC+1",
  "UTC+2",
  "UTC+3",
  "UTC+4",
  "UTC+5",
  "UTC+6",
  "UTC+7",
  "UTC+8",
  "UTC+9",
  "UTC+10",
  "UTC+11",
  "UTC+12",
  "PST",
  "EST",
  "CST",
  "MST",
  "GMT",
  "Europe/London",
  "Asia/Kolkata",
  "America/New_York",
  "Asia/Tokyo",
  "Australia/Sydney",
  "America/Los_Angeles",
  "America/Chicago",
];

const yearOptions = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
);

const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1);

const TutorRegister = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("sendwave");
  const [fileSize, setFileSize] = useState(0);

  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    country: "",
    city: "",
    gender: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    password: "",
    confirmPassword: "",
    language: "",
    proficiencyLevel: "",
    teachingExperience: "",
    availability: "",
    hourlyRate: "",
    timeZone: "",
    phoneNumber: "",
    accountNumber: "",
  });

  const [dob, setDob] = useState({
    birthYear: "",
    birthMonth: "",
    birthDay: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChangeDob = (field, value) => {
    setDob((prev) => ({ ...prev, [field]: value }));
  };

  const handleVerificationCodeChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleContinue = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleProfilePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePhoto(event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileSize(file.size);
      setUploadingFile(true);
      let progress = 0;
      const totalFileSize = file.size;
      const simulateUpload = () => {
        if (progress < 100) {
          // Simulate progress in steps based on file size
          progress += Math.min(10, (totalFileSize / 10000) * 10); // Simulate progress increment
          setUploadProgress(Math.min(100, progress)); // Ensure it doesn't exceed 100%
          setTimeout(simulateUpload, 500); // Update every 500ms
        } else {
          // Upload complete
          setUploadingFile(false);
        }
      };

      simulateUpload(); // Start the simulated upload
    }
  };

  const handleDeletePhoto = () => {
    setProfilePhoto(null);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-center font-medium text-gray-700">
              Personal Information
            </h2>
            <div className="space-y-4">
              <div>
                <TextField
                  label="First Name"
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <TextField
                  label="Last Name"
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <TextField
                  label="Username"
                  fullWidth
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <TextField
                  label="Email"
                  fullWidth
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={formData.country || ""}
                    onChange={(e) =>
                      handleSelectChange("country", e.target.value)
                    }
                    label="Country"
                  >
                    <MenuItem value="liberia">Liberia</MenuItem>
                    <MenuItem value="ghana">Ghana</MenuItem>
                    <MenuItem value="nigeria">Nigeria</MenuItem>
                    <MenuItem value="usa">United States</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                <FormControl fullWidth>
                  <InputLabel>City</InputLabel>
                  <Select
                    value={formData.city || ""}
                    onChange={(e) => handleSelectChange("city", e.target.value)}
                    label="City"
                  >
                    <MenuItem value="monrovia">Monrovia</MenuItem>
                    <MenuItem value="buchanan">Buchanan</MenuItem>
                    <MenuItem value="gbarnga">Gbarnga</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    value={formData.gender || ""}
                    onChange={(e) =>
                      handleSelectChange("gender", e.target.value)
                    }
                    label="Gender"
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="birth-year-label">Year</InputLabel>
                      <Select
                        labelId="birth-year-label"
                        value={dob.birthYear || ""}
                        label="Year"
                        onChange={(e) =>
                          handleSelectChangeDob("birthYear", e.target.value)
                        }
                      >
                        {yearOptions.map((year) => (
                          <MenuItem key={year} value={year.toString()}>
                            {year}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="birth-month-label">Month</InputLabel>
                      <Select
                        labelId="birth-month-label"
                        value={dob.birthMonth || ""}
                        label="Month"
                        onChange={(e) =>
                          handleSelectChangeDob("birthMonth", e.target.value)
                        }
                      >
                        {months.map((month, index) => (
                          <MenuItem key={month} value={(index + 1).toString()}>
                            {month}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="birth-day-label">Day</InputLabel>
                      <Select
                        labelId="birth-day-label"
                        value={dob.birthDay || ""}
                        label="Day"
                        onChange={(e) =>
                          handleSelectChangeDob("birthDay", e.target.value)
                        }
                      >
                        {dayOptions.map((day) => (
                          <MenuItem key={day} value={day.toString()}>
                            {day}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>

              <div>
                <div className="relative">
                  <TextField
                    label="Password"
                    fullWidth
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <div className="relative">
                  <TextField
                    label="Re-enter Password"
                    fullWidth
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#C23925", borderRadius: "25px" }}
              size="large"
              fullWidth
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-center font-medium text-gray-700">
              Teaching Information
            </h2>
            <div className="space-y-4">
              <div>
                {/* Language Selection */}
                <FormControl fullWidth>
                  <InputLabel>Language</InputLabel>
                  <Select
                    onChange={(e) =>
                      handleSelectChange("language", e.target.value)
                    }
                    value={formData.language}
                    label="Language"
                  >
                    <MenuItem value="" disabled>
                      Select Language
                    </MenuItem>
                    <MenuItem value="kpelle">Kpelle</MenuItem>
                    <MenuItem value="bassa">Bassa</MenuItem>
                    <MenuItem value="vai">Vai</MenuItem>
                    <MenuItem value="grebo">Grebo</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                {/* Proficiency Level Selection */}
                <FormControl fullWidth>
                  <InputLabel>Level</InputLabel>
                  <Select
                    onChange={(e) =>
                      handleSelectChange("proficiencyLevel", e.target.value)
                    }
                    value={formData.proficiencyLevel}
                    label="Level"
                  >
                    <MenuItem value="" disabled>
                      Select Level
                    </MenuItem>
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="intermediate">Intermediate</MenuItem>
                    <MenuItem value="advanced">Advanced</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                {/* Years of Teaching Experience */}
                <FormControl fullWidth>
                  <InputLabel>Experience</InputLabel>
                  <Select
                    onChange={(e) =>
                      handleSelectChange("teachingExperience", e.target.value)
                    }
                    value={formData.teachingExperience}
                    label="Experience"
                  >
                    <MenuItem value="" disabled>
                      Select Years
                    </MenuItem>
                    <MenuItem value="0-1">0-1 years</MenuItem>
                    <MenuItem value="1-3">1-3 years</MenuItem>
                    <MenuItem value="3-5">3-5 years</MenuItem>
                    <MenuItem value="5+">5+ years</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div>
                {/* Availability */}
                <TextField
                  fullWidth
                  id="availability"
                  name="availability"
                  label="Availability"
                  placeholder="Enter your availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                {/* Hourly Rate */}
                <TextField
                  fullWidth
                  id="hourlyRate"
                  name="hourlyRate"
                  label="Hourly Rate"
                  placeholder="Enter your hourly rate"
                  value={formData.hourlyRate}
                  onChange={handleInputChange}
                  type="number"
                />
              </div>

              <div>
                {/* Time Zone Selection */}
                <FormControl fullWidth>
                  <InputLabel>Time Zone</InputLabel>
                  <Select
                    label="Time Zone"
                    name="timeZone"
                    value={formData.timeZone}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="" disabled>
                      Select Time Zone
                    </MenuItem>
                    {timezoneOptions.map((timezone) => (
                      <MenuItem key={timezone} value={timezone}>
                        {timezone}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#C23925", borderRadius: "25px" }}
                size="large"
                fullWidth
                onClick={handlePrevious}
              >
                Back
              </Button>
            </div>
            <div>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#C23925", borderRadius: "25px" }}
                size="large"
                fullWidth
                onClick={handleContinue}
              >
                Continue
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-center font-medium text-gray-700">
              Verification
            </h2>
            <div className="space-y-6">
              {/* Profile Photo Upload Section */}
              <div className="mt-2 border rounded-md p-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4">
                  {profilePhoto ? (
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ccSS0DmYpCnA6plzLjO0Dx9n54nTak.png"
                      alt="Default profile"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="flex space-x-2">
                  <label className="cursor-pointer">
                    <span className="bg-[#C84C32] hover:bg-[#A33D28] text-white px-3 py-1 rounded-md text-sm">
                      Upload Photo
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleProfilePhotoUpload}
                      accept="image/*"
                    />
                  </label>
                  <button
                    className="border border-[#C84C32] text-[#C84C32] px-3 py-1 rounded-md text-sm"
                    onClick={handleDeletePhoto}
                  >
                    Delete Photo
                  </button>
                </div>
                <div className="mt-4 text-xs text-gray-500 flex flex-wrap justify-center gap-4">
                  <span className="flex items-center">
                    <span className="text-red-500 mr-1">•</span> At least
                    250×250 Pixel
                  </span>
                  <span className="flex items-center">
                    <span className="text-red-500 mr-1">•</span> Maximum size of
                    2MB
                  </span>
                  <span className="flex items-center">
                    <span className="text-red-500 mr-1">•</span> JPG, PNG, BM
                    Format only
                  </span>
                </div>
              </div>

              {/* ID Verification Section */}
              <div>
                {/* ID Upload Buttons */}
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <button className="border border-[#C84C32] text-[#C84C32] px-3 py-2 rounded-md text-sm">
                    Upload Passport
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm">
                    Drivers License Upload
                  </button>
                </div>

                {/* Drag-and-Drop Area */}
                <div className="mt-4 border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center">
                  <div className="mb-4 text-gray-400">
                    <Upload className="h-8 w-8 mx-auto mb-2" />
                  </div>
                  <p className="text-sm font-medium mb-1">
                    Drag and Drop your file here
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    File supported: JPG, PNG, GIF
                  </p>
                  <p className="text-xs text-gray-500 mb-2">or</p>
                  <label className="cursor-pointer">
                    <span className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md text-sm">
                      Browse files
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                      accept=".jpg, .png, .gif"
                    />
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    Maximum size: 2MB
                  </p>
                </div>

                {/* File Upload Progress */}
                {uploadingFile && (
                  <div className="mt-4 bg-gray-200 rounded-md p-3 relative">
                    <button
                      className="absolute right-2 top-2"
                      onClick={() => setUploadingFile(false)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-yellow-500 text-white rounded-sm flex items-center justify-center mr-2">
                        <span className="text-xs">📄</span>
                      </div>
                      <span className="text-sm">Table Name.xls</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2 mb-1">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>{Math.round(fileSize / 1024)} KB</span>
                      <span>{uploadProgress}%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Continue Button */}
            <button
              className="w-full bg-[#C84C32] hover:bg-[#A33D28] text-white py-2 rounded-md text-sm"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-center font-medium text-gray-700">
              Payment Setup
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-center font-medium mb-1">
                  Choose Payment Method
                </h3>
                <p className="text-center text-sm text-gray-500 mb-4">
                  Sendwave is a default payment option for liberia tutors
                </p>

                <FormControl component="fieldset">
                  <FormLabel component="legend">Payment Method</FormLabel>
                  <RadioGroup
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    row
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 2,
                    }}
                  >
                    {/* Sendwave Option */}
                    <Box
                      sx={{
                        border:
                          paymentMethod === "sendwave"
                            ? "2px solid #C84C32"
                            : "1px solid gray",
                        borderRadius: "8px",
                        padding: "16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        value="sendwave"
                        control={<Radio sx={{ color: "#C84C32" }} />}
                        label="Sendwave"
                        labelPlacement="end"
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      />
                    </Box>

                    {/* PayPal Option */}
                    <Box
                      sx={{
                        border:
                          paymentMethod === "paypal"
                            ? "2px solid #C84C32"
                            : "1px solid gray",
                        borderRadius: "8px",
                        padding: "16px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        value="paypal"
                        control={<Radio sx={{ color: "#C84C32" }} />}
                        label="Paypal"
                        labelPlacement="end"
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      />
                    </Box>
                  </RadioGroup>
                </FormControl>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  {/* <Label htmlFor="phoneNumber">
                    Phone Number linked to sendwave
                  </Label> */}
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Name on card"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  {/* <Label htmlFor="accountNumber">Account Number</Label> */}
                  <Input
                    id="accountNumber"
                    name="accountNumber"
                    placeholder="0000 2222 3333 4444"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                {/* <Label>Country</Label> */}
                <Input value="Liberia" readOnly className="bg-gray-50" />
              </div>

              <button
                className="w-full bg-[#C84C32] hover:bg-[#A33D28]"
                onClick={handleContinue}
              >
                Verify Account
              </button>

              <div className="flex justify-center space-x-6 text-xs">
                <a href="#" className="text-yellow-500 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
                  How to set up sendwave payments
                </a>
                <a href="#" className="text-yellow-500 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
                  Watch Video guide with illustration
                </a>
                <a href="#" className="text-yellow-500 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
                  Need Help? Contact Support link
                </a>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-center font-medium text-gray-700">
              Verification
            </h2>
            <div className="space-y-4 max-w-md mx-auto">
              <h3 className="text-center font-medium">
                Enter the code to verify your Phone Number
              </h3>
              <p className="text-center text-sm text-gray-500">
                we have sent a code on your
                <br />
                your email verification code
              </p>

              <div className="flex justify-center gap-2 my-6">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) =>
                      handleVerificationCodeChange(index, e.target.value)
                    }
                    className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg"
                  />
                ))}
              </div>

              <div className="text-center">
                <a href="#" className="text-yellow-500 text-sm">
                  Send a new code
                </a>
              </div>

              <button
                className="w-full bg-[#C84C32] hover:bg-[#A33D28]"
                onClick={handleContinue}
              >
                Confirm
              </button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6 text-center max-w-md mx-auto">
            <h2 className="text-center font-medium text-gray-700">
              Successful
            </h2>
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium">Congratulations Jerry John</p>
              <p className="text-gray-600">
                Your Sendwave Account has been verified
              </p>
            </div>
            <button
              className="bg-[#C84C32] hover:bg-[#A33D28]"
              onClick={() => console.log("Registration complete!")}
            >
              Continue
            </button>
            <div>
              <a href="#" className="text-yellow-500 text-sm">
                Need help? Contact Support
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-[#5D2E1A]">
            Tutors Registration
          </h1>
          <p className="text-gray-600">Signup Now to teach Online</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex-1 relative">
              <div
                className={`h-1 ${
                  stepNumber <= step ? "bg-[#C84C32]" : "bg-gray-300"
                } ${stepNumber === 1 ? "rounded-l" : ""} ${
                  stepNumber === 4 ? "rounded-r" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default TutorRegister;
