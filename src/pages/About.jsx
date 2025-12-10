import React from "react";
import "./About.css";
import Navbar from "../components/layout/Navbar.jsx";
import Abouthero from "../components/layout/Abouthero.jsx";
import AcadmicJourney from "../components/layout/AcadmicJourney.jsx";
import Achievements from "../components/layout/Achievements.jsx";
import Pursuing from "../components/layout/Pursuing";
import CVSelection from "../components/layout/CVSelection";
import Footer from "../components/layout/Footer.jsx";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me | Habiba Saad – UI/UX Designer & Frontend Developer</title>

        <meta
          name="description"
          content="Learn more about Habiba Saad, a UI/UX designer and frontend developer passionate about design, interactive experiences, learning, and digital creativity. Explore her academic journey, achievements, projects, and career path."
        />

        <meta
          name="keywords"
          content="Habiba Saad, About Habiba, UI UX Designer, Frontend Developer, Digital Arts, Portfolio, Academic Journey, Achievements"
        />

        <link rel="canonical" href="https://Habibasaad.com/about" />

        {/* Social share (Open Graph) */}
        <meta property="og:title" content="About Me | UI/UX Designer & Frontend Developer" />
        <meta
          property="og:description"
          content="Discover the journey, achievements, and vision of Habiba Saad, a passionate UI/UX designer and frontend developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Habibasaad.com/about" />
      </Helmet>

      <Navbar />
      <Abouthero />
      <AcadmicJourney />
      <Achievements />
      <Pursuing />
      <CVSelection />
      <Footer />
    </>
  );
};

export default About;