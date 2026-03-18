import React from "react";
// Import your local assets
import cipcLogo from "../assets/cipc.png";
import sarsLogo from "../assets/sars.png";
import payfastLogo from "../assets/payfast.png";
import dtiLogo from "../assets/dti.png";
import popiaLogo from "../assets/popia.png";

const TrustBar = () => {
  const partners = [
    { name: "CIPC", logo: cipcLogo },
    { name: "SARS", logo: sarsLogo },
    { name: "PayFast", logo: payfastLogo },
    { name: "Gov.za", logo: dtiLogo },
    { name: "POPIA", logo: popiaLogo },
  ];

  return (
    <div
      className="py-5 border-top border-bottom"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container">
        {/* Descriptive Label */}
        <p className="text-center text-white-50 small fw-bold mb-5 text-uppercase tracking-wider">
          Facilitating Compliance with South African Regulatory Standards
        </p>

        {/* Logo Grid */}
        <div className="row align-items-center justify-content-center g-4 g-md-5">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="col-6 col-md-2 d-flex justify-content-center"
            >
              <div className="logo-wrapper">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="img-fluid trust-logo"
                  style={{
                    /* LOGIC: If it's POPIA (already white), just dim it. 
                       If it's others (dark assets), invert them to make them white.
                    */
                    filter:
                      partner.name === "POPIA"
                        ? "grayscale(100%) brightness(1.5)"
                        : "grayscale(100%) invert(1) brightness(1.8)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Refined Legal Disclaimer Section */}
        <div className="mt-5 pt-4 border-top border-secondary">
          <div className="container" style={{ maxWidth: "900px" }}>
            <p
              className="text-center text-white-50 mb-0"
              style={{
                fontSize: "0.75rem",
                lineHeight: "1.7",
                letterSpacing: "0.01em",
              }}
            >
              <strong className="text-white">Legal Disclaimer:</strong> Sol11Six
              is a private entity and an independent service provider. We are
              not affiliated with, endorsed by, or an official arm of the CIPC,
              SARS, or any government department. All logos, trademarks, and
              registered names used on this site are the property of their
              respective owners and are used here for identification and
              informational purposes only.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .logo-wrapper {
          width: 140px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .trust-logo {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
          opacity: 0.6;
          transition: all 0.4s ease;
        }

        .trust-logo:hover {
          /* Reset everything on hover to show original colors */
          filter: grayscale(0%) invert(0%) brightness(100%) !important;
          opacity: 1 !important;
          transform: scale(1.1);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .logo-wrapper {
            width: 100px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
