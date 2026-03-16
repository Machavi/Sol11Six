import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const Pricing = () => {
  const phoneNumber = "27793752769";

  const packages = [
    {
      name: "Startup",
      price: "R499",
      features: [
        "CIPC Registration",
        "Tax Clearance",
        "B-BBEE Certificate",
        "Share Certificates",
      ],
      btnVariant: "outline-light",
      glowClass: "hover-glow-white",
    },
    {
      name: "Growth",
      price: "R1,299",
      features: [
        "Everything in 'Startup'",
        "Business Email",
        ".co.za Domain",
        "Professional Logo",
      ],
      btnVariant: "primary",
      popular: true,
      glowClass: "btn-glow btn-pulse",
    },
    {
      name: "Premium",
      price: "R3,499",
      features: [
        "Everything in 'Growth'",
        "1-Page Website",
        "SEO Setup",
        "Business Profile",
      ],
      btnVariant: "outline-light",
      glowClass: "hover-glow-white",
    },
  ];

  const handleSelect = (pkgName) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${pkgName} Package for my business. Can we discuss the next steps?`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-5" id="pricing">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold text-white text-uppercase tracking-wider">
            Choose Your Plan
          </h2>
          <p className="text-white-50">
            Affordable compliance and branding for SA entrepreneurs
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {packages.map((pkg, index) => (
            <Col
              lg={4}
              md={6}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div
                className={`glass-card p-4 h-100 text-center text-white ${pkg.popular ? "border-primary border-2 shadow-lg" : "border-secondary"}`}
              >
                {pkg.popular && (
                  <span className="badge bg-primary mb-3 rounded-pill px-3">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="fw-bold">{pkg.name}</h3>
                <h2
                  className="my-4 fw-bold display-6"
                  style={{
                    color: pkg.popular ? "var(--accent-color)" : "#fff",
                  }}
                >
                  {pkg.price}
                </h2>
                <ul className="list-unstyled mb-5 text-start">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="mb-2 small">
                      <i
                        className={`bi bi-check-circle-fill me-2 ${pkg.popular ? "text-primary" : "text-secondary"}`}
                      ></i>{" "}
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.btnVariant}
                  className={`w-100 py-3 fw-bold rounded-pill text-uppercase ${pkg.glowClass}`}
                  onClick={() => handleSelect(pkg.name)}
                >
                  Select Plan
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        /* White glow for Startup and Premium on hover */
        .hover-glow-white {
          transition: all 0.3s ease-in-out;
          border-color: rgba(255, 255, 255, 0.5);
        }

        .hover-glow-white:hover {
          background-color: white !important;
          color: black !important;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
          transform: translateY(-3px);
        }

        /* Keep the Growth button blue glow consistent */
        .btn-glow {
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Pricing;
