import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Trust from "./components/Trust";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

// --- REFINED SCROLL MANAGEMENT ---
const ScrollToHashElement = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToElement = () => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      const timer = setTimeout(scrollToElement, 300);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

// --- HOME PAGE COMPONENT ---
const Home = ({ open, setOpen }) => (
  <>
    <section id="home">
      <Hero />
    </section>

    <TrustBar />

    <section id="services">
      <Services />
    </section>

    <section id="about">
      <Timeline />
    </section>

    <section id="portfolio">
      <Portfolio />
    </section>

    <section id="trust">
      <Trust />
    </section>

    <section id="pricing">
      <Pricing />
    </section>

    <section id="contact">
      <Contact />
    </section>

    <FAQ open={open} toggle={(i) => setOpen(open === i ? null : i)} />

    {/* FINAL CALL TO ACTION */}
    <section className="py-5 text-center">
      <div className="container py-4">
        <div className="glass-card py-5 px-4" data-aos="zoom-in">
          <h2 className="fw-bold mb-4 text-white display-6 text-uppercase tracking-wider">
            Ready to Start Your Business Journey?
          </h2>
          <p
            className="text-white-50 mb-4 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Join the league of compliant and digitally-driven South African
            entrepreneurs today. Let's build your legacy together.
          </p>
          <button
            onClick={() => window.open("https://wa.me/27733112640", "_blank")}
            className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-pill text-uppercase btn-glow btn-pulse"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  </>
);

// --- MAIN APP COMPONENT ---
function App() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <div className="min-vh-100 bg-dark text-white">
        <ScrollToHashElement />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home open={open} setOpen={setOpen} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        <Footer />
        <ScrollToTop />

        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/27733112640"
          className="whatsapp-float shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;
