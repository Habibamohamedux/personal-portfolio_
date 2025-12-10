import React from 'react';

const OfferServices = () => {
  const services = [
    { title: "Front-End Dev", desc: "React, Modern CSS, Responsive Layouts", icon: "💻" },
    { title: "UI/UX Design", desc: "Wireframing, Prototyping, Accessibility", icon: "🎨" },
    { title: "Branding", desc: "Logo Design, Visual Identity, Guidelines", icon: "✨" },
    { title: "Filmmaking", desc: "Scripting, Shooting, Editing", icon: "🎥" },
    { title: "Creative Writing", desc: "Copywriting, Narratives, Storytelling", icon: "✍️" },
    { title: "Counseling", desc: "Personal Growth, Empathetic Listening", icon: "🤝" },
  ];

  return (
    <section className="section offer-services">
      <div className="container">
        <h2 className="section-title">Overview of Services</h2>
        <div className="services-grid">
          {services.map((s, index) => (
            <div key={index} className="service-card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferServices;