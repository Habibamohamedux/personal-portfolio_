import React from "react";
import LiquidEther from "./LiquidEther";
import "./Contacthero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      {/* LiquidEther background */}
      <LiquidEther
        mouseForce={20}
        cursorSize={150}
        colors={["#5227FF", "#9f9fffff", "#9ec1efff"]}
        autoDemo={true}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />

      {/* Content on top */}
      <div className="contact-hero-content">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Fill the form below or reach out directly.</p>
        {/* Add your contact form or buttons here */}
      </div>
    </section>
  );
}