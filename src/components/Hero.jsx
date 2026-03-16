import React from "react";

const Hero = () => {
  return (
    <header
      id="home"
      className="masthead text-white text-center"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "82vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div className="container animate-hero px-4">
        {/* Subheading - Now pushed down by responsive padding */}
        <div className="hero-subheading text-primary fw-bold text-uppercase fade-up-1">
          Solution One One Six
        </div>

        {/* Main Catchy Heading */}
        <h1
          className="hero-title text-uppercase fw-bold mb-4 fade-up-2"
          style={{ letterSpacing: "2px", lineHeight: "1.2" }}
        >
          YOU BUILD THE FUTURE.
          <br />
          <span className="text-primary">WE’LL HANDLE THE REST.</span>
        </h1>

        {/* The Value Proposition Subtext */}
        <p
          className="hero-text mb-5 mx-auto text-white-50 fade-up-3"
          style={{ maxWidth: "750px" }}
        >
          Let us take care of your business compliance and digital branding so
          you can focus on scaling your vision across South Africa.
        </p>

        {/* Call to Action */}
        <a
          className="btn btn-primary btn-xl text-uppercase px-5 py-3 fw-bold shadow-lg rounded-pill fade-up-4 btn-glow btn-pulse"
          href="#services"
        >
          Tell Me More
        </a>
      </div>

      <style>{`
        /* 1. Fix for Fixed Navbar overlap */
        .masthead {
          padding-top: 100px; /* Base padding for mobile */
        }

        @media (min-width: 992px) {
          .masthead {
            padding-top: 120px; /* Extra room for desktop navbar */
          }
        }

        /* 2. Animation Logic */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up-1 { animation: fadeUp 0.8s ease forwards; opacity: 0; }
        .fade-up-2 { animation: fadeUp 0.8s ease forwards 0.2s; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.8s ease forwards 0.4s; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.8s ease forwards 0.6s; opacity: 0; }

        /* 3. Branding Subheading Sizing */
        .hero-subheading {
          font-size: 1.1rem;
          letter-spacing: 4px;
          margin-bottom: 1.5rem;
        }

        /* 4. Responsive Typography */
        .hero-title {
          font-size: calc(1.8rem + 3vw);
        }
        
        .hero-text {
          font-size: 1rem;
        }

        @media (min-width: 992px) {
          .hero-subheading {
            font-size: 1.5rem;
            letter-spacing: 6px;
          }
          .hero-title {
            font-size: 4rem;
          }
          .hero-text {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 576px) {
          .hero-subheading {
            font-size: 1rem;
            letter-spacing: 3px;
          }
          .hero-title {
            font-size: 2.2rem;
            line-height: 1.1;
          }
        }
      `}</style>
    </header>
  );
};

export default Hero;
