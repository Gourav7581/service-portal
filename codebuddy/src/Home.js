import React, { useEffect, useState } from 'react';
import './App.css';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';


import api from './config/api';


function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(localStorage.getItem('codebuddyUser')));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';
  const isAuthPage = ['/login', '/signup', '/forgot'].includes(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const syncAuth = () => setIsLoggedIn(Boolean(localStorage.getItem('codebuddyUser')));
    window.addEventListener('authchange', syncAuth);
    return () => window.removeEventListener('authchange', syncAuth);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await api.post('/logout');
      if (response.data.success) {
        localStorage.removeItem('codebuddyUser');
        setIsLoggedIn(false);
        navigate('/login');
      } else {
        alert(response.data.message || 'Logout failed!');
      }
    } catch (error) {
      console.error('Logout error:', error.message);
      alert('An error occurred during logout. Please try again.');
    }
  };
  return (
    <>
      {!isAuthPage && <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          {/* Logo Section */}
          <div className="logo d-flex align-items-center">
            <img src="/assets/img/mainlogo1.png" alt="CodeBuddy Logo" id="mainlogo" />
            <h1 className="sitename">CODEBUDDY</h1>
          </div>

          {/* Navigation Menu */}
          <nav id="navmenu" className="navmenu">
            <ul className={isMobileMenuOpen ? 'mobile-nav-open' : ''}>
              <li>
                <NavLink to="/" end>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/team">Team</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              
              <li className="auth-nav-item">
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="nav-auth-button logout-button">
                    <i className="bi bi-box-arrow-right"></i> Logout
                  </button>
                ) : (
                  <NavLink to="/login" className="nav-auth-button login-link">
                    <i className="bi bi-person"></i> Login
                  </NavLink>
                )}
              </li>
            </ul>
            <button
              type="button"
              className="mobile-nav-toggle d-xl-none"
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
            </button>
          </nav>
        </div>
      </header>}



      

  {isHomePage && <section id="hero" className="hero section dark-background">
      
      <div id="hero-carousel" data-bs-interval="2000" className="container carousel " data-bs-ride="carousel">
        
        
        <div className="carousel-item active">
          <div className="carousel-container">
            <h2 className="animate__animatedanimate__fadeInRight">Welcome to <span>CodeBuddy</span></h2>
            <p className="animate__animatedanimate__fadeInLeft">Hello everyone we are codebuddy. we are working in this feild form some years . we give our best in every project because we want to built trust</p>
            <a href="#about" className="btn-get-started animate__animatedanimate__fadeInLeft scrollto">Read More</a>
          </div>
        </div>

        
        <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animate__animatedanimate__fadeInRight">MERN STACK</h2>
            <p className="animate__animatedanimate__fadeInLeft"> Our Speciality is mern stack . In present this it is in demand because it make's website more scure and relaiable </p>
            <a href="#about" className="btn-get-started animate__animatedanimate__fadeInLeft scrollto">Read More</a>
          </div>
        </div>

        
        <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animate__animatedanimate__fadeInRight">Why you give us project?</h2>
            <p className="animate__animatedanimate__fadeInLeft">You can give us your project because we will give our best. you can trust us . In future if and difficulty is we will solve . </p>
            <a href="#about" className="btn-get-started animate__animatedanimate__fadeInLeft scrollto">Read More</a>
          </div>
        </div>

        

        <a className="  carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span className=" carousel-control-prev-icon bi bi-chevron-left  " aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        
      </div>

     
      {/* <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g className="wave1">
          <use xlink:href="#wave-path" x="50" y="3"></use>
        </g>
        <g className="wave2">
          <use xlink:href="#wave-path" x="50" y="0"></use>
        </g>
        <g className="wave3">
          <use xlink:href="#wave-path" x="50" y="9"></use>
        </g>
      </svg> */}

      <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3"></use>
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0"></use>
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9"></use>
        </g>
      </svg>

    </section>}


  
  <main className={isHomePage ? '' : isAuthPage ? 'auth-page-content' : 'inner-page-content'}>
    <Outlet />
  </main>



    
    </>
  );
}

export default Home;
