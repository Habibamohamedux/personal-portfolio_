import React from 'react';
import { motion } from 'framer-motion';
import './Pursuing.css';
import Ora from '../../assets/creative/Ora.svg';
import book1 from '../../assets/creative/gesammelte-werke.jpg';
import book2 from '../../assets/creative/Laphotoquitue.jpg';

const Pursuing = () => {
  return (
    <section className="pursuing-container">
      {/* Background Ambience */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 210, 211, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 1
        }} 
      />

      <div className="max-width-wrapper">
        
        {/* --- SECTION 1: HEADER & ORA PROJECT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Currently Pursuing</span>
          <h1 className="big-title">What I'm Pursuing Now?</h1>
        </motion.div>

        <div className="project-split">
          {/* Left: Text Content */}
          <motion.div 
            className="project-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <span className="section-label" style={{ borderLeft: 'none', padding: 0, color: '#fff' }}>
                Graduation Project
              </span>
              <p className="project-desc">
                I’m currently focusing on my graduation project – <strong>ORA</strong>, the first-ever AI-powered assistant designed to support women through every stage of motherhood.
                <br /><br />
                From the first thought of pregnancy to postnatal care, ORA aims to be a compassionate, intelligent companion that empowers women with personalized guidance, emotional support, and reliable information.
              </p>
            </div>

            <div className="ora-brand">
              <div className="ora-logo-text">ORA</div>
              <span className="ora-tagline">Observant. Reassuring. Aware.</span>
            </div>
          </motion.div>

          {/* Right: Visual Showcase */}
          <motion.div 
            className="project-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-frame">
              <img 
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2670&auto=format&fit=crop" 
                alt="ORA Concept Art" 
                className="main-img" 
              />
            </div>
            
            <motion.div 
              className="floating-ui"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <img 
                src=   {Ora} 
                alt="ORA App Icon" 
              />
            </motion.div>
          </motion.div>
        </div>

        {/* --- SECTION 2: TECH STACK --- */}
        <motion.div 
          className="tech-stack-strip"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="tech-card">
            <h4>Artificial Intelligence</h4>
            <p>Empathetic NLP models tuned for maternal support.</p>
          </div>
          <div className="tech-card">
            <h4>IoT Integration</h4>
            <p>Real-time vitals tracking & health monitors.</p>
          </div>
          <div className="tech-card">
            <h4>Data Security</h4>
            <p>End-to-end encryption for health data.</p>
          </div>
          <div className="tech-card">
            <h4>UX Research</h4>
            <p>Based on interviews with 50+ mothers.</p>
          </div>
        </motion.div>

        {/* --- DIVIDER --- */}
        <div className="divider-line"></div>

        {/* --- SECTION 3: LANGUAGE JOURNEY --- */}
        <motion.div 
          className="language-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="section-subtitle">Linguistic Journey</h3>
          
          <div className="lang-grid">
            
            {/* 1. FRENCH CARD (A2 - 35%) */}
            <div className="lang-card active">
              <div className="lang-bg-code">FR</div>
              
              <div className="lang-header">
                <span className="lang-status">● Active Learning</span>
                
                {/* --- ADDED: NAME SECTION --- */}
                <div className="lang-title-group">
                  <h3>French</h3>
                  <span className="native-lang">Français</span>
                </div>

                <div className="lang-meta">
                  <span className="lang-level">Level A2</span>
                  <span className="lang-percentage">35%</span>
                </div>
              </div>

              <div className="progress-track">
                <motion.div 
                  className="progress-fill" 
                  initial={{ width: 0 }} 
                  whileInView={{ width: '35%' }} 
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
              </div>

              {/* Reading Section */}
              <div className="current-read">
                <img 
                  src={book2} 
                  alt="Laphoto qui tue" 
                  className="book-thumb" 
                />
                <div className="book-info">
                  <span className="book-label">Currently Reading</span>
                  <h5 className="book-title">La photo qui tue – Anthony Horowitz</h5>
                </div>
              </div>
            </div>

            {/* 2. GERMAN CARD (A1 - 15%) */}
            <div className="lang-card active">
              <div className="lang-bg-code">DE</div>
              
              <div className="lang-header">
                <span className="lang-status">● Active Learning</span>

                {/* --- ADDED: NAME SECTION --- */}
                <div className="lang-title-group">
                  <h3>German</h3>
                  <span className="native-lang">Deutsch</span>
                </div>

                <div className="lang-meta">
                  <span className="lang-level">Level A1</span>
                  <span className="lang-percentage">15%</span>
                </div>
              </div>

              <div className="progress-track">
                <motion.div 
                  className="progress-fill" 
                  initial={{ width: 0 }} 
                  whileInView={{ width: '15%' }} 
                  transition={{ duration: 1.5, delay: 0.4 }}
                />
              </div>

              {/* Reading Section */}
              <div className="current-read">
                <img 
                  src={book1} 
                  alt="gesammelte werke" 
                  className="book-thumb" 
                />
                <div className="book-info">
                  <span className="book-label">Currently Reading</span>
                  <h5 className="book-title">Gesammelte Werke – Franz Kafka</h5>
                </div>
              </div>
            </div>

            {/* 3. SPANISH CARD (Locked) */}
            <div className="lang-card locked">
              <div className="lang-bg-code">ES</div>
              
              <div className="lang-header">
                <span className="lang-status">○ Initializing...</span>

                {/* --- ADDED: NAME SECTION --- */}
                <div className="lang-title-group">
                  <h3>Spanish</h3>
                  <span className="native-lang">Español</span>
                </div>

                <div className="lang-meta">
                  <span className="lang-level">Beginner</span>
                  <span className="lang-percentage" style={{ color: '#555' }}>0%</span>
                </div>
              </div>

              <div className="progress-track" style={{ opacity: 0.3 }}>
                 {/* Empty bar */}
              </div>

              {/* Placeholder for layout consistency, empty */}
              <div className="current-read" style={{ opacity: 0, pointerEvents: 'none' }}>
                  <div className="book-thumb"></div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Pursuing;