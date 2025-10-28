import React, { useState } from "react";
import "./frontenddevelopment.css";

import Centerparagraph from "../titles/centerparagraph";
import Centersubtitle from "../titles/centersubtitle";
import Centertitle from "../titles/centertitle";
import Toolstags from "../titles/tools-tags";
import Safari from "../common/safari";

// 🧠 Tool logos
import css from "../../assets/tools/css3.svg";
import html from "../../assets/tools/html5.svg";
import js from "../../assets/tools/javascript.svg";
import reactLogo from "../../assets/tools/react.svg";
import nodejs from "../../assets/tools/nodejs.svg";
import github from "../../assets/tools/github.svg";

// 🖼️ Tab images
import csstab from "../../assets/coding/css.webp";
import githubtab from "../../assets/coding/github.png";
import htmltab from "../../assets/coding/html.jpg";
import nodetab from "../../assets/coding/nodejs.jpg";
import jstab from "../../assets/coding/javascript.png";
import reactab from "../../assets/coding/react.png"; // ✅ using same React logo

const FrontendDevelopment = () => {
  const [selectedImage, setSelectedImage] = useState(htmltab);
  const [selectedUrl, setSelectedUrl] = useState("https://www.html.com");

  const toolData = {
    CSS3: { image: csstab, url: "https://www.css3.com" },
    HTML5: { image: htmltab, url: "https://www.html.com" },
    JavaScript: { image: jstab, url: "https://www.javascript.com" },
    GIT: { image: githubtab, url: "https://www.github.com" },
    "React.js": { image: reactab, url: "https://react.dev" },
    "Node.js": { image: nodetab, url: "https://nodejs.org" },
  };

  const handleTagClick = (tool) => {
    const data = toolData[tool];
    if (data) {
      setSelectedImage(data.image);
      setSelectedUrl(data.url);
    }
  };

  return (
    <div className="frontend-development-container0">

      <Centertitle centertitle="Frontend Development" />
      <Centersubtitle centersubtitle="A fully responsive and dynamic website built from scratch with clean, maintainable code and attention to every visual detail." />

      {/* Tech logos */}
      <div className="frontend-tools">
        <img src={css} alt="CSS3" />
        <img src={html} alt="HTML5" />
        <img src={js} alt="JavaScript" />
        <img src={reactab} alt="React" />
        <img src={nodejs} alt="Node.js" />
        <img src={github} alt="GitHub" />
      </div>

      {/* Tags */}
      <div className="tools-tags-container">
        {Object.keys(toolData).map((tool) => (
          <div
            key={tool}
            onClick={() => handleTagClick(tool)}
            style={{ cursor: "pointer" }}
          >
            <Toolstags>{tool}</Toolstags>
          </div>
        ))}
      </div>

      {/* Safari browser preview */}
      <Safari url={selectedUrl} images={[selectedImage]} />

      <Centerparagraph centerparagraph="I focused on transforming static designs into seamless user experiences — implementing smooth animations, optimized performance, and accessibility. The project reflects my approach to front-end development: blending creativity with technical precision to deliver fast, interactive, and visually engaging web interfaces." />
  </div>
  );
};

export default FrontendDevelopment;
