import React from 'react';
import './ServicesPackage.css';
import { Check, Star } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: "Basic",
    subtitle: "Perfect for small, one-off tasks",
    price: "$150",
    features: [
      "Single deliverable",
      "1 round of revisions",
      "3-5 day turnaround",
      "Email support",
      "Standard file formats"
    ],
    idealFor: "Social media graphics, minor edits, consultation calls"
  },
  {
    id: 2,
    title: "Standard",
    subtitle: "Best for medium-sized projects",
    price: "$600",
    isPopular: true,
    features: [
      "Multiple deliverables",
      "2-3 rounds of revisions",
      "1-2 week turnaround",
      "Video call check-ins",
      "Source files included",
      "Basic documentation"
    ],
    idealFor: "Website design, brand refresh, short video projects"
  },
  {
    id: 3,
    title: "Premium",
    subtitle: "Comprehensive, full-service solutions",
    price: "$2,000",
    features: [
      "End-to-end project management",
      "Unlimited revisions",
      "Flexible timeline",
      "Priority support",
      "Complete source files",
      "Detailed documentation",
      "Post-launch support"
    ],
    idealFor: "Complex web apps, full rebranding, long-term partnerships"
  }
];

const ServicesPackage = () => {
  return (
    <section className="packages-section">
      {/* Background Animated Blobs for "Cool" Effect */}
      <div className="pkg-bg-blobs">
        <div className="blob-pkg blob-pkg-1"></div>
        <div className="blob-pkg blob-pkg-2"></div>
      </div>

      <div className="packages-container">
        
        {/* Header */}
        <header className="packages-header">
          <h2 className="section-title">Service Packages</h2>
          <p className="section-subtitle">
            Flexible pricing to match your project needs. Prices below are starting points 
            and may vary based on project scope.
          </p>
        </header>

        {/* Pricing Grid */}
        <div className="cards-grid">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`pricing-card glass-panel ${pkg.isPopular ? 'card-popular' : ''}`}
            >
              
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="popular-badge">
                  <Star size={14} fill="white" strokeWidth={0} /> 
                  <span>Most Popular</span>
                </div>
              )}

              {/* Card Header */}
              <div className="card-header">
                <h3 className="pkg-title">{pkg.title}</h3>
                <p className="pkg-subtitle">{pkg.subtitle}</p>
                
                <div className="pkg-price-wrapper">
                  <span className="starting-text">Starting at</span>
                  <span className="pkg-price">{pkg.price}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="features-list">
                {pkg.features.map((item, idx) => (
                  <li key={idx} className="feature-item">
                    <Check size={20} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Footer Section */}
              <div className="card-footer">
                <div className="ideal-box">
                  <span className="ideal-label">Ideal for:</span>
                  <p className="ideal-text">{pkg.idealFor}</p>
                </div>

                <button className={`get-started-btn ${pkg.isPopular ? 'btn-glow' : ''}`}>
                  Get Started
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPackage;