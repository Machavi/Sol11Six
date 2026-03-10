import React from "react";

const TrustBar = () => {
  // Mock partner names - in a real app, these would be <img> tags
  const partners = [
    "CIPC Protected",
    "SARS Compliant",
    "PayFast Ready",
    "Gov.za",
    "ICASA",
  ];

  return (
    <div className="bg-white py-4 border-bottom">
      <div className="container">
        <p className="text-center text-muted small fw-bold mb-4">
          POWERING COMPLIANCE FOR SOUTH AFRICAN STARTUPS
        </p>
        <div className="row align-items-center justify-content-center g-4 opacity-50">
          {partners.map((partner, index) => (
            <div key={index} className="col-6 col-md-2 text-center">
              <h5 className="fw-bold mb-0">{partner}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
