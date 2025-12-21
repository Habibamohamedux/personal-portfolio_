import React from 'react';
import { motion } from 'framer-motion';
// Icons for Topics
import DescriptionIcon from '@mui/icons-material/Description';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import PaletteIcon from '@mui/icons-material/Palette';
import CodeIcon from '@mui/icons-material/Code';
import RateReviewIcon from '@mui/icons-material/RateReview';
import WorkIcon from '@mui/icons-material/Work';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import './PrivateSessions.css';

const topicsData = [
  { 
    id: 1, 
    label: 'Creative Writing', 
    desc: 'Story structure, character arcs, and dialogue mastery.',
    icon: <DescriptionIcon /> 
  },
  { 
    id: 2, 
    label: 'Video Editing', 
    desc: 'From rough cuts to color grading and sound design.',
    icon: <MovieCreationIcon /> 
  },
  { 
    id: 3, 
    label: 'UX/UI Design', 
    desc: 'User research, wireframing, and high-fidelity prototyping.',
    icon: <PaletteIcon /> 
  },
  { 
    id: 4, 
    label: 'Web Development', 
    desc: 'Modern frontend frameworks, CSS animations, and responsiveness.',
    icon: <CodeIcon /> 
  },
  { 
    id: 5, 
    label: 'Screenwriting', 
    desc: 'Formatting scripts and pitching to industry professionals.',
    icon: <RateReviewIcon /> 
  },
  { 
    id: 6, 
    label: 'Freelancing 101', 
    desc: 'Pricing your work, finding clients, and managing contracts.',
    icon: <WorkIcon /> 
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const UpcomingTopics = () => {
  return (
    <section id="upcoming-topics">
      <motion.div 
        className="upcoming-topics__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Header */}
        <div className="upcoming-topics__header">
          <div className="upcoming-topics__badge">
            <AutoAwesomeIcon fontSize="small" /> Coming Soon
          </div>
          <h2 className="upcoming-topics__title">UPCOMING TOPICS</h2>
          <p className="upcoming-topics__subtitle">
            We are constantly expanding our curriculum. Here is a sneak peek at the modules currently in development.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="upcoming-topics__grid">
          {topicsData.map((topic) => (
            <motion.div 
              key={topic.id} 
              className="upcoming-topics__card"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="upcoming-topics__icon-wrapper">
                {topic.icon}
              </div>
              <div className="upcoming-topics__content">
                <h3 className="upcoming-topics__card-title">{topic.label}</h3>
                <p className="upcoming-topics__card-desc">{topic.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default UpcomingTopics;