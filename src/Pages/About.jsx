import React from "react";
import "../style/About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-section py-5" id="about">
      <div className="container fade-in">
        <h2 className="text-center fw-bold mb-5 glow-text">About Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-10 slide-up">

            <p className="lead">
              I’m <strong>Sarthak Patwa</strong>, a Full-Stack Developer with proven experience in
              React.js, Python, JavaScript, Django, and SQL. I specialize in building scalable,
              secure, and high-performance web applications.
            </p>

            <p className="lead">
              I have worked in real industry environments during my internships at
              <strong> Konnections India</strong> and <strong>Doqfy Internet Pvt. Ltd.</strong>,
              where I built production-grade systems involving backend architecture design,
              REST APIs, JWT authentication, database modeling, and real-time multi-role workflows.
              My experience is **industry-level**, not just academic.
            </p>

            <p className="lead">
              Along with internships, I also actively work as a <strong>freelancer</strong>.
              I have completed multiple freelance projects — you can explore them in my
              <strong> Projects section</strong>.
            </p>

            <h4 className="section-title mt-4">Core Competencies</h4>
            <ul className="list-unstyled">
              <li><strong>Languages:</strong> Python, JavaScript (ES6+), C++, HTML5, CSS3</li>
              <li><strong>Frameworks / Libraries:</strong> Django, React.js, Redux, Next.js, Django REST Framework, jQuery, Tailwind CSS, Bootstrap</li>
              <li><strong>Databases & Cloud:</strong> SQL, AWS (S3, SES), Firebase, Cloudinary</li>
              <li><strong>Tools:</strong> Git & GitHub, Postman, Jira, Vercel</li>
              <li><strong>Core Areas:</strong> REST APIs, Authentication, CRUD operations, MVC/MVT, Database design, Agile methodology</li>
            </ul>

            <h4 className="section-title mt-4">Education</h4>
            <p className="lead">
              B.Tech in Computer Science Engineering (Oct 2021 – June 2025) <br />
              Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Madhya Pradesh <br />
              <strong>CGPA:</strong> 8.57
            </p>

            {/* <h4 className="section-title mt-4">Location</h4>
            <p className="lead">
              Currently living in <strong>Pune, Maharashtra</strong> <br />
              Originally from <strong>Jabalpur, Madhya Pradesh</strong>
            </p> */}

            <div className="mt-4 d-flex gap-3 flex-wrap button-animate">
              <Link to="/contact" className="btn btn-warning px-4 py-2 rounded-pill">
                Contact Me
              </Link>

              <a
                href="/Sarthak_Patwa_FullStack_Developer_2026.pdf"
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
