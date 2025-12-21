import React from "react";
import { Helmet } from "react-helmet-async";
import "./Courses.css";
import Navbar from "../components/layout/Navbar.jsx";
import CoursesHero from "../components/layout/CoursesHero";
import ExplorePaths from "../components/layout/ExplorePaths";
import FreeTutorials from "../components/layout/FreeTutorials";
import PrivateSessions from "../components/layout/PrivateSessions";
import InstitutionalPackage from "../components/layout/InstitutionalPackage";
import Notes from "../components/layout/Notes";
import FAQ from "../components/layout/FAQ";
import ReadyToStart from "../components/layout/ReadyToStart";
import Footer from "../components/layout/Footer.jsx";

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Courses & Tutorials | Learn UI/UX & Frontend with Habiba Saad</title>

        <meta
          name="description"
          content="Explore UI/UX paths, free tutorials, private sessions, ready-made courses, and institutional packages by Habiba Saad. Learn design, web development, and tech skills step-by-step."
        />

        <meta
          name="keywords"
          content="UI UX courses, frontend courses, design tutorials, web development course, learn UI UX, learn frontend, private sessions UI UX, Habiba Saad courses"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://habibasaad.com/courses" />

        {/* OpenGraph */}
        <meta property="og:title" content="Courses & Tutorials | Learn UI/UX & Frontend" />
        <meta
          property="og:description"
          content="Master UI/UX, web design, and frontend development with step-by-step courses, tutorials, and private coaching."
        />
        <meta property="og:url" content="https://habibasaad.com/courses" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Habiba Saad Portfolio" />
        <meta
          property="og:image"
          content="https://habibasaad.com/og-image-courses.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Courses & Tutorials | Learn UI/UX & Frontend" />
        <meta
          name="twitter:description"
          content="UI/UX and web development courses by Habiba Saad — Learn the skills you need to become a designer or developer."
        />
        <meta
          name="twitter:image"
          content="https://habibasaad.com/og-image-courses.png"
        />

        <meta name="author" content="Habiba Saad" />
      </Helmet>

      <Navbar />
      <CoursesHero />
      <ExplorePaths />
      <FreeTutorials />
      <PrivateSessions />
      <InstitutionalPackage />
      <Notes />
      <FAQ />
      <ReadyToStart />
      <Footer />
    </>
  );
};

export default Courses;