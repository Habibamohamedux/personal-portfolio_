import React from 'react';
import { motion } from 'framer-motion';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import './Notes.css';

const notesData = [
  { label: 'Goal', text: 'Showcase expertise & build credibility' },
  { label: 'Persona', text: 'The Creative Professional – skilled, passionate, growth-oriented' },
  { label: 'Feeling', text: 'Confident, inspiring, approachable' },
  { label: 'Tone', text: 'Professional, creative, authentic, empowering' }
];

/* --- Animation Variants --- */

// 1. The Paper Drop Effect
const paperVariants = {
  hidden: { 
    opacity: 0, 
    y: 100, 
    rotate: -10, // Starts tilted
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotate: 0, // Lands flat (or slightly tilted via CSS)
    scale: 1,
    transition: { 
      type: "spring", 
      bounce: 0.4, 
      duration: 0.8,
      delayChildren: 0.4, // Wait for paper to land before writing
      staggerChildren: 0.15 
    } 
  }
};

// 2. The "Writing" Effect for Text
const textVariants = {
  hidden: { opacity: 0, x: -20, filter: "blur(5px)" }, // Blur simulates ink bleeding in
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

// 3. The "Drawing" Effect for the Line
const lineVariants = {
  hidden: { width: "0%", opacity: 0 },
  visible: { 
    width: "100%", 
    opacity: 0.6,
    transition: { duration: 0.8, ease: "easeInOut" } 
  }
};

// 4. The "Stamp" Effect for the Insight Box
const boxVariants = {
  hidden: { scale: 0.8, opacity: 0, rotate: 2 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    rotate: -1, // Lands slightly crooked
    transition: { type: "spring", stiffness: 200, damping: 10 } 
  }
};

const Notes = () => {
  return (
    <section id="ux-notes-section">
      
      {/* SVG Noise Filter (Required for texture) */}
      <svg style={{ display: 'none' }}>
        <filter id="paper-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" result="noise"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0" in="noise" result="colormatrix"/>
          <feComposite operator="in" in2="SourceGraphic" in="colormatrix" result="composite"/>
          <feBlend mode="multiply" in="SourceGraphic" in2="composite" result="blend"/>
        </filter>
      </svg>
      
      <div className="ux-notes__container">
        
        {/* Layer Wrapper for the Stack Effect */}
        <div className="ux-notes__paper-stack">
            
            {/* Main Animated Card */}
            <motion.div 
              className="ux-notes__card"
              variants={paperVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
            
              {/* Header */}
              <motion.div className="ux-notes__header" variants={textVariants}>
                  <motion.div 
                    className="ux-notes__icon-box"
                    whileHover={{ rotate: 15, scale: 1.1 }} // Interactive wobble
                  >
                    <LightbulbIcon className="ux-notes__icon" />
                  </motion.div>
                  <h2 className="ux-notes__title">UX Notes: Portfolio Idea</h2>
              </motion.div>

              {/* List Content */}
              <div className="ux-notes__list">
                  {notesData.map((item, index) => (
                  <motion.div key={index} className="ux-notes__row" variants={textVariants}>
                      <span className="ux-notes__label">{item.label}:</span>
                      <span className="ux-notes__text">{item.text}</span>
                  </motion.div>
                  ))}
              </div>

              {/* Divider (Drawing Animation) */}
              <motion.div 
                className="ux-notes__divider" 
                variants={lineVariants}
              ></motion.div>

              {/* Key Insight Bottom Text (Stamping Animation) */}
              <motion.div className="ux-notes__insight" variants={boxVariants}>
                  <span className="ux-notes__label highlight">Key Insight</span>
                  <p className="ux-notes__insight-text">
                  "Creative professionals want to see clear expertise, unique style, and genuine passion in every detail."
                  </p>
              </motion.div>

            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Notes;