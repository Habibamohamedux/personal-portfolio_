import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Getintouch.css";

import Secondrytitle from "../common/Secondrytitle.jsx";
import Calltoaction from "../common/Calltoaction.jsx";

import screen1 from "../../assets/phones/screen1.jpg";
import screen2 from "../../assets/phones/screen2.jpg";
import screen3 from "../../assets/phones/screen3.jpg";
import screen4 from "../../assets/phones/screen4.jpg";
import screen5 from "../../assets/phones/screen5.jpg";
import screen6 from "../../assets/phones/screen6.jpg";

export default function Getintouch() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiry: "",
    email: "",
    message: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted!");
  };

  return (
    <div className="getintouch-container">
      <Secondrytitle secondaryTitle="Get in touch" />

      <section className="getintouch-wrapper">
        {/* LEFT SIDE FORM */}
        <div className="left-side">
          <motion.form
            className="glass-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="row">
              <div className="field">
                <label>Name *</label>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label>Phone</label>
                <input
                  name="phone"
                  placeholder="Your contact number"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Inquiry</label>
                <input
                  name="inquiry"
                  placeholder="Your inquiry"
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your message"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="checkbox-row">
              <input
                type="checkbox"
                name="agree"
                onChange={handleChange}
              />
              <label>I agree to the privacy policy.</label>
            </div>

            <Calltoaction cta="Submit Request" />
          </motion.form>
        </div>

        {/* RIGHT SIDE PHONES ANIMATION */}
        <div className="right-side">
          <div className="phones-glass">
            {/* LANE 1 */}
            {[screen1, screen2, screen3].map((img, i) => (
              <motion.img
                key={"lane1-" + i}
                src={img}
                className="phone-card"
                animate={{ y: ["120%", "-120%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 12 + i * 1.2,
                  ease: "linear"
                }}
                style={{
                  top: `calc(${i * 80}px)`,
                  left: `calc(${i * 80}px)`,
                  rotate: -12,
                  position: "absolute",
                  zIndex: 2
                }}
              />
            ))}

            {/* LANE 2 */}
            {[screen4, screen5, screen6].map((img, i) => (
              <motion.img
                key={"lane2-" + i}
                src={img}
                className="phone-card"
                animate={{ y: ["130%", "-130%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 14 + i * 1.3,
                  ease: "linear"
                }}
                style={{
                  top: `calc(${i * 80 + 40}px)`,
                  left: `calc(${i * 80 - 40}px)`,
                  rotate: -14,
                  position: "absolute",
                  zIndex: 1,
                  opacity: 0.92
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
