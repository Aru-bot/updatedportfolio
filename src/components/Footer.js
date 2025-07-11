import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/arundhatisingh0101/", external: true },
        { name: "GitHub", href: "https://github.com/Aru-bot", external: true },
        { name: "Instagram", href: "https://instagram.com/addy.hubb", external: true },
        { name: "Email", href: "mailto:arundhatisingh0101@gmail.com", external: true }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Resume", href: "#", external: false },
        { name: "Projects", href: "#portfolio", external: false },
        { name: "Blog", href: "#", external: false },
        { name: "References", href: "#", external: false }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-links">
              {footerLinks.map((section, index) => (
                <div key={index} className="footer-section">
                  <h4>{section.title}</h4>
                  <ul>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-info">
              <p>&copy; {currentYear} Arundhati Singh. All rights reserved.</p>
              <p>📍 Bhubaneshwar, Odisha, India | 🎓 ITER SOA University</p>
            </div>
            
            <div className="footer-actions">
              <button 
                className="scroll-top-btn" 
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <span>↑</span>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-ornament">
          <div className="greek-pattern-small"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 