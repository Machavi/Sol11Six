import React from "react";
import { ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

const Trust = () => {
  return (
    <section className="bg-white py-5 border-top border-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h2 className="fw-bold mb-4">
              Your business, <span className="text-primary">Our Priority.</span>
            </h2>
            <p className="text-muted mb-4">
              We understand the complexities of South African compliance. Our
              mission is to strip away the red tape so you can focus on what you
              do best: growing your company.
            </p>

            {/* Trust Items */}
            <div className="d-flex mb-3">
              <div className="me-3">
                <ShieldCheck className="text-primary" size={28} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Secure Data Handling</h6>
                <p className="small text-muted mb-0">
                  Your information is encrypted and handled with privacy.
                </p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <div className="me-3">
                <Zap className="text-primary" size={28} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Fast Turnaround</h6>
                <p className="small text-muted mb-0">
                  Most applications processed within 24-48 working hours.
                </p>
              </div>
            </div>

            <div className="d-flex mb-4">
              <div className="me-3">
                <CheckCircle2 className="text-primary" size={28} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Expert Support</h6>
                <p className="small text-muted mb-0">
                  Dedicated consultants for all your registration needs.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Box */}
          <div className="col-lg-5">
            <div className="p-5 bg-light rounded border shadow-sm text-center">
              <h3 className="fw-bold text-dark mb-3">100+</h3>
              <p className="text-secondary mb-4">
                South African Businesses Registered This Year
              </p>
              <hr className="w-25 mx-auto" />
              <p className="fst-italic text-muted">
                "The fastest way to get your Tax Clearance PIN."
              </p>
              <p className="fw-bold mb-0">- Happy Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
