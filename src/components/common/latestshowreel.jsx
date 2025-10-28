import React, { useRef, useState, useEffect } from 'react';
import './latestshowreel.css';
import Secondrytitle from './Secondrytitle.jsx';
import Videotxtbtn from './Videotxtbtn.jsx';
import Video from "../../assets/motiongraphics/HabibaSaad_MOTIONGRAPHICS_Y3_SHOWREEL01_001.mp4";
import Shape1 from "../../assets/shapes/shape1.svg";
import Shape2 from "../../assets/shapes/shape2.svg";
import Shape3 from "../../assets/shapes/shape3.svg";
import Shape4 from "../../assets/shapes/shape4.svg";
import Minititle from './Minititle.jsx';


const Latestshowreel = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) videoRef.current.pause();
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // Parallax effect for 3D feel
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (clientX - centerX) / centerX; // -1 to 1
    const deltaY = (clientY - centerY) / centerY; // -1 to 1

    const shapes = document.querySelectorAll('.latestshowreel .shape');
    shapes.forEach((el, index) => {
      const speed = (index + 1) * 20; // depth effect
      el.style.transform = `
        translateX(${deltaX * speed}px)
        translateY(${deltaY * speed}px)
        rotate(${deltaX * 15}deg)
      `;
    });
  };

  const handleMouseLeave = () => {
    document.querySelectorAll('.latestshowreel .shape').forEach((el) => {
      el.style.transform = `translateX(0) translateY(0) rotate(0)`;
    });
  };

  return (
    <div className='latestshowreel'>
      <Secondrytitle secondaryTitle="Latest Showreel" />

      <div
        className='latestshowreel-video'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseLeave();
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Overlay */}
        <div 
          className={`video-overlay ${!isPlaying || isHovered ? 'visible' : ''}`}
          onClick={handlePlayPause}
        >
          <Videotxtbtn 
            videotxtbtn={isPlaying ? (isHovered ? "Pause Video" : "") : "Play Showreel"} 
          />
        </div>

        {/* Video */}
        <video 
          ref={videoRef}
          src={Video}
          loop
          muted
          playsInline
        ></video>

     {/* Floating shapes under the video */}
<img src={Shape1} className="shape shape1" alt="shape1"/>
<img src={Shape2} className="shape shape2" alt="shape2"/>
<img src={Shape3} className="shape shape3" alt="shape3"/>
<img src={Shape4} className="shape shape4" alt="shape4"/> 
</div>
    <Minititle minititle="A brief look into my creative process — from concept sketches to high-fidelity motion and interactive design." />

    </div>
    
  );
};

export default Latestshowreel;