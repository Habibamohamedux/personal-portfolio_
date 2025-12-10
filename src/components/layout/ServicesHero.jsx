import React from 'react';
import './ServicesHero.css';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="hero-section">
      
      {/* 1. The Moving Blobs (Background) */}
      <div className="hero-background">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-blob blob-3"></div>
      </div>

      {/* 2. The Dark Gradient Overlay (Middle Layer) */}
      {/* This ensures the bottom stays dark and readable */}
      <div className="hero-overlay"></div>

      {/* 3. The Content (Top Layer) */}
      <div className="hero-container">
        <div className="content-center">
          
          <div className="glass-badge">
            <Sparkles size={16} className="text-blue-400" />
            <span>Multidisciplinary Creative Services</span>
          </div>

          <h1 className="hero-title">
            Creative Services for<br />
            Brands, Creators,<br />
            and Personal Projects
          </h1>

          <p className="hero-description">
            From concept to execution, I help clients communicate, design, 
            and build digital experiences that resonate and perform.
          </p>

          <div className="button-group">
            <button className="btn btn-glass">
              View Services <ArrowRight size={22} style={{ marginLeft: '6px' }} />
            </button>
            
            <button className="btn btn-solid">
              <MessageSquare size={22} style={{ marginRight: '8px' }} /> Contact Me
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;