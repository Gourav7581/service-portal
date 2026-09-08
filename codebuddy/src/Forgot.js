import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !newPassword) {
      alert('Please fill in all fields!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/forgot-password', {
        email,
        newPassword,
      });

      if (response.data.success) {
        setMessage('Password reset successfully!');
        setIsError(false);
        setTimeout(() => navigate('/login'), 2000); // Redirect to login after success
      } else {
        setMessage(response.data.message || 'Failed to reset password.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Unable to reset password. Please try again.');
      setIsError(true);
    }
  };

  return (
    <div className="lgback">
      <div className="loginbox auth-card">
        <div className="auth-icon"><i className="bi bi-key"></i></div>
        <h2 className="lgsize1">Reset Password</h2>
        <p className="auth-subtitle">Enter your account email and a new password</p>

        {message && (
          <div className={`auth-message ${isError ? 'error-message-box' : 'success-message-box'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mail">
            <label htmlFor="reset-email" className="lgsize2">Email address</label>
            <input
              type="email"
              name="email"
              id="reset-email"
              placeholder="name@example.com"
              className="input1 input2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mail">
            <label htmlFor="new-password" className="lgsize2">New password</label>
            <input
              type="password"
              name="newPassword"
              id="new-password"
              placeholder="Enter a new password"
              className="input1 input2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <input type="submit" value="Reset Password" className="input1 submit1" />
          <div className="sign"><p>Remembered it? <Link to="/login" className="go">Back to login</Link></p></div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
