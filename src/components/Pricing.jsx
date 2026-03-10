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
      color: "secondary",
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
      color: "primary",
      popular: true,
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
      color: "info",
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
          <h2 className="display-5 fw-bold text-white">Choose Your Plan</h2>
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
                className={`glass-card p-4 h-100 text-center text-white ${pkg.popular ? "border-primary" : ""}`}
              >
                {pkg.popular && (
                  <span className="badge bg-primary mb-3">MOST POPULAR</span>
                )}
                <h3 className="fw-bold">{pkg.name}</h3>
                <h2 className="my-4 fw-light">{pkg.price}</h2>
                <ul className="list-unstyled mb-5 text-start">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="mb-2">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? "primary" : "outline-light"}
                  className="w-100 py-3 fw-bold shadow-sm"
                  onClick={() => handleSelect(pkg.name)}
                >
                  Select Package
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
