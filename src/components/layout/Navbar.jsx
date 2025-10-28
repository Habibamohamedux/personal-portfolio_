import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import Languagebtn from "../../assets/language.svg"; // fix spelling if needed
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const menuRef = useRef();

  useEffect(() => {
    setFadeIn(true);
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setLanguageMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setLanguageMenu(false);
  };

  return (
    <>
      <nav className={`navbar ${fadeIn ? "fade-in" : ""}`}>
        <div className="nav-list">
          {/* Left: Language */}
          <div className="language-container" ref={menuRef}>
            <div
              className="language-toggle"
              onClick={() => setLanguageMenu(!languageMenu)}
            >
              <img src={Languagebtn} alt="Language" className="nav-icon" />
              <span className="lang-label">{selectedLanguage}</span>
            </div>

            {languageMenu && (
              <ul className="language-menu">
                {["EN", "AR", "DE", "FR"].map((lang) => (
                  <li
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    className={selectedLanguage === lang ? "active" : ""}
                  >
                    {lang === "EN"
                      ? "English"
                      : lang === "AR"
                      ? "العربية"
                      : lang === "DE"
                      ? "Deutsch"
                      : "Français"}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Center: Logo */}
          <img src={Logo} alt="Logo" className="nav-logo" />

          {/* Right: Burger */}
          <div
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div className={`fullscreen-menu ${menuOpen ? "open" : ""}`}>
        <div className="fullscreen-content">
          <div className="fullscreen-header">
            <img src={Logo} alt="Logo" className="fullscreen-logo" />
            <div
              className="close-btn-alt"
              onClick={() => setMenuOpen(false)}
              role="button"
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
            </div>
          </div>

          <ul className="fullscreen-links">
            {[
              "Home",
              "About",
              "Portfolio",
              "Services",
              "Courses & Tutorials",
              "Blogs & News",
              "Contact",
            ].map((item) => (
              <li key={item} onClick={() => setMenuOpen(false)}>
                {item}
              </li>
            ))}
          </ul>

          <div className="fullscreen-footer">
            <p>© 2025 Habiba Saad. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;