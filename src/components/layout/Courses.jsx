import React from "react";
import "./Courses.css"; 
import Secondrytitle from "../common/Secondrytitle.jsx";
const Courses = () => {
    return (
        <div className="courses-section">
            <Secondrytitle secondaryTitle="Courses & Tutorials" />
            <div className="courses-content">
                <p>Explore our diverse range of courses designed to ignite your creativity and enhance your skills in various domains. Whether you're interested in technology, design, or storytelling, we have something for everyone. Join us to embark on a journey of learning and innovation.</p>
            </div>
        </div>
     );
}
 
export default Courses;