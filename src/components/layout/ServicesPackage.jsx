import React from 'react';

const ServicesPackage = () => {
  return (
    <section className="section services-packages">
      <div className="container">
        <h2 className="section-title">Service Packages</h2>
        <div className="packages-grid">
          {/* Package 1 */}
          <div className="package-card">
            <h3>Starter Identity</h3>
            <p className="price">Starting at $500</p>
            <ul>
              <li>Logo Design</li>
              <li>Color Palette</li>
              <li>Typography Selection</li>
            </ul>
            <button className="btn-primary">Inquire</button>
          </div>
          
          {/* Package 2 */}
          <div className="package-card featured">
            <div className="badge">Most Popular</div>
            <h3>Web Presence</h3>
            <p className="price">TBD / Project</p>
            <ul>
              <li>Custom React Website</li>
              <li>Responsive Design</li>
              <li>Basic SEO Setup</li>
            </ul>
            <button className="btn-primary">Inquire</button>
          </div>

          {/* Package 3 */}
          <div className="package-card">
            <h3>Full Story</h3>
            <p className="price">Custom Quote</p>
            <ul>
              <li>Branding + Website</li>
              <li>Brand Video/Photography</li>
              <li>Copywriting</li>
            </ul>
            <button className="btn-primary">Inquire</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPackage;