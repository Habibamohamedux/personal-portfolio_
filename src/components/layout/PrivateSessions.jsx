import React from 'react';
import { motion } from 'framer-motion';
// Icons for "Why Choose"
import TrackChangesIcon from '@mui/icons-material/TrackChanges'; // Target
import BoltIcon from '@mui/icons-material/Bolt'; // Lightning
import LightbulbIcon from '@mui/icons-material/Lightbulb'; // Bulb

// Icons for "Available Subjects"
import DescriptionIcon from '@mui/icons-material/Description'; // Writing
import MovieCreationIcon from '@mui/icons-material/MovieCreation'; // Video
import PaletteIcon from '@mui/icons-material/Palette'; // UX/UI
import CodeIcon from '@mui/icons-material/Code'; // Web Dev
import RateReviewIcon from '@mui/icons-material/RateReview'; // Screenwriting
import WorkIcon from '@mui/icons-material/Work'; // Freelancing

// Icons for Pricing
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Using filled circle for bullet points
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './PrivateSessions.css';

// --- DATA ---

const benefitsData = [
  {
    id: 1,
    icon: <TrackChangesIcon className="benefit-icon" />,
    title: 'Tailored Learning',
    desc: 'Curriculum designed specifically for your goals and current skill level'
  },
  {
    id: 2,
    icon: <BoltIcon className="benefit-icon" />,
    title: 'Faster Progress',
    desc: 'Learn at your own pace with immediate feedback and guidance'
  },
  {
    id: 3,
    icon: <LightbulbIcon className="benefit-icon" />,
    title: 'Expert Mentorship',
    desc: 'Direct access to industry professionals with real-world experience'
  }
];

const subjectsData = [
  { id: 1, label: 'Creative Writing', icon: <DescriptionIcon /> },
  { id: 2, label: 'Video Editing', icon: <MovieCreationIcon /> },
  { id: 3, label: 'UX/UI Design', icon: <PaletteIcon /> },
  { id: 4, label: 'Web Development', icon: <CodeIcon /> },
  { id: 5, label: 'Screenwriting', icon: <RateReviewIcon /> },
  { id: 6, label: 'Freelancing', icon: <WorkIcon /> },
];

const pricingData = [
  {
    id: 1,
    title: 'Single Session',
    price: '$75',
    subtitle: '1 hour',
    features: ['1-on-1 video call', 'Personalized curriculum', 'Session recording', 'Follow-up support'],
    isPopular: false,
    btnClass: 'outline-btn'
  },
  {
    id: 2,
    title: 'Bundle of 5',
    price: '$325',
    subtitle: '5 hours total',
    features: ['Save $50', 'Priority scheduling', 'Custom learning path', 'Progress tracking'],
    isPopular: true, // This triggers the "Most Popular" badge and glow
    btnClass: 'solid-btn'
  },
  {
    id: 3,
    title: 'Bundle of 10',
    price: '$600',
    subtitle: '10 hours total',
    features: ['Save $150', 'Dedicated mentor', 'Portfolio review', 'Career guidance'],
    isPopular: false,
    btnClass: 'outline-btn'
  }
];

// --- ANIMATIONS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const PrivateSessions = () => {
  return (
    <section id="private-sessions">
      <motion.div 
        className="private-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Main Header */}
        <div className="private-header">
          <h2 className="section-title">PRIVATE 1-TO-1 LESSONS</h2>
          <p className="section-subtitle">
            Get personalized coaching tailored to your unique learning goals and pace
          </p>
        </div>

        {/* 1. Why Choose Section */}
        <div className="sub-section">
          <h3 className="sub-title">WHY CHOOSE PRIVATE LESSONS?</h3>
          <div className="benefits-grid">
            {benefitsData.map((b) => (
              <motion.div key={b.id} className="benefit-card" variants={itemVariants}>
                <div className="icon-wrapper glow-blue">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Available Subjects Section */}
        <div className="sub-section">
          <h3 className="sub-title">AVAILABLE SUBJECTS</h3>
          <div className="subjects-grid">
            {subjectsData.map((s) => (
              <motion.div key={s.id} className="subject-card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <div className="subject-icon">{s.icon}</div>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Pricing Section */}
        <div className="pricing-grid">
          {pricingData.map((plan) => (
            <motion.div 
              key={plan.id} 
              className={`pricing-card ${plan.isPopular ? 'popular-card' : ''}`}
              variants={itemVariants}
            >
              {plan.isPopular && <div className="popular-badge">Most Popular</div>}
              
              <h4 className="plan-title">{plan.title}</h4>
              <div className="plan-price">{plan.price}</div>
              <p className="plan-subtitle">{plan.subtitle}</p>
              
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircleIcon className="check-dot" /> {feature}
                  </li>
                ))}
              </ul>

              <button className={`book-btn ${plan.btnClass}`}>
                Book a Session <ArrowForwardIcon fontSize="small" />
              </button>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default PrivateSessions;