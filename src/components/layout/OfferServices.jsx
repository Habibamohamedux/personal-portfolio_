import React from 'react';
import './OfferServices.css';
import { 
  ArrowRight, 
  Palette, 
  Video, 
  Code2, 
  Box, 
  Briefcase, 
  Camera 
} from 'lucide-react';

// Data structure holding your specific services content
const servicesData = [
  {
    id: 1,
    title: "UX–UI Design Services",
    icon: <Palette size={24} color="white" />,
    tags: [
      "UX/UI DESIGN", "UX/UI CONSULTING", "UX RESEARCH", "USABILITY TESTING", 
      "UI MOTION", "INTERACTION ANIMATED VISUALS", "DIGITAL PROTOTYPING", 
      "INTERACTION DESIGN", "UX DESIGN AUDIT", "UI/UX COURSES"
    ]
  },
  {
    id: 2,
    title: "Motion Graphics Services",
    icon: <Video size={24} color="white" />,
    tags: [
      "VISUAL STORYTELLING", "MOTION FOR ADS & SOCIAL MEDIA", "LOGO ANIMATION", 
      "EXPLAINER VIDEOS", "MOTION GRAPHICS COURSES"
    ]
  },
  {
    id: 3,
    title: "Web & App Development",
    icon: <Code2 size={24} color="white" />,
    tags: [
      "HTML", "CSS", "JAVASCRIPT", "REACT.JS", "NODE.JS", "FLUTTER", 
      "RESPONSIVE DESIGN", "WEB ANIMATION", "INTERACTIVE PROTOTYPES", 
      "UI IMPLEMENTATION", "WEB DEVELOPMENT COURSES"
    ]
  },
  {
    id: 4,
    title: "3D Modeling Services",
    icon: <Box size={24} color="white" />,
    tags: [
      "3D MODELING", "TEXTURING", "RENDERING", "LIGHTING", 
      "PRODUCT VISUALIZATION", "ENVIRONMENT DESIGN", "BLENDER COURSES"
    ]
  },
  {
    id: 5,
    title: "Branding Services",
    icon: <Briefcase size={24} color="white" />,
    tags: [
      "VISUAL IDENTITY", "LOGO DESIGN", "BRAND GUIDELINES", "NAMING", 
      "ART DIRECTION", "BRAND STRATEGY", "BRANDING COURSES"
    ]
  },
  {
    id: 6,
    title: "Creative Media & Storytelling",
    icon: <Camera size={24} color="white" />,
    tags: [
      "PHOTOGRAPHY", "FILMMAKING", "CREATIVE WRITING", "STORYBOARDING", 
      "AR EXPERIENCES", "VISUAL STORYTELLING", "SCRIPTWRITING", "CREATIVE MEDIA COURSES"
    ]
  }
];

const OfferServices = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        
        {/* Header Section */}
        <header className="services-header">
          <h2 className="section-title">Services I Offer</h2>
          <p className="section-subtitle">
            A comprehensive suite of creative services tailored to bring your vision to life
          </p>
        </header>

        {/* Grid of Service Cards */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card glass-effect" key={service.id}>
              
              {/* Card Top: Icon and Title */}
              <div className="card-header">
                <div className="icon-box">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>

              {/* Card Body: Tags List */}
              <div className="card-body">
                <ul className="tags-list">
                  {service.tags.map((tag, index) => (
                    <li key={index} className="tag-item">{tag}</li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Link */}
              <div className="card-footer">
                <a href="#details" className="view-details-link">
                  <span>View Details</span>
                  <ArrowRight size={18} />
                </a>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferServices;