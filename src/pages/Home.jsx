import React from "react";
import "./Home.css";
import Herohome from "../components/layout/Herohome.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Latestshowreel from "../components/common/latestshowreel.jsx";
import Featuredprojects from "../components/common/Featuredprojects.jsx";
import Frontenddevelopment from "../components/layout/frontenddevelopment.jsx";



const Home = () => {
    return (
        <>

            <Navbar />
            <Herohome />
            <Latestshowreel />
            <Featuredprojects />
     <Frontenddevelopment />

        </>
      );
}

export default Home;
