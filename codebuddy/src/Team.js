import React from 'react';
import './App.css';
import Footer from './Footer';

function Team() {
  return (
    <>

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



      
  
<Footer/>

    
    </>
  );
}

export default Team;


