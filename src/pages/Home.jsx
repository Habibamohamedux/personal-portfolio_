import React from "react";
import "./Home.css";
import Herohome from "../components/layout/Herohome.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Latestshowreel from "../components/common/latestshowreel.jsx";
import Featuredprojects from "../components/common/Featuredprojects.jsx";
import Frontenddevelopment from "../components/layout/frontenddevelopment.jsx";
import Servicescards from "../components/layout/servicescards.jsx";
import Courses from "../components/layout/Courses.jsx";
import Testimonials from "../components/layout/Testimonials.jsx";
import Blog from "../components/layout/Blog.jsx";
import Socialmedia from "../components/layout/Socialmedia.jsx";
import Getintouch from "../components/layout/Getintouch.jsx";
const Home = () => {
    return (
        <>

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
        </>
      );
}

export default Home;
