import React from "react";
import "./Courses.css";

import Navbar from "../components/layout/Navbar.jsx";
import CoursesHero from "../components/layout/CoursesHero";
import ExplorePaths from "../components/layout/ExplorePaths";
import FreeTutorials from "../components/layout/FreeTutorials";
import ReadyMadeCourses from "../components/layout/ReadyMadeCourses";
import PrivateSessions from "../components/layout/PrivateSessions";
import InstitutionalPackage from "../components/layout/InstitutionalPackage";
import Notes from "../components/layout/Notes";
import FAQ from "../components/layout/FAQ";
import ReadyToStart from "../components/layout/ReadyToStart";
import Footer from "../components/layout/Footer.jsx";
const Courses = () => {
  return (
    <>
      <Navbar />

      <CoursesHero />

      <ExplorePaths />

      <FreeTutorials />

      <ReadyMadeCourses />

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
