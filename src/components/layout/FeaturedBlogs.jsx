import React from 'react';
import { motion } from 'framer-motion';
import './FeaturedBlogs.css';

// MOCK DATA - Replace with your imports
const blogs = [
  {
    id: 1,
    title: "The Birth of ORA: AI for Motherhood",
    category: "Case Study",
    date: "Dec 08, 2025",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2670&auto=format&fit=crop",
    type: "main"
  },
  {
    id: 2,
    title: "Minimalism in Code",
    category: "Development",
    date: "Nov 24, 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
    type: "sub"
  },
  {
    id: 3,
    title: "Designing for Empathy",
    category: "UX Research",
    date: "Oct 12, 2025",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop",
    type: "sub"
  }
];

// Accept 'sectionLabel' as a prop (defaults to "Trending Now" if not provided)
const FeaturedBlogs = ({ sectionLabel = "Trending Now" }) => {
  return (
    <section className="featured-section">
      {/* Dynamic Title Here */}
      <span className="section-label">{sectionLabel}</span>
      
      <div className="bento-grid">
        {/* Main Feature (Left) */}
        <motion.div 
          className="blog-card main-feature"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={blogs[0].image} alt="" className="blog-card-bg" />
          <div className="blog-overlay">
            <span className="blog-tag">{blogs[0].category}</span>
            <h2 className="blog-title">{blogs[0].title}</h2>
            <span className="blog-meta">{blogs[0].date} • 5 min read</span>
          </div>
        </motion.div>

        {/* Sub Features (Right Stack) */}
        {blogs.slice(1).map((blog, index) => (
          <motion.div 
            key={blog.id}
            className="blog-card sub-feature"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={blog.image} alt="" className="blog-card-bg" />
            <div className="blog-overlay">
              <span className="blog-tag">{blog.category}</span>
              <h3 className="blog-title">{blog.title}</h3>
              <span className="blog-meta">{blog.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;