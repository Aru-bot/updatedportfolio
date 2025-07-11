import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "Certificate of Participation in Treasure Hunt of Samsung Galaxy AI Treasure Hunt",
      issuer: "Unstop",
      date: "Jun 2025",
      category: "Participation",
      credentialId: "23cd5e07-e823-4cf8-a2af-995223905174",
      description: "Certification of participation for Samsung Galaxy AI Treasure Hunt, demonstrating analytical and soft skills.",
      skills: ["Analytical Skills", "Soft Skills"],
      verificationUrl: "https://unstop.com/certificate/23cd5e07-e823-4cf8-a2af-995223905174",
      status: "Active"
    },
    {
      id: 2,
      title: "Mastering SQL",
      issuer: "WsCube Tech",
      date: "Jun 2025",
      category: "Database",
      credentialId: "WS/2025/M/426",
      description: "Intensive workshop covering essential database skills including SQL queries, data manipulation, and management.",
      skills: ["SQL", "PL/SQL", "Microsoft SQL Server"],
      verificationUrl: "https://wscubetech.com/certificate/WS/2025/M/426",
      status: "Active"
    },
    {
      id: 3,
      title: "OM Excel Workshop",
      issuer: "Be10x",
      date: "Jun 2025",
      category: "Productivity",
      credentialId: "32",
      description: "Certificate of MS Excel use using AI, covering advanced Excel and automation skills.",
      skills: ["Excel", "AI in Excel"],
      verificationUrl: "https://be10x.com/certificate/32",
      status: "Active"
    },
    {
      id: 4,
      title: "Deloitte Australia Job Simulation",
      issuer: "Deloitte",
      date: "May 2025",
      category: "Job Simulation",
      credentialId: "pE94D5zDutLZYe3fD",
      description: "Completed practical tasks in program development, problem solving, and software solution development in a simulated Deloitte environment.",
      skills: ["Program Development", "Programming", "Data Structures", "Strategic Thinking", "Python", "Software Development", "Problem Solving"],
      verificationUrl: "https://deloitte.com/certificate/pE94D5zDutLZYe3fD",
      status: "Active"
    },
    {
      id: 5,
      title: "HP LIFE Professional Email Certificate",
      issuer: "HP LIFE",
      date: "May 2025",
      category: "Business Communication",
      credentialId: "3adaf9e2-1551-4dd2-8d6f-9e76b2842f78",
      description: "Certificate for completing HP LIFE online course on professional business email communication.",
      skills: ["Business Communications", "Professional Communication", "Email Etiquette", "Time Management", "Soft Skills"],
      verificationUrl: "https://www.life-global.org/certificate/3adaf9e2-1551-4dd2-8d6f-9e76b2842f78",
      status: "Active"
    },
    {
      id: 6,
      title: "Microsoft Certified Systems Certifications",
      issuer: "AWS",
      date: "May 2025",
      category: "Cloud/IT",
      credentialId: "pE94D5zDutLZYe3fD",
      description: "Certification for completing practical tasks in AWS cloud, deployment, and solution architecture.",
      skills: ["AWS", "Amazon S3", "CI/CD", "Cloud-Native Applications", "Solution Architecture", "Application Deployment"],
      verificationUrl: "https://aws.amazon.com/certification/pE94D5zDutLZYe3fD",
      status: "Active"
    },
    {
      id: 7,
      title: "Web Development",
      issuer: "CODTECH IT SOLUTIONS",
      date: "May 2025",
      category: "Web Development",
      credentialId: "-",
      description: "Certificate for web development skills including HTML, CSS, Bootstrap, and JavaScript.",
      skills: ["HTML", "CSS", "Bootstrap", "HTML5", "JavaScript", "Web Development"],
      verificationUrl: "https://codtech.com/certificate/2025/webdev",
      status: "Active"
    },
    {
      id: 8,
      title: "Common Internship Test",
      issuer: "Internship Studio",
      date: "Feb 2025",
      category: "Internship",
      credentialId: "CIT-P-1337090",
      description: "Certificate of participation for Common Internship Test, demonstrating web development skills.",
      skills: ["HTML5", "Web Development"],
      verificationUrl: "https://internshipstudio.com/certificate/CIT-P-1337090",
      status: "Active"
    },
    {
      id: 9,
      title: "Nirman 4.0 Hackathon by Silicon",
      issuer: "Silicon Innovation and Promotion Cell",
      date: "Feb 2025",
      category: "Hackathon",
      credentialId: "-",
      description: "Certificate of participation in Nirman 4.0 Hackathon, recognized for teamwork, leadership, and web development skills.",
      skills: ["Project Planning", "HTML", "CSS", "Bootstrap", "Java", "Team Building", "Leadership", "Teamwork", "Web Development"],
      verificationUrl: "https://silicon.ac.in/certificate/nirman4.0",
      status: "Active"
    },
    {
      id: 10,
      title: "Power Bi Workshop",
      issuer: "United Latino Students Association",
      date: "Feb 2025",
      category: "Workshop",
      credentialId: "27",
      description: "Certificate for attending Power Bi Workshop, focusing on data visualization and analytics.",
      skills: ["Power BI", "Data Visualization", "Analytics"],
      verificationUrl: "https://ulsa.org/certificate/27",
      status: "Active"
    },
    {
      id: 11,
      title: "Web Development Course",
      issuer: "Technophilia (IIT Kharagpur B Club)",
      date: "Aug 2024",
      category: "Web Development",
      credentialId: "1862&cert-nonce=aa44a26f69",
      description: "Web development course conducted by Technophilia in collaboration with B club of IIT Kharagpur.",
      skills: ["HTML", "CSS", "Bootstrap", "HTML5", "JavaScript", "Web Development"],
      verificationUrl: "https://technophilia.in/certificate/1862?cert-nonce=aa44a26f69",
      status: "Active"
    },
    {
      id: 12,
      title: "Leadership Transitions: Moving into Senior Leadership",
      issuer: "Skillsoft",
      date: "Jul 2024",
      category: "Leadership",
      credentialId: "110194763",
      description: "Certificate for completing Skillsoft's course on leadership transitions and team building.",
      skills: ["Team Building", "Leadership"],
      verificationUrl: "https://skillsoft.com/certificate/110194763",
      status: "Active"
    },
    {
      id: 13,
      title: "Digital Marketing",
      issuer: "Gamahouse Publishing",
      date: "Nov 2022",
      category: "Marketing",
      credentialId: "5C7FBE63-DB94-D3AD-1B2F-A8C2DD097DBD",
      description: "Certificate for completing a digital marketing course, covering online marketing strategies and tools.",
      skills: ["Digital Marketing"],
      verificationUrl: "https://gamahouse.com/certificate/5C7FBE63-DB94-D3AD-1B2F-A8C2DD097DBD",
      status: "Active"
    }
  ];

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToCertificate = (index) => {
    setCurrentIndex(index);
  };

  const currentCategory = certificates[currentIndex].category;

  return (
    <section id="certificates" className="certificates">
      <div className="certificates-container">
        <h2 className="section-title">Certificates & Licenses</h2>
        <div className="greek-divider"></div>
        <p className="section-subtitle">
          Professional certifications and licenses that validate my skills and expertise in various technologies and methodologies.
        </p>

        <div className="certificates-content">
          <div className="carousel-category-top">
            <h3>{currentCategory}</h3>
          </div>
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={prevCertificate}>
              <span>‹</span>
            </button>
            <div className="carousel-track static-carousel">
              <div className="certificate-slide active">
                <div className="certificate-card">
                  <div className="certificate-header">
                    <h3 className="certificate-title">{certificates[currentIndex].title}</h3>
                    <span className="certificate-status active">{certificates[currentIndex].status}</span>
                  </div>
                  <div className="certificate-info">
                    <p className="certificate-issuer">
                      <span className="icon">🏢</span>
                      {certificates[currentIndex].issuer}
                    </p>
                    <p className="certificate-date">
                      <span className="icon">📅</span>
                      {certificates[currentIndex].date}
                    </p>
                    <p className="certificate-category">
                      <span className="icon">🏷️</span>
                      {certificates[currentIndex].category}
                    </p>
                    <p className="certificate-id">
                      <span className="icon">🆔</span>
                      {certificates[currentIndex].credentialId}
                    </p>
                  </div>
                  <div className="certificate-description">
                    <p>{certificates[currentIndex].description}</p>
                  </div>
                  <div className="certificate-skills">
                    <h4>Skills Covered:</h4>
                    <div className="skills-container">
                      {certificates[currentIndex].skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="certificate-actions">
                    <a
                      href={certificates[currentIndex].verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="verify-btn"
                    >
                      Show Credential
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-btn next" onClick={nextCertificate}>
              <span>›</span>
            </button>
          </div>
          <div className="carousel-controls">
            <div className="carousel-indicators">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToCertificate(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates; 