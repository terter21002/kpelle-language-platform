import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useAuth } from "../../contexts/authContext";
import { loginRoute } from "../../utils/APIroute";

export default function Login() {
  const { dispatch } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(loginRoute, {
        email,
        password,
      });
      console.log(response.data.token);
      navigate("/");
      dispatch({
        type: "LOGIN",
        payload: { user: response.data.user, token: response.data.token },
      });

      localStorage.setItem("token", response.data.token);
    } catch (err) {
      setError(err.response.data.message);
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
                  Welcome back!
                </h1>
                <p className="text-muted-foreground text-[#57270E] text-[16px]">
                  Kindly Login Your Details.
                </p>
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
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

                {/* Terms & Conditions */}
                <div className="flex items-center space-x-2 justify-between pb-6">
                  <div>
                    <p className="leading-none text-muted-foreground text-gray-700">
                      Not a member?{" "}
                      <Link
                        to="/sign-up"
                        className="text-[#FFBC02] hover:underline"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>

                  <Link
                    to="/password-reset"
                    className="text-[#FFBC02] hover:underline"
                  >
                    Forget Password?
                  </Link>
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
