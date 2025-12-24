import React from "react";
import { Helmet } from "react-helmet-async";
import "./Home.css";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import PortfolioHero from "../components/layout/PortfolioHero.jsx";
import PortfolioUx from "../components/layout/PortfolioUx.jsx"
import Portfolioweb from '../components/layout/Portfolioweb.jsx';
const Portfolio = () => {
    return (
        <>
            <Helmet>
                <title>Portfolio | Habiba Saad</title>
                <meta 
                    name="description" 
                    content="Explore the creative portfolio of Habiba Saad. A collection of UX/UI design projects, branding case studies, and frontend development work." 
                />
                <meta property="og:title" content="Portfolio | Habiba Saad" />
                <meta 
                    property="og:description" 
                    content="Explore the creative portfolio of Habiba Saad. A collection of UX/UI design projects, branding case studies, and frontend development work." 
                />
            </Helmet>
            <Navbar />
            <PortfolioHero />
<PortfolioUx />
<Portfolioweb />
            <Footer />
        </>
    );
}
            
export default Portfolio;