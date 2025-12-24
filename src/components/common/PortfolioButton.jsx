// components/common/PortfolioButton.jsx
import React from "react";
import "./PortfolioButton.css"; // We will create this CSS file next

const PortfolioButton = ({ background, onClick, children, className }) => {
  return (
    <button
      className={`portfolio-btn4 ${className || ""}`}
      style={{ background: background }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PortfolioButton;