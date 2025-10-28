import React, { useState, useEffect } from "react";
import "./Textgenration.css";

const Textgenration = () => {
  const texts = [
    { lang: "EN", content: "Hello! I am Habiba Saad ✦" },
    { lang: "AR", content: "مرحباً! أنا حبيبة سعد ✦" },
    { lang: "DE", content: "Hallo! Ich bin Habiba Saad ✦" },
    { lang: "FR", content: "Bonjour ! Je suis Habiba Saad ✦" },
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

  return (
    <div className="text-generation-container">
      <h1 className={`text-generation-title ${fade ? "fade-in" : "fade-out"}`}>
        {texts[index].content}
      </h1>
    </div>
  );
};

export default Textgenration;