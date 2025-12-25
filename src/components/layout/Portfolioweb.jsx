import React from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolioweb.css";

// 1. Import Reusable Component
import PortfolioText from "../common/PortfolioText";

// 2. Import Images
import web04_1 from "../../assets/coding/web04_1.jpg";
import web04_2 from "../../assets/coding/web04_2.jpg";
import web05_1 from "../../assets/coding/web05_1.jpg";
import web05_2 from "../../assets/coding/web05_2.jpg";
import web06_1 from "../../assets/coding/web06_1.jpg";
import web06_2 from "../../assets/coding/web06_2.jpg";

const PortfolioWeb = () => {
  const navigate = useNavigate();

  // Updated Project Data
  const projects = [
    {
      id: 1,
      title: "MEDVED",
      description: "A Russian competition gaming website designed for high-energy esports events.",
      imgDefault: web04_1,
      imgHover: web04_2,
      tech: "HTML • CSS",
      path: "/projects/medved"
    },
    {
      id: 2,
      title: "THE LAND OF RANDOMS",
      description: "An entertainment website with a quirky alien vibe and interactive elements.",
      imgDefault: web05_1,
      imgHover: web05_2,
      tech: "HTML • CSS • JavaScript",
      path: "/projects/land-of-randoms"
    },
    {
      id: 3,
      title: "THE UNLIVING SOCIETY",
      description: "A fictional immersive website designed specifically for vampire lovers.",
      imgDefault: web06_1,
      imgHover: web06_2,
      tech: "React.js",
      path: "/projects/unliving-society"
    }
  ];

  return (
    <section className="web-section">
      <div className="web-container">
        
        {/* --- LEFT SIDE: STICKY TEXT --- */}
        <div className="web-text-content">
          <PortfolioText 
            subtitle="Web & App Development Services"
            title="TRANSFORMING DESIGNS INTO INTERACTIVE REALITY"
            description="Transforming designs into clean, responsive, and accessible digital experiences. Focused on delivering seamless usability and consistent performance across all devices — blending functionality, aesthetics, and precision."
            // Cyan/Blue Gradient
            btnGradient="linear-gradient(90deg, #17DEF4 0%, #0F74BC 100%)"
            onBtnClick={() => navigate('/projects/web-dev')}
          />
        </div>

        {/* --- RIGHT SIDE: ZIG-ZAG BROWSER STACK --- */}
        <div className="web-projects-stack">
          {projects.map((project) => (
            <div key={project.id} className="web-card" onClick={() => navigate(project.path)}>
              
              {/* Browser/Code Window Header */}
              <div className="browser-bar">
                <div className="window-controls">
                  <span className="control red"></span>
                  <span className="control yellow"></span>
                  <span className="control green"></span>
                </div>
                {/* Fake URL bar based on tech stack */}
                <div className="address-bar">
                   <span>localhost:3000/{project.tech.split(' ')[0].toLowerCase()}</span>
                </div>
              </div>

              <div className="web-img-wrapper">
                <img 
                  src={project.imgDefault} 
                  alt={project.title} 
                  className="web-img default-view"
                />
                <img 
                  src={project.imgHover} 
                  alt={`${project.title} Detail`} 
                  className="web-img hover-view"
                />
              </div>

              <div className="web-card-overlay">
                <div className="web-card-text">
                  <h4>{project.title}</h4>
                  <span className="web-tech">{project.tech}</span>
                  <p className="web-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioWeb;