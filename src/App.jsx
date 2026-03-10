import React, { useState, useEffect } from "react";
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
    /* FIXED: Removed 'bg-light' so the background image can be seen */
    <div className="min-vh-100">
      <Navbar />

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

      {/* PORTFOLIO SECTION */}
      <section id="portfolio">
        <Portfolio />
      </section>

      <Trust />

      <section id="contact">
        <Contact />
      </section>

      <Pricing />
      <FAQ open={open} toggle={(i) => setOpen(open === i ? null : i)} />

      {/* CALL TO ACTION - Updated to Glass Style */}
      <section className="py-5 text-center">
        <div className="container py-4">
          <div className="glass-card py-5">
            <h2 className="fw-bold mb-3 text-white">
              Ready to Start Your Business Journey?
            </h2>
            <button
              onClick={() => window.open("https://wa.me/27793752769", "_blank")}
              className="btn btn-light btn-lg px-5 fw-bold text-primary shadow"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27793752769"
        className="whatsapp-float shadow"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;
