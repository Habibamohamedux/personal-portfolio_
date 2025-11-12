import React, { useEffect, useRef, useState } from "react";
import "./servicescards.css";

// all shape paths
const shapePaths = [
  "/assets/servicesshapes/shape1.svg",
  "/assets/servicesshapes/shape2.svg",
  "/assets/servicesshapes/shape3.svg",
  "/assets/servicesshapes/shape4.svg",
  "/assets/servicesshapes/shape5.svg",
  "/assets/servicesshapes/shape6.svg",
  "/assets/servicesshapes/shape7.svg",
  "/assets/servicesshapes/shape8.svg",
  "/assets/servicesshapes/shape9.svg",
  "/assets/servicesshapes/shape11.svg",
];

// cards data
const cardsData = [
  {
    category: "UX–UI Design Services",
    title: "Designing Experiences",
    description:
      "Intuitive, user-centered, and visually refined interfaces that bridge the gap between people and digital products.",
    tags: ["UX/UI Design", "UX Research", "Usability Testing", "Prototyping"],
    background: "linear-gradient(135deg, #1E1F6E, #000DFF)",
    buttonColor: "#6A74FF",
  },
  {
    category: "Motion Graphics Services",
    title: "Bringing Stories to Life",
    description:
      "Motion graphics that capture attention and communicate ideas with clarity and emotion.",
    tags: ["Visual Storytelling", "Logo Animation", "Explainer Videos"],
    background: "linear-gradient(135deg, #174C45, #017B61)",
    buttonColor: "#19CDA1",
  },
  {
    category: "Web & App Development",
    title: "Transforming Designs Into Reality",
    description:
      "Delivering seamless usability and consistent performance across all devices.",
    tags: ["React", "Next.js", "HTML", "CSS", "JavaScript"],
    background: "linear-gradient(135deg, #082A3A, #1082A3)",
    buttonColor: "#2FC3E8",
  },
  {
    category: "3D Modeling Services",
    title: "Designing in Three Dimensions",
    description:
      "Detailed 3D visuals that balance realism, creativity, and precision.",
    tags: ["3D Modeling", "Texturing", "Rendering", "Visualization"],
    background: "linear-gradient(135deg, #6A4E0B, #B38C36)",
    buttonColor: "#E0A54B",
  },
  {
    category: "Branding Services",
    title: "Building Meaningful Brands",
    description:
      "Helping brands find their voice and stand out through design and strategy.",
    tags: ["Logo Design", "Brand Guidelines", "Art Direction"],
    background: "linear-gradient(135deg, #4E0A52, #9E2BA1)",
    buttonColor: "#C94FC7",
  },
];

const ServicesCards = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const cardRefs = useRef([]);
  const shapeRefs = useRef([]);

  // Shuffle cards + assign 2 random shapes
  useEffect(() => {
    const shuffled = cardsData.map(card => {
      const shapes = [...shapePaths].sort(() => Math.random() - 0.5).slice(0, 2);
      return { ...card, shapes };
    });
    setShuffledCards(shuffled);
  }, []);

  // Scroll fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.25 }
    );
    cardRefs.current.forEach(card => card && observer.observe(card));
    return () => observer.disconnect();
  }, [shuffledCards]);

  // Parallax effect for shapes
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      shapeRefs.current.forEach((shape, idx) => {
        if (shape) {
          const speed = idx % 2 === 0 ? 0.15 : 0.25;
          shape.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.02}deg)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="services-stacked">
      {shuffledCards.map((card, i) => (
        <section
          key={i}
          ref={el => (cardRefs.current[i] = el)}
          className="service-section"
          style={{ background: card.background }}
        >
          {/* background shapes */}
          {card.shapes.map((shape, idx) => (
            <img
              key={idx}
              ref={el => (shapeRefs.current[i * 2 + idx] = el)}
              src={shape}
              alt=""
              className={`card-shape shape-${idx}`}
            />
          ))}

          {/* card content */}
          <div className="service-content">
            <h3 className="service-category">{card.category}</h3>
            <h2 className="service-title">{card.title}</h2>
            <p className="service-desc">{card.description}</p>
            <div className="service-tags">
              {card.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <button
              className="service-btn"
              style={{ background: card.buttonColor }}
            >
              view all ↗
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesCards;
