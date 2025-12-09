import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaBookOpen, FaRegClock, FaChartLine, FaArrowRight, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import './Blogcategory.css';

// Layout Components
import Navbar from "../components/layout/Navbar.jsx";
import Newsletter from "../components/layout/Newsletter.jsx";
import Footer from "../components/layout/Footer.jsx";

// --- BLOG DATA ---
const initialBlogs = [
  {
    id: 1,
    title: "The Psychology of Microinteractions",
    excerpt: "Exploring how tiny design details create delightful user experiences and build emotional connections.",
    date: "Dec 05, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Designing for Cognitive Load",
    excerpt: "Understanding how users process information and creating interfaces that minimize mental effort.",
    date: "Nov 28, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Future of Design Systems",
    excerpt: "How modern design systems evolve beyond component libraries into living, breathing ecosystems.",
    date: "Nov 20, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Accessibility in the Age of AI",
    excerpt: "Ensuring AI-generated interfaces remain inclusive and accessible to users with diverse needs.",
    date: "Oct 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Color Theory for Dark Mode",
    excerpt: "Why simply inverting colors doesn't work, and how to craft rich, readable dark themes.",
    date: "Sep 10, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Voice UI: Beyond Siri",
    excerpt: "Designing conversational interfaces that feel natural, helpful, and human-centric.",
    date: "Aug 22, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da9e2f58?q=80&w=2670&auto=format&fit=crop"
  }
];

const Blogcategory = () => {
  const location = useLocation();
  const navigate = useNavigate(); // 1. Added Navigation Hook
  const [sortOrder, setSortOrder] = useState('newest'); 
  
  // Retrieve data passed from Mood card
  const { title, color } = location.state || { title: "Deep UX Thinking", color: "pink" };

  // Parallax Logic
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); 
  const y2 = useTransform(scrollY, [0, 500], [0, -150]); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sorting Logic
  const sortedBlogs = useMemo(() => {
    return [...initialBlogs].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [sortOrder]);

  // 2. Function to handle click
  const handleArticleClick = (blog) => {
    navigate('/blog/inside', { state: { blogData: blog } });
  };

  return (
    <>
      <Navbar />
      
      <div className="category-page-container">
        
        {/* --- PARALLAX BACKGROUND ELEMENTS --- */}
        <motion.div style={{ y: y1 }} className={`parallax-orb orb-1 ${color}`}></motion.div>
        <motion.div style={{ y: y2 }} className={`parallax-orb orb-2 ${color}`}></motion.div>

        {/* --- HEADER SECTION --- */}
        <header className="category-header">
          <div className={`category-glow ${color}`}></div>

          <motion.div 
            className="featured-pill"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`dot ${color}`}></span> Featured Category
          </motion.div>

          <motion.h1 
            className="category-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <motion.p 
            className="category-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Exploring the intersection of psychology, design, and technology. 
            Deep dives into principles that create meaningful, memorable digital products.
          </motion.p>

          {/* Stats Row (Static Numbers) */}
          <motion.div 
            className="stats-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="stat-card">
              <FaBookOpen className={`stat-icon ${color}`} />
              <div className="stat-info">
                <h3>{initialBlogs.length}</h3>
                <span>Articles</span>
              </div>
            </div>
            <div className="stat-card">
              <FaRegClock className={`stat-icon ${color}`} />
              <div className="stat-info">
                <h3>6 min</h3>
                <span>Avg Read</span>
              </div>
            </div>
            <div className="stat-card">
              <FaChartLine className={`stat-icon ${color}`} />
              <div className="stat-info">
                <h3>15K</h3>
                <span>Readers</span>
              </div>
            </div>
          </motion.div>
        </header>

        {/* --- FILTER BAR --- */}
        <div className="filter-bar">
          <span className="results-count">Showing {sortedBlogs.length} Articles</span>
          <button 
            className="sort-btn" 
            onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
          >
            {sortOrder === 'newest' ? <FaSortAmountDown /> : <FaSortAmountUp />}
            {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
          </button>
        </div>

        {/* --- CONTENT GRID --- */}
        <motion.div layout className="category-content-grid">
          <AnimatePresence>
            {sortedBlogs.map((blog) => (
              <motion.article 
                layout 
                key={blog.id} 
                className="category-blog-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                // 3. Attach click event
                onClick={() => handleArticleClick(blog)}
                style={{ cursor: 'pointer' }}
              >
                <div className="cat-card-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                
                <div className="cat-card-body">
                  <div className="cat-meta">
                    <span>{blog.date}</span>
                    <span className="dot-sep">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h3 className="cat-card-title">{blog.title}</h3>
                  <p className="cat-card-excerpt">{blog.excerpt}</p>
                  
                  <button className={`cat-read-btn ${color}`}>
                    Read More <FaArrowRight />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Blogcategory;