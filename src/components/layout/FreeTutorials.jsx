import React from 'react';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './FreeTutorials.css';

// Data derived exactly from your uploaded screenshot
const tutorialsData = [
  {
    id: 1,
    title: 'Writing Your First Book',
    level: 'Beginner',
    views: '8.2K views',
    duration: '45 min',
    image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Book+Writing', // Replace with real image
    categoryColor: '#4fc3f7'
  },
  {
    id: 2,
    title: 'Movie Editing Fundamentals',
    level: 'Intermediate',
    views: '12.4K views',
    duration: '1h 15min',
    image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Video+Editing',
    categoryColor: '#7b4ff7'
  },
  {
    id: 3,
    title: 'Writing Your First Script',
    level: 'Beginner',
    views: '6.7K views',
    duration: '50 min',
    image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Script+Writing',
    categoryColor: '#4fc3f7'
  },
  {
    id: 4,
    title: 'UX Fundamentals',
    level: 'Beginner',
    views: '15.3K views',
    duration: '55 min',
    image: 'https://placehold.co/600x400/1a1a1a/FFF?text=UX+Design',
    categoryColor: '#4fc3f7'
  },
  {
    id: 5,
    title: 'HTML & CSS for Beginners',
    level: 'Beginner',
    views: '18.9K views',
    duration: '1h 20min',
    image: 'https://placehold.co/600x400/1a1a1a/FFF?text=HTML+CSS',
    categoryColor: '#4fc3f7'
  },
  {
    id: 6,
    title: 'Your Freelancing Journey',
    level: 'Intermediate',
    views: '9.1K views',
    duration: '40 min',
    image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Freelancing',
    categoryColor: '#7b4ff7'
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
  hover: { 
    y: -10,
    transition: { duration: 0.3 }
  }
};

const FreeTutorials = () => {
  return (
    <section id="free-tutorials">
      <motion.div 
        className="tutorials-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Header Section */}
        <div className="tutorials-header">
          <h2 className="section-title">FEATURED FREE TUTORIALS</h2>
          <p className="section-subtitle">Start learning today with our most popular YouTube content</p>
        </div>

        {/* Grid of Cards */}
        <div className="tutorials-grid">
          {tutorialsData.map((tutorial) => (
            <motion.div 
              key={tutorial.id} 
              className="tutorial-card"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Card Image Header */}
              <div className="card-image-wrapper">
                <img src={tutorial.image} alt={tutorial.title} className="card-bg-image" />
                <div className="overlay-gradient"></div>
                
                {/* Duration Badge */}
                <div className="duration-badge">
                  <AccessTimeIcon style={{ fontSize: '14px', marginRight: '4px' }} />
                  {tutorial.duration}
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <div className="meta-row">
                  <span className={`level-badge ${tutorial.level.toLowerCase()}`}>
                    {tutorial.level}
                  </span>
                  <span className="views-count">{tutorial.views}</span>
                </div>
                
                <h3 className="card-title">{tutorial.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="tutorials-footer">
          <motion.button 
            className="view-all-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Tutorials
          </motion.button>
        </div>

      </motion.div>
    </section>
  );
};

export default FreeTutorials;