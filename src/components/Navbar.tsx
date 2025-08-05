import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle"; // ⬅️ Import the toggle

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" className={`nav-btn ${location.pathname === "/" ? "active" : ""}`}>
          🏠 Home
        </Link>
        <Link to="/about" className={`nav-btn ${location.pathname === "/about" ? "active" : ""}`}>
          📖 About
        </Link>
      </div>
      <ThemeToggle /> {/* ⬅️ Right side toggle */}
    </nav>
  );
}
