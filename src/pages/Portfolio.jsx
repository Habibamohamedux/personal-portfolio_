import React from "react";
import { Helmet } from "react-helmet-async"; // <--- 1. Import Helmet
import "./Home.css"; // Keeping your existing CSS import
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

const Portfolio = () => {
    return (
        <>
            {/* 2. ADD HELMET SECTION */}
            <Helmet>
                <title>Portfolio | Habiba Saad</title>
                <meta 
                    name="description" 
                    content="Explore the creative portfolio of Habiba Saad. A collection of UX/UI design projects, branding case studies, and frontend development work." 
                />
                
                {/* Open Graph Tags */}
                <meta property="og:title" content="Portfolio | Habiba Saad" />
                <meta 
                    property="og:description" 
                    content="Explore the creative portfolio of Habiba Saad. A collection of UX/UI design projects, branding case studies, and frontend development work." 
                />
            </Helmet>

            <Navbar />

            {/* You can add your main portfolio grid component here later */}
            <div style={{ minHeight: "60vh", padding: "100px 20px" }}>
                <h1 style={{ textAlign: "center", color: "white" }}>Selected Work</h1>
                {/* <PortfolioGrid /> */}
            </div>

            <Footer />
        </>
    );
}
            
export default Portfolio;