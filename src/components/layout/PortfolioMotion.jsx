import React from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioMotion.css";

// 1. Import Reusable Component
import PortfolioText from "../common/PortfolioText";

// 2. Import Video
import VideoMotion from "../../assets/motiongraphics/HabibaSaad_MOTIONGRAPHICS_Y3_SHOWREEL01_001.mp4";

const PortfolioMotion = () => {
  const navigate = useNavigate();

  return (
    <section className="motion-section">
      <div className="motion-container">
        
        {/* --- LEFT SIDE: STICKY TEXT --- */}
        <div className="motion-text-content">
          <PortfolioText 
            subtitle="Motion Graphics Services"
            title="BRINGING STORIES TO LIFE"
            description="I design motion graphics that capture attention and communicate ideas with clarity and emotion. Every animation I create enhances storytelling, strengthens brand identity, and gives digital experiences a sense of rhythm and life."
            btnGradient="linear-gradient(90deg, #0fbba1ff 0%, #094752ff 100%)"
            onBtnClick={() => navigate('/projects/motion')}
          />
        </div>

        {/* --- RIGHT SIDE: HOLOGRAPHIC DISPLAY --- */}
        <div className="motion-display-wrapper">
          
          {/* Main Hologram Container (Clickable) */}
          <div 
            className="hologram-unit" 
            onClick={() => navigate('/projects/motion')}
          >
            
            {/* The Tech Corners (Decorative) */}
            <div className="holo-corner corner-tl"></div>
            <div className="holo-corner corner-tr"></div>
            <div className="holo-corner corner-bl"></div>
            <div className="holo-corner corner-br"></div>

            {/* The Video Screen */}
            <div className="holo-screen">
              <video 
                className="holo-video"
                src={VideoMotion}
                autoPlay
                loop
                muted
                playsInline
              />
              
              {/* Holographic Overlay Effects */}
              <div className="holo-overlay">
                {/* Scanline Beam */}
                <div className="holo-scanline"></div>
                
                {/* Grid Pattern Texture */}
                <div className="holo-grid"></div>

                {/* Minimal HUD Elements */}
                <div className="holo-hud-top">
                   <span className="hud-text">LIVE PREVIEW</span>
                   <span className="hud-rec">● REC</span>
                </div>
                <div className="holo-hud-bottom">
                   <span className="hud-code">SYS.004 // RENDER_MODE</span>
                </div>
              </div>
            </div>

            {/* Glowing Shadow underneath */}
            <div className="holo-emitter-glow"></div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PortfolioMotion;