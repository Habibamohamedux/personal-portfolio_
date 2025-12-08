import React from 'react';
import { motion } from 'framer-motion';
import './HeroBlog.css';
import BlogBg from './BlogBg.jsx';

// Simple SVG Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const TrendingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

// Animation logic for the word "JOURNAL"
const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger each letter by 0.1s
      delayChildren: 0.5    // Wait for main enter
    }
  }
};

const letterAnim = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const HeroBlog = () => {
  const journalText = "JOURNAL".split(""); // Split into array ["J", "O", "U"...]

  return (
    <section className="hero-blog-container">
      {/* Interactive Particles Background */}
      <BlogBg />

      {/* Main Content Wrapper */}
      <motion.div 
        className="hero-blog-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* The Refined Editorial Title */}
        <div className="hero-header-lockup">
          <h1 className="hero-title-static">THE</h1>
          
          {/* Animated "JOURNAL" */}
          <motion.div 
            className="hero-title-animated"
            variants={letterContainer}
            initial="hidden"
            animate="visible"
          >
            {journalText.map((char, index) => (
              <motion.span key={index} variants={letterAnim} className="hero-char">
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Updated Subtitle */}
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          A curated collection of thoughts on <span className="highlight">Design</span>, <span className="highlight">Technology</span>, and meaningful <span className="highlight">Life Experiences</span>.
        </motion.p>

        {/* The Glass Control Panel */}
        <motion.div 
          className="hero-control-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          
          <div className="glass-search-wrapper">
            <SearchIcon />
            <input 
              type="text" 
              placeholder="Search stories, lessons, or tech..." 
              className="search-input"
            />
            <button className="search-cmd-btn">Go</button>
          </div>

          <div className="hero-trending-strip">
            <span className="trending-label"><TrendingIcon /> Trending:</span>
            <div className="trending-tags">
              <span className="hero-tag">#LifeLessons</span>
              <span className="hero-tag">#UXResearch</span>
              <span className="hero-tag">#MotherhoodTech</span>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBlog;