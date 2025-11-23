import React from "react";
import "./Courses.css"; 
import Secondrytitle from "../common/Secondrytitle.jsx";
import Glasscards from '../common/Glasscards';
import course01 from '../../assets/Courses/course01.jpg';
import course02 from '../../assets/Courses/course02.jpg';
const Courses = () => {
    return (
        <div className="courses-section">

            <div className="courses-content">
                            <Secondrytitle secondaryTitle="Courses & Tutorials" />
                <p>Explore our diverse range of courses designed to ignite your creativity and enhance your skills in various domains. Whether you're interested in technology, design, or storytelling, we have something for everyone. Join us to embark on a journey of learning and innovation.</p>
            </div>
            <div className="courses-glasscards">
                <Glasscards 
                    imgSrc={course01} 
                    title="Web Development Bootcamp" 
                    paragraph="Learn the fundamentals of web development, including HTML, CSS, and JavaScript, to build stunning websites from scratch." 
                />
                <Glasscards 
                    imgSrc={course02} 
                    title="Digital Marketing Essentials" 
                    paragraph="Master the art of digital marketing with strategies for SEO, social media, and content marketing to grow your online presence." 
                />
            </div>
        </div>
     );
}
 
export default Courses;