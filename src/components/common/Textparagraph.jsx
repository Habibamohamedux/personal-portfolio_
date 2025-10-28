import React from "react";
import "./Textgenration.css";

const TextParagraph = ({ paragraphhead, fade, isArabic }) => {
  return (
    <p
      className={`text-generation-subtitle ${fade ? "fade-in" : "fade-out"} ${
        isArabic ? "arabic-font" : ""
      }`}
    >
      {paragraphhead}
    </p>
  );
};

export default TextParagraph;