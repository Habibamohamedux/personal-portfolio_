import React from 'react';
import { motion } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'; // Sparkle icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'; // Infinity symbol
import './ReadyToStart.css';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

const ReadyToStart = () => {
  return (
    <section id="ready-to-start">
      <motion.div 
        className="ready-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        
        {/* Top Glowing Icon */}
        <motion.div className="icon-wrapper" variants={itemVariants}>
          <div className="glow-circle">
            <AutoAwesomeIcon className="start-icon" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.h2 className="cta-title" variants={itemVariants}>
          READY TO START YOUR CREATIVE JOURNEY?
        </motion.h2>

        <motion.p className="cta-subtitle" variants={itemVariants}>
          Transform your creative skills through curated courses and personalized mentorship. 
          Start learning today and unlock your full potential.
        </motion.p>

        {/* Buttons */}
        <motion.div className="cta-buttons" variants={itemVariants}>
          <button className="join-btn">
            Join Now <ArrowForwardIcon className="btn-arrow" />
          </button>
          <button className="browse-btn">
            Browse Free Content
          </button>
        </motion.div>

        {/* Divider Line */}
        <motion.div className="cta-divider" variants={itemVariants}></motion.div>

        {/* Bottom Stats */}
        <motion.div className="cta-stats" variants={itemVariants}>
          <div className="stat-item">
            <span className="stat-value">6</span>
            <span className="stat-label">Courses Available</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">Quality Content</span>
          </div>
          <div className="stat-item">
            <span className="stat-value"><AllInclusiveIcon className="infinity-icon" /></span>
            <span className="stat-label">Lifetime Access</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ReadyToStart;