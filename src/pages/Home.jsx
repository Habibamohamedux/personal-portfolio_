import React from "react";
import "./Home.css";
import Herohome from "../components/layout/Herohome.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Latestshowreel from "../components/common/latestshowreel.jsx";

const Home = () => {
    return (
        <>

            <Navbar />
            <Herohome />
            <Latestshowreel />
        </>
      );
}

export default Home;
