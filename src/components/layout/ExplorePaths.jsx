import React from 'react';
import { motion } from 'framer-motion';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ClassIcon from '@mui/icons-material/Class'; // For Ready-Made Courses
import PersonIcon from '@mui/icons-material/Person'; // For Private 1-To-1
import './ExplorePaths.css';

// Data for the learning path cards
const pathsData = [
  {
    id: 1,
    icon: <YouTubeIcon className="path-icon" />,
    title: 'Free YouTube Tutorials',
    description: 'Access creative and technical tutorials completely free',
  },
  {
    id: 2,
    icon: <ClassIcon className="path-icon" />,
    title: 'Ready-Made Courses',
    description: 'Comprehensive structured learning paths',
  },
  {
    id: 3,
    icon: <PersonIcon className="path-icon" />,
    title: 'Private 1-To-1 Lessons',
    description: 'Personalized coaching tailored to your goals',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const headerVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: '0 10px 30px rgba(79, 195, 247, 0.4), inset 0 0 20px rgba(79, 195, 247, 0.1)',
    transition: { duration: 0.3 },
  },
};

const ExplorePaths = () => {
  return (
    <section id="explore-paths">
      <motion.div
        className="explore-paths-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div className="explore-header" variants={headerVariants}>
          <h2 className="section-title">EXPLORE LEARNING PATHWAYS</h2>
          <p className="section-subtitle">
            Choose the learning format that works best for you
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="paths-grid">
          {pathsData.map((path) => (
            <motion.div
              key={path.id}
              className="path-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="icon-container glow-icon">{path.icon}</div>
              <h3 className="path-title">{path.title}</h3>
              <p className="path-description">{path.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExplorePaths;