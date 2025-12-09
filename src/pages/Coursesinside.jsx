import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // For Accordion
import './Coursesinside.css';

// --- Mock Data: Organized by Modules ---
const courseInfo = {
  title: "Advanced React Patterns",
  subtitle: "Master the art of scalable web applications",
  progress: 42,
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80"
};

const modulesData = [
  {
    id: 'mod1',
    title: "Module 1: Component Architecture",
    lessons: [
      {
        id: 101,
        title: "Understanding Compound Components",
        duration: "12:30",
        videoUrl: "https://www.youtube.com/embed/Pj_t3KuGq5k?si=React",
        description: "In this lesson, we break down the compound component pattern. You will learn how to share state implicitly between parent and child components."
      },
      {
        id: 102,
        title: "Control Props Pattern",
        duration: "15:45",
        videoUrl: "https://www.youtube.com/embed/M9I699Yj7io?si=Props",
        description: "Learn how to make your components controllable. This pattern allows users to manage the state of your component from the outside."
      }
    ]
  },
  {
    id: 'mod2',
    title: "Module 2: Hooks & Logic",
    lessons: [
      {
        id: 201,
        title: "Custom Hooks for Logic Reuse",
        duration: "18:20",
        videoUrl: "https://www.youtube.com/embed/6ThXsUwLWqc?si=Hooks",
        description: "Extracting business logic into custom hooks is crucial for clean architecture. We refactor a complex component into reusable hooks."
      },
      {
        id: 202,
        title: "Performance Optimization",
        duration: "20:10",
        videoUrl: "https://www.youtube.com/embed/0yzoAbrk66E?si=Perf",
        description: "Memoization, useMemo, and useCallback. When should you use them? We dive deep into the React render cycle."
      }
    ]
  },
  {
    id: 'mod3',
    title: "Module 3: Advanced State",
    lessons: [
      {
        id: 301,
        title: "Context API vs Redux",
        duration: "25:00",
        videoUrl: "https://www.youtube.com/embed/xxx?si=State",
        description: "A deep dive into global state management strategies and when to reach for an external library."
      }
    ]
  }
];

const CoursesInside = () => {
  // State to track current active lesson
  const [activeLesson, setActiveLesson] = useState(modulesData[0].lessons[0]);
  
  // State to track which modules are expanded (array of module IDs)
  const [expandedModules, setExpandedModules] = useState(['mod1', 'mod2']);

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId) 
        : [...prev, moduleId]
    );
  };

  return (
    <div id="courses-inside-page">
      
      {/* 1. HERO SECTION */}
      <section className="course-hero">
        <img src={courseInfo.image} alt="Course Background" className="hero-bg" />
        <div className="hero-content">
          <span className="hero-badge">CURRENTLY WATCHING</span>
          <h1 className="course-title-large">{courseInfo.title}</h1>

          <div className="hero-progress-wrapper">
            <div className="progress-info">
              <span>Course Progress</span>
              <span>{courseInfo.progress}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${courseInfo.progress}%` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPLIT CONTENT */}
      <div className="content-area">
        
        {/* --- CURRICULUM SIDEBAR (ACCORDION) --- */}
        <aside className="curriculum-container">
          <div className="curriculum-header">
            Course Curriculum
          </div>
          
          <div className="modules-list">
            {modulesData.map((module) => (
              <div key={module.id} className="module-group">
                
                {/* Module Header (Clickable) */}
                <div 
                  className="module-header" 
                  onClick={() => toggleModule(module.id)}
                >
                  <span className="module-title">{module.title}</span>
                  <KeyboardArrowDownIcon 
                    className={`module-chevron ${expandedModules.includes(module.id) ? 'open' : ''}`} 
                  />
                </div>

                {/* Lessons List (Animated Height) */}
                <AnimatePresence>
                  {expandedModules.includes(module.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="module-lessons"
                    >
                      {module.lessons.map((lesson, index) => (
                        <div 
                          key={lesson.id} 
                          className={`lesson-item ${activeLesson.id === lesson.id ? 'active' : ''}`}
                          onClick={() => setActiveLesson(lesson)}
                        >
                          <span className="lesson-icon">
                            {activeLesson.id === lesson.id ? <PlayCircleOutlineIcon fontSize="small"/> : (index + 1)}
                          </span>
                          <div className="lesson-meta">
                            <h4>{lesson.title}</h4>
                            <span>{lesson.duration}</span>
                          </div>
                          {/* Mock Checkmark for first lesson */}
                          {lesson.id === 101 && (
                            <CheckCircleIcon className="completed-icon" />
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>
        </aside>

        {/* --- MAIN VIDEO CONTENT --- */}
        <main className="video-page-container">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeLesson.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="video-wrapper">
                <iframe 
                  className="main-video"
                  src={activeLesson.videoUrl} 
                  title={activeLesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              <div className="lesson-text-content">
                <h2>{activeLesson.title}</h2>
                <p className="lesson-description">{activeLesson.description}</p>
                
                <div className="extras-grid">
                  <div className="extra-card">
                    <ArticleIcon className="extra-icon" />
                    <div>
                      <h5>Lesson Notes</h5>
                      <span>PDF (2.4 MB)</span>
                    </div>
                  </div>
                  <div className="extra-card">
                    <DownloadIcon className="extra-icon" />
                    <div>
                      <h5>Source Code</h5>
                      <span>ZIP (15 MB)</span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default CoursesInside;