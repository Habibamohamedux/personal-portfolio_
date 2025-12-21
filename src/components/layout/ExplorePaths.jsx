import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ClassIcon from '@mui/icons-material/Class';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import './ExplorePaths.css';

const pathsData = [
  {
    id: 1,
    icon: <YouTubeIcon className="explore-paths__icon" />,
    title: 'Free YouTube Tutorials',
    description: 'Access creative and technical tutorials completely free.',
  },
  {
    id: 2,
    icon: <ClassIcon className="explore-paths__icon" />,
    title: 'Ready-Made Courses',
    description: 'Comprehensive structured learning paths tailored for you.',
  },
  {
    id: 3,
    icon: <PersonIcon className="explore-paths__icon" />,
    title: 'Private 1-To-1 Lessons',
    description: 'Personalized coaching tailored specifically to your goals.',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hover: { y: -8, transition: { duration: 0.3 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 25, stiffness: 300 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

const ExplorePaths = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  return (
    <section id="explore-paths">
      <motion.div
        className="explore-paths__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header - Left Aligned */}
        <div className="explore-paths__header">
          <h2 className="explore-paths__title">EXPLORE LEARNING PATHWAYS</h2>
          <div className="explore-paths__divider"></div>
          <p className="explore-paths__subtitle">
            Choose the learning format that works best for your schedule and goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="explore-paths__grid">
          {pathsData.map((path) => (
            <motion.div
              key={path.id}
              className="explore-paths__card"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedPath(path)}
              role="button"
              tabIndex={0}
            >
              <div className="explore-paths__icon-box">{path.icon}</div>
              <h3 className="explore-paths__card-title">{path.title}</h3>
              <p className="explore-paths__card-desc">{path.description}</p>
              
              <div className="explore-paths__arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* "Coming Soon" Popup Modal */}
      <AnimatePresence>
        {selectedPath && (
          <motion.div 
            className="explore-paths__modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPath(null)}
          >
            <motion.div 
              className="explore-paths__modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
            >
              <button className="explore-paths__close-btn" onClick={() => setSelectedPath(null)}>
                <CloseIcon />
              </button>
              
              <div className="explore-paths__modal-icon">
                {selectedPath.icon}
              </div>
              <h3>{selectedPath.title}</h3>
              <p className="explore-paths__badge">COMING SOON</p>
              <p className="explore-paths__modal-text">
                We are currently putting the finishing touches on this module. 
                Stay tuned for updates!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExplorePaths;