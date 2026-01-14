import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import SplashScreen from "./SplashScreen";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (path) => {
    setIsMenuOpen(false);
    setShowSplash(true);

    setTimeout(() => {
      setShowSplash(false);
      navigate(path);
    }, 2000);
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-fixed top-0 start-0 w-100 z-3 py-3">
      <div className="container">

        <button
          className="navbar-brand fw-bold fs-4 text-white bg-transparent border-0"
          onClick={() => handleNavClick("/")}
        >
          <span className="text-warning">sarthak</span>
          <span className="text-white">-Portfolio.</span>
        </button>

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
          className={`collapse navbar-collapse justify-content-end custom-mobile-menu ${isMenuOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav gap-3">

            <li className="nav-item">
              <button className="nav-link text-white bg-transparent border-0"
                onClick={() => handleNavClick("/")}>
                Home
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link text-white bg-transparent border-0"
                onClick={() => handleNavClick("/projects")}>
                Projects
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link text-white bg-transparent border-0"
                onClick={() => handleNavClick("/about")}>
                About
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link text-white bg-transparent border-0"
                onClick={() => handleNavClick("/contact")}>
                Contact
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
