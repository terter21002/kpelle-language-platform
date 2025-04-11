import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import Layout from "./components/_common/Layout.component";
import Home from "./pages/home";
import Language from "./pages/language";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import SpecificLanguage from "./pages/language/SpecificLanguage";
import Course from "./pages/language/courseSelection";
import CourseLevel from "./pages/language/courseSelection/CourseLevel";
import LevelCheck from "./pages/language/courseSelection/LevelCheck";
import Culture from "./pages/culture";
import CultureLearnMore from "./pages/culture/CutureLearnMore";
import Tutor from "./pages/tutor";
import Booking from "./pages/tutor/Booking";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/language" element={<Language />} />
            <Route path="/language-id" element={<SpecificLanguage />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/culture/learn-more" element={<CultureLearnMore />} />
          </Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course" element={<Course />}>
            <Route index element={<CourseLevel />} />
            <Route path="/course/level-check" element={<LevelCheck />} />
          </Route>
          <Route path="/tutor" element={<Tutor />}>
            <Route index element={<Booking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
