import React, { Component } from 'react'
import './Herohome.css'
import Textgenration from '../common/Textgenration.jsx'
const Herohome = () => {
    return ( 
        <div className="herohome-container">
            <div className="herohome-content">
                <h1 className="herohome-title">Welcome to My Portfolio</h1>
                <Textgenration />
                <p className="herohome-subtitle">Showcasing My Projects and Skills</p>
            </div>
            
        </div>
     );
}
 
export default Herohome;