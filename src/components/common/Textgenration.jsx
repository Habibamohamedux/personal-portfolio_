import React, { useState, useEffect } from "react";
import "./Textgenration.css";
import TextParagraph from "./Textparagraph.jsx";

const Textgenration = () => {
  const texts = [
    {
      lang: "EN",
      title: "Hello! I am Habiba Saad",
      subtitle: "Bringing imagination to life — one line, one layer at a time.",
      color: "#4D9FFF",
    },
    {
      lang: "AR",
      title: "مرحباً! أنا حبيبة سعد",
      subtitle: "أجعل الخيال ينبض بالحياة — سطر بعد سطر، طبقة بعد طبقة.",
      color: "#60B8FF",
    },
    {
      lang: "DE",
      title: "Hallo! Ich bin Habiba Saad",
      subtitle: "Ich erwecke Fantasie zum Leben — Linie für Linie, Schicht für Schicht.",
      color: "#7FCFFF",
    },
    {
      lang: "FR",
      title: "Salut! Je suis Habiba Saad",
      subtitle: "Je donne vie à l’imagination — ligne après ligne, couche après couche.",
      color: "#9BD8FF",
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
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = texts[index];
  const isArabic = current.lang === "AR";

  return (
    <div className="text-generation-container">
      <div className="text-generation-content">
        <h1
          className={`text-generation-title ${fade ? "fade-in" : "fade-out"} ${
            isArabic ? "arabic-font" : ""
          }`}
        >
          {current.title}{" "}
          <span
            className="text-generation-star"
            style={{ color: current.color }}
          >
            *
          </span>
        </h1>
        <TextParagraph
          paragraphhead={current.subtitle}
          fade={fade}
          isArabic={isArabic}
        />
      </div>
    </div>
  );
};

export default Textgenration;