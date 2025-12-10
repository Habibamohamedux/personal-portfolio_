import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // <--- 1. Import Helmet
// FIXED IMPORT: Replaced FaUserLines with FaUserEdit
import { 
  FaShareAlt, FaList, FaChevronLeft, 
  FaLightbulb, FaQuoteLeft, FaChartPie, FaCheckCircle, FaCogs, FaUserEdit
} from 'react-icons/fa';
import './InsideBlog.css';

// Layout Imports
import Navbar from "../components/layout/Navbar.jsx";
import Newsletter from "../components/layout/Newsletter.jsx";
import Footer from "../components/layout/Footer.jsx";

// --- HELPER COMPONENTS ---

const ArticleHighlight = ({ type = "insight", title, children }) => {
  const icons = {
    insight: <FaLightbulb />,
    keypoint: <FaCheckCircle />,
    stat: <FaChartPie />,
    tip: <FaCogs /> 
  };
  
  return (
    <div className={`article-highlight ${type}`}>
      <div className="highlight-icon">{icons[type] || icons.insight}</div>
      <div className="highlight-content">
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};

const ArticleStats = ({ stats }) => (
  <div className="article-stats-grid">
    {stats.map((stat, i) => (
      <div key={i} className="stat-glass-card">
        <span className="stat-value">{stat.value}</span>
        <span className="stat-label">{stat.label}</span>
      </div>
    ))}
  </div>
);

const ArticleImageGrid = ({ images, type="masonry" }) => (
  <div className={`article-image-grid grid-${type}`}>
    {images.map((img, i) => (
      <div key={i} className={`grid-img-wrap item-${i}`}>
        <img src={img} alt={`Detail ${i}`} />
      </div>
    ))}
  </div>
);

const InsideBlog = () => {
  const [activeSection, setActiveSection] = useState('intro');
  // Start with TOC open
  const [isTocOpen, setIsTocOpen] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Auto-tracking TOC Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Use a smaller threshold for better triggering during quick scrolls
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Adjust rootMargin to trigger slightly before the section hits the top
      { rootMargin: "-10% 0px -60% 0px", threshold: [0.2, 0.5, 0.8] } 
    );

    const sections = document.querySelectorAll("section[id], header[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const yOffset = -120; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // TOC Links Data
  const tocLinks = [
    { id: 'intro', label: 'Introduction' },
    { id: 'cognitive', label: 'Cognitive Load' },
    { id: 'human', label: 'The Human Connection' },
    { id: 'impact', label: 'Measuring Impact' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  // Blog Info (Stored here to easily reuse in Helmet and Hero)
  const blogInfo = {
    title: "The Psychology of Microinteractions",
    description: "Discover how microinteractions guide users, provide feedback, and add humanity to digital products. A deep dive into UX psychology and cognitive load.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    author: "Habiba Saad"
  };

  return (
    <>
      {/* 2. ADD HELMET SECTION */}
      <Helmet>
        <title>{`${blogInfo.title} | ${blogInfo.author}`}</title>
        <meta name="description" content={blogInfo.description} />
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content={blogInfo.title} />
        <meta property="og:description" content={blogInfo.description} />
        <meta property="og:image" content={blogInfo.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Navbar />
      
      {/* Scroll Progress Line */}
      <motion.div className="article-progress-bar" style={{ scaleX }} />

      <div className="inside-blog-container">
        
        {/* --- HERO SECTION --- */}
        <header id="intro" className="article-hero">
          <div className="hero-bg-overlay"></div>
          <img 
            src={blogInfo.image} 
            alt="Hero" 
            className="hero-image" 
          />
          
          <div className="hero-content">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-meta-glass"
            >
              <span className="hero-category">UX Research</span>
              <span className="hero-date">Dec 05, 2025 • 8 min read</span>
            </motion.div>

            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {blogInfo.title.toUpperCase()}
            </motion.h1>
          </div>
        </header>

        {/* --- MAIN LAYOUT WRAPPER --- */}
        {/* Dynamic class based on sidebar state */}
        <div className={`article-layout-wrapper ${isTocOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          
          {/* --- LEFT SIDEBAR (TOC) --- */}
          <aside className="sticky-sidebar-container">
             <div className="sidebar-sticky-content">
                {/* Toggle Button - Always Visible */}
                <button 
                  className="toc-toggle-btn"
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  aria-label="Toggle Table of Contents"
                >
                  {/* Rotate icon based on state */}
                  <FaChevronLeft className={isTocOpen ? '' : 'rotate-180'} />
                </button>

                {/* Collapsible Content */}
                <div className="toc-wrapper">
                  <h3>Table of Contents</h3>
                  <ul className="toc-list">
                    {tocLinks.map((link) => (
                      <li 
                        key={link.id} 
                        className={activeSection === link.id ? 'active' : ''}
                        onClick={() => scrollToSection(link.id)}
                      >
                        {link.label}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="sidebar-share">
                    <span>Share Article</span>
                    <div className="share-icons">
                      <button><FaShareAlt /></button>
                    </div>
                  </div>
                </div>
             </div>
          </aside>

          {/* --- MAIN CONTENT BODY --- */}
          <main className="article-body">
            
            {/* Introduction */}
            <section className="article-section">
              <p className="lead-paragraph">
                In the vast digital realm, the difference between a good product and a truly great one often lies not in the massive features, but in the tiniest details. 
                <span className="highlight-text"> Microinteractions</span> are those functional, often fleeting animations that guide users, provide immediate feedback, and add a critical layer of humanity to cold code. They are the nod, the handshake, and the wink of the digital world.
              </p>
              <p>
                While often overlooked by stakeholders focused on the "big picture," these minute moments are what craft the actual feeling of using a product. They transform a series of static screens into a living, breathing experience.
              </p>
              
              <ArticleHighlight type="insight" title="Defining the Concept">
                A microinteraction is a contained product moment that revolves around a single use case—like liking a post, pulling to refresh, or changing a setting. They have a trigger, rules, feedback, and loops/modes.
              </ArticleHighlight>
            </section>

            {/* Section: Cognitive Load */}
            <section id="cognitive" className="article-section">
              <h2>Designing for Cognitive Load</h2>
              <p>
                Every time a user interacts with an interface, they expend mental energy. Our primary goal as designers is to minimize this "cognitive load." When a user clicks a button and nothing happens immediately, their brain experiences a micro-moment of doubt: "Did it work? Did I miss? Is the app frozen?"
              </p>
              <p>
                Well-designed microinteractions bridge this gap instantly. A button that depresses when clicked, a loading spinner that appears immediately—these reassure the user that the system has received their request and is processing it.
              </p>
              
              <ArticleImageGrid type="masonry" images={[
                "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2670&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop"
              ]} />
              
              <p>
                By utilizing subtle motion blur and elastic scrolling, we simulate the physics of the real world that the human brain innately understands. This reduces the mental translation layer between physical intent and digital output.
              </p>
            </section>

             {/* Quote Block */}
             <blockquote className="glass-quote">
              <FaQuoteLeft className="quote-icon" />
              <p>"The details are not the details. They make the design."</p>
              <cite>— Charles Eames</cite>
            </blockquote>

            {/* Section: The Human Connection */}
            <section id="human" className="article-section">
              <h2>The Human Connection</h2>
              <p>
                Beyond mere functionality, microinteractions are the primary vehicle for injecting brand personality into a product. Is your brand playful? Perhaps your success states involve colorful confetti. Is your brand serious and professional? Your interactions should be subtle, precise, and efficient.
              </p>

              <div className="layout-half-right">
                <div>
                   <p>
                    Consider the difference between a standard toggle switch and one that has a satisfying "snap" animation and a subtle color shift. Both perform the same function, but one feels mechanical, while the other feels tactile and rewarding.
                  </p>
                  <ArticleHighlight type="tip" title="Pro Tip: Don't Overdo It">
                    Animation for the sake of animation is distracting. Ensure every movement has a purpose—to guide, inform, or delight without slowing the user down. Speed is essential.
                  </ArticleHighlight>
                </div>
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop" alt="Human computer interaction" />
              </div>
            </section>

            {/* Section: Measuring Impact */}
            <section id="impact" className="article-section">
              <h2>Measuring Design Impact</h2>
              <p>
                Can we really quantify "delight"? While subjective feeling is hard to measure, the behavioral outcomes of well-executed microinteractions are clear in the data. Recent A/B tests suggest that intuitive feedback loops directly correlate with higher engagement and lower error rates.
              </p>

              <ArticleStats stats={[
                { value: "+15%", label: "User Retention Rate" },
                { value: "-22%", label: "Form Submission Errors" },
                { value: "4.8/5", label: "Avg App Store Rating" }
              ]} />

              <p>
                When users don't have to second-guess the interface, they complete tasks faster and feel more confident in the product. This builds long-term trust and brand loyalty.
              </p>
            </section>

             {/* Section: Implementation */}
             <section id="implementation" className="article-section">
              <h2>Implementation Strategies</h2>
              <p>
                Great microinteractions require close collaboration between design and engineering. Tools like Rive, Lottie, and Framer Motion have bridged the gap, allowing designers to create complex animations that developers can implement performantly.
              </p>
              
              <ArticleHighlight type="keypoint" title="The 4-Step Model">
                <ol style={{margin: 0, paddingLeft: '1.2rem'}}>
                    <li><strong>Trigger:</strong> What starts the interaction? (Click, scroll, hover)</li>
                    <li><strong>Rules:</strong> What happens next? (The logic of the interaction)</li>
                    <li><strong>Feedback:</strong> How does the user know it worked? (Visual, auditory, haptic)</li>
                    <li><strong>Loops & Modes:</strong> What happens over time? (Does it change state?)</li>
                </ol>
              </ArticleHighlight>
            </section>

            {/* Section: Conclusion */}
            <section id="conclusion" className="article-section article-footer">
              <h2>Conclusion</h2>
              <p>
                As we move towards spatial computing, AR, and increasingly complex AI interfaces, the role of microinteractions will only grow in importance. They will evolve from 2D screen animations to 3D spatial behaviors and conversational cues. 
              </p>
              <p>
                However, the core principles remain unchanged: provide clarity, offer immediate feedback, and respect the user's time. By sweating the small stuff, we create products that don't just work—they feel good to use.
              </p>
              <div className="author-signature">
                {/* FIXED ICON USAGE HERE */}
                <FaUserEdit className="signature-icon"/>
                <div>
                    <span>Written by</span>
                    <h4>Habiba Saad</h4>
                    <span>UI/UX Designer & Frontend Developer</span>
                </div>
              </div>
            </section>

          </main>
        </div>

      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default InsideBlog;