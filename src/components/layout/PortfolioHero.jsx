import React, { useState, useEffect } from "react";
import "./PortfolioHero.css";

// --- IMPORTS ---
// Using your specific paths
import TextParagraph from "../common/Textparagraph.jsx"; 
import Arrowbtndown from "../common/Arrowbtndown.jsx";
import VideoMotion from "../../assets/motiongraphics/HabibaSaad_MOTIONGRAPHICS_Y3_SHOWREEL01_001.mp4";

const PortfolioHero = () => {
  // Data configuration
  const categories = [
    {
      id: 1,
      title: "UX–UI Design",
      subtitle: "Crafting intuitive digital experiences that put users first.",
      color: "#4D9FFF", // Blue
    },
    {
      id: 2,
      title: "Motion Graphics",
      subtitle: "Bringing static concepts to life through fluid movement and rhythm.",
      color: "#FF7E5F", // Coral
    },
    {
      id: 3,
      title: "Web & App Development",
      subtitle: "Building robust, scalable, and pixel-perfect applications.",
      color: "#00F260", // Green
    },
    {
      id: 4,
      title: "3D Modeling",
      subtitle: "Sculpting dimensions and rendering imagination into reality.",
      color: "#F5D300", // Yellow
    },
    {
      id: 5,
      title: "Branding",
      subtitle: "Forging unique identities that resonate and endure.",
      color: "#FF4081", // Pink
    },
    {
      id: 6,
      title: "Creative Media & Storytelling",
      subtitle: "Weaving narratives that connect, inspire, and engage audiences.",
      color: "#A45EE5", // Purple
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Timer to switch categories every 4 seconds
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % categories.length); // Change text
        setFade(true); // Start fade in
      }, 500); // Wait for fade out
      
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const current = categories[index];

  return (
    <div className="portfolio-hero-container">
      {/* Background Video */}
      <video
        className="portfolio-hero-video"
        src={VideoMotion} 
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="portfolio-hero-overlay-dark"></div>

      {/* Content */}
      <div className="portfolio-hero-content-wrapper">
        <div className="text-generation-container">
          <div className="text-generation-content">
            <h1
              className={`text-generation-title ${fade ? "fade-in" : "fade-out"}`}
            >
              {current.title}{" "}
              <span
                className="text-generation-star"
                style={{ 
                  color: current.color, 
                  textShadow: `0 0 20px ${current.color}` 
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