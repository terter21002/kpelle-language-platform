import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Help = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const faqItems = [
    {
      question: "How do I sign up for an account?",
      answer:
        "You can partner with Babyduct as a seller on the website ,All you need to do is register and follow the neccessary steps.with  our large customer base.we can help you reach a wider audience and sell many of your product to our customers.",
    },
    {
      question: "How do I enroll in a course",
      answer:
        "To enroll in a course, first log in to your account. Browse our course catalog and select the course you're interested in. Click the 'Enroll' button on the course page and follow the payment instructions if it's a paid course.",
    },
    {
      question: "How lessons are in a course?",
      answer:
        "The number of lessons varies by course. Basic courses typically have 10-15 lessons, while comprehensive courses may have 20-30 lessons. You can see the exact number of lessons on each course's description page.",
    },
    {
      question: "How do I sign up for an account?",
      answer:
        "You can partner with Babyduct as a seller on the website ,All you need to do is register and follow the neccessary steps.with  our large customer base.we can help you reach a wider audience and sell many of your product to our customers.",
    },
    {
      question: "How do I enroll in a course",
      answer:
        "To enroll in a course, first log in to your account. Browse our course catalog and select the course you're interested in. Click the 'Enroll' button on the course page and follow the payment instructions if it's a paid course.",
    },
    {
      question: "How lessons are in a course?",
      answer:
        "The number of lessons varies by course. Basic courses typically have 10-15 lessons, while comprehensive courses may have 20-30 lessons. You can see the exact number of lessons on each course's description page.",
    },
    {
      question: "How do I sign up for an account?",
      answer:
        "You can partner with Babyduct as a seller on the website ,All you need to do is register and follow the neccessary steps.with  our large customer base.we can help you reach a wider audience and sell many of your product to our customers.",
    },
    {
      question: "How do I enroll in a course",
      answer:
        "To enroll in a course, first log in to your account. Browse our course catalog and select the course you're interested in. Click the 'Enroll' button on the course page and follow the payment instructions if it's a paid course.",
    },
    {
      question: "How lessons are in a course?",
      answer:
        "The number of lessons varies by course. Basic courses typically have 10-15 lessons, while comprehensive courses may have 20-30 lessons. You can see the exact number of lessons on each course's description page.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url('/landing_page/help.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: 24,
          textAlign: "center",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "darken",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            How Can We Help You Today?
          </Typography>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
          Do you still have some questions you want to ask us?
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary">
          If you cannot find an answer to your question in our FAQ section, you
          can always contact us.
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" mb={4}>
          We will answer you shortly
        </Typography>

        {faqItems.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="medium">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      {/* Contact Form */}
      <Box sx={{ backgroundColor: "#FFEBFB", py: 6 }}>
        <Container maxWidth="md" style={{ textAlign: "center" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Still have questions?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            If you cannot find answer to your question in our FAQ,you can always
            contact us.
          </Typography>

          <Typography variant="body1" color="textSecondary">
            We will answer you shortly
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="/landing_page/contact.png"
                alt="contact us"
                className=" object-contain"
              />
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  name="fullName"
                  label="Full Name"
                  variant="outlined"
                  margin="normal"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  rows={5}
                  variant="outlined"
                  margin="normal"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <Box textAlign="right" mt={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#C84C32",
                      "&:hover": { backgroundColor: "#A33D28" },
                      borderRadius: "999px",
                      padding: "8px 25px",
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </div>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default Help;
