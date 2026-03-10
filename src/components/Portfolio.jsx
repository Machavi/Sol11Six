import React, { useState } from "react";
// 1. Import all your project images from the assets folder
import churchImg from "../assets/church.png";
import storeImg from "../assets/store.png";
// Change to match your actual poster file name, e.g., branding-poster.png
// import brandingPosterImg from "../assets/branding-poster.png";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Sol11Six Agency - Visual Identity",
      category: "Visual Branding",
      description:
        "Complete corporate identity launch featuring logos, flyers, and business cards.",
      details:
        "Designed a cohesive and modern visual language for Sol11Six. The suite includes vector logos, a professional PDF company profile, interactive digital flyers, and print-ready business cards designed for the South African corporate market.",
      // image: brandingPosterImg, // Updated to your branding poster image
    },
    {
      id: 2,
      title: "Urban Threads E-Commerce",
      category: "E-Commerce",
      description:
        "A modern streetwear store with category filtering and cart logic.",
      details:
        "Developed a high-performance retail experience featuring dynamic product filtering, a responsive shopping cart, and a sleek dark-mode aesthetic.",
      image: storeImg,
    },
    {
      id: 3,
      title: "Church Site",
      category: "Web Development",
      description: "Streamlined visitor landing page with QR code integration.",
      details:
        "Developed a dedicated landing page for first-time visitors and new members. Integrated custom QR codes to bridge the gap between physical Sunday services and digital growth.",
      image: churchImg,
    },
  ];

  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold text-white display-5">Our Portfolio</h2>
          <p className="text-white-50">
            Proven results for South African entrepreneurs and organizations.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div
              className="col-md-6 col-lg-4"
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={project.id * 100}
            >
              <div className="glass-card p-0 overflow-hidden border-0 h-100 d-flex flex-column">
                <div className="img-container overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-img"
                  />
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <span className="badge bg-primary-subtle text-primary mb-3 px-3 rounded-pill align-self-start">
                    {project.category}
                  </span>
                  <h5 className="fw-bold text-white mb-2">{project.title}</h5>
                  <p className="text-white-50 small mb-4">
                    {project.description}
                  </p>
                  <button
                    className="btn btn-outline-light btn-sm w-100 rounded-pill py-2 mt-auto"
                    onClick={() => setActiveProject(project)}
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Structure */}
        <div
          className="modal fade"
          id="projectModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div
              className="modal-content glass-card p-0 border-0 shadow-lg"
              style={{ background: "rgba(20,20,20,0.98)" }}
            >
              {activeProject && (
                <>
                  <div className="modal-header border-0 pb-0">
                    <h5 className="modal-title fw-bold text-white">
                      {activeProject.title}
                    </h5>
                    <button
                      type="button"
                      className="btn-close btn-close-white shadow-none"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img
                      src={activeProject.image}
                      className="img-fluid rounded-4 mb-3 w-100"
                      alt={activeProject.title}
                    />
                    <p className="text-white-50">{activeProject.details}</p>
                  </div>
                  <div className="modal-footer border-0 pt-0">
                    <button
                      type="button"
                      className="btn btn-link text-white-50 text-decoration-none"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <a
                      href={`https://wa.me/27793752769?text=I'm%20interested%20in%20your%20${activeProject.title}%20services`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary rounded-pill px-4"
                    >
                      Inquire Now
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .portfolio-img {
          height: 220px;
          width: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .glass-card:hover .portfolio-img {
          transform: scale(1.1);
        }
        .img-container {
          width: 100%;
          height: 220px;
          background: #1a1a1a;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
