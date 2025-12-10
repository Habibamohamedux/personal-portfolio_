import React from 'react';

const ToolsUsed = () => {
  const tools = ["React", "Figma", "Adobe Premiere", "VS Code", "Node.js", "Adobe Illustrator"];

  return (
    <section className="section tools-used">
      <div className="container">
        <h4 className="tools-heading">Tools I Use</h4>
        <div className="tools-list">
          {tools.map((tool, index) => (
            <span key={index} className="tool-badge">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsUsed;