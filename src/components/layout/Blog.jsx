import React from "react";
import "./Courses.css"; 
import Secondrytitle from "../common/Secondrytitle.jsx";
import Glasscards from '../common/Glasscards2';
import blog01 from '../../assets/Blogs/blogs01.jpg';
import blog02 from '../../assets/Blogs/blogs02.jpg';
import blog03 from '../../assets/Blogs/blogs03.jpg';
import Calltoaction from "../common/Calltoaction.jsx";
const Blog = () => {
    return (
        <div className="courses-section">
            <div className="courses-content">
                            <Secondrytitle secondaryTitle="Courses & Tutorials" />
                <p>Explore our diverse range of courses designed to ignite your creativity and enhance your skills in various domains. Whether you're interested in technology, design, or storytelling, we have something for everyone. Join us to embark on a journey of learning and innovation.</p>
            </div>
            <div className="courses-glasscards">
                <Glasscards 
                    imgSrc={blog01} 
                    title="How to start your journey knowing what is User experience?" 
                    paragraph="In this article you will know what is user experience, ux research process and where to find learning resources and more!" 
                />
                <Glasscards 
                    imgSrc={blog02} 
                    title="Writing your first book" 
                    paragraph="Writing book sounds like a big deal but as a beginner It’s simpler than you think, you will start by knowing different layouts of designing and different ways of writings and what are the categories of book." 
                />
  
                            <Glasscards 
                    imgSrc={blog03} 
                    title="Making your first short film" 
                    paragraph="Master the art of digital marketing with strategies for SEO, social media, and content marketing to grow your online presence." 
                />
            </div>
                    <Calltoaction cta="View More" />
        </div>
     );
}
 
export default Blog;