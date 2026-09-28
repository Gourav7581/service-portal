import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
 import { useState } from 'react'
import api from './config/api'
import { useNavigate } from 'react-router-dom'


function Signup() {
  const [name, setName]= useState('')
      const [email, setEmail]= useState('')
      const [phone, setPhone]=useState('')
      const [password, setPassword]= useState('')
      const [message, setMessage] = useState('');
      const [isError, setIsError] = useState(false);
      const navigate = useNavigate()
      const handleSubmit = async(e) =>{
        e.preventDefault()
         setMessage('');
         setIsError(false);
        if (!name || !email || !phone || !password) {
          alert("All fields are required!");
            setIsError(true);
          return;
      }

 try {
  const response = await api.post('/signup', {
    username: name,
    email,
    phone,
    password,
  });

  if (response.status === 201) {
    setMessage(response.data.message);
    setIsError(false);
    setTimeout(() => navigate('/login'), 2000); // Navigate after success
  }
} catch (error) {
  // if (error.response) {
  //   setMessage(error.response.data.message || 'Something went wrong');
  //   setIsError(true);
  // } else {
  //   setMessage('Unable to connect to the server.');
  //   setIsError(true);
  // }
  if (error.response) {
    setMessage(error.response.data.message || 'Something went wrong');
    setIsError(true);
  } else {
    setMessage('Unable to connect to the server.');
    setIsError(true);
  }
}
};
  return (
    <>
      <div className='sgback'>
        <div className="signupbox auth-card">
          <div className="auth-icon"><i className="bi bi-person-plus"></i></div>
          <h2 className='lgsize1'>Create Account</h2>
          <p className="auth-subtitle">Join CodeBuddy in a few simple steps</p>
          {message && <div className={`auth-message ${isError ? 'error-message-box' : 'success-message-box'}`}>{message}</div>}

 

            <form onSubmit={handleSubmit}>
          <div className="mail1">
              <label htmlFor="name"><h3 className='lgsize2 label1'>Name:</h3></label>
              <input type="name" name="name" id="name" placeholder="Enter Name" className='input3 he1'  value={name}
       onChange={(e)=>setName(e.target.value)}
        required />
            </div>


            <div className="mail1">
              <label htmlFor="email"><h3 className='lgsize2 label1'>Email:</h3></label>
              <input type="email" name="email" id="email" placeholder="Enter Email" className='input3 he1'value={email}
      onChange={(e)=>setEmail(e.target.value)}  required />
            </div>

            <div className="mail1">
              <label htmlFor="phone"><h3 className='lgsize2 label1'>Phone:</h3></label>
              <input type="number" name="phone" id="phone" placeholder="Enter Phone No." className='input3 he1' value={phone}
        onChange={(e)=>setPhone(e.target.value)}  required />
            </div>
           

            <div className="mail1">
              <label htmlFor="pwd"><h3 className='lgsize2 label1'>Password:</h3></label>
              <input type="password" name="password" id="password" placeholder="Enter Password" className='input3 he1' value={password}
        onChange={(e)=> setPassword(e.target.value)}  required />
            </div>


            <button type="submit" className=" submit " ><b>Signup</b></button>
            

            <div className="a">
              <p>Already have an account? <Link to="/login"><u className='go'>LOGIN</u></Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;


