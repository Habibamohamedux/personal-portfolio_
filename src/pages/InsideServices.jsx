import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./InsideServices.css";

const InsideServices = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve the data passed from the clicked card
  const { cardData } = location.state || {};

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Safety check: If page is accessed directly without clicking a card, go back
  if (!cardData) {
    return (
      <div className="error-container">
        <h2>Service not found</h2>
        <button onClick={() => navigate("/")} className="back-btn">Go Back</button>
      </div>
    );
  }

  return (
    <div className="inside-service-page">
      
      {/* --- HERO SECTION --- */}
      <section 
        className="is-hero" 
        style={{ background: cardData.background }}
      >
        {/* Floating Shapes (Inherited from card) */}
        <img src={cardData.shapes[0]} alt="" className="is-shape is-shape-1" />
        <img src={cardData.shapes[1]} alt="" className="is-shape is-shape-2" />

        <div className="is-hero-content">
          <h4 className="is-subtitle">{cardData.category}</h4>
          <h1 className="is-title">{cardData.title}</h1>
          <p className="is-description">{cardData.description}</p>
        </div>
      </section>

      {/* --- DETAILS SECTION --- */}
      <section className="is-details-section">
        <div className="is-section-header">
          <h2 className="is-section-title">What We Deliver</h2>
          <p className="is-section-desc">
            Comprehensive solutions tailored to your specific needs. 
            We dive deep into {cardData.category} to ensure excellence.
          </p>
        </div>

        {/* Using the tags as feature cards */}
        <div className="is-grid">
          {cardData.tags.map((tag, index) => (
            <div key={index} className="is-card glass-panel">
              <div className="is-card-number">{(index + 1).toString().padStart(2, '0')}</div>
              <h3 className="is-card-title">{tag}</h3>
              <p className="is-card-text">
                Professional execution of {tag} utilizing industry-standard tools 
                and creative methodologies to drive engagement.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- GENERIC PROCESS SECTION (Applies to all services) --- */}
      <section className="is-process-section">
        <h2 className="is-section-title dark-text">Our Process</h2>
        
        <div className="is-process-row">
          <div className="process-step">
            <span className="step-num" style={{color: cardData.buttonColor}}>01</span>
            <h3>Discovery</h3>
            <p>We analyze your goals, audience, and challenges.</p>
          </div>
          <div className="process-step">
            <span className="step-num" style={{color: cardData.buttonColor}}>02</span>
            <h3>Strategy</h3>
            <p>We build a roadmap tailored to the specific service.</p>
          </div>
          <div className="process-step">
            <span className="step-num" style={{color: cardData.buttonColor}}>03</span>
            <h3>Execution</h3>
            <p>We design, build, and craft with precision.</p>
          </div>
          <div className="process-step">
            <span className="step-num" style={{color: cardData.buttonColor}}>04</span>
            <h3>Delivery</h3>
            <p>Final polish, testing, and handover of assets.</p>
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="is-cta" style={{ background: cardData.background }}>
        <h2>Ready to start your project?</h2>
        <button 
          className="is-cta-button"
          style={{ background: cardData.buttonColor }}
        >
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default InsideServices;