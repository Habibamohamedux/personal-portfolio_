import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/layout/Navbar.jsx";
import Contacthero from "../components/layout/Contacthero.jsx";
import FAQ from "../components/layout/FAQ.jsx";
import Socialmedia from "../components/layout/Socialmedia.jsx";
import Getintouch from "../components/layout/Getintouch.jsx";
import Newsletter from "../components/layout/Newsletter.jsx";
import Footer from "../components/layout/Footer.jsx";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Me | Habiba Saad — UI/UX Designer & Developer</title>

        <meta
          name="description"
          content="Get in touch with Habiba Saad for professional UI/UX design, web development, branding, and creative digital solutions. Let’s collaborate and build something great."
        />

        <meta
          name="keywords"
          content="Habiba Saad contact, UI UX Egypt, portfolio contact, web designer Egypt, front-end developer, contact UI UX designer"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://habibasaad.com/contact" />

        {/* OpenGraph */}
        <meta property="og:title" content="Contact Me | Habiba Saad" />
        <meta
          property="og:description"
          content="Looking for a UI/UX designer or web developer? Contact Habiba Saad to bring your project to life."
        />
        <meta property="og:url" content="https://habibasaad.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Habiba Saad Portfolio" />
        <meta
          property="og:image"
          content="https://habibasaad.com/og-image-contact.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Me | Habiba Saad" />
        <meta
          name="twitter:description"
          content="Reach out to collaborate with UI/UX designer & web developer Habiba Saad."
        />
        <meta
          name="twitter:image"
          content="https://habibasaad.com/og-image-contact.png"
        />

        <meta name="author" content="Habiba Saad" />
      </Helmet>

      <Navbar />
      <Contacthero />
      <FAQ />
      <Socialmedia />
      <Getintouch />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Contact;