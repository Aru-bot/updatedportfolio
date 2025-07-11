import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Computer Science Student",
    "Web Developer",
    "Volunteer & Social Worker"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="greek-pattern"></div>
        <div className="greek-columns">
          <div className="column left"></div>
          <div className="column right"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm Arundhati
            <span className="highlight"> Singh</span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="static-text">I am a </span>
            <span className="dynamic-text">{texts[currentText]}</span>
          </div>
          
          <p className="hero-description">
            Pursuing BTech in Computer Science & Engineering at ITER SOA University (2023-2027). 
            Passionate about web development, coding, and expanding my social circle through volunteering. 
            Currently exploring the intersection of technology and human resources.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToAbout}>
              Discover More
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="profile-placeholder">
            <div className="profile-image">
              <img
                src="/IMP.jpg"
                alt="Arundhati Singh profile"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 