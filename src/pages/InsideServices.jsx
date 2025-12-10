import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // <--- 1. Import Helmet
import "./InsideServices.css";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { Check, Star, ArrowRight, ExternalLink } from "lucide-react";

const InsideServices = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { cardData } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- ERROR STATE (If accessed directly without state) ---
  if (!cardData) {
    return (
      <div className="error-container">
        {/* Helmet for Error State */}
        <Helmet>
          <title>Service Not Found</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        
        <h2>Service not found</h2>
        <button onClick={() => navigate("/")} className="back-btn">Go Back</button>
      </div>
    );
  }

  // --- MOCK PACKAGES ---
  const packages = [
    {
      name: "Starter",
      price: "$1,200",
      desc: "Essential foundations for small projects.",
      features: ["Initial Concept", "Basic Revisions", "Standard Delivery", "Source Files"]
    },
    {
      name: "Professional",
      price: "$3,500",
      desc: "Complete solution for growing businesses.",
      features: ["Advanced Concepts", "Unlimited Revisions", "Priority Support", "Full Assets Kit", "Strategy Session"],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Full-scale production and long-term support.",
      features: ["Dedicated Team", "24/7 Support", "Full IP Rights", "NDA Coverage", "Post-Launch Retainer"]
    }
  ];

  // --- MOCK GALLERY (Expanded to 6 items for 2 rows) ---
  const galleryImages = [
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    // New Row
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1634142402435-9093848643e0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <>
      {/* 2. ADD DYNAMIC HELMET TAGS */}
      <Helmet>
        <title>{`${cardData.title} | Our Services`}</title>
        <meta name="description" content={cardData.description} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={cardData.title} />
        <meta property="og:description" content={cardData.description} />
        {/* Uses the first shape image as a preview if available */}
        <meta property="og:image" content={cardData.shapes?.[0]} />
      </Helmet>

      <Navbar />
      <div className="inside-service-page">
        
        {/* --- HERO SECTION --- */}
        <section 
          className="is-hero" 
          style={{ background: cardData.background }}
        >
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

          <div className="is-grid">
            {cardData.tags.map((tag, index) => (
              <div key={index} className="is-card glass-panel">
                <div className="is-card-number" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="is-card-title">{tag}</h3>
                <p className="is-card-text">
                  Professional execution of {tag} utilizing industry-standard tools 
                  and creative methodologies.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PARALLAX PACKAGES SECTION (With Color Tint) --- */}
        <section className="is-packages-section">
          <div className="is-parallax-bg">
            {/* Color overlay to tint the parallax image with the service color */}
            <div className="parallax-tint" style={{ background: cardData.background }}></div>
          </div>
          
          <div className="is-packages-content">
            <h2 className="is-section-title center-text">Service Packages</h2>
            <div className="is-packages-grid">
              {packages.map((pkg, idx) => (
                <div key={idx} className={`package-card glass-panel ${pkg.isPopular ? 'pkg-popular' : ''}`}>
                  {pkg.isPopular && (
                    <div className="pkg-badge" style={{ background: cardData.buttonColor }}>
                      <Star size={12} fill="white"/> Recommended
                    </div>
                  )}
                  <h3 className="pkg-name">{pkg.name}</h3>
                  <div className="pkg-price" style={{ color: pkg.isPopular ? '#fff' : '#ccc' }}>
                    {pkg.price}
                  </div>
                  <p className="pkg-desc">{pkg.desc}</p>
                  <div className="pkg-divider"></div>
                  <ul className="pkg-features">
                    {pkg.features.map((feat, i) => (
                      <li key={i}>
                        <Check size={16} className="pkg-check" style={{ color: '#fff' }}/> {feat}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="pkg-btn" 
                    style={{ 
                      background: pkg.isPopular ? cardData.buttonColor : 'transparent',
                      border: pkg.isPopular ? 'none' : '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CASE STUDY SECTION --- */}
        <section className="case-study-section">
          <div className="cs-container">
            <div className="cs-content-box glass-panel">
              <span className="cs-label" style={{ color: '#fff', opacity: 0.7 }}>FEATURED CASE STUDY</span>
              <h2 className="cs-title">Apex Digital <br/> Transformation</h2>
              <p className="cs-desc">
                We partnered with Apex to completely reimagine their digital presence. 
                Using {cardData.category}, we achieved a 200% increase in user retention.
              </p>
              
              <div className="cs-stats">
                <div className="cs-stat-item">
                  <span className="stat-val" style={{ color: '#fff' }}>200%</span>
                  <span className="stat-label">Growth</span>
                </div>
                <div className="cs-stat-item">
                  <span className="stat-val" style={{ color: '#fff' }}>40%</span>
                  <span className="stat-label">Conversion</span>
                </div>
              </div>

              <button className="cs-btn" style={{ background: cardData.buttonColor }}>
                View Full Case Study <ArrowRight size={20} />
              </button>
            </div>

            <div className="cs-visual-box">
              <div className="cs-img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Case Study" 
                />
              </div>
              <div 
                className="cs-gradient-overlay" 
                style={{ background: cardData.background, opacity: 0.3 }}
              ></div>
            </div>
          </div>
        </section>

        {/* --- GALLERY SECTION (Expanded) --- */}
        <section className="is-gallery-section">
          <h2 className="is-section-title">Latest Work</h2>
          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="gallery-item">
                <img src={img} alt={`Project ${idx}`} />
                <div className="gallery-overlay" style={{ background: 'rgba(0,0,0,0.7)' }}>
                  <button className="gallery-btn" style={{ background: cardData.buttonColor }}>
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA FOOTER --- */}
        <section className="is-cta" style={{ background: cardData.background }}>
          <h2>Ready to start your project?</h2>
          <button 
            className="is-cta-button"
            style={{ background: '#fff', color: '#000' }}
          >
            Get in Touch
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default InsideServices;