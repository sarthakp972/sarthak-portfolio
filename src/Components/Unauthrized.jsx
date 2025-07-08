// Unauthrized.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../style/Unauthrized.css";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Unauthrized() {
  return (
    <section className="unauth-page d-flex align-items-center justify-content-center text-center">
      <div className="unauth-box p-5 rounded shadow">
        <FaExclamationTriangle className="text-warning display-1 mb-3" />
        <h1 className="text-white mb-3 fw-bold">404 - Page Not Found</h1>
        <p className="text-secondary mb-4">Oops! The page you are looking for does not exist or is restricted.</p>
        <Link to="/" className="btn btn-warning px-4 py-2 rounded-pill fw-bold">
          Go to Home Page
        </Link>
      </div>
    </section>
  );
}
