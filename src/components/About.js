import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="greek-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Computer Science Student & Web Developer</h3>
              <p>
                I'm Arundhati Singh, a passionate BTech Computer Science & Engineering student at ITER SOA University 
                (2023-2027). I'm deeply interested in web development, coding, and the fascinating intersection of 
                technology and human resources. When I'm not coding, you'll find me volunteering and expanding my 
                social network through various community initiatives.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <h4>Education</h4>
                <p>BTech in Computer Science & Engineering at ITER SOA University (2023-2027). Currently in my second year, actively learning and building projects.</p>
              </div>
              
              <div className="detail-item">
                <h4>Interests</h4>
                <p>Web development, coding, HR management, volunteering, and expanding social connections. I believe in the power of technology to create positive social impact.</p>
              </div>
              
              <div className="detail-item">
                <h4>Goals</h4>
                <p>To become a skilled full-stack developer while exploring opportunities in HR technology. I aim to combine my technical skills with my passion for human resources.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Removed about-visual and forest animation */}
      </div>
    </section>
  );
};

export default About; 