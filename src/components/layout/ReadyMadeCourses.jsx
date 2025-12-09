import React from 'react';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './ReadyMadeCourses.css';

const coursesData = [
  {
    id: 1,
    title: 'WRITING YOUR FIRST BOOK',
    price: '$299',
    duration: '8 Weeks',
    level: 'Beginner',
    // High-res notebook/writing image
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    features: [
      '40+ hours of video content',
      'Story structure frameworks',
      'Character development workshops',
      'Publishing guidance'
    ]
  },
  {
    id: 2,
    title: 'MOVIE EDITING MASTERY',
    price: '$399',
    duration: '10 Weeks',
    level: 'Advanced',
    // Video timeline editing image
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?auto=format&fit=crop&w=800&q=80',
    features: [
      '50+ hours of editing tutorials',
      'Industry-standard software training',
      'Portfolio-worthy projects',
      'Color grading & effects'
    ]
  },
  {
    id: 3,
    title: 'SCREENWRITING FUNDAMENTALS',
    price: '$249',
    duration: '6 Weeks',
    level: 'Beginner',
    // Script/typewriter image
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&w=800&q=80',
    features: [
      '30+ hours of content',
      'Script formatting templates',
      'Dialogue writing techniques',
      'Industry submission guide'
    ]
  },
  {
    id: 4,
    title: 'YOUR FREELANCING JOURNEY',
    price: '$199',
    duration: '4 Weeks',
    level: 'All Levels',
    // Modern workspace image
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80',
    features: [
      '20+ hours of business training',
      'Client acquisition strategies',
      'Portfolio & branding setup',
      'Pricing & negotiation tactics'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
  hover: { 
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(79, 195, 247, 0.1)',
    transition: { duration: 0.3 }
  }
};

const ReadyMadeCourses = () => {
  return (
    <section id="ready-made-courses">
      <motion.div 
        className="ready-courses-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Header */}
        <div className="courses-header">
          <h2 className="section-title">READY-MADE COURSES</h2>
          <p className="section-subtitle">
            Structured learning paths with comprehensive content and lifetime access
          </p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {coursesData.map((course) => (
            <motion.div 
              key={course.id} 
              className="course-card"
              variants={cardVariants}
              whileHover="hover"
            >
              
              {/* Image Header with Price */}
              <div className="course-image-wrapper">
                <img src={course.image} alt={course.title} className="course-img" />
                <div className="price-tag">{course.price}</div>
                <div className="overlay-gradient-bottom"></div>
              </div>

              {/* Card Content */}
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                
                {/* Meta Data Row */}
                <div className="course-meta">
                  <div className="meta-item">
                    <AccessTimeIcon className="meta-icon" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <BarChartIcon className="meta-icon" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="course-features">
                  {course.features.map((feature, index) => (
                    <li key={index}>
                      <CheckCircleOutlineIcon className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Enroll Button */}
                <motion.button 
                  className="enroll-btn"
                  whileTap={{ scale: 0.98 }}
                >
                  Enroll Now <ArrowForwardIcon className="arrow-icon" />
                </motion.button>
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default ReadyMadeCourses;