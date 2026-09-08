import React from 'react';
import './App.css';
import Footer from './Footer';
function About() {
  return (
    <>
    
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="tx3">ABOUT</h2>
          <p className="tx3">Who we are</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 content" data-aos="fade-up" data-aos-delay="200">
              <p>
                We are CodeBuddy, working in this field for several years. We are from Bikaner but currently working in Udaipur.
              </p>
              <ul>
                <li><i className="bi bi-check2-circle"></i> <span>We give our best in every project, and you can trust us.</span></li>
                <li><i className="bi bi-check2-circle"></i> <span>MERN stack is our specialty, and it is reliable.</span></li>
                <li><i className="bi bi-check2-circle"></i> <span>We mainly work on MERN stack projects.</span></li>
              </ul>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img src="assets/img/hero-img.png" alt="CodeBuddy" className="ph2 ph1 img-fluid up-down-animation" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features section">
      <div className="container">
        <div className="about1">
          <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="200">
            <li className="nav-item col-3">
              <a className="nav-link active" id="tab-1" data-bs-toggle="tab" href="#features-tab-1">
                <i className="bi bi-binoculars"></i>
                <h4 className="d-none d-lg-block">MERN Stack</h4>
              </a>
            </li>
            <li className="nav-item col-3">
              <a className="nav-link" id="tab-2" data-bs-toggle="tab" href="#features-tab-2">
                <i className="bi bi-box-seam"></i>
                <h4 className="d-none d-lg-block">Best Performance</h4>
              </a>
            </li>
            <li className="nav-item col-3">
              <a className="nav-link" id="tab-3" data-bs-toggle="tab" href="#features-tab-3">
                <i className="bi bi-brightness-high"></i>
                <h4 className="d-none d-lg-block">Complete in Less Time</h4>
              </a>
            </li>
            <li className="nav-item col-3">
              <a className="nav-link" id="tab-4" data-bs-toggle="tab" href="#features-tab-4">
                <i className="bi bi-command"></i>
                <h4 className="d-none d-lg-block">Reliability</h4>
              </a>
            </li>
          </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <img src="assets/img/skills.png" className="img-fluid" alt="Skills" />
            </div>

            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3><u>REVIEWS</u></h3>
              <p className="fst-italic">
                Here are some reviews given by our clients.
              </p>

              <div className="skills-content skills-animation">
                <div className="progress">
                  <span className="skill"><span>Accuracy</span> <i className="val">100%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill"><span>In perfect time</span> <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill"><span>SEO Accuracy</span> <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill"><span>Complaints</span> <i className="val">5%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default About;
