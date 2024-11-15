// src/components/VideoSection.js

import React from 'react';
import './VideoSection.css';
import mainthumb from "../../assets/images/main-thumb.png";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="container">
        {/* Section Heading */}
        <div className="video-description">
          <h4>Watch the video to learn more <em>about Learning Kidz</em></h4>
          <div className="main-button">
            <a href="https://fb.com/templatemo" target="_blank" rel="noopener noreferrer">
              External URL
            </a>
          </div>
        </div>
        
        {/* Video Thumbnail */}
        <div className="video-item">
          <figure>
            <img src={mainthumb} alt="Video Thumbnail" />
          </figure>
          <h4>Course for you</h4>
        </div>
        
      </div>
    </section>
  );
};

export default VideoSection;
