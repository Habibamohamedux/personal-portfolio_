import React from 'react';
import './ToolsUsed.css';
import { Wrench, Briefcase } from 'lucide-react';

// Tool data with categories for styling hints
const tools = [
  { name: "Adobe InDesign", category: "design" },
  { name: "Adobe Illustrator", category: "design" },
  { name: "Photoshop", category: "design" },
  { name: "Lightroom", category: "design" },
  { name: "Premiere Pro", category: "video" },
  { name: "After Effects", category: "video" },
  { name: "Figma", category: "design" },
  { name: "GitHub", category: "dev" },
  { name: "HTML", category: "dev" },
  { name: "CSS", category: "dev" },
  { name: "React.js", category: "dev" },
  { name: "Visual Studio", category: "dev" },
  { name: "Blender", category: "3d" },
  { name: "3ds Max", category: "3d" }
];

// Industry data from the sketch
const industries = [
  "Tech Startups",
  "Personal Brands",
  "Small Businesses",
  "Content Creators",
  "Non-Profits",
  "Independent Films",
  "E-commerce",
  "Creative Agencies"
];

const ToolsAndIndustries = () => {
  // Duplicate the tools array to create a seamless infinite scroll loop
  const doubledTools = [...tools, ...tools];

  return (
    <section className="ti-section">
      {/* Subtle Animated Background Blobs for consistency */}
      <div className="ti-bg-blobs">
        <div className="blob-ti blob-ti-1"></div>
        <div className="blob-ti blob-ti-2"></div>
      </div>

      <div className="ti-container">
        <div className="ti-layout-grid">
          
          {/* --- Left Column: Animated Tools --- */}
          <div className="ti-column tools-column">
            <header className="ti-header">
              <Wrench size={28} className="ti-icon" />
              <h2 className="ti-title">Tools I Use</h2>
            </header>
            
            {/* The scrolling track container */}
            <div className="tools-scroller glass-panel">
              <div className="tools-track">
                {doubledTools.map((tool, index) => (
                  <div 
                    key={index} 
                    className={`tool-card glass-card ${tool.category}-glow`}
                  >
                    {/* Using the first letter as a placeholder icon */}
                    <div className="tool-icon-placeholder">
                      {tool.name.charAt(0)}
                    </div>
                    <span className="tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Right Column: Industries Served --- */}
          <div className="ti-column industries-column">
            <header className="ti-header">
              <Briefcase size={28} className="ti-icon" />
              <h2 className="ti-title">Industries Served</h2>
            </header>

            <div className="industries-grid">
              {industries.map((industry, index) => (
                <div key={index} className="industry-pill glass-pill">
                  {industry}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ToolsAndIndustries;