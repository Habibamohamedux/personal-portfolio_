import React from 'react';
import { Layers, Zap, Fingerprint, MessageSquare, Briefcase, ShieldCheck } from 'lucide-react';
import './WhyWork.css';

const features = [
  {
    icon: <Layers />,
    title: "Multidisciplinary Approach",
    text: "A unique blend of storytelling, design, and code that ensures every angle of your project is covered."
  },
  {
    icon: <Zap />,
    title: "Fast Delivery",
    text: "Optimized workflows that deliver high-quality results without the typical agency wait times."
  },
  {
    icon: <Fingerprint />,
    title: "Tailored Solutions",
    text: "No templates or cookie-cutter fixes. Every solution is custom-built to fit your specific needs."
  },
  {
    icon: <MessageSquare />,
    title: "Clear Communication",
    text: "Transparent updates and collaboration throughout the process. You are never left in the dark."
  },
  {
    icon: <Briefcase />,
    title: "Industry Experience",
    text: "Deep experience working across various creative industries, ensuring professional standards."
  },
  {
    icon: <ShieldCheck />,
    title: "Long-term Support",
    text: "I provide post-project documentation and support to ensure your product performs long after launch."
  }
];

const WhyWorkSection = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-header">
          <h2 className="why-title">Why Work With Me?</h2>
          <p className="why-subtitle">
            I bring an integrated perspective that combines design, development, 
            and storytelling to build digital products that perform.
          </p>
        </div>

        <div className="why-grid">
          {features.map((f, index) => (
            <div key={index} className="why-card">
              <div className="icon-wrapper">
                {React.cloneElement(f.icon, { size: 28 })}
              </div>
              <h3 className="card-title">{f.title}</h3>
              <p className="card-description">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkSection;