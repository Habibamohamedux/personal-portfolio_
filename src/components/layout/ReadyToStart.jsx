import React from 'react';
import { motion } from 'framer-motion';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'; // Infinity symbol
import './ReadyToStart.css';

// Simple fade-up animation
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ReadyToStart = () => {
  return (
    <section id="ready-to-start">
      <motion.div 
        className="rts-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        
        {/* Tiny Title */}
        <motion.p className="rts-tiny-title" variants={itemVariants}>
          OVERVIEW
        </motion.p>

        {/* Stats Grid */}
        <motion.div className="rts-stats-grid" variants={itemVariants}>
          
          <div className="rts-stat-item">
            <span className="rts-stat-value">3</span>
            <span className="rts-stat-label">Courses Available</span>
          </div>
          
          <div className="rts-stat-divider"></div>

          <div className="rts-stat-item">
            <span className="rts-stat-value">100%</span>
            <span className="rts-stat-label">Quality Content</span>
          </div>

          <div className="rts-stat-divider"></div>

          <div className="rts-stat-item">
            <span className="rts-stat-value">
              <AllInclusiveIcon className="rts-infinity-icon" />
            </span>
            <span className="rts-stat-label">Lifetime Access</span>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default ReadyToStart;