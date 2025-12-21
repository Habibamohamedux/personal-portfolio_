import React, { useState, useEffect } from 'react';
import GridScan from './GridScan.jsx';
import './CoursesHero.css';

const CoursesHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="courses-hero">
      {/* Background Layer (GridScan) */}
      <div className="courses-hero__bg">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#0f172a"
          gridScale={0.1}
          scanColor="#3b82f6"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* Content Layer */}
      <div className={`courses-hero__content ${mounted ? "fade-in" : ""}`}>
        
        {/* Header Group */}
        <div className="courses-hero__header">
            <span className="courses-hero__dot"></span>
            <p className="courses-hero__subtitle">Educational Resources</p>
        </div>
        
        {/* Title Group - Matches ServicesHero Style */}
        <div className="courses-hero__title-wrapper">
            <h1 className="courses-hero__title" data-text="LEARN CRAFT">LEARN CRAFT</h1>
        </div>
        
        <p className="courses-hero__desc">
Courses designed for everyone, turning curiosity into skill—no background required.        </p>

      </div>

      {/* Scroll Indicator */}
      <div className="courses-hero__scroll">
        <div className="courses-hero__mouse"></div>
      </div>
    </section>
  );
};

export default CoursesHero;