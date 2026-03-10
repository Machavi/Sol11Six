import React from "react";

const Hero = () => {
  return (
    <header
      className="masthead text-white text-center py-5"
      style={{
        // Updated URL to a Finance/Tech themed background
        background:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="masthead-subheading fs-2 mb-3 italic">
          Welcome To Sol11Six!
        </div>
        <div className="masthead-heading text-uppercase display-3 fw-bold mb-4">
          It's Nice To Meet You
        </div>
        <a
          className="btn btn-primary btn-xl text-uppercase px-5 py-3 fw-bold shadow"
          href="#services"
        >
          Tell Me More
        </a>
      </div>
    </header>
  );
};

export default Hero;
