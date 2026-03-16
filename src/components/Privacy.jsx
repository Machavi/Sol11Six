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
          }}
        >
          <h1 className="fw-bold text-primary mb-2">Privacy Policy</h1>
          <p className="text-white-50 mb-5">Last Updated: March 2026</p>

          <div className="pe-lg-5">
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                1. Protection of Personal Information (POPIA)
              </h3>
              <p className="text-white-50 ms-4">
                In accordance with the South African Protection of Personal
                Information Act (POPIA), Solution One One Six is committed to
                protecting your privacy. We collect personal information such as
                ID numbers, addresses, and financial data solely for the purpose
                of business registration and branding services.
              </p>
            </section>

            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                2. Data Collection
              </h3>
              <p className="text-white-50 ms-4">
                We collect information when you fill out our "Get Started" form
                or engage with us for:
              </p>
              <ul className="text-white-50 ms-4">
                <li className="mb-2">CIPC Company Registrations</li>
                <li className="mb-2">SARS Tax Clearances & Compliance</li>
                <li className="mb-2">Web Design & Visual Branding Projects</li>
              </ul>
            </section>

            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                3. Data Security
              </h3>
              <p className="text-white-50 ms-4">
                We implement industry-standard encryption to protect your
                sensitive legal documents. Your data is stored securely and
                accessed only by authorized personnel strictly for executing
                your requested services.
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
