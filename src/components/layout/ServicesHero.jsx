import React, { useEffect, useState } from 'react';
import './ServicesHero.css';

const ServicesHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="services-hero">
      
      {/* 1. RESTORED: The Vibrant Animated Background */}
      <div className="services-hero__bg">
        <div className="services-hero__blob blob-1"></div>
        <div className="services-hero__blob blob-2"></div>
        <div className="services-hero__blob blob-3"></div>
      </div>

      {/* Dark Overlay to keep text readable */}
      <div className="services-hero__overlay"></div>

      {/* 2. Content Layer */}
      <div className={`services-hero__content ${mounted ? "fade-in" : ""}`}>
        
        <div className="services-hero__header">
          <span className="services-hero__dot"></span>
          <p className="services-hero__subtitle">Multidisciplinary</p>
        </div>

        <div className="services-hero__title-wrapper">
          <h1 className="services-hero__title" data-text="EXPERTISE">
            EXPERTISE
          </h1>
        </div>

        <p className="services-hero__desc">
          From concept to execution, I help brands communicate, design, 
          and build digital experiences that resonate.
        </p>

      </div>

      {/* 3. Scroll Indicator */}
      <div className="services-hero__scroll">
        <div className="services-hero__mouse"></div>
      </div>

    </section>
  );
};

export default ServicesHero;