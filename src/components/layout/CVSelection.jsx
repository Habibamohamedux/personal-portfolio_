import React from 'react';
import { motion } from 'framer-motion';
import './CVSelection.css';

// --- DATA: Update 'fileUrl' with your actual PDF paths ---
const cvOptions = [
  {
    id: "ux",
    role: "User Experience",
    class: "ux",
    icon: "🧠", // You can replace with <FaRegUser /> or similar React Icons
    desc: "Focusing on Research, User Flows, Wireframing, and the ORA Project methodology.",
    fileUrl: "/assets/cv-habiba-ux.pdf" 
  },
  {
    id: "fe",
    role: "Front-End Dev",
    class: "frontend",
    icon: "💻",
    desc: "Highlighting React.js, CSS Animations, Component Architecture, and clean code.",
    fileUrl: "/assets/cv-habiba-frontend.pdf"
  },
  {
    id: "cm",
    role: "Creative Media",
    class: "creative",
    icon: "🎨",
    desc: "Showcasing Direction, Video Editing, 'Grandma Tales', and storytelling capabilities.",
    fileUrl: "/assets/cv-habiba-creative.pdf"
  }
];

const CVSelection = () => {
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
              {cv.icon}
            </div>
            
            <h3 className="role-title">{cv.role}</h3>
            <p className="role-desc">{cv.desc}</p>
            
            <a href={cv.fileUrl} download className="download-btn">
              Download CV 
              <span className="btn-arrow">↓</span>
            </a>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default CVSelection;