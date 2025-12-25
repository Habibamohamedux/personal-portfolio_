import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioBranding.css";

// 1. Import Reusable Component
import PortfolioText from "../common/PortfolioText";

// 2. Import Images
import brand1Cover from "../../assets/graphicdesign/HabibaSaad_GRAHICDESIGN_Y2_BRANDMANUEL_009_00_Page_01.jpg";
import brand1Inside from "../../assets/graphicdesign/HabibaSaad_GRAHICDESIGN_Y2_BRANDMANUEL_009_00_Page_28.jpg";
import brand2Inside from "../../assets/graphicdesign/HabibaSaad_GRAHICDESIGN_Y4_BRANDMANUAL_001_002.jpg";
import brand2Cover from "../../assets/graphicdesign/HabibaSaad_GRAHICDESIGN_Y4_BRANDMANUAL_001_001.jpg";

const PortfolioBranding = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const brandProjects = [
    {
      id: 1,
      title: "MULUKI",
      category: "Rebranding • Egyptian Sweets",
      description: "A heritage-focused rebranding for Muluki, blending traditional calligraphy with modern luxury aesthetics.",
      cover: brand1Cover,
      inside: brand1Inside,
      path: "/projects/muluki"
    },
    {
      id: 2,
      title: "ORA",
      category: "Visual Identity System",
      description: "A comprehensive brand manual establishing the visual language for a forward-thinking digital entity.",
      cover: brand2Cover,
      inside: brand2Inside,
      path: "/projects/ora"
    }
  ];

  const currentProject = brandProjects[currentIndex];

  return (
    <section className="branding-section">
      <div className="branding-container">
        
        {/* --- LEFT SIDE: TEXT --- */}
        <div className="branding-text-wrapper">
          <div className="text-glass-card">
            <PortfolioText 
              subtitle="Branding Services"
              title="BUILDING MEANINGFUL BRANDS"
              description="I help brands find their voice and visual identity through design that feels authentic and timeless. From strategy to execution, I craft cohesive systems that express values, connect emotionally, and stand out with purpose."
              btnGradient="linear-gradient(90deg, #8917F4 0%, #8E0FBC 100%)"
              onBtnClick={() => navigate('/projects/branding')}
            />
          </div>
        </div>

        {/* --- RIGHT SIDE: CINEMATIC SLIDE REVEAL --- */}
        <div className="reveal-gallery-wrapper">
          
          {/* Main Display Area (Clickable) */}
          <div className="reveal-frame" onClick={() => navigate(currentProject.path)}>
            
            {/* 1. Inside Image (Bottom Layer) */}
            <div className="layer-inside">
              <img src={currentProject.inside} alt="Inside" className="img-cover" />
              <div className="inside-overlay">
                <span className="view-case">Open Case Study</span>
              </div>
            </div>

            {/* 2. Cover Image (Top Layer - Slides away) */}
            <div className="layer-cover">
              <img src={currentProject.cover} alt="Cover" className="img-cover" />
              <div className="cover-sheen"></div>
              <div className="paper-grain"></div>
              
              {/* Hover Badge */}
              <div className="hover-badge">
                <span>Hover to Reveal</span>
              </div>
            </div>

          </div>

          {/* EDITORIAL FOOTER (Description + Nav List) */}
          <div className="gallery-footer">
            
            {/* Left: Dynamic Description */}
            <div className="footer-desc">
              <h3 className="footer-title">{currentProject.title}</h3>
              <span className="footer-cat">{currentProject.category}</span>
              <p className="footer-text">{currentProject.description}</p>
            </div>

            {/* Right: Clean Project Index List */}
            <div className="footer-nav-list">
              <span className="nav-label">Select Project</span>
              <div className="nav-items">
                {brandProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className={`nav-item ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <span className="nav-num">0{index + 1}</span>
                    <span className="nav-name">{project.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PortfolioBranding;