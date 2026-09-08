import React, { useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import PureCounter from '@srexi/purecounterjs'; // Correct package


function Header() {
  useEffect(() => {
    new PureCounter();
  }, []);
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

      <section id="call-to-action" class="call-to-action section dark-background">

<div class="container">

  <div class="row" data-aos="zoom-in" data-aos-delay="100">
    <div class=" col-xl-9 text-center text-center">
      <h3> <a class="cta-btn align-middle" href="#contact">Call To Action</a></h3>
     
      <p id='tx8'>we are available in 24 hours you can call us anytime for you necessary information our team reply  soon . </p> <br/>
     
    </div>
    <p class="tx1">Thank you for calling us! </p>
  </div>

</div>

</section>


<div className="seback">
  <section id="services" className="services section">
    <div className="container section-title" data-aos="fade-up">
      <h2 className="tx4">Services</h2>
      <p className="tx4">What we do offer</p>
    </div>

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="simg">
            <img src="assets/img/web.png" alt="Web Development" className="simg" />
          </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="simg">
            <img src="assets/img/app.png" alt="App Development" className="simg" />
          </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="simg">
            <img src="assets/img/game.png" alt="Game Development" className="simg" />
          </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div className="simg">
            <img src="assets/img/digital.png" alt="Digital Marketing" className="simg" />
          </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="simg">
            <img src="assets/img/grafix.png" alt="Graphic Design" className="simg" />
          </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
          <div className="simg">
            <img src="assets/img/logo12.png" alt="Logo Design" className="simg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

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
      <section id="team" className="team section">

      
<div className="container section-title" data-aos="fade-up">
  <h2 className="tx3">Team</h2>
  <p className="tx3">Our Hardworking Team</p>
</div>

<div className="container">

  <div className="row gy-4">

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
      <div className="team-member">
        <div className="member-img">
          <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/>
          <div className="social">
            
        <div className="img1 ">
          <div className="team1">
               <div className="team3">
                  <p ><u>Vasudev Parik </u></p>
              </div>
                <div>
                  <h4 className="team2"> He is HTML , CSS, JS developer</h4>
                </div>
            </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
      <div className="team-member">
        <div className="member-img">
          <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
          <div className="social">
            <div className="img1 ">
              <div className="team1">
                   <div className="team3">
                      <p ><u>Kamar Rja </u></p>
                  </div>
                    <div>
                      <h4 className="team2"> He is REACT developer</h4>
                    </div>
                </div>
                </div>
          </div>
        </div>
        
      </div>
    </div>

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
      <div className="team-member">
        <div className="member-img">
          <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/>
          <div className="social">
            <div className="img1 ">
              <div className="team1">
                   <div className="team3">
                      <p ><u>Kamal Parjapat </u></p>
                  </div>
                    <div>
                      <h4 className="team2"> He is BACKEND developer</h4>
                    </div>
                </div>
                </div>
          </div>
        </div>
        
      </div>
    </div>

    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
      <div className="team-member">
        <div className="member-img">
          <img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/>
          <div className="social">
            <div className="img1 ">
              <div className="team1">
                   <div className="team3">
                      <p ><u>Chanchal <br/> Swami </u></p>
                  </div>
                    <div>
                      <h4 className="team2"> She is UI/UX <br/>designer</h4>
                    </div>
                </div>
                </div>
          </div>
        </div>
        
      </div>
    </div>

  </div>

</div>

</section>

<section id="contact" className="contact section">


<div className="container section-title" data-aos="fade-up">
  <div className="tx6">
  <h2 className="tx5">Contact</h2>
  <h5 className="tx5">Contact Us</h5>
  
</div>
    <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
      <iframe 
      title="Google Maps Location"
      style={{
        border: '0',
        width: '100%',
        height: '270px',
      }}
   
     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>

<div className="container" data-aos="fade" data-aos-delay="100">

  <div className="row gy-4">

    <div className="col-lg-4">
      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
        <i className="bi bi-geo-alt flex-shrink-0"></i>
        <div>
          <h3>Address</h3>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
        <i className="bi bi-telephone flex-shrink-0"></i>
        <div>
          <h3>Call Us</h3>
          <p>+1 5589 55488 55</p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
        <i className="bi bi-envelope flex-shrink-0"></i>
        <div>
          <h3>Email Us</h3>
          <p>info@example.com</p>
        </div>
      </div>

    </div>

    <div className="col-lg-8">
      <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">

          <div className="col-md-6">
            <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
          </div>

          <div className="col-md-6 ">
            <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
          </div>

          <div className="col-md-12">
            <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
          </div>

          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>

            <button type="submit">Send Message</button>
          </div>

        </div>
      </form>
    </div>

  </div>

</div>

</section>

 


    
    <Footer/>
    </>
  );
}


export default Header;
