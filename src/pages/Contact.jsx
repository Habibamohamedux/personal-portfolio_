import React from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Contacthero from "../components/layout/Contacthero.jsx";
import Socialmedia from "../components/layout/Socialmedia.jsx";
import Getintouch from "../components/layout/Getintouch.jsx";
import Newsletter from "../components/layout/Newsletter.jsx";
import Footer from "../components/layout/Footer.jsx";


const Contact = () => {
    return (
        <>

            <Navbar />
            <Contacthero />
<Socialmedia />
<Getintouch />
    <Newsletter /> 
    <Footer />
        </>
      );
}

export default Contact;