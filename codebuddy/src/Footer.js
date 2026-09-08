import React from 'react';
import './App.css';

function Footer() {
  return (
    <>
      <footer id="footer" className="footer dark-background">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
                <a href="index.html" className="logo d-flex align-items-center">
                  <span className="sitename">GP</span>
                </a>
                <div className="footer-contact pt-3">
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                  <p><strong>Email:</strong> <span>info@example.com</span></p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">About</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Portfolio</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Team</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Contact</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">App Development</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Game Development</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Digital Marketing</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                  <li><i className="bi bi-chevron-right"></i> <a href="#">Logo Design</a></li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-12 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                <form action="forms/newsletter.php" method="post" className="php-email-form">
                  <div className="newsletter-form">
                    <input type="email" id="email" name="email" required placeholder="Enter your email" />
                    <input type="submit" value="Subscribe" />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your subscription request has been sent. Thank you!</div>
                </form>
              </div>

            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container text-center">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">GP</strong> <span>All Rights Reserved</span></p>
            <div className="credits">
              Designed by <a href="https://www.keeninfotech.com/" target="_blank" rel="noopener noreferrer">KeenInfotect</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
