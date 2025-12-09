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

// Animations
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  }
};

const Notes = () => {
  return (
    <section id="notes-section">
      <motion.div 
        className="notes-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="notes-card">
          
          {/* Header with Glowing Icon */}
          <div className="notes-header">
            <div className="icon-circle glow-pulse">
              <LightbulbIcon className="bulb-icon" />
            </div>
            <h2 className="notes-title">UX NOTES: PORTFOLIO</h2>
          </div>

          {/* List Content */}
          <div className="notes-list">
            {notesData.map((item, index) => (
              <div key={index} className="note-row">
                <span className="note-label">{item.label}:</span>
                <span className="note-text">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Key Insight Separator */}
          <div className="divider-line"></div>

          {/* Key Insight Bottom Text */}
          <div className="key-insight">
            <span className="note-label">Key Insight:</span>
            <p className="insight-text">
              Creative professionals want to see clear expertise, unique style, and genuine passion in every detail.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Notes;