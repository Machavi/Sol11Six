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
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="text-uppercase fw-bold text-primary">How It Works</h2>
          <h3 className="section-subheading text-muted">
            Your journey from idea to fully compliant business.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* Added relative positioning to contain the ::before line */}
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
                        border: "6px solid #fff",
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
                    <h4 className="fw-bold">{step.title}</h4>
                    <p
                      className="text-muted mb-0"
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

              {/* Final "GO!" Circle with extra padding to prevent overlap */}
              <li
                className="text-center mt-5 pb-5"
                data-aos="zoom-in"
                data-aos-delay="200"
                style={{ zIndex: 2, position: "relative" }}
              >
                <div
                  className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center shadow"
                  style={{
                    width: "80px",
                    height: "80px",
                    border: "5px solid #fff",
                  }}
                >
                  <span className="fw-bold small">GO!</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
