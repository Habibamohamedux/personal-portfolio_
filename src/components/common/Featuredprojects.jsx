import React from 'react';
import './Featuredprojects.css';
import Calltoaction from './Calltoaction.jsx';
import Paragraph from './paragraph.jsx';
import Sidetitle from './sidetitle.jsx';
import Sidetsubtitle from './sidetsubtitle.jsx';
import Miniheader from './miniheader.jsx';

const Featuredprojects = () => {
  return (
    <div className="featured-projects">
      <div className="featured-layout">
        {/* LEFT SIDE — IMAGES */}
        <div className="featured-images">
          <div className="featured-left">
            <img src="/assets/robot.png" alt="Robot Project" />
          </div>
          <div className="featured-right">
            <img src="/assets/university-app.png" alt="University App" />
            <img src="/assets/package-design.png" alt="Cura Package Design" />
          </div>
        </div>

        {/* RIGHT SIDE — TEXT */}
        <div className="featured-projects-content">
          <Sidetitle sidetitle="Featured Projects" />
          <Sidetsubtitle sidetsubtitle="Where Art Meets Interaction — Turning Ideas into Immersive Digital Experiences." />
          <Miniheader miniheader="Details" />
          <Paragraph paragraph="Our featured projects showcase the perfect blend of creativity and technology. Each project reflects innovative thinking, interactive design, and meticulous attention to detail, bringing ideas to life in engaging digital experiences. From immersive visuals to seamless user interactions, these projects highlight our commitment to turning concepts into captivating realities." />
          <Calltoaction cta="View Showreel" />
        </div>
      </div>
    </div>
  );
};

export default Featuredprojects;
