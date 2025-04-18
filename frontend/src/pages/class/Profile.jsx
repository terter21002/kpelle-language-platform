import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  IconButton,
  InputAdornment,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Submit logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {/* Add New User Button */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="outlined"
          sx={{
            color: "#C23925",
            borderColor: "#C23925",
            borderRadius: "999px",
            textTransform: "none",
          }}
        >
          Add New User
        </Button>
      </Box>

      {/* Language Tag */}
      <Box display="flex" justifyContent="center" mb={4}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FFBC02",
            color: "#fff",
            borderRadius: "999px",
            px: 2,
            py: 1,
          }}
        >
          <img
            src="/landing_page/mask_kpelle.png"
            alt="kpelle mask"
            className="object-cover h-6 w-6"
          />
          Kpelle Language
        </Box>
      </Box>

      {/* Heading */}
      <Typography
        variant="h5"
        fontWeight="bold"
        align="center"
        gutterBottom
        style={{ color: "#57270E" }}
      >
        My Profile
      </Typography>

      {/* Form */}
      <Paper sx={{ p: 3, mt: 3 }} elevation={3}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter Your First Name"
            />

            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Your Last Name"
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box display="flex" justifyContent="center" pb={3} pt={2}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  px: 5,
                  py: 1,
                  borderRadius: "999px",
                  background: "linear-gradient(to right, #C84C32, #A33D28)",
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(to right, #A33D28, #8A3523)",
                  },
                }}
              >
                Save
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default Profile;
