import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Your activated Web3Forms Access Key
    formData.append("access_key", "04eccebd-e511-4a1c-832a-6f5ca59bf50b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset(); // Clears the form fields
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("Network error. Please check your internet connection.");
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="zoom-in">
            <div className="glass-card p-5 border-0 shadow-lg">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-white display-6">Get Started</h2>
                <p className="text-white-50">
                  Ready to scale your business? Let's talk.
                </p>
              </div>

              <form onSubmit={onSubmit}>
                <div className="row g-3">
                  {/* Row 1: Name and Cellphone side-by-side */}
                  <div className="col-md-6">
                    <label className="text-white-50 small mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-transparent text-white border-secondary rounded-pill py-2"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="text-white-50 small mb-2">
                      Cellphone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control bg-transparent text-white border-secondary rounded-pill py-2"
                      placeholder="071 234 5678"
                      required
                    />
                  </div>

                  {/* Row 2: Email taking full width */}
                  <div className="col-12">
                    <label className="text-white-50 small mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-transparent text-white border-secondary rounded-pill py-2"
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  {/* Row 3: Service Selection */}
                  <div className="col-12">
                    <label className="text-white-50 small mb-2">
                      Interested Service
                    </label>
                    <select
                      name="service"
                      className="form-select bg-dark text-white border-secondary rounded-pill py-2"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        — Please Select a Service —
                      </option>
                      <option value="CIPC & Fintech">
                        CIPC & SARS compliance
                      </option>
                      <option value="Web design">Websites & eCommerce</option>
                      <option value="Visual Branding">
                        Graphic Design & Branding
                      </option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div className="col-12">
                    <label className="text-white-50 small mb-2">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      className="form-control bg-transparent text-white border-secondary rounded-4"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  {/* Row 5: Submit Button */}
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 rounded-pill py-3 fw-bold"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <span className="text-center d-block mt-3 text-white-50">
                {result}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .form-control:focus, .form-select:focus {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: #00d2ff;
          box-shadow: none;
          color: white;
        }
        .form-select option {
          background: #1a1a1a;
          color: white;
        }
        .form-select option:disabled {
          color: #6c757d;
        }
        /* Mobile adjustment for padding */
        @media (max-width: 768px) {
          .glass-card { padding: 2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
