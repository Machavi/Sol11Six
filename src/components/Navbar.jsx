import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Added these imports
import logo from "../assets/logoo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation(); // Track current page
  const isManualScrolling = useRef(false);

  const handleClick = (id) => {
    isManualScrolling.current = true;
    setActiveLink(id);
    setIsOpen(false);

    setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    // Only run intersection observer if we are on the home page
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isManualScrolling.current) return;

      const sections = ["home", "services", "about", "portfolio", "contact"];
      const scrollPos = window.scrollY + 160;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveLink(id);
        }
      });
    };

    const observerOptions = { rootMargin: "-20% 0px -60% 0px", threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      if (isManualScrolling.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    }, observerOptions);

    const sectionIds = ["home", "services", "about", "portfolio", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [location.pathname]); // Re-run if path changes

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "How It Works", href: "/#about", id: "about" },
    { name: "Portfolio", href: "/#portfolio", id: "portfolio" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all navbar-dark ${
        isScrolled ? "nav-scrolled shadow-lg py-1" : "bg-transparent py-3"
      }`}
    >
      <div className="container">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/#home"
          onClick={() => handleClick("home")}
        >
          <img
            src={logo}
            alt="Sol11 Six Logo"
            className="navbar-logo"
            style={{
              height: isScrolled ? "45px" : "60px",
              width: "auto",
              transition: "all 0.3s ease",
            }}
          />
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none p-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} color="#fff" />
          ) : (
            <Menu size={28} color="#fff" />
          )}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <Link
                  className={`nav-link fw-semibold px-3 transition-all ${
                    activeLink === link.id
                      ? "text-primary active fw-bold"
                      : "text-white-50"
                  }`}
                  to={link.href}
                  onClick={() => handleClick(link.id)}
                  style={{
                    borderBottom:
                      activeLink === link.id
                        ? "2px solid #0d6efd"
                        : "2px solid transparent",
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a
                href="https://wa.me/27733112640"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary rounded-pill px-4 shadow-sm fw-bold btn-glow"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .nav-scrolled {
          background: rgba(10, 10, 10, 0.95) !important;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .nav-link:hover { color: #fff !important; }
        @media (max-width: 991px) {
          .navbar-collapse.show {
            background: rgba(15, 15, 15, 0.98) !important;
            padding: 1.5rem; border-radius: 1rem; margin-top: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          }
          .navbar-collapse.show .nav-link {
            color: #fff !important; padding: 12px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05) !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
