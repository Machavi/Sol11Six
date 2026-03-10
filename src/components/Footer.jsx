import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Copyright Information */}
          <div className="col-lg-4 text-lg-start mb-3 mb-lg-0">
            <p className="mb-0 small opacity-75">
              &copy; {new Date().getFullYear()} Solution 116. All Rights
              Reserved.
            </p>
          </div>

          {/* Social Links (Using Bootstrap Icons) */}
          <div className="col-lg-4 my-3 my-lg-0">
            <div className="d-flex justify-content-center gap-3">
              <a
                className="btn btn-dark btn-social rounded-circle border-secondary"
                href="#!"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                className="btn btn-dark btn-social rounded-circle border-secondary"
                href="#!"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                className="btn btn-dark btn-social rounded-circle border-secondary"
                href="#!"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Policy Links */}
          <div className="col-lg-4 text-lg-end">
            <a
              className="link-light text-decoration-none me-3 small opacity-75"
              href="#!"
            >
              Privacy Policy
            </a>
            <a
              className="link-light text-decoration-none small opacity-75"
              href="#!"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
