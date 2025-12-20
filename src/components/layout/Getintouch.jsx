import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Getintouch.css";

import Secondrytitle from "../common/Secondrytitle.jsx";
import Calltoaction from "../common/Calltoaction.jsx";

// Import images
import screen1 from "../../assets/phones/screen1.jpg";
import screen2 from "../../assets/phones/screen2.jpg";
import screen3 from "../../assets/phones/screen3.jpg";
import screen4 from "../../assets/phones/screen4.jpg";
import screen5 from "../../assets/phones/screen5.jpg";
import screen6 from "../../assets/phones/screen6.jpg";

const imagesColumn1 = [screen1, screen2, screen3, screen1, screen2, screen3];
const imagesColumn2 = [screen4, screen5, screen6, screen4, screen5, screen6];

export default function Getintouch() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiry: "",
    email: "",
    message: "",
    agree: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the privacy policy.");
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      console.log("Form Data:", formData);
    }, 500);
  };

  return (
    <section className="getintouch">
      <Secondrytitle secondaryTitle="GET IN TOUCH" />

      <div className="getintouch-wrapper">
        {/* --- LEFT SIDE --- */}
        <div className="left-side">
          <motion.div
            className="glass-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                /* --- FORM STATE --- */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="form-header">
                    <h3>Let's start a conversation</h3>
                    <p>Fill out the form below and we will get back to you shortly.</p>
                  </div>

                  <br />

                  <div className="row">
                    <div className="field">
                      <label>Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="field">
                      <label>Phone</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="field">
                      <label>Inquiry</label>
                      <input
                        name="inquiry"
                        type="text"
                        placeholder="General Inquiry"
                        value={formData.inquiry}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="field">
                      <label>Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label>Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="checkbox-row">
                    <input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                    />
                    <label htmlFor="agree">I agree to the privacy policy.</label>
                  </div>

                  <div className="form-actions">
                    <Calltoaction cta="Submit Request" />
                  </div>
                </motion.form>
              ) : (
                /* --- SUCCESS STATE --- */
                <motion.div
                  key="success"
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.div 
                    className="icon-circle"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    {/* SVG Checkmark */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#00e676" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <h3>Request Submitted!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. I have received your message and will get back to you at <strong>{formData.email}</strong> shortly.
                  </p>
                  
                  <button className="reset-btn" onClick={() => setIsSubmitted(false)}>
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: INFINITE SCROLL --- */}
        <div className="right-side">
          <div className="phones-glass-container">
            <div className="scroll-column">
              <motion.div
                className="scroll-track"
                animate={{ y: [0, -1000] }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
              >
                {imagesColumn1.map((img, i) => (
                  <div key={`col1-${i}`} className="image-card">
                    <img src={img} alt="App Screen" />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="scroll-column mt-offset">
              <motion.div
                className="scroll-track"
                animate={{ y: [-1000, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
              >
                {imagesColumn2.map((img, i) => (
                  <div key={`col2-${i}`} className="image-card">
                    <img src={img} alt="App Screen" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}