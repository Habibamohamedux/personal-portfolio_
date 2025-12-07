import React from "react";
import "./About.css";
import Navbar from "../components/layout/Navbar.jsx";
import Abouthero from "../components/layout/Abouthero.jsx";
import Getintouch from "../components/layout/Getintouch.jsx";
import Newsletter from "../components/layout/Newsletter.jsx";
import Footer from "../components/layout/Footer.jsx";
const About = () => {
  return (
    <>
      <Navbar />
      <Abouthero />
      <Getintouch />
      <Newsletter />
      <Footer />
    </>
  );
};

export default About;
