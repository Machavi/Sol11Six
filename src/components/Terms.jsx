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
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <h1 className="fw-bold text-primary mb-2">Terms of Use</h1>
          <p className="text-white-50 mb-5">Last Updated: March 2026</p>

          <div className="pe-lg-5">
            {/* Section 1: Service Accuracy */}
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                1. Service Accuracy & Responsibility
              </h3>
              <p className="text-white-50 ms-4">
                Clients are responsible for providing accurate information for
                all CIPC and SARS filings. Solution One One Six is not liable
                for delays, rejections, or financial loss caused by incorrect
                data provided by the client.
              </p>
            </section>

            {/* Section 2: Private Entity Disclosure - CRITICAL */}
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                2. Non-Affiliation Disclosure
              </h3>
              <p className="text-white-50 ms-4">
                Solution One One Six is a private entity and independent service
                provider. We are not affiliated with, endorsed by, or an
                official arm of the CIPC, SARS, or any government department.
                Our fees include both official government costs and our
                professional service fees.
              </p>
            </section>

            {/* Section 3: Third-Party Turnaround Times */}
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                3. Third-Party Turnaround Times
              </h3>
              <p className="text-white-50 ms-4">
                Processing times for government entities (CIPC/SARS) are beyond
                our control. We cannot guarantee specific turnaround dates for
                third-party regulatory approvals or registration certificates.
              </p>
            </section>

            {/* Section 4: Refund & Cancellation - CRITICAL ADDITION */}
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                4. Refund & Cancellation Policy
              </h3>
              <p className="text-white-50 ms-4">
                Refunds are not available once an application has been lodged
                with the CIPC or SARS, as government filing fees are
                non-refundable. For branding and design services, deposits are
                non-refundable once work has commenced.
              </p>
            </section>

            {/* Section 5: Payment & IP */}
            <section className="mb-5">
              <h3 className="h4 text-white border-start border-primary border-3 ps-3">
                5. Payment & Intellectual Property
              </h3>
              <p className="text-white-50 ms-4">
                Ownership of intellectual property (logos, web designs)
                transfers to the client only upon receipt of full and final
                payment. We reserve the right to suspend services for accounts
                with outstanding balances.
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
