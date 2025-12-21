import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
        alert(`Thanks for subscribing with ${email}!`);
        setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-glass">
        
        {/* On desktop, this is absolute. On mobile, CSS makes it static/centered */}
        <button className="back-top-btn" onClick={scrollToTop}>
          Back to Top <ArrowUp size={14} style={{marginLeft: '5px'}}/>
        </button>

        <div className="footer-content">
          {/* LEFT */}
          <div className="footer-column left">
            <h2 className="footer-name">Habiba Saad</h2>
            <p className="footer-desc">
              Crafting immersive digital experiences with passion, precision, and modern web technologies.
            </p>
          </div>

          {/* MIDDLE */}
          <div className="footer-column middle">
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/services">Services</Link></li> 
              <li><Link to="/Courses">Courses</Link></li>
              <li><Link to="/blogs">The Journal</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="footer-column right">
            <h3 className="footer-heading">Stay Connected</h3>
            
            <div className="social-icons">
              <a href="https://github.com" className="social-link" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:email@example.com" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>

            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Join the newsletter..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div className="footer-copy">
          <p>© {currentYear} Habiba Saad.</p>
        </div>
      </div>
    </footer>
  );
}