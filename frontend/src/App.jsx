import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/_common/Layout.component";
import Home from "./pages/home";
import Language from "./pages/language";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/language" element={<Language />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
