import React from 'react';
import { motion } from 'framer-motion';
import './TrendingTags.css';

const tags = [
  "Design", "UX", "Frontend", "React", "CaseStudy", 
  "Research", "Tutorial", "Architecture", "ARVR", 
  "Writing", "Accessibility", "Performance", 
  "AI in Design", "MotherhoodTech", "CreativeMedia"
];

const TrendingTags = () => {
  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="trending-tags-section">
      <div className="trending-header">
        <h2 className="trending-title"># TRENDING TAGS</h2>
        <p className="trending-subtitle">Click a tag to filter content instantly</p>
      </div>

      <motion.div 
        className="tags-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {tags.map((tag, index) => (
          <motion.button 
            key={index} 
            className="glass-tag"
            variants={tagVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            # {tag}
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
};

export default TrendingTags;