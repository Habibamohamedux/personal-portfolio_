import React, { useState, useEffect } from "react";
import Secondrytitle from "../common/Secondrytitle.jsx";
import TestimonialCard from "./TestimonialCard.jsx";
import "./Testimonials.css";

// Import your images
import heltrex01 from '../../assets/freelance/heltrex01.jpg';
import heltrex02 from '../../assets/freelance/heltrex02.jpg';
import moblink01 from '../../assets/freelance/moblink01.jpg';
import moblink02 from '../../assets/freelance/moblink02.jpg';

const Testimonials = () => {
  const testimonialsData = [
    {
      cards: [
        {
          bgColor: "rgba(175,198,249,0.15)", // More transparent for glass effect
          textColor: "white",
          stars: 5,
          title: "Her work is incredibly professional!",
          description:
            "She completely surprised me by transforming and rebranding our company’s website into something modern and powerful.",
          author: "Sherif R. — CEO, Helirex",
          images: [heltrex01, heltrex02]
        },
        {
          bgColor: "rgba(12,14,18,0.45)",
          textColor: "white",
          stars: 5,
          title: "Impressive speed and quality.",
          description:
            "She built an entire coded website in less than a week, helping me meet an important deadline.",
          author: "Wael A. — Web Client",
          images: [moblink01, moblink02]
        }
      ]
    }
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Switch cards every 6s (increased slightly for readability)
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCard(prev => (prev === testimonialsData[0].cards.length - 1 ? 0 : prev + 1));
      setCurrentImageIndex(0); // Reset image index when card changes
    }, 6000);
    return () => clearInterval(cardInterval);
  }, []);

  // Slideshow for background images every 3s
  useEffect(() => {
    const images = testimonialsData[0].cards[currentCard].images;
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(imageInterval);
  }, [currentCard]);

  const currentCardData = testimonialsData[0].cards[currentCard];
  const currentBg = currentCardData.images[currentImageIndex];

  return (
    <div className="testimonials-container">
      <Secondrytitle secondaryTitle="Testimonials" />

      <section
        className="testimonials-section"
        style={{ "--bg-image": `url(${currentBg})` }}
      >
        {/* Darker Overlay for readability */}
        <div className="overlay"></div>

        {/* Navigation Dots */}
        <div className="switch-buttons">
          {testimonialsData[0].cards.map((_, index) => (
            <div
              key={index}
              className={`switch-dot ${currentCard === index ? "active" : ""}`}
              onClick={() => {
                setCurrentCard(index);
                setCurrentImageIndex(0);
              }}
            ></div>
          ))}
        </div>

        <div className="center-title">
          HEAR OTHER’S <br /> THOUGHTS
        </div>

        {/* Key added here forces re-render animation on change */}
        <div className="cards-container" key={currentCard}>
          <TestimonialCard {...currentCardData} />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;