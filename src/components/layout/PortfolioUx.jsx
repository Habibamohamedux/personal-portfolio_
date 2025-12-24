import React from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioUx.css";

// 1. Import your reusable component
import PortfolioText from "../common/PortfolioText";

// Importing Images
import web01_1 from "../../assets/coding/web01_1.jpg";
import web01_2 from "../../assets/coding/web01_2.jpg";
import web02_1 from "../../assets/coding/web02_1.jpg";
import web02_2 from "../../assets/coding/web02_2.jpg";
import web03_1 from "../../assets/coding/web03_1.jpg";
import web03_2 from "../../assets/coding/web03_2.jpg";

const PortfolioCoding = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "SHAKESPEARE WORLD",
      description: "A fictional website for Shakespeare lovers to explore his world.",
      imgDefault: web01_1,
      imgHover: web01_2,
      tech: "JavaScript",
      path: "/projects/shakespeare"
    },
    {
      id: 2,
      title: "CONSOLE FIX",
      description: "A website that helps fix popular consoles, coded and designed with HTML and CSS.",
      imgDefault: web02_1,
      imgHover: web02_2,
      tech: "HTML • CSS • Design",
      path: "/projects/console-fix"
    },
    {
      id: 3,
      title: "KAAB",
      description: "A luxury Egyptian shoe brand website design.",
      imgDefault: web03_1,
      imgHover: web03_2,
      tech: "UI Design • Branding",
      path: "/projects/kaab"
    }
  ];

  return (
    <section className="coding-section">
      <div className="coding-container">
        
        {/* --- LEFT SIDE: STICKY INFO USING PROPS --- */}
        <div className="coding-text-content">
          <PortfolioText 
            subtitle="UX–UI Design Services"
            title="DESIGNING EXPERIENCES"
            description="Intuitive, user-centered, and visually refined interfaces that bridge the gap between people and digital products. The goal is to make every interaction feel effortless, engaging, and meaningful."
            // Matches the blue gradient you used previously
            btnGradient="linear-gradient(90deg, #1748F4 0%, #230FBC 100%)"
            onBtnClick={() => navigate('/projects/uxui')}
          />
        </div>

        {/* --- RIGHT SIDE: ZIG-ZAG PROJECTS --- */}
        <div className="coding-projects-stack">
          {projects.map((project) => (
            <div key={project.id} className="code-card" onClick={() => navigate(project.path)}>
              
              <div className="browser-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>

              <div className="code-img-wrapper">
                <img 
                  src={project.imgDefault} 
                  alt={project.title} 
                  className="code-img default-view"
                />
                <img 
                  src={project.imgHover} 
                  alt={`${project.title} Detail`} 
                  className="code-img hover-view"
                />
              </div>

              <div className="code-card-overlay">
                <div className="code-card-text">
                  <h4>{project.title}</h4>
                  <span className="code-tech">{project.tech}</span>
                  <p className="code-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioCoding;