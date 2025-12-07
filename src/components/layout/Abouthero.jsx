import React, { useState, useRef } from "react"; // 1. Import useState and useRef
import "./Abouthero.css";
import threeDlogo from "../../assets/3dmodels/logo.gltf";
import Aurora from "./Aurora";
import AcadmicJourney from "./AcadmicJourney.jsx"; // 2. Import the component to show

const Abouthero = () => {
  // 3. Initialize state to control the visibility of the AcadmicJourney
  const [showJourney, setShowJourney] = useState(false);
  
  // 4. Create a ref to scroll to the newly visible component
  const journeyRef = useRef(null); 

  // 5. Handler for the button click
  const handleGetStartedClick = () => {
    // Show the component
    setShowJourney(true); 

    // Use a timeout to ensure the component has rendered before scrolling
    setTimeout(() => {
      journeyRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' // Scrolls to the top of the element
      });
    }, 100); // A small delay to ensure rendering and smooth scroll
  };

  return (
    <>
      <Aurora
        colorStops={["#0d1b3d", "#1e3a8a", "#60a5fa"]}
        blend={2.0}
        amplitude={9.0}
        speed={2.0}
      />

      <div className="about-hero-container">
        {/* LEFT SIDE */}
        <div className="left-section">
          <model-viewer
            src={threeDlogo}
            className="threeD-logo"
            camera-controls
            auto-rotate
            rotation-per-second="60deg"
            auto-rotate-delay="1"
            field-of-view="30deg"
            shadow-intensity="0.75"
            exposure="0.59"
            shadow-softness="1"
          ></model-viewer>

          <p className="about-text">
   Habiba Saad |   UX/UI Designer & Aspiring Full-Stack Developer. Senior student in Digital Arts with a focus on web solutions. Skilled in Figma, Adobe, React.js, and modern development. Driven by curiosity, connection, and a love for languages. Crafting functional and truly user-friendly digital experiences.
             </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-section glass-box">
          <h1 className="glass-title">Welcome User,</h1>

          <p className="glass-paragraph">
            Let me introduce myself, I am a person, a Learner, an artist, a
            writer, a front-end developer, a filmmaker, a graphic designer, a
            video editor and most importantly a UX/UI designer.
            <br />
            <br />I seem to be a person with a lot of interests—and it's
            true—but that never makes me incapable of mastering none. I think
            what makes me the way I am is I will always make any vision come
            true.
          </p>

          <p className="curious">Curious?</p>

          {/* 6. Attach the click handler to the button */}
          <button className="glass-btn" onClick={handleGetStartedClick}>
            Get Started ↓
          </button>
        </div>
      </div>
      
      {/* 7. Conditional Rendering: This section will only appear when showJourney is true */}
      {showJourney && (
        <div ref={journeyRef}> {/* 8. Attach the ref here for scrolling */}
          <AcadmicJourney />
        </div>
      )}
    </>
  );
};

export default Abouthero;