import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();
  const navRefs = useRef([]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Product" },
    { path: "/feedback", label: "Feedback" },
    { path: "/Login", label: "Login" },
  ];

  return (
    <>
      <nav className="bg-black/95 backdrop-blur-sm text-white font-heading px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-3xl font-extrabold text-orange-500 group-hover:text-orange-400 transition-colors">
              L
            </span>
            <span className="text-xl font-semibold tracking-wide group-hover:text-orange-400 transition-colors">
              ogo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center relative">
            {/* ✅ Animated Sliding Underline */}
            <span
              className="absolute -bottom-1 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ease-out"
              style={{
                width: hoveredLink !== null ? navRefs.current[hoveredLink]?.offsetWidth || 0 : navRefs.current[0]?.offsetWidth || 0,
                transform: hoveredLink !== null 
                  ? `translateX(${navRefs.current[hoveredLink]?.offsetLeft || 0}px)` 
                  : `translateX(${navRefs.current[0]?.offsetLeft || 0}px)`,
                opacity: 1,
              }}
            ></span>

            {navLinks.map((link, index) => (
              <li key={link.path} ref={el => navRefs.current[index] = el}>
                <Link
                  to={link.path}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`
                    relative text-sm font-medium tracking-wide transition-colors duration-300
                    ${
                      location.pathname === link.path
                        ? "text-orange-500"
                        : "text-white hover:text-orange-400"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-orange-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <ul className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      block text-sm font-medium tracking-wide transition-colors
                      ${
                        location.pathname === link.path
                          ? "text-orange-500"
                          : "text-white hover:text-orange-400"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}