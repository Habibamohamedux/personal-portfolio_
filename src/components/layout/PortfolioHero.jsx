import React, { useState, useEffect } from "react";
import "./PortfolioHero.css";
// --- IMPORTS ---
import TextParagraph from "../common/Textparagraph.jsx"; 
import Arrowbtndown from "../common/Arrowbtndown.jsx";
import VideoMotion from "../../assets/motiongraphics/HabibaSaad_MOTIONGRAPHICS_Y2_SHOWREEL03_003.mp4";

const PortfolioHero = () => {
  // Data matched from ServicesCards.jsx for consistent coloring
  const categories = [
    {
      id: 1,
      title: "UX–UI Design",
      subtitle: "Crafting intuitive digital experiences that put users first.",
      color: "#1748F4", // Matches buttonColor for UX/UI
    },
    {
      id: 2,
      title: "Motion Graphics",
      subtitle: "Bringing static concepts to life through fluid movement and rhythm.",
      color: "#17F4D3", // Matches buttonColor for Motion Graphics
    },
    {
      id: 3,
      title: "Web & App Development",
      subtitle: "Building robust, scalable, and pixel-perfect applications.",
      color: "#17DEF4", // Matches buttonColor for Web/App Dev
    },
    {
      id: 4,
      title: "3D Modeling",
      subtitle: "Sculpting dimensions and rendering imagination into reality.",
      color: "#F49817", // Matches buttonColor for 3D Modeling
    },
    {
      id: 5,
      title: "Branding",
      subtitle: "Forging unique identities that resonate and endure.",
      color: "#8917F4", // Matches buttonColor for Branding
    },
    {
      id: 6,
      title: "Creative Media & Storytelling",
      subtitle: "Weaving narratives that connect, inspire, and engage audiences.",
      color: "#DA1414", // Matches buttonColor for Creative Media
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % categories.length); 
        setFade(true); 
      }, 500); 
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const current = categories[index];

  return (
    <div className="portfolio-hero-container">
      {/* 1. Background Video (Static) */}
      <video 
        className="portfolio-hero-video" 
        src={VideoMotion} 
        autoPlay 
        loop 
        muted 
        playsInline
      ></video>

      {/* 2. Content Overlay (::after handles the dark tint) */}
      <div className="portfolio-hero-overlay">
        
        {/* 3. Inner Container with "Design Effect" (Glass Box) */}
        <div className="portfolio-glass-container">
          <div className="portfolio-text-content">
            <h1 className={`portfolio-title ${fade ? "fade-in" : "fade-out"}`}>
              {current.title}{" "}
              {/* The star's color and glow now dynamically change based on current.color */}
              <span
                className="portfolio-star"
                style={{ 
                  color: current.color, 
                  textShadow: `0 0 25px ${current.color}, 0 0 5px ${current.color}` // Enhanced glow
                }}
              >
                *
              </span>
            </h1>
            
            <TextParagraph
              paragraphhead={current.subtitle}
              fade={fade}
              isArabic={false}
            />
          </div>
        </div>

      </div>

      <Arrowbtndown />
    </div>
  );
};

export default PortfolioHero;