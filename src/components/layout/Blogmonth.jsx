import React from 'react';
import { motion } from 'framer-motion';
import './Blogmonth.css';

// --- Native SVG Icons (Prevents "Module not found" errors) ---
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const BlogMonth = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Smooth stagger effect
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, x: -50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
        }
    };

    return (
        <section className="blog-month-section">
            <div className="blog-month-container">
                
                {/* Left Side - Animated Image Frame */}
                <motion.div
                    className="blog-image-wrapper"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                        alt="Blog Feature"
                        className="blog-image"
                    />
                </motion.div>

                {/* Right Side - Animated Content */}
                <motion.div
                    className="blog-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.span className="section-label" variants={itemVariants}>
                        Blog of the Month
                    </motion.span>

                    <motion.h2 className="blog-title" variants={itemVariants}>
                        The Evolution of User Experience: From Skeuomorphism to Neumorphism
                    </motion.h2>

                    <motion.p className="blog-description" variants={itemVariants}>
                        A deep dive into the history of UI design trends, exploring how digital interfaces have evolved over the past two decades. We examine the psychological principles behind each movement and predict what comes next.
                    </motion.p>

                    <motion.div className="blog-meta" variants={itemVariants}>
                        <div className="meta-item">
                            <CalendarIcon />
                            <span>December 8, 2024</span>
                        </div>
                        <div className="meta-item">
                            <ClockIcon />
                            <span>18 min read</span>
                        </div>
                    </motion.div>

                    <motion.div className="blog-tags" variants={itemVariants}>
                        <span className="blog-tag">#UX</span>
                        <span className="blog-tag">#Design</span>
                        <span className="blog-tag">#History</span>
                        <span className="blog-tag">#Trends</span>
                    </motion.div>

                    <motion.button className="read-more-btn" variants={itemVariants}>
                        Read Article <ArrowRightIcon />
                    </motion.button>
                </motion.div>
                
            </div>
        </section>
    );
};

export default BlogMonth;