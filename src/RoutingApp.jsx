import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Error404 from "./pages/Error404.jsx";

const RoutingApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog-category" element={<Blogcategory />} />
          <Route path="/blog/inside" element={<InsideBlog />} />
            <Route path="/Courses" element={<Courses />} />
          <Route path="/courses/inside" element={<Coursesinside />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/inside" element={<InsideServices />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingApp;
