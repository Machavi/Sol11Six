import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="bg-dark text-white min-vh-100 py-5 pt-5">
      <div className="container py-5 mt-4">
        <div
          className="glass-card p-4 p-md-5 border-0 shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
          }}
        >
          <h1 className="fw-bold text-primary mb-2">Terms of Use</h1>
          <p className="text-white-50 mb-5">Last Updated: March 2026</p>

          <div className="pe-lg-5">
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                1. Service Accuracy
              </h3>
              <p className="text-white-50 ms-4">
                Clients are responsible for providing accurate information for
                all CIPC and SARS filings. Solution One One Six is not liable
                for delays or rejections caused by incorrect data provided by
                the client.
              </p>
            </section>

            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                2. Third-Party Turnaround Times
              </h3>
              <p className="text-white-50 ms-4">
                While we strive for speed, processing times for government
                entities (CIPC/SARS/ICASA) are beyond our control. We cannot
                guarantee specific turnaround dates for third-party regulatory
                approvals or registration certificates.
              </p>
            </section>

            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                3. Payment & Delivery
              </h3>
              <p className="text-white-50 ms-4">
                For branding and web design services, a 50% deposit is required
                to begin work. Ownership of intellectual property transfers to
                the client only upon receipt of full and final payment.
              </p>
            </section>
          </div>

          <Link
            to="/"
            className="btn btn-outline-primary rounded-pill px-4 mt-4"
          >
            <i className="bi bi-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
