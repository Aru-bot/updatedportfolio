import React from 'react';
import './Experience.css';

const CAT_IMG = '/logos/cat.png'; // Place a cat image in public/logos/cat.png

const experiences = [
  {
    company: 'Pinnacle Labs',
    logo: CAT_IMG,
    role: 'Intern',
    type: 'Internship',
    date: 'Jun 2025 - Present',
    duration: '2 mos',
    location: 'Remote',
    description: 'At Pinnacle Labs, I contributed to dynamic web development projects, collaborating with a talented team to deliver innovative solutions. My responsibilities included building responsive user interfaces, optimizing site performance, and participating in agile sprints. This experience enhanced my technical skills and deepened my understanding of modern web technologies.',
    tags: ['Web Development', 'Remote', 'LinkedIn']
  },
  {
    company: 'SkillCraft Technology',
    logo: CAT_IMG,
    role: 'Intern',
    type: 'Internship',
    date: 'Jul 2025 - Present',
    duration: '1 mo',
    location: 'Remote',
    description: 'During my internship at SkillCraft Technology, I worked on a variety of web-based projects, focusing on both front-end and back-end development. I gained hands-on experience with JavaScript frameworks, contributed to code reviews, and collaborated closely with senior developers to implement new features and resolve bugs.',
    tags: ['Web Development', 'Remote']
  },
  {
    company: 'Apex Planet Software Pvt Ltd',
    logo: CAT_IMG,
    role: 'Intern',
    type: 'Internship',
    date: 'Jul 2025 - Present',
    duration: '1 mo',
    location: 'Remote',
    description: 'At Apex Planet Software, I was involved in the end-to-end development of scalable web applications. My role included designing user-friendly interfaces, integrating APIs, and ensuring cross-browser compatibility. This internship allowed me to further develop my problem-solving abilities and adapt to fast-paced project requirements.',
    tags: ['Web Development', 'Remote']
  },
  {
    company: 'National Service Scheme',
    logo: CAT_IMG,
    role: 'Student Volunteer',
    type: 'Self-employed',
    date: 'Sep 2023 - Present',
    duration: '1 yr 11 mos',
    location: 'Bhubaneswar, Odisha, India · On-site',
    description: `Being an NSS student volunteer is an enriching experience that allows you to contribute to your community while developing valuable skills. You'll work alongside classmates on projects that address local needs, fostering social responsibility and a sense of civic duty. NSS also provides opportunities to hone leadership, communication, and teamwork abilities – all while making a positive difference in the world around you.`,
    tags: ['Community Service', 'Charity Work', 'Leadership', 'Teamwork', 'On-site']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-ghibli">
      <div className="falling-stars-bg">
        <div className="moon"></div>
        <div className="planet planet1"></div>
        <div className="planet planet2"></div>
        <div className="twinkle-star twinkle-star1"></div>
        <div className="twinkle-star twinkle-star2"></div>
        <div className="twinkle-star twinkle-star3"></div>
        <div className="twinkle-star twinkle-star4"></div>
        <div className="twinkle-star twinkle-star5"></div>
        <div className="twinkle-star twinkle-star6"></div>
        <div className="twinkle-star twinkle-star7"></div>
        <div className="twinkle-star twinkle-star8"></div>
        <div className="twinkle-star twinkle-star9"></div>
        <div className="twinkle-star twinkle-star10"></div>
        <div className="twinkle-star twinkle-star11"></div>
        <div className="twinkle-star twinkle-star12"></div>
        <div className="twinkle-star twinkle-star13"></div>
        <div className="twinkle-star twinkle-star14"></div>
        <div className="twinkle-star twinkle-star15"></div>
        <div className="twinkle-star twinkle-star16"></div>
        <div className="twinkle-star twinkle-star17"></div>
        <div className="twinkle-star twinkle-star18"></div>
        <div className="twinkle-star twinkle-star19"></div>
        <div className="twinkle-star twinkle-star20"></div>
        <div className="twinkle-star twinkle-star21"></div>
        <div className="twinkle-star twinkle-star22"></div>
        <div className="twinkle-star twinkle-star23"></div>
        <div className="twinkle-star twinkle-star24"></div>
      </div>
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="ghibli-divider"></div>
        </div>
        <div className="experience-cards">
          {experiences.map((exp, idx) => (
            <div className="ghibli-card" key={idx} data-index={idx}>
              <div className="ghibli-card-header">
                {/* Removed the ghibli-logo circle with cat image */}
                <div className="ghibli-meta">
                  <h3 className="ghibli-role">{exp.role}</h3>
                  <span className="ghibli-company">{exp.company}</span>
                  <span className="ghibli-type">{exp.type}</span>
                </div>
              </div>
              <div className="ghibli-details">
                <div className="ghibli-date-location">
                  <span className="ghibli-date">{exp.date} · {exp.duration}</span>
                  <span className="ghibli-location">{exp.location}</span>
                </div>
                <p className="ghibli-description">{exp.description}</p>
                <div className="ghibli-tags">
                  {exp.tags.map((tag, i) => (
                    <span className="ghibli-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 