import React, { useState, useEffect } from "react";
import "../layout/Socialmedia.css";
import "../common/Textgenration.jsx";

const Socialmedia = () => {
  const texts = [
    {
      lang: "EN",
      title: "WANT TO SEE MORE!",
      subtitle: "EXPLORE SOCIALS",
    },
    {
      lang: "AR",
      title: "هل تريد رؤية المزيد!",
      subtitle: "استكشف السوشيال",
    },
    {
      lang: "DE",
      title: "MÖCHTEST DU MEHR SEHEN!",
      subtitle: "ERKUNDE DIE SOCIALS",
    },
    {
      lang: "FR",
      title: "TU VEUX VOIR PLUS !",
      subtitle: "EXPLORER LES RÉSEAUX",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const current = texts[index];
  const isArabic = current.lang === "AR";

  return (
    <div className="text-generation-container">
      <div className="text-generation-content">
        
        {/* TITLE */}
        <h1
          className={`text-generation-title ${
            fade ? "fade-in" : "fade-out"
          } ${isArabic ? "arabic-font" : ""}`}
        >
          {current.title}
        </h1>

        {/* SUBTITLE */}
        <p
          className={`text-generation-sub ${
            fade ? "fade-in" : "fade-out"
          } ${isArabic ? "arabic-font" : ""}`}
        >
          {current.subtitle}
        </p>

      </div>
    </div>
  );
};

export default Socialmedia;