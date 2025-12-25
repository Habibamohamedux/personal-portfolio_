import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Portfolio3D.css";

// 1. Import Reusable Component
import PortfolioText from "../common/PortfolioText";

// 2. Import Images - CHECK YOUR EXTENSIONS HERE (.png vs .jpg)
// Also check if "3dmodeling" folder is all lowercase or "3DModeling"
import modelDice from "../../assets/3dmodeling/HabibaSaad_3DMODELING_Y1_DICE_005_003.png"; 
import modelMosque from "../../assets/3dmodeling/HabibaSaad_3DMODELING_Y1_MOSQUE_007_005.png"; 
import modelPerfume from "../../assets/3dmodeling/HabibaSaad_3DMODELING_Y1_PERFEUM_006_002.png"; // Fixed spelling "PERFUME"
import modelReception from "../../assets/3dmodeling/HabibaSaad_3DMODELING_Y3_RECEPTION_008_001.png"; 
import modelRobot from "../../assets/3dmodeling/HabibaSaad_3DMODELING_Y3_ROBOT_009_007.jpg"; 

const Portfolio3D = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(1);

  const projects = [
    { 
      id: 1, 
      title: "DICE", 
      type: "Product Model", 
      description: "A photorealistic render of a pair of dice, focusing on material textures and lighting.",
      img: modelDice, 
      path: "/projects/3d-dice" 
    },
    { 
      id: 2, 
      title: "THE MOSQUE", 
      type: "Architectural Visualization", 
      description: "A detailed 3D model of a mosque exterior, showcasing intricate geometric patterns.",
      img: modelMosque, 
      path: "/projects/3d-mosque" 
    },
    { 
      id: 3, 
      title: "PERFUME BOTTLE", 
      type: "Product Visualization", 
      description: "Elegant product visualization of a perfume bottle with glass and liquid simulation.",
      img: modelPerfume, 
      path: "/projects/3d-perfume" 
    },
    { 
      id: 4, 
      title: "RECEPTION AREA", 
      type: "Interior Design", 
      description: "A modern interior scene of a reception area, focusing on spatial design and lighting.",
      img: modelReception, 
      path: "/projects/3d-reception" 
    },
    { 
      id: 5, 
      title: "ROBOT CONCEPT", 
      type: "Character & Hard Surface", 
      description: "A futuristic robot character model, combining organic shapes with hard-surface details.",
      img: modelRobot, 
      path: "/projects/3d-robot" 
    },
  ];

  const activeProject = projects.find(p => p.id === activeId) || projects[0];

  return (
    <section 
      className="three-d-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${activeProject.img})`
      }}
    >
      <div className="three-d-container">
        <div className="three-d-text-content">
          <PortfolioText 
            subtitle="3D Modeling Services"
            title="DESIGNING IN THREE DIMENSIONS"
            description="Designing detailed three-dimensional visuals that balance realism, creativity, and precision. Focused on producing models that enhance storytelling, support product visualization, and bring digital concepts to life."
            btnGradient="linear-gradient(90deg, #F49817 0%, #BC710F 100%)"
            onBtnClick={() => navigate('/projects/3d-modeling')}
          />
        </div>

        <div className="clean-slider-wrapper">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`clean-slide ${activeId === project.id ? "active" : ""}`}
              onMouseEnter={() => setActiveId(project.id)}
              onClick={() => navigate(project.path)}
              role="button"
              tabIndex={0}
            >
              <div className="slide-img-container">
                 <img src={project.img} alt={project.title} className="slide-img" />
                 <div className="shine-effect"></div>
              </div>

              <div className="slide-label-vertical">
                <span>0{project.id}</span>
                <h3>{project.title}</h3>
              </div>
              
              <div className="slide-content-expanded">
                <span className="slide-type">{project.type}</span>
                <h3 className="slide-title">{project.title}</h3>
                <p className="slide-description">{project.description}</p>
                <div className="slide-cta">
                  <span>Explore Project</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio3D;