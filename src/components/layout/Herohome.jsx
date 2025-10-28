import React from 'react';
import './Herohome.css';
import Textgenration from '../common/Textgenration.jsx';
import Video from "../../assets/motiongraphics/HabibaSaad_MOTIONGRAPHICS_Y3_SHOWREEL01_001.mp4";

const Herohome = () => {
  return (
    <div className="herohome-container">
      <video className="herohome-video" src={Video} autoPlay loop muted playsInline></video>
      <div className="herohome-overlay">
        <Textgenration />
      </div>
    </div>
  );
};

export default Herohome;