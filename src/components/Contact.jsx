import React, { useState, useEffect } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (
      result &&
      !result.includes("Successfully") &&
      result !== "Sending...."
    ) {
      const timer = setTimeout(() => setResult(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // 1. THE HONEYPOT CHECK
    // If 'bot_field' has any value, it's a bot. Humans can't see/fill it.
    if (formData.get("bot_field")) {
      setResult("Message Sent Successfully!"); // Fake success to trick the bot
      event.target.reset();
      return;
    }

    setResult("Sending....");
    setIsSending(true);

    // Web3Forms Access Key
    formData.append("access_key", "04eccebd-e511-4a1c-832a-6f5ca59bf50b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResult("Network error. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-5 border-top border-secondary">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="zoom-in">
            <div className="glass-card p-4 p-md-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-white display-6 text-uppercase tracking-wider">
                  Get Started
                </h2>
                <p className="text-white-50">
                  Ready to scale your vision? Let's discuss your next move.
                </p>
              </div>

              {result === "Message Sent Successfully!" ? (
                <div className="success-glow text-center py-5">
                  <div className="mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="#2ecc71"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <h3 className="fw-bold text-white">Application Received</h3>
                  <p className="text-white-50">
                    We'll contact you shortly regarding your business inquiry.
                  </p>
                  <button
                    onClick={() => setResult("")}
                    className="btn btn-outline-primary btn-sm rounded-pill mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <div className="row g-4 text-start">
                    {/* 2. THE HONEYPOT FIELD (Hidden from humans) */}
                    <input
                      type="text"
                      name="bot_field"
                      style={{ display: "none" }}
                      tabIndex="-1"
                      autoComplete="off"
                    />

                    <div className="col-md-6">
                      <label className="text-white-50 small mb-2 fw-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control custom-input"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text-white-50 small mb-2 fw-semibold">
                        Cellphone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control custom-input"
                        placeholder="071 234 5678"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="text-white-50 small mb-2 fw-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control custom-input"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="text-white-50 small mb-2 fw-semibold">
                        Interested Service
                      </label>
                      <select
                        name="service"
                        className="form-select custom-input"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          — Please Select a Service —
                        </option>
                        <option value="CIPC & SARS">
                          CIPC & SARS Compliance
                        </option>
                        <option value="Web design">Websites & eCommerce</option>
                        <option value="Visual Branding">
                          Graphic Design & Branding
                        </option>
                        <option value="Other">
                          Other Inquiry / Full Package
                        </option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="text-white-50 small mb-2 fw-semibold">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        className="form-control custom-input rounded-4"
                        placeholder="How can we help you grow?"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12 mt-4 text-center">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="btn btn-primary w-100 rounded-pill py-3 fw-bold btn-glow text-uppercase"
                      >
                        {isSending ? "Processing..." : "Let's Get Started"}
                      </button>
                      {result && (
                        <div className="mt-3 text-info small fw-bold">
                          {result}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-input {
          background-color: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: white !important;
          padding: 12px 20px;
          border-radius: 50px;
        }
        .custom-input:focus {
          background-color: rgba(255, 255, 255, 0.07) !important;
          border-color: var(--accent-color, #00d2ff) !important;
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.3);
        }
        .form-select option {
          background: #1a1a1a;
          color: white;
        }
        .btn-glow {
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.4);
          transition: all 0.3s ease;
        }
        .btn-glow:hover:not(:disabled) {
          box-shadow: 0 0 25px rgba(0, 210, 255, 0.7);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Contact;
