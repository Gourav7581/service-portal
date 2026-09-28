import React, { useState } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import api from './config/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);
  
    try {
      const response = await api.post('/login', { email, password });
      if (response.data.success) {
       localStorage.setItem('codebuddyUser', JSON.stringify(response.data.user));
       window.dispatchEvent(new Event('authchange'));
       navigate('/');
      } else {
        setMessage(response.data.message || 'Login failed!');
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Server error:', error.response.data);
        setMessage(error.response.data.message || 'Login failed due to server error!');
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response from server:', error.request);
        setMessage('Server se connection nahi ho pa raha. Please try again.');
      } else {
        // Other errors
        console.error('Error during request setup:', error.message);
        setMessage('Unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  
  

  return (
    <div className="lgback">
      <div className="loginbox auth-card">
        <div className="auth-icon"><i className="bi bi-person-lock"></i></div>
        <h2 className="lgsize1">Welcome Back</h2>
        <p className="auth-subtitle">Sign in to continue to CodeBuddy</p>
        {message && <div className="auth-message error-message-box">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mail">
            <label htmlFor="login-email" className="lgsize2">Email address</label>
            <input
              type="email"
              name="email"
              id="login-email"
              placeholder="name@example.com"
              className="input1 input2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mail">
            <label htmlFor="login-password" className="lgsize2">Password</label>
            <input
              type="password"
              name="password"
              id="login-password"
              placeholder="Enter your password"
              className="input1 input2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Link to="/forgot" className="go lf">
            Forgot Password?
          </Link>

          <button type="submit" className="input1 submit1" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>

          <div className="sign">
            <p>
              New to CodeBuddy? <Link to="/signup" className="go">Create account</Link>
            </p>
          </div>
        </form>

        
      </div>
    </div>
  );
}

export default Login;


