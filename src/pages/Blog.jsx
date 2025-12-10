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
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Deep UX Thinking, Design Articles & Creative Insights</title>

        <meta
          name="description"
          content="Explore deep UX thinking articles, design insights, creative processes, tutorials, and personal reflections by Habiba Saad. Updated monthly with fresh content."
        />

        <meta
          name="keywords"
          content="UX thinking, UI UX blog, design blog, creative articles, tech articles, UX case studies, portfolio blog, Habiba Saad"
        />

        <link rel="canonical" href="https://Habibasaad.com/blogs" />

        {/* Open Graph */}
        <meta property="og:title" content="Deep UX Thinking & Design Insights | Blog" />
        <meta
          property="og:description"
          content="Read UX articles, design breakdowns, tutorials, stories, and creative insights written by UI/UX Designer & Frontend Developer Habiba Saad."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Habibasaad.com/blogs" />
      </Helmet>

      <Navbar />
      <HeroBlog />
      <Blogmonth />
      <FeaturedBlogs />
      <Whatisyourmood />
      <TrendingTags />
      <AllBlogs />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Blog;