import React, { useEffect } from 'react';
import './App.css';
import PureCounter from '@srexi/purecounterjs'; // Correct package
import Footer from './Footer';

function Portfolio() {
  // Initialize PureCounter on component mount
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <>
      <section id="portfolio" className="Portfolio section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 align-items-center justify-content-between">
            <div className="col-lg-5">
              <img src="assets/img/stats-img.jpg" alt="Statistics" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h3 className="fw-bold fs-2 mb-3">Some records based on our projects</h3>
              <p>
                Here are some true records that are based on our project accuracy, proper timing, and our good behavior.
              </p>
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-emoji-smile flex-shrink-0"></i>
                    <div>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="232"
                        data-purecounter-duration="4"
                        className="purecounter"
                      ></span>
                      <p><strong>Happy Clients</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-journal-richtext flex-shrink-0"></i>
                    <div>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="521"
                        data-purecounter-duration="4"
                        className="purecounter"
                      ></span>
                      <p><strong>Projects</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-headset flex-shrink-0"></i>
                    <div>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="1453"
                        data-purecounter-duration="4"
                        className="purecounter"
                      ></span>
                      <p><strong>Hours of Support</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="stats-item d-flex">
                    <i className="bi bi-people flex-shrink-0"></i>
                    <div>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="32"
                        data-purecounter-duration="2"
                        className="purecounter"
                      ></span>
                      <p><strong>Hard Workers</strong></p>
                    </div>
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

export default Portfolio;
