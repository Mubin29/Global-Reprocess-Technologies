import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ContactWhatsapp from "./components/ContactWhatsapp";

import About from "./Pages/About";
import Technology from "./Pages/Technology";
import TechDetails from "./Pages/TechDetails";
import Projects from "./Pages/Project";
import Blending from "./Pages/Blending";
import Services from "./Pages/Services";
import Fabrication from "./Pages/Fabrication";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">

        <Header />

        <main className="flex-grow bg-gray-50 p-6">
          <Routes>
            {/* ✅ Home Page */}
            <Route path="/" element={<Hero />} />

            {/* ✅ Other Pages (lowercase paths) */}
            <Route path="/technology" element={<Technology />} />
            <Route path="/technology/:type"element={<TechDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blending" element={<Blending />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fabrication" element={<Fabrication />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ContactWhatsapp />
        <Footer />

      </div>
    </Router>
  );
}

export default App;