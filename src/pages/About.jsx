import React from "react";
import "./About.css";
import Navbar from "../components/layout/Navbar.jsx";
import Abouthero from "../components/layout/Abouthero.jsx";
import AcadmicJourney from "../components/layout/AcadmicJourney.jsx";
import Achievements from "../components/layout/Achievements.jsx";
import Pursuing from '../components/layout/Pursuing';
import CVSelection from '../components/layout/CVSelection';
import Getintouch from "../components/layout/Getintouch.jsx";
import Newsletter from "../components/layout/Newsletter.jsx";
import Footer from "../components/layout/Footer.jsx";

const About = () => {
  return (
    <>
      <Navbar />
      <Abouthero />
      <AcadmicJourney />
      <Achievements />
      <Pursuing />
        <CVSelection />
      <Getintouch />
      <Newsletter />
      <Footer />
    </>
  );
};

export default About;
