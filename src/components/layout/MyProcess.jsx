import React from 'react';
import { Search, Map, PenTool, Zap, Rocket } from 'lucide-react';
import './MyProcess.css';

const steps = [
  { id: "01", title: "The Deep Dive", icon: <Search />, desc: "We start by chatting about your vision. I want to know exactly what you're trying to build and what problems we're actually solving." },
  { id: "02", title: "The Game Plan", icon: <Map />, desc: "I map out the whole project so there are no surprises. You’ll know exactly what the steps are and when things will be done." },
  { id: "03", title: "Getting to Work", icon: <PenTool />, desc: "This is where I build. Whether it's code or design, I keep you in the loop with updates so you can see the progress in real-time." },
  { id: "04", title: "Polishing It Up", icon: <Zap />, desc: "We look at the work together. I fix the small details and polish everything until it's exactly how we want it." },
  { id: "05", title: "Blast Off", icon: <Rocket />, desc: "We go live. I handle the launch and stick around to make sure everything runs smoothly while you start growing." }
];

const MyProcess = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <header className="process-header">
          <h2 className="process-title">My Process</h2>
          <p className="process-subtitle">A simple look at how I take your idea from start to finish.</p>
        </header>

        <div className="timeline-wrapper">
          {steps.map((step, index) => (
            <div key={step.id} className={`timeline-row ${index % 2 === 0 ? 'row-left' : 'row-right'}`}>
              
              <div className="process-card">
                <h3 className="step-title">
                  <span className="icon-wrap">{React.cloneElement(step.icon, { size: 24 })}</span>
                  {step.title}
                </h3>
                <p className="step-desc">{step.desc}</p>
              </div>

              <div className="node">
                <span className="node-number">{step.id}</span>
              </div>

              <div className="spacer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProcess;