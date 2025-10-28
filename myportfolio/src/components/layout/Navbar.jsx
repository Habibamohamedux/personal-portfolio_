import React, { useState, useEffect } from "react";
import "./Navbar.css";
import BurgerMenu from "../../assets/burger.svg";
import Languagebtn from "../../assets/langauge.svg"; // fix spelling if needed
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <nav className={`navbar ${fadeIn ? "fade-in" : ""}`}>
        <ul className="nav-list">
          <li>
            <img src={Languagebtn} alt="Language" className="nav-icon" />
          </li>
          <li>
            <img src={Logo} alt="Logo" className="nav-logo" />
          </li>
          <li>
            <img
              src={BurgerMenu}
              alt="Menu"
              className="nav-icon burger-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </li>
        </ul>
      </nav>

      {/* Overlay menu */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <span className="menu-location">EG</span>
          <span className="menu-time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <img
            src={BurgerMenu}
            alt="Close"
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="menu-content">
          <p className="menu-section">SERVICES OVERVIEW</p>
          <ul className="menu-items">
            <li>About</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Courses & Tutorials</li>
            <li>Blogs & News</li>
              <li>Contact</li>
          </ul>

          <div className="menu-description">
            <h4>Interaction Design</h4>
            <p>
              Engaging animations and micro-interactions are the secret to
              dynamic user experiences. I design interactions that breathe life
              into your digital products.
            </p>
          </div>

          <div className="menu-footer">
            <h4>Webflow</h4>
            <p>
              As an expert, I bring your designs to life with scalable, visually
              striking websites without compromising flexibility.
            </p>
          </div>
        </div>
      </div>

      {/* Overlay background */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
};

export default Navbar;