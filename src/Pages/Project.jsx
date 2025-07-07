// Project.jsx

import "../style/Project.css";
import { motion } from "framer-motion";

const projectData = [
{
  title: "Patwa Bartan - Utensils eCommerce",
  description: "An in-progress React and Firebase-based eCommerce platform for utensils. Features include inventory system, admin/user login, Cloudinary image management, Hindi language UI, and a clean Bootstrap design.",
  stack: ["React", "Firebase", "Cloudinary", "Bootstrap"],
  github: "https://github.com/sarthakp972/patwa-bartan",
  live: "https://patwa-bartan.vercel.app/"
},
    {
    title: "Dice Game",
    description: "A fun and interactive Dice Game built using React. Users select a number, roll the dice, and earn points if the selected number matches the dice roll. Incorrect guesses deduct 2 points.",
    stack: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/sarthakp972/dice-game",
    live: "https://sarthak-dice-game--liart.vercel.app/"
  },
  {
    title: "Navratri Festival - Mekh Cultural Samiti",
    description: "A religious-cultural website featuring real-time notices, photo/video glimpses of events, and donation support to expand the Mekh Durga Utsav Samiti.",
    stack: ["React", "Bootstrap", "Firebase", "Email.js"],
    github: "https://github.com/sarthakp972/mekh-samiti",
    live: "https://mekh-samiti.vercel.app/"
  },
{
  title: "Pahal EMI Management System",
  description: "A React and Firebase-based system to track daily EMI payments, customer records, and collection summaries in real-time.",
  stack: ["React", "Firebase"],
  github: "https://github.com/sarthakp972/emi-management-system",
  live: "https://pahal-emi-management-system.vercel.app/"
},
{
  title: "Currency Converter",
  description: "A simple and responsive currency converter built with React and Bootstrap. Converts between major international currencies in real-time with a clean and user-friendly UI.",
  stack: ["React", "Bootstrap"],
  github: "https://github.com/sarthakp972/currency-converter",
  live: "https://currency-converter-eosin-seven.vercel.app/"
},
{
  title: "Weather App",
  description: "A sleek and responsive weather application built with React and Tailwind CSS. It fetches real-time weather data and displays temperature, humidity, and conditions based on user input.",
  stack: ["React", "Tailwind CSS"],
  github: "https://github.com/sarthakp972/weather",
  live: "https://weather-three-sooty.vercel.app/"
},
{
  title: "Basic Calculator",
  description: "A simple and functional calculator built using HTML, CSS, and JavaScript. Supports basic arithmetic operations with a clean UI.",
  stack: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/sarthakp972/New-Calculator",
  live: "https://new-calculator-mqcs.vercel.app/"
},
{
  title: "Multi User Blog",
  description: "A Django-powered blog platform where authenticated users can post, share, and read blogs and thoughts. Includes user login, post creation, and a clean UI using HTML, CSS, and JavaScript.",
  stack: ["Django", "HTML", "CSS", "JavaScript", "Render"],
  github: "https://github.com/sarthakp972/myblog",
  live: ""

},
{
  title: "Puma-style eCommerce Website",
  description: "A dynamic eCommerce website inspired by Puma, built using HTML, CSS, JavaScript, Ajax, jQuery, PHP, and SQL. Features include product listings, cart system, and interactive UI.",
  stack: ["HTML", "CSS", "JavaScript", "Ajax", "jQuery", "PHP", "SQL"],
  github: "https://github.com/sarthakp972/puma",
  live: ""
},
{
  title: "Real-Time News Search App",
  description: "A real-time news application built using HTML, CSS, JavaScript, and an external News API. Users can search and view the latest news articles instantly.",
  stack: ["HTML", "CSS", "JavaScript", "API"],
  github: "https://github.com/sarthakp972/News-Search-app-JavaScript",
  live: ""
},
{
  title: "Word Length Tool",
  description: "A React-based text manipulation tool to calculate word and character lengths. Built with Tailwind CSS for a clean and responsive UI.",
  stack: ["React", "Tailwind CSS"],
  github: "https://github.com/sarthakp972/wordLength",
  live: "https://word-length.vercel.app/"
},
{
  title: "Full-Stack Login & Signup System",
  description: "A full-stack authentication system built with Django and Django REST Framework. Features include user registration, login, session handling, and a frontend using HTML, CSS, and JavaScript with SQLite as the database.",
  stack: ["Django", "Django REST Framework", "HTML", "CSS", "JavaScript", "SQLite"],
  github: "https://github.com/sarthakp972/Full-stack-login-signup-django",
  live: ""
},
{
  title: "PHP User Authentication System",
  description: "A complete user authentication and management system built using PHP, SQL, HTML, CSS, and JavaScript. Features include user registration, login, forgot password, and session handling.",
  stack: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  github: "https://github.com/sarthakp972/PHP-User-Authentication-and-Management",
  live: ""
},











];

export default function Project() {
  return (
    <section className="project-section" id="projects">
      <div className="project-overlay"></div>
      <div className="container project-content py-5">
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#ffc107' }}>Projects</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text mb-2">{project.description}</p>
                    <div className="mb-3">
                      {project.stack && (
                        <div className="tech-stack">
                          {project.stack.map((tech, idx) => (
                            <span key={idx} className="badge bg-warning text-dark me-2">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark me-2"
                      >
                        GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-warning"
                        >
                          Live Preview
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}