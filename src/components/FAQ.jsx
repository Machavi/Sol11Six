import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How long does CIPC registration take?",
    a: "Typically 1-3 business days once all documents are submitted.",
  },
  {
    q: "What documents do I need for a SARS Tax PIN?",
    a: "You will need IDs for all directors and proof of company address.",
  },
  {
    q: "Can I get a custom flyer design today?",
    a: "Yes! Our express design service delivers within 24 hours.",
  },
];

const FAQ = ({ open, toggle }) => {
  return (
    <section id="faq" className="py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold text-white">Common Questions</h2>
          <p className="text-white-50">
            Quick answers to help you get started.
          </p>
        </div>

        <div className="col-lg-8 mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card mb-3 p-0 overflow-hidden"
              style={{ textAlign: "left", alignItems: "flex-start" }}
            >
              <button
                className="w-100 p-4 border-0 bg-transparent text-white d-flex justify-content-between align-items-center shadow-none"
                onClick={() => toggle(i)}
              >
                <span className="fw-bold">{faq.q}</span>
                {open === i ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-white-50" />
                )}
              </button>

              <div
                style={{
                  maxHeight: open === i ? "200px" : "0",
                  transition: "all 0.3s ease-in-out",
                  overflow: "hidden",
                }}
              >
                <div className="p-4 pt-0 text-white-50">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
