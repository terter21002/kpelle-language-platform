import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import Layout from "./components/_common/Layout.component";
import Home from "./pages/home";
import Language from "./pages/language";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/language" element={<Language />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
