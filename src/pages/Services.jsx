import React from 'react';
import { Helmet } from "react-helmet";

import Navbar from "../components/layout/Navbar.jsx";
import ServicesHero from '../components/layout/ServicesHero';
import ServicesCards from '../components/layout/ServicesCards.jsx'; // This imports the card logic
import WhyWork from '../components/layout/WhyWork';
import MyProcess from '../components/layout/MyProcess';
import ServicesPackage from '../components/layout/ServicesPackage';
import ToolsUsed from '../components/layout/ToolsUsed';
import Testimonials from "../components/layout/Testimonials.jsx";
import Newsletter from "../components/layout/Newsletter.jsx";
import Footer from "../components/layout/Footer.jsx";
import './Services.css';

const Services = () => {
  <Helmet>
        <title>About</title>
        <meta name="description" content="This is the about page" />
        <meta property="og:title" content="About Us" />
        <meta property="og:image" content="/images/about.png" />
      </Helmet> 
  return (
    <>
      <Navbar />
      <ServicesHero />
      <ServicesCards /> {/* This renders the component imported above */}
      <WhyWork />
      <MyProcess />
      <ServicesPackage />
      <ToolsUsed />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Services;