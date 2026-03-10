import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // This ref stops the "highlight" from jumping while scrolling to a clicked section
  const isManualScrolling = useRef(false);

  const handleClick = (id) => {
    isManualScrolling.current = true;
    setActiveLink(id);
    setIsOpen(false);

    // Release the lock after 1 second (after scroll finishes)
    setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

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

    const observerOptions = {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isManualScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
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
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "How It Works", href: "#about", id: "about" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all ${isScrolled ? "bg-white shadow-sm py-2" : "bg-transparent py-3"}`}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold text-primary"
          href="#home"
          onClick={() => handleClick("home")}
        >
          Sol11<span className="text-dark">Six</span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  className={`nav-link fw-semibold px-3 transition-all ${activeLink === link.id ? "text-primary active fw-bold" : "text-dark"}`}
                  href={link.href}
                  onClick={() => handleClick(link.id)}
                  style={{
                    borderBottom:
                      activeLink === link.id
                        ? "2px solid #0d6efd"
                        : "2px solid transparent",
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a
                href="https://wa.me/27793752769"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary rounded-pill px-4 shadow-sm fw-bold"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
