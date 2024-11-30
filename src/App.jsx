import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import BasementsPage from "./pages/BasementsPage";
import BathroomsPage from "./pages/BathroomsPage";
import ContactPage from "./pages/ContactPage";
import KitchensPage from "./pages/KitchensPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/basements" element={<BasementsPage />} />
        <Route path="/bathrooms" element={<BathroomsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/kitchens" element={<KitchensPage />} />
      </Routes>
    </Router>
  );
}

export default App;
