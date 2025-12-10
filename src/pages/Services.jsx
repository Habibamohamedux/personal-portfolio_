import React from 'react';
import ServicesHero from './ServicesHero';
import OfferServices from './OfferServices';
import WhyWork from './WhyWork';
import MyProcess from './MyProcess';
import ServicesPackage from './ServicesPackage';
import ToolsUsed from './ToolsUsed';
import './Services.css'; // Shared styles

const Services = () => {
  return (
<>
      <ServicesHero />
      <OfferServices />
      <WhyWork />
      <MyProcess />
      <ServicesPackage />
      <ToolsUsed />
</>
  );
};

export default Services;