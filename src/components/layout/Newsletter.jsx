import React, { useState } from 'react';
import './Newsletter.css';
import Calltoaction from "../common/Calltoaction.jsx";

const Newsletter = () => {
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <section className="newsletter-section">
            <div className="newsletter-wrapper">
                
                <div className="newsletter-grid">
                    {/* LEFT SIDE: Text Content */}
                    <div className="newsletter-left">
                        {/* Replaced broken component with a clean local label */}
                        <span className="eyebrow-label">The Inner Circle</span>
                        
                        <h2 className="headline">
                            I build things.<br />
                            <span className="text-gradient">Then I write about them.</span>
                        </h2>
                        
                        <p className="subheadline">
                            No spam. No fluff. Just raw technical breakdowns, 
                            early access to my upcoming courses, and 
                            behind-the-scenes looks at my latest projects.
                        </p>
                    </div>

                    {/* RIGHT SIDE: The Form */}
                    <div className="newsletter-right">
                        <div className="newsletter-glass-card">
                            {status === 'success' ? (
                                <div className="success-message">
                                    <div className="success-icon">✓</div>
                                    <h3>You're in.</h3>
                                    <p>Check your inbox for the welcome kit.</p>
                                </div>
                            ) : (
                                <form className="newsletter-form" onSubmit={handleSubmit}>
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            className="clean-input"
                                            placeholder="Enter your email address..."
                                            required
                                        />
                                        <div className="input-highlight"></div>
                                    </div>

                                    <div className="form-footer">
                                        <p className="privacy-text">
                                            Join The Inner Circle. No spam, ever. Unsubscribe anytime.
                                        </p>
                                        <div className="cta-container">
                                            <Calltoaction cta={status === 'submitting' ? "..." : "Subscribe"} />
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;