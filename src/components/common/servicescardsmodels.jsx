// src/components/ServicesCard.jsx
import React from 'react';
import Servicestitle from "../titles/servicestitle";
import Servicessubtitle from "../titles/servicessubtitle";
import Servicesparagraph from "../titles/servicesparagraph";
import Servicesminititle from "../titles/servicesminititle";
import './servicescardsmodels.css'; // optional styling

const ServicesCard = ({
  title,
  subtitle,
  description,
  tags,
  background,
  buttonColor,
}) => {
  return (
    <div className="services-card" style={{ background }}>
      <div className="uppertext-holder">
        <div className="uppertext">
          <Servicestitle servicestitle={title} />
          <Servicessubtitle servicessubtitle={subtitle} />
        </div>
        <Servicesparagraph servicesparagraph={description} />
      </div>

      <div className="bottomtext-holder">
        {tags.map((group, index) => (
          <div className="bottomtext" key={index}>
            {group.map((item, i) => (
              <React.Fragment key={i}>
                <Servicesminititle servicestitle={item} />
                {i !== group.length - 1 && <p>/</p>}
              </React.Fragment>
            ))}
          </div>
        ))}
        <button className="view-btn" style={{ background: buttonColor }}>
          view all
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
