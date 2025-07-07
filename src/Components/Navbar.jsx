// Navbar.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-fixed top-0 start-0 w-100 z-3 py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold text-white fs-4" to="/">
          Portfolio.
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={handleToggle}
        >
          <span className="text-white fs-2">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end custom-mobile-menu ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
                <Link className="nav-link text-white" to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/projects" onClick={handleLinkClick}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
