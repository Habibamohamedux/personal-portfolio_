import React from 'react';
import './Blog.css';
import Navbar from "../components/layout/Navbar.jsx";
import HeroBlog from '../components/layout/HeroBlog.jsx';
import FeaturedBlogs from '../components/layout/FeaturedBlogs.jsx';
import TopicCloud from '../components/layout/TopicCloud.jsx';
import Newsletter from "../components/layout/Newsletter.jsx";
import Footer from "../components/layout/Footer.jsx";

const Blog = () => {
  return (
    <>
      <Navbar />
      <HeroBlog />
      <FeaturedBlogs />
      <TopicCloud />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Blog;