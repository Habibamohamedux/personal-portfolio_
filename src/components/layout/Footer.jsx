import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Footer.css";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}!`);
    setEmail("");
  };

  return (
    <footer className="footer">
      {/* Glass Holder */}
      <div className="footer-glass">
        <div className="footer-content">
          {/* LEFT */}
          <div className="footer-column left">
            <h2 className="footer-name">Habiba Saad</h2>
            <p className="footer-desc">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* MIDDLE - Updated to use Link and match your Router paths */}
          <div className="footer-column middle">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li> 
              {/* Assuming Portfolio might share the Services page or exist on Home, 
                  mapped to Services for now based on your Router */}
              <li><Link to="/Courses">Courses & Tutorials</Link></li>
              <li><Link to="/blogs">Blogs & News</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="footer-column right">
            <h3 className="footer-heading">CONNECT & SUBSCRIBE</h3>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-link">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter" className="social-link">
                <Twitter size={24} />
              </a>
              <a href="mailto:your-email@example.com" title="Email" className="social-link">
                <Mail size={24} />
              </a>
            </div>

            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <button className="back-top-btn" onClick={scrollToTop}>
          ↑ Back to Top
        </button>

        <p className="footer-copy">© {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
}