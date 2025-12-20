import React from "react";
import "./Courses.css"; 
import Secondrytitle from "../common/Secondrytitle.jsx";
import Glasscards from '../common/Glasscards';
import Btn from '../common/Calltoaction'; // Capitalized for React

const Courses = () => {
    return (
        <div className="courses-section">
            
            {/* Header Container */}
            <div className="courses-content">
                
                {/* Left Side: Text */}
                <div className="courses-text">
                    <Secondrytitle secondaryTitle="Courses & Tutorials" />
                    <p>
                        Explore the specialized courses I offer. Driven by a lifelong passion 
                        for learning and a dedication to teaching, I have designed these 
                        resources to help you master new skills and achieve your creative goals.
                    </p>
                </div>

                {/* Right Side: Button */}
                <div className="courses-btn-wrapper">
                    <Btn cta="View All Courses" />
                </div>
            </div>

            {/* Cards Grid */}
            <div className="courses-glasscards">
                <Glasscards 
                    imgSrc="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2070&auto=format&fit=crop" 
                    title="HTML & CSS for Beginners" 
                    paragraph="Learn the fundamentals of web development. Master HTML structure and CSS styling to build fully responsive and visually stunning websites from scratch."
                    btnText="Start Now ↗"
                />
                
                <Glasscards 
                    imgSrc="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop" 
                    title="UX Fundamentals" 
                    paragraph="Master the user-centered design process. Dive into user research, wireframing, and prototyping to create intuitive interfaces that users love." 
                    btnText="Start Now ↗"
                />

                <Glasscards 
                    imgSrc="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    title="Creative Cloud 101" 
                    paragraph="Unlock the full potential of the Adobe suite. Learn the essentials of Photoshop, Illustrator, and Premiere Pro to bring your creative vision to life across any medium." 
                    btnText="Start Now ↗"
                />
            </div>
        </div>
     );
}
 
export default Courses;