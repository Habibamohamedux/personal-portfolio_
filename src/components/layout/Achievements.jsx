import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';
import bookcover from '../../assets/creative/bookcover.jpg';
import movieposter from '../../assets/creative/movieposter.jpg';
import Cib from '../../assets/creative/Cib.jpg';
import sustain from '../../assets/creative/sustain.jpg';

const creativeWorks = [
  {
    id: 1,
    type: "Short Film",
    title: "Grandma Tales",
    role: "Director / Editor",
    image: movieposter, 
    link: "/blog/grandma-tales",
    style: "cinema"
  },
  {
    id: 2,
    type: "Published Book",
    title: "Trying To Figure A Way Out",
    role: "Author / Illustrator",
    image: bookcover,
    link: "/blog/figure-way-out",
    style: "book"
  }
];

const certifications = [
  {
    id: 1,
    title: "CIB Summer Internship",
    issuer: "Commercial International Bank",
    date: "August 2025",
    image: Cib,
    link: "/blog/CIB-Summer-Internship"
  },
  {
    id: 2,
    title: "Sustainability Foundations",
    issuer: "LinkedIn Learning",
    date: "September 2025",
    image: sustain,
    link: "/blog/Sustainability-Foundations"
  }
];

const linkedInPosts = [
  {
    id: 1,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7369434422175088642", 
    height: "600"
  },
  {
    id: 2,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7366718771362758656",
    height: "600"
  }
];

const Achievements = () => {
  return (
    <section className="achievements-container">
      <div className="max-width-wrapper">
        
        {/* --- NEW HEADER (Academic Journey Style) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="header-section"
        >
          <h1 className="main-title">ACHIEVEMENTS</h1>
          <p className="subtitle">
Beyond academics, I actively pursue extracurriculars and creative work, <br /> driven by my love for art, storytelling, and continuous self-expression.          </p>
        </motion.div>
        {/* ------------------------------------------ */}

        {/* --- SECTION 1: CREATIVE MEDIA --- */}
        <div className="category-block">
          <div className="sticky-label">
            <h3>Creative Media</h3>
            <span>2025</span>
          </div>
          
          <div className="creative-grid">
            {creativeWorks.map((work) => (
              <motion.a 
                href={work.link}
                key={work.id}
                className={`creative-card ${work.style === 'book' ? 'book-aspect' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={work.image} alt={work.title} className="card-img" />
                <div className="card-overlay">
                  <span className="card-tag">{work.type} • {work.role}</span>
                  <h2 className="card-title">{work.title}</h2>
                  <span className="read-btn">Read Article &rarr;</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: PROFESSIONAL --- */}
        <div className="category-block">
          <div className="sticky-label">
            <h3>Professional</h3>
            <span>Certifications</span>
          </div>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <motion.a 
                href={cert.link}
                key={cert.id}
                className="cert-card"
                whileHover={{ y: -5 }}
              >
                <img src={cert.image} alt={cert.title} className="cert-thumb" />
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer} • {cert.date}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* --- SECTION 3: LINKEDIN LIVE FEED --- */}
        <div className="category-block">
          <div className="sticky-label">
            <h3>Recent Updates</h3>
            <span>Social Media</span>
          </div>

          <div className="linkedin-grid-static">
            {linkedInPosts.map((post) => (
              <div key={post.id} className="li-embed-wrapper">
                <iframe 
                  src={post.embedUrl}
                  height={post.height}
                  width="100%" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  title="Embedded LinkedIn Post"
                  className="li-iframe"
                ></iframe>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;