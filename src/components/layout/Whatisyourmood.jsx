import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Whatisyourmood.css';

// --- Icons (Native SVG) ---
const BulbIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2 2 3 2 4.5V15a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.5c0-1.5 2-2.5 2-4.5a7 7 0 0 0-7-7z"/></svg>;
const BrainIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-4A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-4A2.5 2.5 0 0 0 14.5 2Z"/></svg>;
const BoltIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const SparkleIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 5h4"/><path d="M3 9h4"/></svg>;
const SearchIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const CodeIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;

const moods = [
  { id: 1, title: "Learn Something New", icon: <BulbIcon />, color: "orange" },
  { id: 2, title: "Deep UX Thinking", icon: <BrainIcon />, color: "pink" },
  { id: 3, title: "Quick Tech Bites", icon: <BoltIcon />, color: "green" },
  { id: 4, title: "Visual Inspiration", icon: <SparkleIcon />, color: "blue" },
  { id: 5, title: "Research Mode", icon: <SearchIcon />, color: "purple" },
  { id: 6, title: "Code & Dev", icon: <CodeIcon />, color: "cyan" },
];

const Whatisyourmood = () => {
  // 2. Initialize Navigation
  const navigate = useNavigate();

  const handleMoodClick = (mood) => {
    // 3. Navigate to the category page and pass the mood details as 'state'
    navigate('/blog-category', { 
      state: { 
        title: mood.title,
        color: mood.color
      } 
    });
  };

  return (
    <section className="mood-section">
      <div className="mood-header">
        <h2 className="mood-title">WHAT'S YOUR MOOD TODAY?</h2>
        <p className="mood-subtitle">
          Let me help you find the perfect read based on how you're feeling.
        </p>
      </div>

      <div className="mood-grid">
        {moods.map((mood, index) => (
          <motion.div 
            key={mood.id}
            className="mood-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            // 4. Add Click Event
            onClick={() => handleMoodClick(mood)}
          >
            <div className={`mood-icon-wrapper ${mood.color}`}>
              {mood.icon}
            </div>
            
            <h3 className="card-mood-title">{mood.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Whatisyourmood;