import React from 'react';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './FreeTutorials.css';

// Real images sourced from Unsplash to match the creative/tech theme
const tutorialsData = [
  {
    id: 1,
    title: 'Writing Your First Book',
    level: 'Beginner',
    views: '8.2K views',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    categoryColor: '#4fc3f7'
  },
  {
    id: 2,
    title: 'Movie Editing Fundamentals',
    level: 'Intermediate',
    views: '12.4K views',
    duration: '1h 15min',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?auto=format&fit=crop&w=800&q=80',
    categoryColor: '#7b4ff7'
  },
  {
    id: 3,
    title: 'Writing Your First Script',
    level: 'Beginner',
    views: '6.7K views',
    duration: '50 min',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&w=800&q=80',
    categoryColor: '#4fc3f7'
  },
  {
    id: 4,
    title: 'UX Fundamentals',
    level: 'Beginner',
    views: '15.3K views',
    duration: '55 min',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    categoryColor: '#4fc3f7'
  },
  {
    id: 5,
    title: 'HTML & CSS for Beginners',
    level: 'Beginner',
    views: '18.9K views',
    duration: '1h 20min',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    categoryColor: '#4fc3f7'
  },
  {
    id: 6,
    title: 'Your Freelancing Journey',
    level: 'Intermediate',
    views: '9.1K views',
    duration: '40 min',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    categoryColor: '#7b4ff7'
  }
];

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
              <div className="card-image-wrapper">
                <img src={tutorial.image} alt={tutorial.title} className="card-bg-image" />
                <div className="overlay-gradient"></div>
                
                <div className="duration-badge">
                  <AccessTimeIcon style={{ fontSize: '14px', marginRight: '4px' }} />
                  {tutorial.duration}
                </div>
              </div>

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