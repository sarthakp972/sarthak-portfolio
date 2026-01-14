import React from "react";
import "../style/HomeHero.css";
import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <div className="hero-section" id="home">
      <div className="overlay">
        <div className="hero-content text-white text-center">
          <h5 className="fw-light skills">
            React.js | Next.js | JavaScript | Firebase | Django & DRF | HTML & CSS | Media Handling via Cloudinary | and many more
          </h5>

          <h1 className="fw-bold display-5">
            Looking for opportunities to learn, build, and make a difference in a collaborative environment.
          </h1>

          {/* Freelance & Industry Highlights */}
          <div className="hero-highlights my-3">
            <span className="badge bg-warning text-dark me-2">Freelance Projects ✅</span>
            <span className="badge bg-success text-dark me-2">Industry-Level Apps 🏢</span>
            <span className="badge bg-primary text-white me-2">Client-Focused Solutions 💻</span>
            <span className="badge" style={{backgroundColor: "#FF6F61", color: "#fff"}}>International Clients 🌍</span>
          </div>

          {/* Stats */}
          <div className="hero-stats my-3 text-white">
            <span className="me-3">10+ Projects Completed</span>
            <span className="me-3">500+ Hours Coding</span>
            <span>Happy Clients</span>
          </div>

          {/* Special Offer / Contact Message */}
          <div className="hero-offer my-4 p-3 rounded shadow-lg" style={{backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
            <h5>📣 Special Offer This Month!</h5>
            <p className="mb-0">
              Contact now and get a special discount! Pricing is flexible and negotiable depending on your project scope.
            </p>
          </div>

          {/* Buttons */}
          <div className="hero-buttons mt-4">
            <Link className="btn btn-warning me-3 px-4 py-2" to="/projects">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-outline-light px-4 py-2">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
