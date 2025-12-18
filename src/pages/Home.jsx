import React from "react";
import { Helmet } from "react-helmet-async"; // <--- Import Helmet
import "./Home.css";

// Components
import Herohome from "../components/layout/Herohome.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Latestshowreel from "../components/common/latestshowreel.jsx";
import Featuredprojects from "../components/common/Featuredprojects.jsx";
import Frontenddevelopment from "../components/layout/frontenddevelopment.jsx";
import Servicescards from "../components/layout/ServicesCards.jsx";
import Courses from "../components/layout/Courses.jsx";
import Testimonials from "../components/layout/Testimonials.jsx";
import Blog from "../components/layout/Blog.jsx";
import Socialmedia from "../components/layout/Socialmedia.jsx";
import Getintouch from "../components/layout/Getintouch.jsx";
import Newsletter from "../components/layout/Newsletter.jsx";
import Footer from "../components/layout/Footer.jsx";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Habiba Saad | UX/UI & Creative Designer</title>
                <meta 
                    name="description" 
                    content="Habiba Saad is a UX/UI and creative designer specializing in user-centered digital experiences, branding, and visuals. Explore her portfolio, services, and design tutorials crafted to inspire and educate." 
                />

                {/* Open Graph / Facebook / LinkedIn */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Habiba Saad | UX/UI & Creative Designer" />
                <meta 
                    property="og:description" 
                    content="Habiba Saad is a UX/UI and creative designer specializing in user-centered digital experiences, branding, and visuals." 
                />
                {/* <meta property="og:image" content="LINK_TO_YOUR_IMAGE.jpg" />  <-- Add an image URL here later */}
            </Helmet>

            <Navbar />
            <Herohome />
            <Latestshowreel />
            <Featuredprojects />
            <Frontenddevelopment />
            <Servicescards />
            <Courses />
            <Testimonials />
            <Blog />
            <Socialmedia />
            <Getintouch />
            <Newsletter /> 
            <Footer />
        </>
      );
}

export default Home;