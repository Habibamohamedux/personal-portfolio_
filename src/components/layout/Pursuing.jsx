import React from 'react';
import { motion } from 'framer-motion';
import './Pursuing.css';

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
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Currently Pursuing</span>
          <h1 className="big-title">What I'm Pursuing Now?</h1>
        </motion.div>

        {/* Main Content Split */}
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
                From the first thought of pregnancy to postnatal care, ORA aims to be a compassionate, intelligent companion that empowers women with personalized guidance, emotional support, and reliable information — from the first heartbeat to the first steps.
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
              {/* REPLACE WITH YOUR MAIN ORA IMAGE (The baby/womb concept) */}
              <img 
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2670&auto=format&fit=crop" 
                alt="ORA Concept Art" 
                className="main-img" 
              />
            </div>
            
            {/* The Floating App Icon */}
            <motion.div 
              className="floating-ui"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {/* REPLACE WITH YOUR APP LOGO/ICON */}
              <img 
                src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" 
                alt="ORA App Icon" 
              />
            </motion.div>
          </motion.div>

        </div>

        {/* --- EXTRA CREATIVE SECTION: Technical Pillars --- */}
        <motion.div 
          className="tech-stack-strip"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="tech-card">
            <h4>Artificial Intelligence</h4>
            <p>Empathetic NLP models tuned for maternal emotional support and guidance.</p>
          </div>
          <div className="tech-card">
            <h4>IoT Integration</h4>
            <p>Seamless connection with health monitors for real-time vitals tracking.</p>
          </div>
          <div className="tech-card">
            <h4>Data Security</h4>
            <p>End-to-end encryption ensuring complete privacy for sensitive health data.</p>
          </div>
          <div className="tech-card">
            <h4>UX Research</h4>
            <p>Designed based on interviews with 50+ expecting mothers.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Pursuing;