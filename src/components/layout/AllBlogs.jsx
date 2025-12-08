import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaCalendarAlt, FaRegClock, FaChevronDown } from 'react-icons/fa';
import './AllBlogs.css';

// MOCK DATA
const allBlogs = [
  {
    id: 1,
    category: "Design",
    title: "The Future of Design Systems in 2025",
    excerpt: "Exploring how design systems are evolving with AI-powered tools and component libraries that adapt to user behavior.",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    tags: ["#Design", "#UX", "#DesignSystems"],
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Frontend",
    title: "Building Scalable React Applications",
    excerpt: "A comprehensive guide to architecting React apps that grow with your team and product needs.",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    tags: ["#Frontend", "#React", "#Architecture"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Design",
    title: "The Art of Minimalist UI Design",
    excerpt: "Less is more: discovering the power of whitespace, typography, and intentional design choices.",
    date: "Nov 25, 2024",
    readTime: "5 min read",
    tags: ["#Design", "#UI", "#Minimalism"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "AR/VR",
    title: "Immersive Experiences: AR/VR in Modern Web",
    excerpt: "How augmented and virtual reality are transforming user experiences on the web platform.",
    date: "Nov 20, 2024",
    readTime: "10 min read",
    tags: ["#ARVR", "#WebGL", "#Innovation"],
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2670&auto=format&fit=crop"
  }
];

// Extract unique categories for the filter list
const CATEGORIES = ["All", "Design", "Frontend", "AR/VR"];

const AllBlogs = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic: If "All" is selected, show everything; otherwise match category
  const filteredBlogs = useMemo(() => {
    if (activeCategory === "All") return allBlogs;
    return allBlogs.filter(blog => blog.category === activeCategory);
  }, [activeCategory]);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setFilterOpen(false);
  };

  return (
    <section className="all-blogs-section">
      
      {/* --- HEADER (Flex Row: Title Left, Filter Right) --- */}
      <div className="all-blogs-header">
        <div className="header-text-group">
          <h2 className="all-blogs-title">ALL BLOGS</h2>
          <p className="all-blogs-subtitle">My thoughts, projects & learning journeys</p>
        </div>
        
        {/* Filter Dropdown Container */}
        <div className="filter-wrapper">
          <button 
            className={`filter-btn ${filterOpen ? 'active' : ''}`} 
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <FaFilter /> 
            <span>{activeCategory === "All" ? "Filter" : activeCategory}</span>
            <FaChevronDown className={`chevron ${filterOpen ? 'rotate' : ''}`} />
          </button>

          <AnimatePresence>
            {filterOpen && (
              <motion.ul 
                className="filter-dropdown"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {CATEGORIES.map((cat) => (
                  <li 
                    key={cat} 
                    className={activeCategory === cat ? "active" : ""}
                    onClick={() => handleCategorySelect(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* --- GRID --- */}
      <div className="all-blogs-grid">
        <AnimatePresence mode='popLayout'>
          {filteredBlogs.map((blog) => (
            <motion.article 
              key={blog.id} 
              layout /* Enables smooth shuffling animation when filtering */
              className="blog-list-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Section */}
              <div className="list-card-image">
                <img src={blog.image} alt={blog.title} />
                <span className={`category-badge ${blog.category.toLowerCase().replace('/', '')}`}>
                  {blog.category}
                </span>
              </div>

              {/* Content Section */}
              <div className="list-card-content">
                <h3 className="list-card-title">{blog.title}</h3>
                <p className="list-card-excerpt">{blog.excerpt}</p>
                
                <div className="list-card-meta">
                  <span><FaCalendarAlt /> {blog.date}</span>
                  <span><FaRegClock /> {blog.readTime}</span>
                </div>

                <div className="list-card-tags">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="mini-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button (Hidden if filtered list is small) */}
      {filteredBlogs.length > 0 && (
        <div className="load-more-container">
          <button className="load-more-btn">
            Load More
          </button>
        </div>
      )}

      {/* Empty State Message */}
      {filteredBlogs.length === 0 && (
        <div className="empty-state">
          <p>No articles found for this category.</p>
        </div>
      )}

    </section>
  );
};

export default AllBlogs;