import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll to top behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary rounded-circle shadow-lg position-fixed d-flex align-items-center justify-content-center"
          style={{
            bottom: "90px", // Higher than the WhatsApp button
            right: "20px",
            width: "45px",
            height: "45px",
            zIndex: "1000",
            transition: "all 0.3s ease",
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      <style>{`
        .scroll-to-top button:hover {
          transform: translateY(-5px);
          background-color: #00d2ff;
          border-color: #00d2ff;
        }
      `}</style>
    </div>
  );
};

export default ScrollToTop;
