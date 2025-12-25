import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./InsideServices.css";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { ArrowRight, FolderOpen, ExternalLink } from "lucide-react";

// --- MOCK PROJECT DATA (Replace with your actual images) ---
const projectGallery = [
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
];

const InsideServices = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { cardData } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- ERROR STATE ---
  if (!cardData) {
    return (
      <div className="error-container">
        <Helmet><title>Service Not Found</title></Helmet>
        <h2>Service not found</h2>
        <button onClick={() => navigate("/")} className="back-btn">Go Back</button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${cardData.title} | Our Services`}</title>
        <meta name="description" content={cardData.description} />
      </Helmet>

      <Navbar />
      
      <div className="inside-service-page">
        
        {/* 1. HERO SECTION */}
        <section 
          className="is-hero" 
          style={{ background: cardData.background }}
        >
          {/* Decorative Shapes */}
          <img src={cardData.shapes[0]} alt="" className="is-shape is-shape-1" />
          <img src={cardData.shapes[1]} alt="" className="is-shape is-shape-2" />

          <div className="is-hero-content">
            <h4 className="is-subtitle">{cardData.category}</h4>
            <h1 className="is-title">{cardData.title}</h1>
            <p className="is-description">{cardData.description}</p>
          </div>
        </section>

        {/* 2. FEATURED WORK (FOLDER STYLE) */}
        <section className="is-work-section">
          <div className="is-section-header">
            <FolderOpen size={32} color="#fff" strokeWidth={1.5} />
            <h2 className="is-section-title">Selected Projects</h2>
          </div>
          
          <div className="project-folder-grid">
            {projectGallery.map((img, idx) => (
              <div key={idx} className="project-file">
                <div className="file-tab" style={{ background: cardData.buttonColor }}></div>
                <div className="file-content glass-panel">
                  <div className="file-img-wrapper">
                    <img src={img} alt={`Project ${idx}`} />
                  </div>
                  <div className="file-meta">
                    <span className="file-name">Project_0{idx + 1}</span>
                    <button className="file-link">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WHAT WE DELIVER (DETAILS) */}
        <section className="is-details-section">
          <div className="is-section-header">
            <h2 className="is-section-title">What We Deliver</h2>
            <p className="is-section-desc">
              Comprehensive capabilities tailored to your specific needs in {cardData.category}.
            </p>
          </div>

          <div className="is-grid">
            {cardData.tags.map((tag, index) => (
              <div key={index} className="is-card glass-panel">
                <div className="is-card-number" style={{ color: 'rgba(255,255,255,0.15)' }}>
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="is-card-title">{tag}</h3>
                <p className="is-card-text">
                  Professional execution of {tag} using industry-standard methodologies.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FEATURED CASE STUDY */}
        <section className="case-study-section">
          <div className="cs-container">
            <div className="cs-content-box glass-panel">
              <span className="cs-label" style={{ color: cardData.buttonColor }}>FEATURED CASE STUDY</span>
              <h2 className="cs-title">Apex Digital Transformation</h2>
              <p className="cs-desc">
                We partnered with Apex to completely reimagine their digital presence using {cardData.category}, achieving a 200% increase in user retention.
              </p>
              
              <div className="cs-stats">
                <div className="cs-stat-item">
                  <span className="stat-val">200%</span>
                  <span className="stat-label">Growth</span>
                </div>
                <div className="cs-stat-item">
                  <span className="stat-val">40%</span>
                  <span className="stat-label">Conversion</span>
                </div>
              </div>

              <button className="cs-btn" style={{ background: cardData.buttonColor }}>
                View Case Study <ArrowRight size={20} />
              </button>
            </div>

            <div className="cs-visual-box">
              <div className="cs-img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Case Study" 
                />
              </div>
              {/* Tint overlay based on service color */}
              <div className="cs-gradient-overlay" style={{ background: cardData.background }}></div>
            </div>
          </div>
        </section>

        {/* 5. GET IN TOUCH (CTA) */}
        <section className="is-cta" style={{ background: cardData.background }}>
          <div className="cta-content">
            <h2>Ready to start your project?</h2>
            <p>Let's collaborate to bring your vision to life.</p>
            <button className="is-cta-button">
              Get in Touch <ArrowRight size={18} />
            </button>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default InsideServices;