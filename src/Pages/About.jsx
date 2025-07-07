// About.jsx
import React from "react";
import "../style/About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="lead">
              I'm <strong>Sarthak Patwa</strong>, a recent B.Tech graduate in Computer Science Engineering from RGPV, Madhya Pradesh with a CGPA of 8.57. During my academic journey, I cultivated a strong foundation in web development through certifications, internship experience, and real-world projects.
            </p>

            <h4 className="text-warning mt-4">Technical Skills</h4>
            <ul className="list-unstyled">
              <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS, Shadcn UI, jQuery, AJAX, API</li>
              <li><strong>Backend:</strong> Django, Django Rest Framework</li>
              <li><strong>Other Tools:</strong> Git, Agile, Version Control, Code Formatting, Team Collaboration</li>
            </ul>

            <h4 className="text-warning mt-4">Internship</h4>
            <p>
              <strong>Web Development Intern</strong> at Konnections India, Mumbai <br />
              <em>Duration:</em> Jan 2024 – May 2024 <br />
              Gained hands-on experience with production environments, real-world development practices, payment gateway integration, and agile-based team collaboration.
            </p>

            <h4 className="text-warning mt-4">Certifications</h4>
            <ul className="list-unstyled">
              <li>✅ Advanced Java Programming – Anudip Foundation (Oct–Nov 2024)</li>
              <li>✅ Frontend Development Training – Skystar Software (Aug 2023)</li>
              <li>✅ AI Tools Workshop – Skill Nation (Dec 2024)</li>
              <li>✅ Certificates in JavaScript, C++, HTML & CSS – Great Learning</li>
            </ul>

            <div className="mt-4 d-flex gap-3 flex-wrap">
  <Link to="/contact" className="btn btn-warning px-4 py-2 rounded-pill">
    Contact Me
  </Link>

  <a
    href="/Sarthak-Resume-CV-2025.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline-warning px-4 py-2 rounded-pill"
  >
    Download My CV
  </a>
</div>

            
          </div>
        </div>
      </div>
    </section>
  );
}