import React from 'react';
import './Newsletter.css';
import Secondrytitle from "../common/Secondrytitle.jsx";
import Calltoaction from "../common/Calltoaction.jsx";


const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <Secondrytitle secondaryTitle="My All Portfolio" />
            <div className="newsletter-container">
                <div className="newsletter-glass">
                    <div className="newsletter-content">
                        <h2 className="newsletter-title">Level up your creative skills</h2>
                        <p className="newsletter-subtitle">Join my newsletter to receive guided tutorials, practice exercises, and early access to upcoming courses.</p>

                        <div className="newsletter-form">
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="newsletter-input"
                            />
                            <Calltoaction cta="Subscribe" />
                        </div>

                        <p className="newsletter-note">You can unsubscribe anytime. Privacy respected.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;