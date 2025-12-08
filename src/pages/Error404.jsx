import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import './Error404.css';

const Error = () => {
  return (
    <section className="error-container">
      {/* Ambient Background Glows */}
      <div className="error-bg-glow glow-1"></div>
      <div className="error-bg-glow glow-2"></div>

      {/* The Central Glass Card */}
      <motion.div 
        className="error-glass-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        {/* The data-text attribute is crucial here. 
          CSS uses it to create the glitch duplicates.
        */}
        <h1 className="error-glitch-title" data-text="404">
          404
        </h1>

        <h2 className="error-subtitle">SYSTEM FAILURE</h2>
        
        <p className="error-desc">
          The coordinates you are trying to access have been lost in the digital void. Rerouting recommended.
        </p>

        {/* Replace with <Link to="/"> if using React Router */}
        <a href="/" className="error-home-btn">
          Return to Base
        </a>

      </motion.div>
    </section>
  );
};

export default Error;