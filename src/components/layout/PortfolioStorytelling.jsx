import React from "react";
import { useNavigate } from "react-router-dom";
import "./PortfolioStorytelling.css";

// 1. Import Reusable Component
import PortfolioText from "../common/PortfolioText";

// 2. Import Images
import photoIcon from "../../assets/creative/HabibaSaad_GRAHICDESIGN_Y1_EGYPTIANICON_008.jpg";
import photoLeader from "../../assets/creative/HabibaSaad_GRAHICDESIGN_Y1_EGYPTIANLEADER_009_001.jpg";
import photoDeepDOF from "../../assets/creative/HabibaSaad_Photography_Y1_DEEPDOF_001.jpg";
import photoFreeze from "../../assets/creative/HabibaSaad_Photography_Y1_FREEZINGMOTION_002.jpg";
import photoOverexp from "../../assets/creative/HabibaSaad_Photography_Y1_OVEREXPOSURE_004.jpg";
import photoShallow from "../../assets/creative/HabibaSaad_Photography_Y1_SHALLOWDOF_007.jpg";

const PortfolioStorytelling = () => {
  const navigate = useNavigate();

  // Split photos into two columns for the parallax effect
  const column1 = [
    { id: 1, src: photoIcon, title: "Egyptian Iconography" },
    { id: 2, src: photoLeader, title: "The Leader" },
    { id: 3, src: photoDeepDOF, title: "Deep Depth of Field" },
  ];

  const column2 = [
    { id: 4, src: photoFreeze, title: "Freezing Motion" },
    { id: 5, src: photoOverexp, title: "High Key Exposure" },
    { id: 6, src: photoShallow, title: "Shallow Focus" },
  ];

  // Helper to render a column (we duplicate data to create an infinite loop feel)
  const renderColumn = (items) => (
    <>
      {items.map((photo) => (
        <div key={photo.id} className="gallery-card">
          <img src={photo.src} alt={photo.title} className="gallery-img" />
          <div className="gallery-overlay">
            <span className="overlay-text">{photo.title}</span>
          </div>
        </div>
      ))}
      {/* Duplicate for smooth infinite loop */}
      {items.map((photo) => (
        <div key={`dup-${photo.id}`} className="gallery-card">
          <img src={photo.src} alt={photo.title} className="gallery-img" />
          <div className="gallery-overlay">
            <span className="overlay-text">{photo.title}</span>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section className="storytelling-section">
      <div className="storytelling-container">
        
        {/* --- LEFT SIDE: TEXT (Clean, No Tags) --- */}
        <div className="storytelling-text-wrapper">
          <PortfolioText 
            subtitle="Creative Media & Storytelling"
            title="CRAFTING IMMERSIVE NARRATIVES"
            description="Crafting immersive narratives through visuals, motion, and interactivity. This category blends photography, filmmaking, writing, and augmented reality to create expressive stories that connect emotionally and visually with audiences across mediums."
            btnGradient="linear-gradient(90deg, #DA1414 0%, #910E0E 100%)"
            onBtnClick={() => navigate('/projects/storytelling')}
          />
        </div>

        {/* --- RIGHT SIDE: MOVING FILM GALLERY --- */}
        <div className="film-gallery-wrapper">
          {/* Overlay Gradients to fade edges */}
          <div className="fade-overlay top"></div>
          <div className="fade-overlay bottom"></div>

          <div className="film-columns">
            {/* Column 1: Moves Up */}
            <div className="film-col col-up">
              <div className="col-track">
                {renderColumn(column1)}
              </div>
            </div>

            {/* Column 2: Moves Down */}
            <div className="film-col col-down">
              <div className="col-track">
                {renderColumn(column2)}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioStorytelling;