import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Getintouch.css";
import Secondrytitle from "../common/Secondrytitle.jsx";
import Calltoaction from "../common/Calltoaction.jsx";

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
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill in the required fields.");
      return;
    }

    alert("Your message has been submitted!");
  };

  return (
    <section className="getintouch-section">
      <Secondrytitle title="Get In Touch" />

      <motion.form
        className="glass-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        {/* TOP ROW */}
        <div className="row">
          <div className="field">
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              placeholder="Your contact number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="row">
          <div className="field">
            <label htmlFor="inquiry">Inquiry</label>
            <input
              id="inquiry"
              name="inquiry"
              placeholder="Your inquiry"
              value={formData.inquiry}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* AGREEMENT */}
        <div className="checkbox-row">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label htmlFor="agree">I agree to the privacy policy.</label>
        </div>

          <Calltoaction cta="Submit Request" />
    
      </motion.form>
    </section>
  );
}