import React from "react";
import "./PortfolioText.css";
// 1. Import the reusable button
import PortfolioButton from "../common/PortfolioButton"; 

const PortfolioText = ({ 
  subtitle, 
  title, 
  description, 
  // Default gradient matches your previous default
  btnGradient = "linear-gradient(90deg, #3b5bdb 0%, #2234ae 100%)", 
  textColor = "#ffffff", 
  subtitleColor = "rgba(255, 255, 255, 0.8)",
  onBtnClick // New prop to handle navigation/clicks
}) => {
  return (
    <div className="portfolio-text-wrapper" style={{ color: textColor }}>
      <h4 className="portfolio-subtitle" style={{ color: subtitleColor }}>
        {subtitle}
      </h4>
      
      <h2 className="portfolio-title">
        {title}
      </h2>
      
      <p className="portfolio-description" style={{ color: subtitleColor }}>
        {description}
      </p>

      {/* 2. Use the PortfolioButton Component */}
      <PortfolioButton 
        background={btnGradient}
        onClick={onBtnClick}
      >
        view all
        {/* Using the standard SVG arrow to match your other buttons */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 9 11" fill="none">
          <path d="M0.70567 1.74846C0.641714 1.42868 0.84905 1.11768 1.16883 1.05372L6.37937 0.0116118C6.69915 -0.0523444 7.01016 0.154992 7.07411 0.474771L8.11622 5.68531C8.18017 6.00509 7.97284 6.3161 7.65306 6.38005C7.33334 6.4439 7.02227 6.23662 6.95832 5.91689L6.19577 2.10414L1.08183 9.77506C0.900932 10.0464 0.534323 10.1197 0.262981 9.93883C-0.00836017 9.75794 -0.0816821 9.39133 0.0992122 9.11999L5.21316 1.44907L1.40041 2.21162C1.08069 2.27556 0.769702 2.06814 0.70567 1.74846Z" fill="white"/>
        </svg>
      </PortfolioButton>
    </div>
  );
};

export default PortfolioText;