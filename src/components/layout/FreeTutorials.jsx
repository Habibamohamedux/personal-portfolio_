import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import './FreeTutorials.css';

const tutorialsData = [
  {
    id: 1,
    title: 'Writing Your First Book',
    level: 'Beginner',
    views: '8.2K views',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'UX Fundamentals',
    level: 'Beginner',
    views: '15.3K views',
    duration: '55 min',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'HTML & CSS for Beginners',
    level: 'Beginner',
    views: '18.9K views',
    duration: '1h 20min',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
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

// Modal Animation
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 25, stiffness: 300 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

const FreeTutorials = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  return (
    <section id="free-tutorials">
      <motion.div 
        className="ft-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Header Section */}
        <div className="ft-header">
          <h2 className="ft-title">FEATURED FREE TUTORIALS</h2>
          <p className="ft-subtitle">Start learning today with our most popular YouTube content</p>
        </div>

        {/* Grid of Cards */}
        <div className="ft-grid">
          {tutorialsData.map((tutorial) => (
            <motion.div 
              key={tutorial.id} 
              className="ft-card"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedTutorial(tutorial)}
            >
              <div className="ft-image-wrapper">
                <img src={tutorial.image} alt={tutorial.title} className="ft-bg-image" />
                <div className="ft-overlay">
                    <PlayCircleOutlineIcon className="ft-play-icon" />
                </div>
                
                <div className="ft-duration-badge">
                  <AccessTimeIcon style={{ fontSize: '14px', marginRight: '4px' }} />
                  {tutorial.duration}
                </div>
              </div>

              <div className="ft-content">
                <div className="ft-meta-row">
                  <span className={`ft-level-badge ${tutorial.level.toLowerCase()}`}>
                    {tutorial.level}
                  </span>
                  <span className="ft-views-count">{tutorial.views}</span>
                </div>
                
                <h3 className="ft-card-title">{tutorial.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selectedTutorial && (
          <motion.div 
            className="ft-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTutorial(null)}
          >
            <motion.div 
              className="ft-modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="ft-close-btn" onClick={() => setSelectedTutorial(null)}>
                <CloseIcon />
              </button>
              
              <div className="ft-modal-body">
                <div className="ft-modal-icon">
                    <AccessTimeIcon style={{ fontSize: '3rem' }} />
                </div>
                <h3 className="ft-modal-title">{selectedTutorial.title}</h3>
                <span className="ft-modal-badge">COMING SOON</span>
                <p className="ft-modal-desc">
                    We are currently polishing this tutorial. 
                    Subscribe to the channel to get notified when it drops!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FreeTutorials;