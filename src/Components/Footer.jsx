// Footer.jsx
import React from "react";
import "../style/Footer.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://github.com/sarthakp972" target="_blank" rel="noreferrer" className="footer-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sarthak-patwa-050b62270" target="_blank" rel="noreferrer" className="footer-icon">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/917649062706" target="_blank" rel="noreferrer" className="footer-icon">
            <FaWhatsapp />
          </a>
          <a href="mailto:sarthakpatwa7649@gmail.com" className="footer-icon">
            <FaEnvelope />
          </a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} Sarthak Patwa. All rights reserved.</p>
      </div>
    </footer>
  );
}
