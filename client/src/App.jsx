import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import BasementsPage from "./pages/BasementsPage";
import BathroomsPage from "./pages/BathroomsPage";
import ContactPage from "./pages/ContactPage";
import KitchensPage from "./pages/KitchensPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TestimonialsPage from "./pages/TestimonialsPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/basements" element={<BasementsPage />} />
            <Route path="/bathrooms" element={<BathroomsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/kitchens" element={<KitchensPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
