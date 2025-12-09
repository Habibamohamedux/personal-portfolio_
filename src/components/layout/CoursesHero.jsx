import React from 'react';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import './CoursesHero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } 
  },
};

const CoursesHero = () => {
  return (
    <section id="courses-hero">
      {/* The animated background layers */}
      <div className="hero-bg-animation">
        <div className="bg-layer layer-1"></div>
        <div className="bg-layer layer-2"></div>
        <div className="bg-layer layer-3"></div>
      </div>

      {/* Main Content Container */}
      <motion.div 
        className="hero-content-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          CREATE. LEARN. GROW.
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Master creative skills through curated tutorials, comprehensive courses, and personalized mentorship
        </motion.p>

        <motion.div variants={itemVariants} className="hero-buttons-container">
          <button className="hero-btn glow-btn">
            <PlayArrowIcon className="btn-icon" />
            Explore Free Tutorials
          </button>
          <button className="hero-btn glow-btn">
            <MenuBookIcon className="btn-icon" />
            View Courses
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoursesHero;