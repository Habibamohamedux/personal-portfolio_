import React from "react";
import "./Glasscards2.css";
import Calltoaction from './Calltoaction';
                                                                                               

const Glasscards2 = ({ imgSrc, title, paragraph, }) => {
  return (
    <div className="glasscard">
      <div className="glasscard-img">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="glasscard-content">
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <Calltoaction cta="Start Now" />
      </div>
      
    </div>
  );
};

export default Glasscards2;