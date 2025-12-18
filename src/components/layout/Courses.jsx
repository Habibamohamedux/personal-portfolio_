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
                <p>Explore our diverse range of courses designed to ignite your creativity and enhance your skills in various domains. Whether you're interested in technology, design, or storytelling, we have something for everyone.</p>
            </div>

            <div className="courses-glasscards">
                {/* Card 1 */}
                <Glasscards 
                    imgSrc={course01} 
                    title="Web Development Bootcamp" 
                    paragraph="Learn the fundamentals of web development, including HTML, CSS, and JavaScript, to build stunning websites from scratch." 
                />
                
                {/* Card 2 */}
                <Glasscards 
                    imgSrc={course02} 
                    title="Digital Marketing Essentials" 
                    paragraph="Master the art of digital marketing with strategies for SEO, social media, and content marketing to grow your online presence." 
                />

                {/* Card 3 - NEW */}
                <Glasscards 
                    imgSrc={course01} 
                    title="UX/UI Design Mastery" 
                    paragraph="Dive deep into user research, wireframing, and prototyping. Learn to create intuitive interfaces that users love." 
                />

                {/* Card 4 - NEW */}
                <Glasscards 
                    imgSrc={course02} 
                    title="Motion Graphics for Beginners" 
                    paragraph="Bring your designs to life with animation. Learn the basics of After Effects and storytelling through motion." 
                />

                {/* Card 5 - NEW */}
                <Glasscards 
                    imgSrc={course01} 
                    title="3D Modeling with Blender" 
                    paragraph="Create stunning 3D assets and environments. From modeling to rendering, master the pipeline of 3D creation." 
                />
            </div>
        </div>
     );
}
 
export default Courses;