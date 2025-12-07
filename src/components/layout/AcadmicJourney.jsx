import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./AcadmicJourney.css";

const journeyData = [
  {
    year: "Year 01",
    theme: "Foundation & Artistic Roots",
    courses: [
      "Drawing",
      "Anatomy for Artists",
      "Composition through Digital Photography",
      "Digital Design Basics",
      "Free Perspective",
      "Painting",
      "Digital Illustration",
      "Digital Modeling for 3D",
      "Video Art Basics"
    ]
  },
  {
    year: "Year 02",
    theme: "UX Fundamentals & Digital Media",
    courses: [
      "UX Design Basics",
      "Graphic Elements",
      "Contextual Debates I",
      "Web Programming & Animation"
    ]
  },
  {
    year: "Year 03",
    theme: "Advanced Practice & Theory",
    courses: [
      "UX Industry Practice",
      "Representation of Data",
      "Contextual Debates II",
      "UX/UI Design Studio"
    ]
  },
  {
    year: "Year 04",
    theme: "Professional Mastery",
    courses: [
      "UX/UI Dissertation",
      "Final Project (Phase I & II)",
      "Digital Portfolio"
    ]
  }
];

// Reusable Spotlight Card Component
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`card-spotlight ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="spotlight-overlay"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(46, 134, 222, 0.15), transparent 40%)`
        }}
      />
      {/* card-content wrapper is crucial for z-index layering */}
      <div className="card-content">{children}</div>
    </motion.div>
  );
};

const AcadmicJourney = () => {
  return (
    <section className="journey-container">
      {/* Background Ambience */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      <div className="content-wrapper">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="header-section"
        >
          <h1 className="main-title">MY ACADEMIC JOURNEY</h1>
          <p className="subtitle">
            A 4-year exploration into User Experience & Digital Arts.
          </p>
        </motion.div>

        <div className="timeline-grid">
          {journeyData.map((yearGroup, index) => (
            <SpotlightCard key={index}>
              {/* Wrapped Header Group: Allows us to align Title vs List on Desktop */}
              <div className="card-header-group">
                <div className="year-badge">{yearGroup.year}</div>
                <h3 className="year-theme">{yearGroup.theme}</h3>
              </div>
              
              <ul className="course-list">
                {yearGroup.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcadmicJourney;