import React from 'react';
import './TopicCloud.css'; // Make sure to create this CSS file or add to Blog.css

const topics = ["UX Design", "React.js", "Creative Writing", "IoT", "Digital Arts", "Motherhood Tech", "Filmmaking"];

const TopicCloud = () => {
  return (
    <section className="topic-cloud-section">
      <span className="section-label" style={{border: 'none', textAlign: 'center', padding: 0}}>Explore Dimensions</span>
      <div className="topic-grid">
        {topics.map((topic, index) => (
          <div key={index} className="topic-orb">
            #{topic}
          </div>
        ))}
      </div>
    </section>
  );
};
export default TopicCloud;