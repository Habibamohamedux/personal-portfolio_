import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // Correct import
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Blogcategory from "./pages/Blogcategory.jsx";
import InsideBlog from "./pages/InsideBlog.jsx";
import Courses from "./pages/Courses.jsx";
import Coursesinside from "./pages/Coursesinside.jsx";
import Services from "./pages/Services.jsx";
import InsideServices from "./pages/InsideServices.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Error404 from "./pages/Error404.jsx";

const RoutingApp = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
          {/* Blog Routes */}
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog-category" element={<Blogcategory />} />
          <Route path="/blog/inside" element={<InsideBlog />} />
          
          {/* Course Routes - Lowercased 'c' is better standard */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/inside" element={<Coursesinside />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          
          {/* CRITICAL FIX: Changed from '/services/inside' to '/services/details' 
             to match the navigate() function in ServicesCards.jsx */}
          <Route path="/services/inside" element={<InsideServices />} />
          
          <Route path="/portfolio" element={<Portfolio />} />
          
          {/* 404 Catch-all */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default RoutingApp;