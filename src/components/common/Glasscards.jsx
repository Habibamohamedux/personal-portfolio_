import React from "react";
import "./Glasscards.css";
import Calltoaction from './Calltoaction';
                                                                                               

const Glasscards = ({ imgSrc, title, paragraph, }) => {
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

export default Glasscards;