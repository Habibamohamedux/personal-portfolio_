import React from 'react';
import './MyProcess.css';
import { 
  Search, 
  Map, 
  PenTool, 
  Zap, 
  Rocket 
} from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Discovery",
    icon: <Search size={24} />,
    desc: "We discuss your goals, challenges, and vision. I ask the deep questions to understand exactly what success looks like for you."
  },
  {
    id: "02",
    title: "Strategy & Planning",
    icon: <Map size={24} />,
    desc: "I create a comprehensive roadmap with timelines, deliverables, and milestones. No guessing games—you'll know exactly what to expect."
  },
  {
    id: "03",
    title: "Creation",
    icon: <PenTool size={24} />,
    desc: "The magic happens here. Whether it's coding, designing, or filming, I build the core assets while keeping you updated with progress."
  },
  {
    id: "04",
    title: "Refinement",
    icon: <Zap size={24} />,
    desc: "We review the work together. I implement feedback and polish every pixel and line of code to ensure perfection before the final reveal."
  },
  {
    id: "05",
    title: "Launch & Scale",
    icon: <Rocket size={24} />,
    desc: "We go live. I ensure a smooth deployment and provide the necessary documentation or support to help you grow from day one."
  }
];

const MyProcess = () => {
  return (
    <section className="process-section">
      {/* Background Animated Blobs for that "Cool" factor */}
      <div className="process-bg-blobs">
        <div className="blob-p blob-p-1"></div>
        <div className="blob-p blob-p-2"></div>
      </div>

      <div className="process-container">
        <header className="process-header">
          <h2 className="process-title">My Process</h2>
          <p className="process-subtitle">
            A proven workflow that ensures quality results and clear communication at every stage.
          </p>
        </header>

        <div className="timeline-wrapper">
          {/* The Glowing Central Line */}
          <div className="central-line"></div>

          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`timeline-row ${index % 2 === 0 ? 'row-left' : 'row-right'}`}
            >
              
              {/* Content Card */}
              <div className="timeline-content glass-panel">
                <div className="step-header">
                  <span className="step-number">Step {step.id}</span>
                  <div className="step-icon-box">{step.icon}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>

              {/* The Center Node (Circle on the line) */}
              <div className="timeline-node">
                <div className="node-inner">{step.id}</div>
                <div className="node-pulse"></div>
              </div>

              {/* Empty Spacer to balance Flexbox */}
              <div className="timeline-spacer"></div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProcess;