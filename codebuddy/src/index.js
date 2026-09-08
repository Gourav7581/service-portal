import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Home'; 
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
 // Ensure this matches the file name exactly.
import Login from './Login';
import Signup from './Signup';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Signdt from './Signdt';
import Header from './Header';
// import User from './User';
import Forgot from './Forgot';


const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        
      
        
          <Route index element={<Header />} />
          
        
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/signdt" element={<Signdt />} />
          <Route path="/forgot" element={<Forgot />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
