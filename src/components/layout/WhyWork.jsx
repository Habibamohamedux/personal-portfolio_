import React from 'react';
import './WhyWork.css';
import { 
  Layers, 
  Zap, 
  Fingerprint, 
  MessageCircle, 
  Briefcase, 
  ShieldCheck 
} from 'lucide-react';

const reasons = [
  {
    id: 1,
    icon: <Layers size={32} />,
    title: "Multidisciplinary Approach",
    desc: "A unique blend of storytelling, design, and code that ensures every angle of your project is covered."
  },
  {
    id: 2,
    icon: <Zap size={32} />,
    title: "Fast Delivery",
    desc: "Optimized workflows that deliver high-quality results without the typical agency wait times."
  },
  {
    id: 3,
    icon: <Fingerprint size={32} />,
    title: "Tailored Solutions",
    desc: "No templates or cookie-cutter fixes. Every solution is custom-built to fit your specific needs."
  },
  {
    id: 4,
    icon: <MessageCircle size={32} />,
    title: "Clear Communication",
    desc: "Transparent updates and collaboration throughout the entire process. You are never left in the dark."
  },
  {
    id: 5,
    icon: <Briefcase size={32} />,
    title: "Industry Experience",
    desc: "Deep experience working across various creative industries, ensuring professional standards."
  },
  {
    id: 6,
    icon: <ShieldCheck size={32} />,
    title: "Long-term Support",
    desc: "I don't just disappear after launch. I provide post-project documentation and support."
  }
];

const WhyWork = () => {
  return (
    <section className="why-section-grid">
      {/* Reusing the subtle moving background for consistency */}
      <div className="why-bg-blobs">
        <div className="blob-w blob-w-1"></div>
        <div className="blob-w blob-w-2"></div>
      </div>

      <div className="why-container-grid">
        
        {/* Centered Header */}
        <header className="why-header">
          <h2 className="why-title-grid">Why Work With Me?</h2>
          <p className="why-subtitle-grid">
            I bring an integrated perspective that combines design, development, and storytelling 
            to build digital products that perform.
          </p>
        </header>

        {/* The Glass Grid */}
        <div className="cards-grid">
          {reasons.map((item) => (
            <div key={item.id} className="glass-card">
              <div className="card-icon-box">
                {item.icon}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyWork;