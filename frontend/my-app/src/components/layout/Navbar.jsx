import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearSession, getCurrentUser, isAuthenticated } from "../../utils/auth";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [connected, setConnected] = useState(isAuthenticated());
  const [user, setUser] = useState(getCurrentUser());
  const location = useLocation();
  const navigate = useNavigate();
  const navRefs = useRef([]);

  useEffect(() => {
    const syncAuth = () => {
      setConnected(isAuthenticated());
      setUser(getCurrentUser());
    };
    syncAuth();
    window.addEventListener("auth-changed", syncAuth);
    window.addEventListener("storage", syncAuth);
    return () => {
      window.removeEventListener("auth-changed", syncAuth);
      window.removeEventListener("storage", syncAuth);
    };
  }, []);

  const handleLogout = () => {
    clearSession();
    setIsMobileMenuOpen(false);
    navigate("/login");
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Product" },
    { path: "/feedback", label: "Feedback" },
    ...(connected ? [{ path: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <>
      <nav className="bg-black/95 backdrop-blur-sm text-white font-heading px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-3xl font-extrabold text-orange-500 group-hover:text-orange-400 transition-colors">
              L
            </span>
            <span className="text-xl font-semibold tracking-wide group-hover:text-orange-400 transition-colors">
              ogo
            </span>
          </Link>

          <ul className="hidden md:flex gap-8 items-center relative">
            <span
              className="absolute -bottom-1 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ease-out"
              style={{
                width:
                  hoveredLink !== null
                    ? navRefs.current[hoveredLink]?.offsetWidth || 0
                    : 0,
                transform:
                  hoveredLink !== null
                    ? `translateX(${navRefs.current[hoveredLink]?.offsetLeft || 0}px)`
                    : "translateX(0px)",
                opacity: hoveredLink !== null ? 1 : 0,
              }}
            ></span>

            {connected && user && (
              <li className="text-sm text-gray-300">
                {user.firstname} {user.lastname}
              </li>
            )}

            {navLinks.map((link, index) => (
              <li key={link.path} ref={(el) => (navRefs.current[index] = el)}>
                <Link
                  to={link.path}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-orange-500"
                      : "text-white hover:text-orange-400"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {connected ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium tracking-wide text-white hover:text-orange-400 transition-colors duration-300"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                    location.pathname.toLowerCase() === "/login"
                      ? "text-orange-500"
                      : "text-white hover:text-orange-400"
                  }`}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>

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

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <ul className="flex flex-col gap-4 pt-4">
              {connected && user && (
                <li className="text-sm text-gray-300">
                  {user.firstname} {user.lastname}
                </li>
              )}

              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-sm font-medium tracking-wide transition-colors ${
                      location.pathname === link.path
                        ? "text-orange-500"
                        : "text-white hover:text-orange-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {connected ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block text-sm font-medium tracking-wide text-white hover:text-orange-400 transition-colors"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-sm font-medium tracking-wide transition-colors ${
                      location.pathname.toLowerCase() === "/login"
                        ? "text-orange-500"
                        : "text-white hover:text-orange-400"
                    }`}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
