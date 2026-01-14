import React, { useRef } from "react";
import "../style/contact.css";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // If EmailJS keys missing
  if (!serviceID || !templateID || !publicKey) {
    alert(
    "This  service is temporarily unavailable due to technical/server issues.\n\n 🙏 Thank you for trying to reach out! \n\n👉 Please reach out to me via:\n\n📧 Email: sarthakpatwa7649@gmail.com\n📱 WhatsApp: 7649062706\n\n💬 Please write: 'I reached out via your portfolio'"
    );
    return;
  }

  emailjs
    .sendForm(serviceID, templateID, form.current, publicKey)
    .then(
      () => {
        alert(
          "Your message has been submitted successfully 🎉\n\nHowever Email service may be delayed.\n\n👉 You can also directly ping me at:\n📧 Email: sarthakpatwa7649@gmail.com\n📱 WhatsApp: 7649062706\n\n💬 Please mention: 'I reached out via your portfolio website'"
        );
        e.target.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
   alert(
    "This  service is temporarily unavailable due to technical/server issues.\n\n 🙏 Thank you for trying to reach out! \n👉 Please reach out to me via:\n\n📧 Email: sarthakpatwa7649@gmail.com\n📱 WhatsApp: 7649062706\n\n💬 Please write: 'I reached out via your portfolio'"
    );
      }
    );
};


  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-warning">Contact Me</h2>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <form ref={form} onSubmit={sendEmail} className="contact-form shadow p-4 rounded bg-dark text-white">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="user_name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="user_email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" rows="4" placeholder="Write your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-100">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 text-white">
            <div className="contact-info bg-dark p-4 rounded shadow h-100">
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                  <FaGithub className="me-3 fs-4 text-warning" />
                  <a href="https://github.com/sarthakp972" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                    github.com/sarthakp972
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaLinkedin className="me-3 fs-4 text-warning" />
                  <a href="https://www.linkedin.com/in/sarthak-patwa-050b62270" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                    linkedin.com/in/sarthak-patwa
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaWhatsapp className="me-3 fs-4 text-warning" />
                  <a href="https://wa.me/917649062706" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
                    +91 76490 62706 (WhatsApp)
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaEnvelope className="me-3 fs-4 text-warning" />
                  <a href="mailto:sarthakpatwa7649@gmail.com" className="text-white text-decoration-none">
                    sarthakpatwa7649@gmail.com
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaPhone className="me-3 fs-4 text-warning" />
                  <span>+91 76490 62706</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}