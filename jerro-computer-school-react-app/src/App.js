import React, { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const schoolAge = Math.max(25, currentYear - 2000);

  useEffect(() => {
    if (currentPage === 'home') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 3);
      }, 5500);
      return () => clearInterval(timer);
    }
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 60) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const switchPage = (page) => {
    setCurrentPage(page);
    setIsNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <div className="top-bar">
        <p>
          <i className="fas fa-award"></i> <strong>Government Approved Limited Liability Institute</strong> &bull; We
          Proudly Accept <strong>NYSC Corp Members</strong> (PPA & ICT Training Discounts Available!)
        </p>
      </div>

      <header className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); switchPage('home'); }}>
            <div className="logo-icon"><i className="fas fa-laptop-code"></i></div>
            <div className="logo-text">
              <span className="school-name">JERRO COMPUTER SCHOOL LTD.</span>
              <span className="tagline">RN: No.9652029 | Govt. Approved</span>
            </div>
          </a>

          <button className={`hamburger ${isNavOpen ? 'is-active' : ''}`} onClick={() => setIsNavOpen(!isNavOpen)} aria-label="Toggle Navigation">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); switchPage('home'); }}>Home</a></li>
              <li><a href="#about" className={`nav-link ${currentPage === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); switchPage('about'); }}>About & People</a></li>
              <li><a href="#courses" className={`nav-link ${currentPage === 'courses' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); switchPage('courses'); }}>Courses & Prices</a></li>
              <li><a href="#media" className={`nav-link ${currentPage === 'media' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); switchPage('media'); }}>Gallery & Videos</a></li>
              <li><a href="#contact" className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); switchPage('contact'); }}>Contact & Map</a></li>
            </ul>
            <a href="#contact" className="btn btn-primary nav-cta" onClick={(e) => { e.preventDefault(); setIsEnrollModalOpen(true); }}>Enroll Now</a>
          </nav>
        </div>

        <div className="marquee-banner">
          <div className="marquee-track">
            <span><i className="fas fa-bullhorn"></i> NOTICE: Please be reminded that our physical Application Form upon reaching our office is <strong>₦2,500</strong> only. &nbsp;&bull;&nbsp;</span>
            <span><i className="fas fa-bullhorn"></i> NOTICE: Please be reminded that our physical Application Form upon reaching our office is <strong>₦2,500</strong> only. &nbsp;&bull;&nbsp;</span>
          </div>
        </div>
      </header>

      <a href="#anniversary-milestone" className="anniversary-floater" onClick={(e) => { e.preventDefault(); switchPage('home'); setTimeout(() => document.getElementById('anniversary-milestone')?.scrollIntoView({behavior:'smooth'}), 100); }}>
        <div className="crest-core">
          <div className="crest-content">
            <i className="fas fa-award crest-award-icon"></i>
            <span className="crest-years"><strong>{schoolAge}</strong> YRS</span>
            <span className="crest-label">EST. 2000</span>
          </div>
        </div>
      </a>

      <main id="app-content">
        <section id="page-home" className={`page-section ${currentPage === 'home' ? 'active' : ''}`}>
          <div className="slideshow-container">
            <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}>
              <div className="slide-overlay">
                <div className="container slide-content">
                  <span className="badge">Federal & State Government Approved</span>
                  <h1>Launch Your Tech Career With Practical Skills</h1>
                  <p>Hands-on computer training in software development, data analysis, graphics, and office productivity in Kubwa, Abuja.</p>
                  <div className="hero-btns">
                    <button className="btn btn-primary" onClick={() => switchPage('courses')}>Explore Courses</button>
                    <button className="btn btn-outline" onClick={() => switchPage('contact')}>Visit Our School</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}>
              <div className="slide-overlay">
                <div className="container slide-content">
                  <span className="badge nysc-badge">NYSC Friendly Institute</span>
                  <h1>We Accept NYSC Corp Members!</h1>
                  <p>Serving in Abuja? Join our ICT capacity-building programs or apply for Place of Primary Assignment (PPA) opportunities.</p>
                  <div className="hero-btns">
                    <button className="btn btn-primary" onClick={() => switchPage('about')}>Learn More</button>
                    <button className="btn btn-outline" onClick={() => switchPage('contact')}>Inquire Today</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`slide ${currentSlide === 2 ? 'active' : ''}`}>
              <div className="slide-overlay">
                <div className="container slide-content">
                  <span className="badge">Certified Excellence</span>
                  <h1>Globally Recognized Certifications</h1>
                  <p>Learn from experienced industry instructors with 100% practical sessions, steady power supply, and modern systems.</p>
                  <div className="hero-btns">
                    <button className="btn btn-primary" onClick={() => switchPage('media')}>See Student Projects</button>
                  </div>
                </div>
              </div>
            </div>

            <button className="slide-btn prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}><i className="fas fa-chevron-left"></i></button>
            <button className="slide-btn next" onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}><i className="fas fa-chevron-right"></i></button>
          </div>

          <div className="container section-padding">
            <div className="section-header reveal">
              <span className="sub-heading">Why Choose Us</span>
              <h2>Accredited Tech Education in Kubwa</h2>
              <p>Registered as a Limited Liability Company and officially approved by the government to deliver standard ICT education.</p>
            </div>

            <div className="features-grid">
              <div className="feature-card reveal">
                <div className="icon-box"><i className="fas fa-certificate"></i></div>
                <h3>Government Approved</h3>
                <p>Fully accredited curriculum and recognized certificates valid for employment and further studies.</p>
              </div>
              <div className="feature-card nysc-highlight reveal">
                <div className="icon-box"><i className="fas fa-user-graduate"></i></div>
                <h3>NYSC Corp Members Accepted</h3>
                <p>We welcome serving Corps Members for PPA placement, Skill Acquisition (SAED), and discounted tech bootcamps.</p>
              </div>
              <div className="feature-card reveal">
                <div className="icon-box"><i className="fas fa-desktop"></i></div>
                <h3>100% Practical Training</h3>
                <p>One student per computer system with dedicated mentors guiding you from beginner to professional level.</p>
              </div>
            </div>

            <div className="jerro-section mt-5">
              <div className="jerro-it-box">
                <h3>🎓 We Accept IT (SIWES) Students & NYSC Corp Members!</h3>
                <p>Looking for an accredited ICT center for your Industrial Training (IT / SIWES) or NYSC Primary Place of Assignment (PPA)? <strong>Jerro Computer School</strong> welcomes students for practical tech placement with official logbook supervision.</p>
                <div className="jerro-reminder">
                  <strong>Reminder:</strong> Visit our School at Suite 11, Nekkies Plaza, Arab Road, Kubwa with your placement letter or call <strong>+234 803 633 7123</strong>.
                </div>
              </div>
            </div>

            <div className="cta-banner reveal mt-5">
              <div className="cta-text">
                <h3>Ready to upgrade your digital skills?</h3>
                <p>View our complete list of courses, durations, and affordable tuition fees.</p>
              </div>
              <button className="btn btn-light" onClick={() => switchPage('courses')}>View Courses & Fees <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </section>

        <section id="page-about" className={`page-section ${currentPage === 'about' ? 'active' : ''}`}>
          <div className="page-banner">
            <div className="container">
              <h1>About Our Institute & People</h1>
              <p>Meet the dedicated instructors and brilliant students shaping our community.</p>
            </div>
          </div>
          <div className="container section-padding">
            <div className="about-grid reveal">
              <div className="about-text">
                <span className="sub-heading">Who We Are</span>
                <h2>Empowering Youths, Professionals & Corp Members</h2>
                <p><strong>JERRO COMPUTER SCHOOL LTD</strong> is a government-approved computer training institute located opposite Fadama Hotel, Kubwa, Abuja. We bridge the digital divide through structured, practical ICT education.</p>
                <div className="nysc-box">
                  <h4><i className="fas fa-check-circle"></i> Special Notice for NYSC Corp Members</h4>
                  <p>We officially accept <strong>NYSC Corp Members</strong>! Whether you are seeking a Place of Primary Assignment (PPA) in an ICT environment or looking to acquire high-income tech skills during your service year, our doors are open to you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="page-courses" className={`page-section ${currentPage === 'courses' ? 'active' : ''}`}>
          <div className="page-banner">
            <div className="container">
              <h1>Our Courses & Tuition Fees</h1>
              <p>Transparent pricing, flexible schedules, and government-recognized certificates.</p>
            </div>
          </div>
          <div className="container section-padding">
            <div className="filter-bar">
              <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All Courses</button>
              <button className={`filter-btn ${activeFilter === 'basic' ? 'active' : ''}`} onClick={() => setActiveFilter('basic')}>Office & Basic ICT</button>
              <button className={`filter-btn ${activeFilter === 'coding' ? 'active' : ''}`} onClick={() => setActiveFilter('coding')}>Programming & Data</button>
              <button className={`filter-btn ${activeFilter === 'design' ? 'active' : ''}`} onClick={() => setActiveFilter('design')}>Design & Hardware</button>
            </div>

            <div className="courses-grid">
              {(activeFilter === 'all' || activeFilter === 'basic') && (
                <div className="course-card">
                  <div className="course-header">
                    <span className="duration"><i className="far fa-clock"></i> 2 Months</span>
                    <h3>Advanced Diploma in Desktop Publishing & Office Suite</h3>
                  </div>
                  <p>Master Microsoft Word, Excel, PowerPoint, internet operations, and professional document formatting.</p>
                  <div className="course-footer">
                    <div className="price">Contact Us</div>
                    <button className="btn btn-sm" onClick={() => setIsEnrollModalOpen(true)}>Register</button>
                  </div>
                </div>
              )}
              {(activeFilter === 'all' || activeFilter === 'coding') && (
                <div className="course-card">
                  <div className="course-header">
                    <span className="duration"><i className="far fa-clock"></i> 4 Months</span>
                    <h3>Full-Stack Web Development</h3>
                  </div>
                  <p>Build modern responsive websites and web apps using HTML, CSS, JavaScript, React, and backend databases.</p>
                  <div className="course-footer">
                    <div className="price">₦500,000</div>
                    <button className="btn btn-sm" onClick={() => setIsEnrollModalOpen(true)}>Register</button>
                  </div>
                </div>
              )}
              {(activeFilter === 'all' || activeFilter === 'coding') && (
                <div className="course-card">
                  <div className="course-header">
                    <span className="duration"><i className="far fa-clock"></i> 3 Months</span>
                    <h3>Data Analysis & Visualization</h3>
                  </div>
                  <p>Learn Advanced Excel, SQL, Power BI, and Python for business intelligence and data-driven decision making.</p>
                  <div className="course-footer">
                    <div className="price">₦250,000</div>
                    <button className="btn btn-sm" onClick={() => setIsEnrollModalOpen(true)}>Register</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="page-media" className={`page-section ${currentPage === 'media' ? 'active' : ''}`}>
          <div className="page-banner">
            <div className="container">
              <h1>Photo Gallery & Training Videos</h1>
              <p>Explore moments from our classes, practical sessions, and student graduations.</p>
            </div>
          </div>
          <div className="container section-padding">
            <div className="section-header">
              <span className="sub-heading">School Life</span>
              <h2>Photo Gallery</h2>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <div className="gallery-caption">Practical Lab Session</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-caption">NYSC Corp Members Cohort</div>
              </div>
            </div>
          </div>
        </section>

        <section id="page-contact" className={`page-section ${currentPage === 'contact' ? 'active' : ''}`}>
          <div className="page-banner">
            <div className="container">
              <h1>Contact Us & Location</h1>
              <p>Visit our institute opposite Fadama Hotel, Kubwa, Abuja or send us a message.</p>
            </div>
          </div>
          <div className="container section-padding">
            <div className="contact-grid">
              <div className="contact-info-box">
                <h3>Get In Touch</h3>
                <p>Have questions about course fees, admission dates, or NYSC PPA acceptance? Reach out directly.</p>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Address:</strong>
                    <p>Suite 11, Nekkies Plaza, Arab Road, Opposite Fadama Hotel, Kubwa, Abuja.</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <strong>Phone / WhatsApp:</strong>
                    <p>+234 803 633 7123</p>
                  </div>
                </div>
              </div>

              <div className="map-box">
                <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.8840512156694!2d7.3160584!3d9.164931300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd9320d70e905%3A0xf2c50e9bc5b5dbd4!2sNEKKIES%20PLAZA!5e0!3m2!1sen!2sng!4v1795609561171!5m2!1sen!2sng" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>

            <div className="section-header mt-5">
              <span className="sub-heading">Got Questions?</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-container">
              {[
                { q: "Do you offer installment payment plans for tuition fees?", a: "Yes! You can pay in installments (typically 60% initial deposit and 40% midway)." },
                { q: "Do I need to bring my own laptop for the training?", a: "Not mandatory. We have fully equipped computer labs with one student per computer system." },
                { q: "How do NYSC Corp Members apply for PPA or SAED training?", a: "Visit our Kubwa institute with your NYSC ID and posting letter for PPA documentation and discounts." },
                { q: "Are your certificates government approved and recognized?", a: "Yes, Jerro Computer School Limited is an officially registered limited liability company with full government approval." }
              ].map((faq, idx) => (
                <div key={idx} className={`faq-item ${faqOpenIndex === idx ? 'active' : ''}`}>
                  <button className="faq-question" onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}>
                    <span>{faq.q}</span>
                    <i className="fas fa-chevron-down faq-icon"></i>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>JERRO COMPUTER SCHOOL LIMITED</h4>
              <p>Government-approved computer training institute in Kubwa, Abuja. NYSC Corp Members warmly accepted.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); switchPage('home'); }}>Home</a></li>
                <li><a href="#courses" onClick={(e) => { e.preventDefault(); switchPage('courses'); }}>Courses</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); switchPage('contact'); }}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Location</h4>
              <p><i className="fas fa-map-pin"></i> Suite 11, Nekkies Plaza, Arab Road, Kubwa, Abuja.</p>
              <p><i className="fas fa-phone"></i> +234 803 633 7123</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {currentYear} JERRO COMPUTER SCHOOL LIMITED. All Rights Reserved. Government Approved.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/2348036337123" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-tooltip">Chat with us</span>
      </a>

      {isEnrollModalOpen && (
        <div className="enroll-modal open">
          <div className="enroll-modal-box">
            <div className="enroll-modal-icon"><i className="fas fa-phone-volume"></i></div>
            <h3>Important Enrollment Notice</h3>
            <p>Please note that we <strong>do not process direct enrollments online</strong> through our website.</p>
            <p>To register for any course or visit our Kubwa school, please call or WhatsApp our admissions desk:</p>
            <div className="enroll-phone-box">
              <a href="tel:+2348036337123"><i className="fas fa-phone-alt"></i> +234 803 633 7123</a>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => setIsEnrollModalOpen(false)} style={{width: '100%', justifyContent: 'center'}}>
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
