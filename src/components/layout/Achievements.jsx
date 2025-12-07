import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const creativeWorks = [
  {
    id: 1,
    type: "Short Film",
    title: "Grandma Tales",
    role: "Director / Editor",
    // Replace with actual image path
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2670&auto=format&fit=crop", 
    link: "/blog/grandma-tales", // Internal Link to your blog page
    style: "cinema" // horizontal aspect ratio
  },
  {
    id: 2,
    type: "Published Book",
    title: "Trying To Figure A Way Out",
    role: "Author / Illustrator",
    // Replace with actual image path
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2573&auto=format&fit=crop",
    link: "/blog/figure-way-out", // Internal Link to your blog page
    style: "book" // vertical aspect ratio
  }
];

const certifications = [
  {
    id: 1,
    title: "CIB Summer Internship",
    issuer: "Commercial International Bank",
    date: "August 2024",
    // Placeholder image
    image: "https://images.unsplash.com/photo-1589330694653-4d5c95331b9a?auto=format&fit=crop&q=80&w=1000",
    link: "#"
  },
  {
    id: 2,
    title: "Sustainability Foundations",
    issuer: "LinkedIn Learning",
    date: "Sep 2025",
    // Placeholder image
    image: "https://images.unsplash.com/photo-1523580846055-a72752879fc2?auto=format&fit=crop&q=80&w=1000",
    link: "#"
  }
];

const linkedInPosts = [
  {
    id: 1,
    date: "2 days ago",
    content: "Thrilled to share that 'Grandma Tales' has won 1st Place at the WAMEED 1.0 Competition! This project was a journey of rediscovering heritage through a modern lens...",
    likes: 142,
    comments: 24,
    url: "https://linkedin.com/in/yourprofile"
  },
  {
    id: 2,
    date: "1 week ago",
    content: "Just completed the CIB Summer Internship program. It was an incredible opportunity to apply UX principles in a FinTech environment. Huge thanks to my mentors...",
    likes: 89,
    comments: 12,
    url: "https://linkedin.com/in/yourprofile"
  },
  {
    id: 3,
    date: "1 month ago",
    content: "My first book 'Trying To Figure A Way Out' is finally published! It's a collection of thoughts on growing up and finding your creative voice.",
    likes: 210,
    comments: 45,
    url: "https://linkedin.com/in/yourprofile"
  }
];

const Achievements = () => {
  return (
    <section className="achievements-container">
      <div className="max-width-wrapper">
        
        {/* Main Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h1 className="big-title">Achievements<br />& ExtraCurriculars</h1>
          <p className="header-desc">
            As a person with evolving interests, I pursue focus on specific storytelling mediums and professional milestones.
          </p>
        </motion.div>

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
            <span>Certs</span>
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

        {/* --- SECTION 3: LINKEDIN PULSE --- */}
        <div className="category-block">
          <div className="sticky-label">
            <h3>Recent Updates</h3>
            <span>Social</span>
          </div>

          <div className="linkedin-scroller">
            {linkedInPosts.map((post) => (
              <div key={post.id} className="li-post">
                <div className="li-header">
                  <div className="li-avatar">H</div> {/* Your Initial */}
                  <div className="li-meta">
                    <h5>Habiba Saad</h5>
                    <span>{post.date}</span>
                  </div>
                </div>
                <p className="li-content">{post.content}</p>
                <div className="li-footer">
                  <span>{post.likes} Likes • {post.comments} Comments</span>
                  <a href={post.url} target="_blank" rel="noreferrer" className="li-link">View Post &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;