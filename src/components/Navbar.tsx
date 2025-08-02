import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={`nav-btn ${location.pathname === "/" ? "active" : ""}`}>
        🏠 Home
      </Link>
      <Link to="/about" className={`nav-btn ${location.pathname === "/about" ? "active" : ""}`}>
        📖 About
      </Link>
    </nav>
  );
}
