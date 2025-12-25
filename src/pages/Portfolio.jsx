import React from "react";
import { Helmet } from "react-helmet-async";
import "./Portfolio.css";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

// Import Sections
import PortfolioHero from "../components/layout/PortfolioHero.jsx";
import PortfolioUx from "../components/layout/PortfolioUx.jsx";
import PortfolioMotion from "../components/layout/PortfolioMotion.jsx";
import Portfolioweb from "../components/layout/Portfolioweb.jsx";
import Portfolio3D from "../components/layout/Portfolio3D.jsx";
import PortfolioBranding from "../components/layout/PortfolioBranding.jsx";
import PortfolioStorytelling from "../components/layout/PortfolioStorytelling.jsx";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Habiba Saad</title>
        <meta
          name="description"
          content="Explore the creative portfolio of Habiba Saad."
        />
      </Helmet>
      
      <Navbar />
      
      {/* Hero scrolls normally at the top */}
      <PortfolioHero />

      {/* The Stacking Container */}
      <div className="portfolio-stack-container">
        
        <div className="sticky-card">
          <PortfolioUx />
        </div>

        <div className="sticky-card">
          <PortfolioMotion />
        </div>

        <div className="sticky-card">
          <Portfolioweb />
        </div>

        <div className="sticky-card">
          <Portfolio3D />
        </div>

        <div className="sticky-card">
          <PortfolioBranding />
        </div>

        <div className="sticky-card">
          <PortfolioStorytelling />
        </div>

      </div>

      {/* Footer slides over the last card */}
      <div className="relative-footer">
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;