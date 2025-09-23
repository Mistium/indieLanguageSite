import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          ☰
        </button>
        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={`nav-btn ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            🏠 Home
          </Link>
          <Link
            to="/about"
            className={`nav-btn ${location.pathname === "/about" ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            📖 About
          </Link>
          <Link
            to="/ulang"
            className={`nav-btn ${location.pathname === "/ulang" ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            📦 Ulang
          </Link>
          {/* 🆕 Submit link */}
          <Link
            to="/submit"
            className={`nav-btn ${location.pathname === "/submit" ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ➕ Submit
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        <ThemeToggle />
      </div>
    </nav>
  );
}
