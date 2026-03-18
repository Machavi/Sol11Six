import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="bg-dark text-white min-vh-100 py-5 pt-5">
      <div className="container py-5 mt-4">
        <div
          className="glass-card p-4 p-md-5 border-0 shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <h1 className="fw-bold text-primary mb-2">Privacy Policy</h1>
          <p className="text-white-50 mb-5">Last Updated: March 2026</p>

          <div className="pe-lg-5">
            {/* Section 1: POPIA */}
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                1. Protection of Personal Information (POPIA)
              </h3>
              <p className="text-white-50 ms-4">
                In accordance with the South African Protection of Personal
                Information Act (POPIA), Solution One One Six is committed to
                protecting your privacy. We act as the "Responsible Party" for
                personal information collected through our platform.
              </p>
            </section>

            {/* Section 2: Data Collection */}
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                2. Information We Collect
              </h3>
              <p className="text-white-50 ms-4">
                We collect personal information solely for executing requested
                services, including:
              </p>
              <ul className="text-white-50 ms-4">
                <li className="mb-2">
                  Identity Details (Names, ID numbers) for CIPC/SARS filings.
                </li>
                <li className="mb-2">
                  Contact Details (Email, Phone, Physical Address).
                </li>
                <li className="mb-2">
                  Financial information processed securely via PayFast.
                </li>
              </ul>
            </section>

            {/* Section 3: Third-Party Disclosure - CRITICAL ADDITION */}
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                3. Third-Party Data Sharing
              </h3>
              <p className="text-white-50 ms-4">
                To fulfill our services, we share necessary data with official
                South African regulatory bodies (CIPC, SARS) and our secure
                payment partner (PayFast). We do not sell your data to
                third-party marketers.
              </p>
            </section>

            {/* Section 4: Data Security */}
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                4. Data Security & Storage
              </h3>
              <p className="text-white-50 ms-4">
                We implement industry-standard encryption to protect your
                sensitive legal documents. Data is retained only for as long as
                necessary to complete your business registration or as required
                by South African law.
              </p>
            </section>

            {/* Section 5: Your Rights */}
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                5. Your Rights
              </h3>
              <p className="text-white-50 ms-4">
                Under POPIA, you have the right to access, correct, or request
                the deletion of your personal information held by us. To
                exercise these rights, please contact us via our official
                channels.
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

export default Privacy;
