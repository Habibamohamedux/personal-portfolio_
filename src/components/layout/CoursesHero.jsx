import React from 'react';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GridScan from './GridScan.jsx';
import './CoursesHero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
  visible: { 
    y: 0, 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const CoursesHero = () => {
  return (
    <section id="courses-hero">
      
      {/* BACKGROUND LAYER - Positioned Absolute */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        overflow: 'hidden' // Ensures no scrollbars appear if grid overflows
      }}>
     <GridScan
  sensitivity={0.55}
  lineThickness={1}
  linesColor="#0f172a"  /* Very dark slate blue (subtle) */
  gridScale={0.1}
  scanColor="#3b82f6"   /* Royal Blue (visible but not blinding) */
  scanOpacity={0.4}
  enablePost
  bloomIntensity={0.6}
  chromaticAberration={0.002}
  noiseIntensity={0.01}
/>
      </div>

      {/* CONTENT LAYER - Centered on top */}
      <motion.div 
        className="hero-content-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="badge-container">
          <motion.span variants={itemVariants} className="new-badge">
            New Courses Available
          </motion.span>
        </div>

        <motion.h1 variants={itemVariants} className="hero-title">
          CREATE. <span className="highlight-text">LEARN.</span> GROW.
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Master creative skills through curated tutorials, comprehensive courses, and personalized mentorship. Start your journey today.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-buttons-container">
          <button className="hero-btn glass-btn">
            <PlayArrowIcon className="btn-icon" />
            Explore Tutorials
          </button>
          
          <button className="hero-btn glass-btn">
            <MenuBookIcon className="btn-icon" />
            View Courses
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoursesHero;