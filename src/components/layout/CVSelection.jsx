import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CVSelection.css';

// --- CUSTOM SVG ICONS (Now accept className for coloring) ---
const Icons = {
  UX: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
    </svg>
  ),
  Code: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>
  ),
  Creative: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  )
};

const cvOptions = [
  {
    id: "ux",
    role: "User Experience",
    class: "ux",
    IconComponent: Icons.UX, 
    desc: "Focusing on Research, User Flows, Wireframing, and the ORA Project methodology."
  },
  {
    id: "fe",
    role: "Front-End Dev",
    class: "frontend",
    IconComponent: Icons.Code,
    desc: "Highlighting React.js, CSS Animations, Component Architecture, and clean code."
  },
  {
    id: "cm",
    role: "Creative Media",
    class: "creative",
    IconComponent: Icons.Creative,
    desc: "Showcasing Direction, Video Editing, 'Grandma Tales', and storytelling capabilities."
  }
];

const CVSelection = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeRole, setActiveRole] = useState("");

  const handleDownloadClick = (e, role) => {
    e.preventDefault();
    setActiveRole(role);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="cv-section">
      
      {/* Section Header */}
      <motion.div 
        className="cv-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="cv-title">Select Profile</h2>
        <p className="cv-subtitle">
          Tailored documentation for different dimensions of my work.
        </p>
      </motion.div>

      {/* The 3 Cards Grid */}
      <div className="cv-grid">
        {cvOptions.map((cv, index) => (
          <motion.div 
            key={cv.id}
            className={`cv-card ${cv.class}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="cv-icon-box">
              <cv.IconComponent className="cv-svg-icon" />
            </div>
            
            <h3 className="role-title">{cv.role}</h3>
            <p className="role-desc">{cv.desc}</p>
            
            <a 
              href="#" 
              className="download-btn"
              onClick={(e) => handleDownloadClick(e, cv.role)}
            >
              Download CV 
              <span className="btn-arrow">↓</span>
            </a>
          </motion.div>
        ))}
      </div>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} 
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="modal-icon">⏳</div>
              <h3 className="modal-title">Coming Soon</h3>
              <p className="modal-text">
                The <strong>{activeRole}</strong> CV is currently being updated with my latest projects. Please check back shortly!
              </p>
              <button className="modal-close-btn" onClick={closeModal}>
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default CVSelection;