import React from 'react';
import './frontenddevelopment.css';
import Centerparagraph from '../titles/centerparagraph';   
import Centersubtitle from '../titles/centersubtitle'; 
import Centertitle from '../titles/centertitle';
import css from '../../assets/tools/css3.svg';
import html from '../../assets/tools/html5.svg';
import js from '../../assets/tools/javascript.svg';
import reactLogo from '../../assets/tools/react.svg';
import nodejs from '../../assets/tools/nodejs.svg';
import github from '../../assets/tools/github.svg';

const frontenddevelopment = () => {
  return (
    <>
      <Centertitle centertitle="Frontend Development" />
      <Centersubtitle centersubtitle="A fully responsive and dynamic website built from scratch with clean, maintainable code and attention to every visual detail." />
      <Centerparagraph centerparagraph="I focused on transforming static designs into seamless user experiences — implementing smooth animations, optimized performance, and accessibility. The project reflects my approach to front-end development: blending creativity with technical precision to deliver fast, interactive, and visually engaging web interfaces." />

      <div className="frontend-tools">
        <img src={css} alt="CSS3" />
        <img src={html} alt="HTML5" />
        <img src={js} alt="JavaScript" />
        <img src={reactLogo} alt="React" />
        <img src={nodejs} alt="Node.js" />
        <img src={github} alt="GitHub" />
      </div>
    </>
  );
};

export default frontenddevelopment;
