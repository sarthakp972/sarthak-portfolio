import React from "react";
import "../style/HomeHero.css";
import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <div className="hero-section" id="home">
      <div className="overlay">
        <div className="hero-content text-white text-center">
         <h5 className="fw-light">React | JavaScript | Firebase | Django | HTML & CSS | Agile</h5>
<h1 className="fw-bold display-5">
  Looking for opportunities to learn, build, and make a difference in a collaborative environment.
</h1>
          <div className="hero-buttons mt-4">
            <a >
                <Link  className="btn btn-warning me-3 px-4 py-2" to="/projects" >
                              Projects
                            </Link>
             
            </a>
          



            <Link to="/contact" className="btn btn-outline-light px-4 py-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
