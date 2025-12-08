import React, { useState, useEffect, useRef } from "react";
// 1. Import Link from React Router
import { Link } from "react-router-dom"; 
import "./Navbar.css";
// Make sure these paths are correct for your project
import Languagebtn from "../../assets/language.svg"; 
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const menuRef = useRef();

  // --- 2. UPDATED LINKS WITH PATHS INSTEAD OF IDS ---
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
   { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

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

          {/* Center: Logo (Optional: Link this to Home too) */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="nav-logo" />
          </Link>

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
          
          {/* We hid the header in CSS, so this part is technically invisible, 
              but good to keep structure or remove if preferred */}
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
            {/* --- 3. MAP THROUGH LINKS --- */}
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  onClick={() => setMenuOpen(false)} // Close menu when clicked
                  style={{ textDecoration: 'none', color: 'inherit' }} // Keep styling clean
                >
                  {item.name}
                </Link>
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