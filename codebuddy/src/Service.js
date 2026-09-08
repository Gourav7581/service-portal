import React from 'react';
import './App.css';
import Footer from './Footer';

function Service() {
  return (
    <>

    
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
      <Footer/>
    </>
  );
}

export default Service;
