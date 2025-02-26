import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Button,
  TextField,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UseAuth } from "../../contexts/authContext";
import axios from "axios";
import { registerRoute } from "../../utils/APIroute";
import { toast } from "react-toastify";

export default function SignUp() {
  const navigate = useNavigate();
  const { dispatch } = UseAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [language, setLanguage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      language,
      password,
      confirmPassword
    );
    setError("");
    try {
      const response = await axios.post(registerRoute, {
        firstName,
        lastName,
        email,
        language,
        password,
        confirmPassword,
      });
      console.log(response);
      toast.success("Signup successful! Please log in.");
      navigate("/login");
      dispatch({ type: "LOGIN", payload: response.data.user });
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message); // Set error message from backend response
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="w-full max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Side Image */}
          <div className="relative hidden md:block">
            <img
              src="/landing_page/header_logo.png"
              alt="Illustration"
              className="w-[100%] h-auto"
            />
          </div>

          {/* Right Side Form */}
          <div className="flex items-center justify-center px-4 py-8 md:px-8">
            <div className="w-full max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-[18px] font-bold tracking-tight text-[#57270E]">
                  JOIN US AND START YOUR LANGUAGE LEARNING
                </h1>
                <p className="text-muted-foreground text-[#57270E] text-[16px]">
                  Create an account to access lessons, track your progress, and
                  explore Liberia&apos;s rich linguistic heritage.
                </p>
              </div>
              {error && <p className="text-red-500 text-center">{error}</p>}{" "}
              {/* Show error message */}
              <form onSubmit={handleSignUp} className="space-y-4">
                {/* Name Fields */}
                <div className="space-y-2">
                  <TextField
                    label="First Name"
                    fullWidth
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <TextField
                    label="Last Name"
                    fullWidth
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <TextField
                    label="Email Address"
                    type="email"
                    fullWidth
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Language Selection */}
                <div className="space-y-2">
                  <FormControl fullWidth>
                    <Select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      displayEmpty
                    >
                      <MenuItem value="" disabled>
                        Select Language
                      </MenuItem>
                      <MenuItem value="kpelle">Kpelle</MenuItem>
                      <MenuItem value="bassa">Bassa</MenuItem>
                      <MenuItem value="gio">Gio</MenuItem>
                      <MenuItem value="mano">Mano</MenuItem>
                      <MenuItem value="kru">Kru</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                {/* Password Fields */}
                <div className="space-y-2">
                  <TextField
                    label="Enter Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <TextField
                    label="Re-enter Password"
                    type={showConfirmPassword ? "text" : "password"}
                    fullWidth
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "#C23925",
                      },
                    }}
                    required
                  />
                  <p className="text-sm leading-none text-muted-foreground text-gray-700">
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-[#FFBC02] hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    &{" "}
                    <Link
                      to="/privacy"
                      className="text-[#FFBC02] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>

                {/* Sign Up Button */}
                <Button
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#C23925", borderRadius: "25px" }}
                  size="large"
                  fullWidth
                >
                  Start Free Trial
                </Button>

                {/* Divider */}
                <div></div>
                {/* Google Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  size="large"
                  style={{
                    borderRadius: "25px",
                    borderColor: "#C23925",
                    color: "#C23925",
                  }}
                  className="gap-3"
                >
                  <Google /> Continue with Google
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
