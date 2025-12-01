import React from "react";
import "./servicescards.css"; 
import Secondrytitle from "../common/Secondrytitle.jsx";
import shape1 from "../../assets/servicesshapes/shape1.png";
import shape2 from "../../assets/servicesshapes/shape2.png";
import shape3 from "../../assets/servicesshapes/shape3.png";
import shape4 from "../../assets/servicesshapes/shape4.png";
import shape5 from "../../assets/servicesshapes/shape5.png";
import shape6 from "../../assets/servicesshapes/shape6.png";
import shape7 from "../../assets/servicesshapes/shape7.png";
import shape8 from "../../assets/servicesshapes/shape8.png";
import shape9 from "../../assets/servicesshapes/shape9.png";
import shape11 from "../../assets/servicesshapes/shape11.png";
const cardsData = [
  {
    category: "UX–UI Design Services",
    title: "Designing Experiences",
    description:
      "Intuitive, user-centered, and visually refined interfaces that bridge the gap between people and digital products. The goal is to make every interaction feel effortless, engaging, and meaningful — blending research, strategy, and creativity to deliver designs that truly resonate with users and drive results.",
    tags: [
      "UX/UI Design",
      "UX/UI Consulting",
      "UX Research",
      "Usability Testing",
      "UI Motion",
      "Interaction Animated Visuals",
      "Digital Prototyping",
      "Interaction Design",
      "UX Design Audit",
      "UI/UX Courses"
    ],
    background: "linear-gradient(90deg, #012C79 0%, #011332 100%)",
    buttonColor: "linear-gradient(90deg, #1748F4 0%, #230FBC 100%)",
    shapes: [shape1, shape2],
  },
  {
    category: "Motion Graphics Services",
    title: "Bringing Stories to Life",
    description:
      "I design motion graphics that capture attention and communicate ideas with clarity and emotion. Every animation I create enhances storytelling, strengthens brand identity, and gives digital experiences a sense of rhythm and life.",
    tags: [
      "Visual Storytelling",
      "Motion for Ads & Social Media",
      "Logo Animation",
      "Explainer Videos",
      "Motion Graphics Courses"
    ],
    background: "linear-gradient(90deg, #07846D 0%, #032D25 100%)",
    buttonColor: "linear-gradient(90deg, #17F4D3 0%, #0FA2BC 100%)",
    shapes: [shape3, shape4],
  },
  {
    category: "Web & App Development Services",
    title: "Transforming Designs Into Interactive Reality",
    description:
      "Transforming designs into clean, responsive, and accessible digital experiences. Focused on delivering seamless usability and consistent performance across all devices — blending functionality, aesthetics, and precision.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Flutter",
      "Responsive Design",
      "Web Animation",
      "Interactive Prototypes",
      "UI Implementation",
      "Web Development Courses"
    ],
    background: "linear-gradient(90deg, #076384 0%, #03212D 100%)",
    buttonColor: "linear-gradient(90deg, #17DEF4 0%, #0F74BC 100%)",
    shapes: [shape5, shape6],
  },
  {
    category: "3D Modeling Services",
    title: "Designing in Three Dimensions",
    description:
      "Designing detailed three-dimensional visuals that balance realism, creativity, and precision. Focused on producing models that enhance storytelling, support product visualization, and bring digital concepts to life.",
    tags: [
      "3D Modeling",
      "Texturing",
      "Rendering",
      "Lighting",
      "Product Visualization",
      "Environment Design",
      "Blender Courses"
    ],
    background: "linear-gradient(90deg, #845407 0%, #2D1D03 100%)",
    buttonColor: "linear-gradient(90deg, #F49817 0%, #BC710F 100%)",
    shapes: [shape7, shape8],
  },
  {
    category: "Branding Services",
    title: "Building Meaningful Brands",
    description:
      "I help brands find their voice and visual identity through design that feels authentic and timeless. From strategy to execution, I craft cohesive systems that express values, connect emotionally, and stand out with purpose.",
    tags: [
      "Visual Identity",
      "Logo Design",
      "Brand Guidelines",
      "Naming",
      "Art Direction",
      "Brand Strategy",
      "Branding Courses"
    ],
    background: "linear-gradient(90deg, #6B0784 0%, #24032D 100%)",
    buttonColor: "linear-gradient(90deg, #8917F4 0%, #8E0FBC 100%)",
    shapes: [shape9, shape11],
  },
  {
    category: "Creative Media & Storytelling",
    title: "Crafting Immersive Narratives",
    description:
      "Crafting immersive narratives through visuals, motion, and interactivity. This category blends photography, filmmaking, writing, and augmented reality to create expressive stories that connect emotionally and visually with audiences across mediums.",
    tags: [
      "Photography",
      "Filmmaking",
      "Creative Writing",
      "Storyboarding",
      "AR Experiences",
      "Visual Storytelling",
      "Scriptwriting",
      "Creative Media Courses"
    ],
    background: "linear-gradient(90deg, #840707 0%, #2D0303 100%)",
    buttonColor: "linear-gradient(90deg, #DA1414 0%, #910E0E 100%)",
    shapes: [shape4, shape8],
  }
];

const ServicesCards = () => {
  return (
    <div className="services-section">
      <Secondrytitle secondaryTitle="Services" />


      <div className="services-stack-container">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="service-card"
            style={{
              background: card.background,
              top: `calc(5rem + ${index * 2}rem)`,
              position: "sticky",
            }}
          >
            <img
              src={card.shapes[0]}
              alt=""
              className="shape shape-top-right"
            />
            <img
              src={card.shapes[1]}
              alt=""
              className="shape shape-bottom-right"
            />

            {/* CARD CONTENT */}
            <div className="service-content">
              <h3 className="service-category">{card.category}</h3>
              <h2 className="service-title">{card.title}</h2>
              <p className="service-description">{card.description}</p>

              <div className="service-tags">
                {card.tags.map((tag, i) => (
                  <span key={i} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="service-button"
                style={{ background: card.buttonColor }}
              >
                View all
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 9 11" fill="none">
                  <path d="M0.70567 1.74846C0.641714 1.42868 0.84905 1.11768 1.16883 1.05372L6.37937 0.0116118C6.69915 -0.0523444 7.01016 0.154992 7.07411 0.474771L8.11622 5.68531C8.18017 6.00509 7.97284 6.3161 7.65306 6.38005C7.33334 6.4439 7.02227 6.23662 6.95832 5.91689L6.19577 2.10414L1.08183 9.77506C0.900932 10.0464 0.534323 10.1197 0.262981 9.93883C-0.00836017 9.75794 -0.0816821 9.39133 0.0992122 9.11999L5.21316 1.44907L1.40041 2.21162C1.08069 2.27556 0.769702 2.06814 0.70567 1.74846Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>  

  );
};

export default ServicesCards;