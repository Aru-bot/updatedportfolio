import React, { useState } from 'react';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'arundhatisingh0101@gmail.com',
      link: 'mailto:arundhatisingh0101@gmail.com'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Bhubaneshwar, Odisha, India',
      link: null
    },
    {
      icon: '🎓',
      title: 'Education',
      value: 'BTech CSE at ITER SOA University',
      link: null
    },
    {
      icon: '⏰',
      title: 'Timezone',
      value: 'UTC +05:30 (IST)',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/arundhatisingh0101/',
      icon: '💼',
      color: '#0077b5',
      description: 'Connect with me professionally! Check out my work experience, projects, and industry connections.',
      bgColor: 'rgba(0, 119, 181, 0.1)',
      borderColor: '#0077b5',
      gradient: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
      hoverColor: '#005885'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Aru-bot',
      icon: '🐙',
      color: '#333',
      description: 'Explore my coding journey! See all my projects, repositories, and development work.',
      bgColor: 'rgba(51, 51, 51, 0.1)',
      borderColor: '#333',
      gradient: 'linear-gradient(135deg, #333 0%, #1a1a1a 100%)',
      hoverColor: '#1a1a1a',
      arrowColor: '#ffd700'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/addy.hubb/',
      icon: '📷',
      color: '#e4405f',
      description: 'Follow my daily life! From coding sessions to travel adventures and everything in between.',
      bgColor: 'rgba(228, 64, 95, 0.1)',
      borderColor: '#e4405f',
      gradient: 'linear-gradient(135deg, #e4405f 0%, #c13584 100%)',
      hoverColor: '#c13584'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="greek-divider"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in new opportunities, collaborations, and interesting conversations. 
                Whether you have a project in mind, want to discuss technology, or just want to say hello, 
                feel free to reach out!
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dark Goth Follow Me Section */}
          <div className="goth-follow-section">
            <div className="goth-background">
              <div className="goth-fog"></div>
              <div className="goth-mist"></div>
              <div className="goth-particles">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="goth-particle" style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}></div>
                ))}
              </div>
            </div>
            
            <div className="goth-content">
              <div className="goth-header">
                <div className="goth-title">
                  <h2>FOLLOW AND SCROLL THROUGH</h2>
                </div>
              </div>
              
              <div className="goth-platforms">
                {socialLinks.map((social, index) => (
                  <div key={index} className="goth-card">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="goth-link"
                      style={{ 
                        '--goth-color': social.color,
                        '--goth-bg': social.bgColor,
                        '--goth-border': social.borderColor,
                        '--goth-gradient': social.gradient,
                        '--goth-hover': social.hoverColor
                      }}
                    >
                      <div className="goth-card-content">
                        <div className="goth-icon">{social.icon}</div>
                        <div className="goth-info">
                          <h3>{social.name}</h3>
                          <p>{social.description}</p>
                        </div>
                        <div 
                          className="goth-arrow"
                          style={{ color: social.arrowColor || social.color }}
                        >→</div>
                      </div>
                      <div className="goth-glow"></div>
                      <div className="goth-shadows">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="goth-shadow" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                          }}></div>
                        ))}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>I'll get back to you as soon as possible!</p>
              </div>

              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={errors.subject ? 'error' : ''}
                  placeholder="What's this about?"
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Tell me more about your project or inquiry..."
                  rows="5"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  Sorry, there was an error sending your message. Please try again or contact me directly via email.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-ornament">
          <div className="greek-pattern-small"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 