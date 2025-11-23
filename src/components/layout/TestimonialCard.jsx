import React from "react";
import "./Testimonials.css";

const TestimonialCard = ({ bgColor, textColor, stars, title, description, author }) => {
    return (
        <div className="testimonial-card" style={{ background: bgColor, color: textColor }}>
            <div className="stars">
                {"★".repeat(stars)}
            </div>

            <h3 className="testimonial-title">{title}</h3>
            <p className="testimonial-desc">{description}</p>

            <p className="testimonial-author">{author}</p>
        </div>
    );
};

export default TestimonialCard;