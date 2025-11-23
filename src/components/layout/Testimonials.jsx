import React, { useState, useEffect } from "react";
import Secondrytitle from "../common/Secondrytitle.jsx";
import TestimonialCard from "./TestimonialCard.jsx";
import "./Testimonials.css";

const Testimonials = () => {
    const testimonialsData = [
        {
            bg: "rgba(77,124,255,0.85)",
            cards: [
                {
                    bgColor: "rgba(175,198,249,0.35)",
                    textColor: "white",
                    stars: 5,
                    title: "Her work is incredibly professional!",
                    description:
                        "She completely surprised me by transforming and rebranding our company’s website into something modern and powerful.",
                    author: "Sherif R. — CEO, Helirex"
                },
                {
                    bgColor: "rgba(12,14,18,0.55)",
                    textColor: "white",
                    stars: 5,
                    title: "Impressive speed and quality.",
                    description:
                        "She built an entire coded website in less than a week, helping me meet an important deadline.",
                    author: "Wael A. — Web Client"
                }
            ]
        },
        {
            bg: "rgba(50,79,255,0.85)",
            cards: [
                {
                    bgColor: "rgba(195,212,255,0.35)",
                    textColor: "white",
                    stars: 5,
                    title: "Amazing communication skills!",
                    description:
                        "She listens carefully, understands deeply, and delivers exactly what I imagine.",
                    author: "Noura M. — Business Owner"
                },
                {
                    bgColor: "rgba(15,17,24,0.55)",
                    textColor: "white",
                    stars: 4,
                    title: "Very impressive results!",
                    description:
                        "High-quality work, professional workflow, and very smooth experience.",
                    author: "Omar S. — Client"
                }
            ]
        }
    ];

    const [current, setCurrent] = useState(0);

    // Auto switch every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % testimonialsData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Secondrytitle secondaryTitle="Testimonials" />

            <section
                className="testimonials-section"
                style={{ background: testimonialsData[current].bg }}
            >
                {/* Left Switch Buttons */}
                <div className="switch-buttons">
                    {testimonialsData.map((_, index) => (
                        <div
                            key={index}
                            className={`switch-dot ${current === index ? "active" : ""}`}
                            onClick={() => setCurrent(index)}
                        ></div>
                    ))}
                </div>

                {/* Center Sticky Title */}
                <div className="center-title">
                    HEAR OTHER’S <br /> THOUGHTS
                </div>

                {/* Cards */}
                <div className="cards-container">
                    {testimonialsData[current].cards.map((card, idx) => (
                        <TestimonialCard key={idx} {...card} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Testimonials;