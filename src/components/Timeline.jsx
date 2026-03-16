import React from "react";

const Timeline = () => {
  const steps = [
    {
      date: "Step 1",
      title: "CIPC Registration",
      desc: "We reserve your company name and complete the official CIPC filing within 24 hours.",
    },
    {
      date: "Step 2",
      title: "Tax & Share Certificates",
      desc: "Once registered, we issue your official Share Certificates and register your Income Tax with SARS.",
    },
    {
      date: "Step 3",
      title: "Digital Identity",
      desc: "Our design team creates your professional logo and social media assets to launch your brand.",
    },
  ];

  return (
    <section id="about" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="text-uppercase fw-bold text-primary">How It Works</h2>
          <h3 className="section-subheading text-muted">
            Your journey from idea to fully compliant business.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-unstyled position-relative m-0 p-0">
              {steps.map((step, index) => (
                <li
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className={`d-flex mb-5 align-items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="text-center px-4" style={{ zIndex: 2 }}>
                    <div
                      className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center shadow"
                      style={{
                        width: "100px",
                        height: "100px",
                        border: "6px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <span className="fw-bold">{step.date}</span>
                    </div>
                  </div>

                  <div
                    className={`flex-grow-1 ${
                      index % 2 === 0 ? "text-start ms-3" : "text-end me-3"
                    }`}
                  >
                    <h4 className="fw-bold text-white">{step.title}</h4>
                    <p
                      className="text-white-50 mb-0"
                      style={{
                        maxWidth: "500px",
                        display: index % 2 === 0 ? "block" : "inline-block",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}

              {/* REPLACED THE OLD GO CIRCLE WITH THIS BUTTON */}
              <li
                className="text-center mt-5 pb-5"
                data-aos="zoom-in"
                style={{ zIndex: 2, position: "relative" }}
              >
                <div className="d-inline-block position-relative">
                  {/* The Pulse Effect */}
                  <div className="pulse-ring"></div>

                  <a
                    href="#contact"
                    className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-lg hover-scale"
                    style={{
                      width: "120px",
                      height: "120px",
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                      border: "4px solid rgba(255,255,255,0.2)",
                      zIndex: "2",
                      position: "relative",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    GO!
                  </a>
                </div>
                <p className="text-primary mt-4 fw-bold text-uppercase tracking-wider animate-pulse-text">
                  Ready to Start? Click Go
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .pulse-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 120px;
          height: 120px;
          border: 4px solid #0d6efd;
          border-radius: 50%;
          animation: pulse-animation 2s infinite;
          z-index: 1;
        }

        @keyframes pulse-animation {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        .hover-scale {
          transition: all 0.3s ease-in-out;
        }

        .hover-scale:hover {
          transform: scale(1.1);
          background-color: #0b5ed7 !important;
          box-shadow: 0 0 30px rgba(13, 110, 253, 0.8) !important;
        }

        .animate-pulse-text {
          animation: fadePulse 2s infinite;
        }

        @keyframes fadePulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
