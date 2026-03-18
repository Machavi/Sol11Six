import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 border-top border-secondary">
      <div className="container">
        <div className="row align-items-center">
          {/* Copyright Information */}
          <div className="col-lg-4 text-lg-start mb-3 mb-lg-0">
            <p className="mb-0 small opacity-75">
              &copy; {new Date().getFullYear()} Solution 116. All Rights
              Reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="col-lg-4 my-3 my-lg-0">
            <div className="d-flex justify-content-center gap-3">
              {/* Facebook */}
              <a
                className="btn btn-social-icon rounded-circle"
                href="https://www.facebook.com/share/18DL3LnC19/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              {/* X (formerly Twitter) */}
              <a
                className="btn btn-social-icon rounded-circle"
                href="https://x.com/Sol11Six"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              {/* LinkedIn */}
              <a
                className="btn btn-social-icon rounded-circle"
                href="https://www.linkedin.com/company/solution-116/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              {/* TikTok */}
              <a
                className="btn btn-social-icon rounded-circle"
                href="https://www.tiktok.com/@sol11six?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Quick Policy Links */}
          <div className="col-lg-4 text-lg-end">
            <Link to="/privacy" className="footer-link me-3">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .btn-social-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .btn-social-icon:hover {
          color: white;
          border-color: var(--accent-color, #00d2ff);
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.5);
          transform: translateY(-3px);
          background: rgba(0, 210, 255, 0.1);
        }

        .footer-link {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--accent-color, #00d2ff);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
