import React from 'react';
import { motion } from 'framer-motion';
import './HeroBlog.css';

const HeroBlog = () => {
  return (
    <section className="hero-blog-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-blog-title">The Journal</h1>
        <p className="hero-blog-subtitle">
          Exploring the intersection of User Experience, Creative Media, 
          and the silent stories behind the code.
        </p>

        <div className="search-pill-container">
          <input 
            type="text" 
            placeholder="Search articles, topics, or ideas..." 
            className="search-input"
          />
          <button className="search-btn">Explore</button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBlog;