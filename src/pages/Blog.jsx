import React from 'react';
import './Blog.css';
import Navbar from "../components/layout/Navbar.jsx";
import HeroBlog from '../components/layout/HeroBlog.jsx';
import Blogmonth from '../components/layout/Blogmonth.jsx';
import Whatisyourmood from '../components/layout/Whatisyourmood.jsx';
import TrendingTags from '../components/layout/TrendingTags.jsx';
import AllBlogs from '../components/layout/AllBlogs.jsx';
import FeaturedBlogs from '../components/layout/FeaturedBlogs.jsx';
import Newsletter from "../components/layout/Newsletter.jsx";
import Footer from "../components/layout/Footer.jsx";

const Blog = () => {
  return (
    <>
      <Navbar />
      <HeroBlog />
        <Blogmonth />
<FeaturedBlogs/>
        <Whatisyourmood />
        <TrendingTags />
        <AllBlogs />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Blog;