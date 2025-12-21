import React, { useState, useEffect } from "react";
import LiquidEther from "./LiquidEther";
import "./Contacthero.css"; 

export default function ContactHero() {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const email = "contact@habibasaad.com";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <section className="contact-hero">
      {/* Background Layer */}
      <div className="contact-hero__bg">
        <LiquidEther
            mouseForce={20}
            cursorSize={150}
            colors={["#5227FF", "#9f9fffff", "#9ec1efff"]}
            autoDemo={true}
            style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Content Layer */}
      <div className={`contact-hero__content ${mounted ? "fade-in" : ""}`}>
        
        <div className="contact-hero__header">
            <span className="contact-hero__dot"></span>
            <p className="contact-hero__subtitle">Project in mind?</p>
        </div>
        
        <div className="contact-hero__title-wrapper">
            <h1 className="contact-hero__title" data-text="SAY HELLO">SAY HELLO</h1>
        </div>
        
        <p className="contact-hero__desc">
            Let’s create something meaningful together.
        </p>

        <div className="contact-hero__actions">
            <button 
                className={`contact-hero__btn ${copied ? "success" : ""}`} 
                onClick={handleCopyEmail}
                aria-label="Copy email address"
            >
                <span className="contact-hero__btn-icon">
                    {copied ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    )}
                </span>
                <span>
                    {copied ? "Address Copied" : "Copy Email Address"}
                </span>
            </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="contact-hero__scroll">
        <div className="contact-hero__mouse"></div>
      </div>
    </section>
  );
}