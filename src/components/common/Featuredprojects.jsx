import React, { useState, useEffect } from 'react';
import './Featuredprojects.css';
import Calltoaction from './Calltoaction.jsx';
import Paragraph from './paragraph.jsx';
import Sidetitle from './sidetitle.jsx';
import Sidetsubtitle from './sidetsubtitle.jsx';
import Miniheader from './miniheader.jsx';

// Image groups for each slideshow
const slides = {
  modeling: [
    { src: require('../../assets/3dmodeling/HabibaSaad_3DMODELING_Y3_ROBOT_009_002.jpg'), label: '3D Modeling' },
    { src: require('../../assets/3dmodeling/HabibaSaad_3DMODELING_Y3_ROBOT_009_006.jpg'), label: '3D Modeling' },
  ],
  ar: [
    { src: require('../../assets/Ar/Ar-project.jpg'), label: 'Augmented Reality' },
    { src: require('../../assets/Ar/Ar-project-1.jpg'), label: 'Augmented Reality' },
  ],
  design: [
    { src: require('../../assets/graphicdesign/HabibaSaad_GRAHICDESIGN_Y3_UIDESIGN_LOGO_004_001.jpg'), label: 'Graphic Design' },
    { src: require('../../assets/graphicdesign/HabibaSaad_GRAHICDESIGN_Y3_UIDESIGN_LOGO_004_006.jpg'), label: 'Graphic Design' },
  ],
};

const Featuredprojects = () => {
  const [indices, setIndices] = useState({ modeling: 0, ar: 0, design: 0 });
  const [fade, setFade] = useState(false);

  // Cycle through images with fade animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndices(prev => ({
          modeling: (prev.modeling + 1) % slides.modeling.length,
          ar: (prev.ar + 1) % slides.ar.length,
          design: (prev.design + 1) % slides.design.length,
        }));
        setFade(false);
      }, 500); // fade duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="featured-projects">
      <div className="featured-layout">
        {/* LEFT SIDE — IMAGES */}
        <div className="featured-images">
          <div className="featured-left">
            <div className={`image-container ${fade ? 'fade' : ''}`}>
              <img src={slides.modeling[indices.modeling].src} alt="3D Modeling" />
              <div className="image-label">{slides.modeling[indices.modeling].label}</div>
            </div>
          </div>

          <div className="featured-right">
            <div className={`image-container ${fade ? 'fade' : ''}`}>
              <img src={slides.ar[indices.ar].src} alt="Augmented Reality" />
              <div className="image-label">{slides.ar[indices.ar].label}</div>
            </div>

            <div className={`image-container ${fade ? 'fade' : ''}`}>
              <img src={slides.design[indices.design].src} alt="Graphic Design" />
              <div className="image-label">{slides.design[indices.design].label}</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — TEXT */}
        <div className="featured-projects-content">
          <Sidetitle sidetitle="Featured Projects" />
          <Sidetsubtitle sidetsubtitle="Where Art Meets Interaction — Turning Ideas into Immersive Digital Experiences." />
          <Miniheader miniheader="Details" />
          <Paragraph paragraph="Our featured projects showcase the perfect blend of creativity and technology. Each project reflects innovative thinking, interactive design, and meticulous attention to detail, bringing ideas to life in engaging digital experiences. From immersive visuals to seamless user interactions, these projects highlight our commitment to turning concepts into captivating realities." />
          <Calltoaction cta="View All" />
        </div>
      </div>
    </div>
  );
};

export default Featuredprojects;
