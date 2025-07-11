import React, { useState, useEffect, useMemo } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeCarousel, setActiveCarousel] = useState('projects');
  const [currentIndex, setCurrentIndex] = useState({ projects: 0, achievements: 0, skills: 0 });
  const [isAutoPlaying] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skillsDropdownOpen, setSkillsDropdownOpen] = useState(false);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Greek-Inspired Portfolio Website",
      category: "Web Development",
      description: "A sophisticated portfolio website with Greek aesthetics, featuring multiple carousels, interactive modals, and responsive design built with React.",
      technologies: ["React", "CSS3", "JavaScript", "HTML5"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center",
      link: "https://github.com/Aru-bot/portfolioprj",
      details: {
        duration: "2 weeks",
        team: "Solo project",
        challenges: ["Greek design implementation", "Carousel functionality", "Modal interactions"],
        results: ["Responsive design", "Interactive features", "Modern UI/UX"],
        technologies: {
          frontend: ["React", "CSS3", "JavaScript", "HTML5"],
          design: ["Greek aesthetics", "Responsive layout", "Modern animations"],
          features: ["Multiple carousels", "Interactive modals", "Smooth transitions"]
        }
      }
    },
    {
      id: 2,
      title: "Facebook Clone",
      category: "Web Development",
      description: "HTML/CSS project mimicking Facebook's static interface with responsive design and modern styling.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      link: "https://github.com/Aru-bot/Facebook-clone",
      details: {
        duration: "1 week",
        team: "Solo project",
        challenges: ["Replicating Facebook UI", "Responsive design", "CSS styling"],
        results: ["Accurate Facebook clone", "Mobile responsive", "Clean code structure"],
        technologies: {
          frontend: ["HTML5", "CSS3", "Responsive Design"],
          features: ["Facebook-like interface", "Mobile-first design", "Modern styling"],
          learning: ["UI replication", "CSS Grid/Flexbox", "Design principles"]
        }
      }
    },
    {
      id: 3,
      title: "Pokedex App",
      category: "JavaScript",
      description: "Interactive JavaScript application that fetches and displays Pokémon data from a public API with search functionality.",
      technologies: ["JavaScript", "API Integration", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&h=400&fit=crop&crop=center",
      link: "https://github.com/Aru-bot/Pokedex",
      details: {
        duration: "1 week",
        team: "Solo project",
        challenges: ["API integration", "Data handling", "Search functionality"],
        results: ["Working Pokedex app", "API integration", "User-friendly interface"],
        technologies: {
          frontend: ["JavaScript", "HTML5", "CSS3"],
          api: ["Pokemon API", "Fetch API", "JSON handling"],
          features: ["Pokemon search", "Data display", "Responsive design"]
        }
      }
    },
    {
      id: 4,
      title: "Pomodoro Timer",
      category: "Productivity App",
      description: "A productivity timer built using the Pomodoro technique to help users manage their work and break sessions effectively.",
      technologies: ["JavaScript", "HTML", "CSS", "Timer Logic"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center",
      link: "https://github.com/Aru-bot/Pomodoro",
      details: {
        duration: "1 week",
        team: "Solo project",
        challenges: ["Timer implementation", "State management", "User experience"],
        results: ["Functional Pomodoro timer", "Intuitive interface", "Productivity tool"],
        technologies: {
          frontend: ["JavaScript", "HTML5", "CSS3"],
          logic: ["Timer functions", "State management", "Event handling"],
          features: ["Work/break cycles", "Timer controls", "Visual feedback"]
        }
      }
    },
    {
      id: 5,
      title: "Resume Builder",
      category: "Web Application",
      description: "Interactive tool for creating professional resumes with live preview and customizable templates.",
      technologies: ["JavaScript", "HTML", "CSS", "PDF Generation"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
      link: "https://github.com/Aru-bot/ResumeBuilder",
      details: {
        duration: "2 weeks",
        team: "Solo project",
        challenges: ["Form handling", "Live preview", "PDF generation"],
        results: ["Functional resume builder", "Multiple templates", "Export capability"],
        technologies: {
          frontend: ["JavaScript", "HTML5", "CSS3"],
          features: ["Form validation", "Live preview", "Template system"],
          output: ["PDF generation", "Print-friendly", "Multiple formats"]
        }
      }
    },
    {
      id: 6,
      title: "To-Do List App",
      category: "Task Management",
      description: "A comprehensive task management application with add, edit, delete, and mark as complete functionality.",
      technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop&crop=center",
      link: "https://github.com/Aru-bot/todo-list",
      details: {
        duration: "1 week",
        team: "Solo project",
        challenges: ["Task management", "Local storage", "User interface"],
        results: ["Functional to-do app", "Data persistence", "Clean interface"],
        technologies: {
          frontend: ["JavaScript", "HTML5", "CSS3"],
          storage: ["Local Storage", "Data persistence"],
          features: ["Add tasks", "Edit tasks", "Delete tasks", "Mark complete"]
        }
      }
    }
  ], []);

  const achievements = useMemo(() => [
    {
      id: 1,
      title: "BTech CSE Student",
      category: "Education",
      description: "Successfully enrolled and progressing in Computer Science & Engineering program at ITER SOA University.",
      year: "2023-2027",
      organization: "ITER SOA University",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80", // Unsplash university campus fallback image
      details: {
        program: "Bachelor of Technology in Computer Science & Engineering",
        duration: "4 years (2023-2027)",
        current: "Second year student",
        focus: ["Web development", "Programming", "Computer science fundamentals"],
        achievements: "Maintaining good academic performance while learning practical skills"
      }
    },
    {
      id: 2,
      title: "GitHub Portfolio",
      category: "Development",
      description: "Active GitHub profile showcasing coding projects and learning progress in web development and programming.",
      year: "2023-Present",
      organization: "GitHub",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop&crop=center",
      details: {
        profile: "github.com/Aru-bot",
        projects: "Multiple repositories",
        focus: ["Web development", "JavaScript programming", "Portfolio projects"],
        skills: ["Version control", "Project management", "Code documentation"],
        learning: "Continuous improvement in coding and development skills"
      }
    },
    {
      id: 3,
      title: "LinkedIn Professional Network",
      category: "Networking",
      description: "Building professional connections and maintaining an active LinkedIn presence for career development.",
      year: "2023-Present",
      organization: "LinkedIn",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      details: {
        profile: "linkedin.com/in/arundhatisingh0101",
        network: "Growing professional connections",
        focus: ["Technology", "HR management", "Student networking"],
        activities: ["Profile optimization", "Professional networking", "Industry insights"],
        goals: "Building connections for future career opportunities"
      }
    },
    {
      id: 4,
      title: "Volunteering & Social Work",
      category: "Community",
      description: "Active participation in volunteering activities and social work to expand social circle and contribute to community.",
      year: "2023-Present",
      organization: "Community Organizations",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&h=400&fit=crop&crop=center",
      details: {
        activities: ["Community service", "Social work", "Volunteering"],
        impact: "Positive contribution to society",
        skills: ["Leadership", "Communication", "Teamwork"],
        benefits: "Expanded social network and personal growth"
      }
    },
    {
      id: 5,
      title: "Representative of the Class",
      category: "Leadership",
      description: "Elected as the class representative, acting as a bridge between students and faculty, and organizing academic and extracurricular activities.",
      year: "2023-2024",
      organization: "ITER SOA University",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80", // Unsplash leadership image
      details: {
        role: "Class Representative",
        responsibilities: ["Student-faculty liaison", "Event organization", "Peer support"],
        achievements: "Successfully organized multiple academic and social events",
        skills: ["Leadership", "Communication", "Organization", "Problem-solving"],
        impact: "Improved student-faculty communication and class coordination"
      }
    },
    {
      id: 6,
      title: "Cricket Team Captain",
      category: "Sports",
      description: "Led the university cricket team to victory in the SOA Cup 2025, demonstrating leadership and teamwork in sports.",
      year: "2025",
      organization: "ITER SOA University",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80", // Unsplash cricket image
      details: {
        achievement: "Won SOA Cup 2025",
        role: "Team Captain",
        responsibilities: ["Team strategy", "Player coordination", "Match planning"],
        skills: ["Leadership", "Teamwork", "Strategic thinking", "Sportsmanship"],
        impact: "Brought victory to the university and fostered team spirit"
      }
    }
  ], []);

  const skills = useMemo(() => [
    { id: 1, name: "HTML/CSS", level: 85 },
    { id: 2, name: "JavaScript", level: 80 },
    { id: 3, name: "React.js", level: 75 },
    { id: 4, name: "Java", level: 60 },
    { id: 5, name: "Python", level: 40 },
    { id: 6, name: "MySQL", level: 60 },
    { id: 7, name: "Git/GitHub", level: 85 },
    { id: 8, name: "Web Development", level: 80 },
    { id: 9, name: "Communication", level: 90 },
    { id: 10, name: "Teamwork", level: 85 },
    { id: 11, name: "Leadership", level: 80 },
    { id: 12, name: "Time Management", level: 85 },
    { id: 13, name: "Public Speaking", level: 75 },
    { id: 14, name: "Organizational Skills", level: 80 }
  ], []);

  // Group skills by tags/sections
  const skillSections = useMemo(() => [
    {
      title: 'Technical Skills',
      skills: [
        { id: 1, name: "HTML/CSS", level: 85 },
        { id: 2, name: "JavaScript", level: 80 },
        { id: 3, name: "React.js", level: 75 },
        { id: 4, name: "Java", level: 60 },
        { id: 5, name: "Python", level: 40 },
        { id: 6, name: "MySQL", level: 60 },
        { id: 7, name: "Git/GitHub", level: 85 },
        { id: 8, name: "Web Development", level: 80 }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { id: 9, name: "Communication", level: 90 },
        { id: 10, name: "Teamwork", level: 85 },
        { id: 11, name: "Leadership", level: 80 },
        { id: 12, name: "Time Management", level: 85 },
        { id: 13, name: "Public Speaking", level: 75 },
        { id: 14, name: "Organizational Skills", level: 80 }
      ]
    }
  ], []);

  const carousels = useMemo(() => ({
    projects: projects,
    achievements: achievements,
    skills: skills
  }), [projects, achievements, skills]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => ({
        ...prev,
        [activeCarousel]: (prev[activeCarousel] + 1) % carousels[activeCarousel].length
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeCarousel, carousels]);

  const nextItem = (carouselType) => {
    setCurrentIndex(prev => ({
      ...prev,
      [carouselType]: (prev[carouselType] + 1) % carousels[carouselType].length
    }));
  };

  const prevItem = (carouselType) => {
    setCurrentIndex(prev => ({
      ...prev,
      [carouselType]: (prev[carouselType] - 1 + carousels[carouselType].length) % carousels[carouselType].length
    }));
  };

  const goToItem = (carouselType, index) => {
    setCurrentIndex(prev => ({
      ...prev,
      [carouselType]: index
    }));
  };

  const openModal = (item, type) => {
    setSelectedItem({ ...item, type });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const renderCarousel = (type, items) => {
    const currentItem = items[currentIndex[type]];
    
    return (
      <div className="carousel-section">
        <div className="carousel-container">
          <div className="carousel-track">
            <div className="carousel-slide">
              <div className={`${type}-card`}>
                <div className="card-image">
                  <img src={currentItem.image} alt={currentItem.title || currentItem.name} />
                  <div className="card-overlay">
                    <button 
                      className="view-details-btn"
                      onClick={() => openModal(currentItem, type)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="card-info">
                  <div className="card-category">{currentItem.category}</div>
                  <h3 className="card-title">{currentItem.title || currentItem.name}</h3>
                  <p className="card-description">{currentItem.description}</p>
                  
                  {type === 'projects' && (
                    <div className="card-technologies">
                      {currentItem.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                  
                  {type === 'achievements' && (
                    <div className="achievement-meta">
                      <span className="achievement-year">{currentItem.year}</span>
                      <span className="achievement-org">{currentItem.organization}</span>
                    </div>
                  )}
                  
                  {type === 'skills' && (
                    <div className="skills-dropdown-container">
                      <button
                        className="skills-dropdown-btn"
                        onClick={() => setSkillsDropdownOpen((open) => !open)}
                        onMouseEnter={() => setSkillsDropdownOpen(true)}
                        onMouseLeave={() => setSkillsDropdownOpen(false)}
                      >
                        View All Skills
                      </button>
                      {skillsDropdownOpen && (
                        <div className="skills-dropdown" onMouseEnter={() => setSkillsDropdownOpen(true)} onMouseLeave={() => setSkillsDropdownOpen(false)}>
                          {skills.map((skill) => (
                            <div key={skill.id} className="dropdown-skill-item">
                              <span className="dropdown-skill-name">{skill.name}</span>
                              <div className="dropdown-skill-bar">
                                <div className="dropdown-skill-progress" style={{ width: `${skill.level}%` }}></div>
                                <span className="dropdown-skill-percentage">{skill.level}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-controls">
          <button 
            className="carousel-btn prev" 
            onClick={() => prevItem(type)}
            aria-label={`Previous ${type.slice(0, -1)}`}
          >
            <span>‹</span>
          </button>
          
          <div className="carousel-indicators">
            {items.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex[type] ? 'active' : ''}`}
                onClick={() => goToItem(type, index)}
                aria-label={`Go to ${type.slice(0, -1)} ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <button 
            className="carousel-btn next" 
            onClick={() => nextItem(type)}
            aria-label={`Next ${type.slice(0, -1)}`}
          >
            <span>›</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <div className="greek-divider"></div>
        </div>

        <div className="portfolio-tabs" style={{ marginTop: '10rem' }}>
          <button 
            className={`tab-btn ${activeCarousel === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveCarousel('projects')}
          >
            Projects
          </button>
          <button 
            className={`tab-btn ${activeCarousel === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveCarousel('achievements')}
          >
            Achievements
          </button>
          <button 
            className={`tab-btn ${activeCarousel === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveCarousel('skills')}
          >
            Skills
          </button>
          <button
            className="tab-btn"
            onClick={() => {
              const expSection = document.getElementById('experience');
              if (expSection) {
                expSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Experience
          </button>
          <button
            className="tab-btn"
            onClick={() => {
              const certSection = document.getElementById('certificates');
              if (certSection) {
                certSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Certificates & Licenses
          </button>
        </div>

        <div className="portfolio-content">
          {activeCarousel === 'skills' ? (
            <div className="skills-list-container" style={{marginTop: 0}}>
              {skillSections.map((section, idx) => (
                <div className="skills-section" key={idx} tabIndex={0}>
                  <h3 className="skills-section-title">{section.title}</h3>
                  {section.skills.map((skill) => (
                    <div key={skill.id} className="dropdown-skill-item">
                      <span className="dropdown-skill-name">{skill.name}</span>
                      <div className="dropdown-skill-bar">
                        <div className="dropdown-skill-progress" style={{ width: `${skill.level}%` }}></div>
                        <span className="dropdown-skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            renderCarousel(activeCarousel, carousels[activeCarousel])
          )}
        </div>

        <div className="portfolio-ornament">
          <div className="greek-pattern-small"></div>
        </div>
      </div>

      {/* Modal for detailed view */}
      {isModalOpen && selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2>{selectedItem.title || selectedItem.name}</h2>
              <span className="modal-category">{selectedItem.category}</span>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title || selectedItem.name} 
                  onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'; }}
                />
                {/* Debug: Show a placeholder image with a thick red border for sports achievements */}
                {selectedItem.category === "Sports" && (
                  <img
                    src="https://via.placeholder.com/100"
                    alt="sports-debug"
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 12,
                      objectFit: 'cover',
                      border: '6px solid red',
                      display: 'block',
                      margin: '16px auto 0 auto'
                    }}
                  />
                )}
                {/* Always show a random image below the main image in every modal */}
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                  alt="random-extra"
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 12,
                    objectFit: 'cover',
                    border: '2px solid #d4af37',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    display: 'block',
                    margin: '16px auto 0 auto'
                  }}
                />
              </div>

              <div className="modal-details">
                <div className="detail-section">
                  <h3>Overview</h3>
                  <p>{selectedItem.description}</p>
                </div>

                {selectedItem.details && (
                  <div className="detail-section">
                    <h3>Details</h3>
                    <div className="details-grid">
                      {Object.entries(selectedItem.details).map(([key, value]) => (
                        <div key={key} className="detail-item">
                          <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                          {Array.isArray(value) ? (
                            <ul>
                              {value.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          ) : typeof value === 'object' ? (
                            <div className="nested-details">
                              {Object.entries(value).map(([subKey, subValue]) => (
                                <div key={subKey} className="sub-detail">
                                  <strong>{subKey}:</strong>
                                  {Array.isArray(subValue) ? (
                                    <span>{subValue.join(', ')}</span>
                                  ) : (
                                    <span>{subValue}</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span>{value}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio; 