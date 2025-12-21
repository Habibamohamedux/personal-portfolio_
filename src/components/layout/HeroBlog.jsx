import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./HeroBlog.css"; 
import BlogBg from './BlogBg.jsx';

export default function HeroBlog() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero-blog">
      {/* Background Layer */}
      <div className="hero-blog__bg">
        <BlogBg />
      </div>

      {/* Content Layer */}
      <div className={`hero-blog__content ${mounted ? "fade-in" : ""}`}>
        
        {/* Header Group */}
        <div className="hero-blog__header">
            <span className="hero-blog__dot"></span>
            <p className="hero-blog__subtitle">Insights & Stories</p>
        </div>
        
        {/* Main Title */}
        <div className="hero-blog__title-wrapper">
            <h1 className="hero-blog__title" data-text="THE JOURNAL">THE JOURNAL</h1>
        </div>
        
        {/* Description */}
        <p className="hero-blog__desc">
            A curated collection of thoughts on Design, Technology, and meaningful Life Experiences.
        </p>

      </div>

      {/* Scroll Indicator */}
      <div className="hero-blog__scroll">
        <div className="hero-blog__mouse"></div>
      </div>
    </section>
  );
}