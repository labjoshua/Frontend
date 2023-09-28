import React, { useState } from 'react';
import './style.css';
import loginImage from '../Assests/arthurs-place-anilao.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Get the navigation function

  const handleLogin = async (e) => {
    e.preventDefault();

    const serverUrl = 'http://localhost:5000';

    try {
      const response = await fetch(`${serverUrl}/Components/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.accessToken) {
          const token = responseData.accessToken;
          localStorage.setItem('access_token', token);
          // Use the navigate function from useNavigate to navigate to another route
          navigate('/reservation');
        } else {
          console.error('Access token not found in the response.');
        }
      } else {
        const errorData = await response.json();
        console.error('Authentication failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='wrapper'>
      <div> <img src={loginImage} alt='Arthur Logo' /> </div>
      <h1>Login</h1>

      {/* Login Form */}
      <form onSubmit={handleLogin}>
        <div className='input-box'>
          <input type='text' placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} ></input>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        {/* Forgot Password */}
        <div className='remember-forgot'> <Link to='/forgot-password'>Forgot Password</Link> </div>

        {/* Login Button */}
        <button type='submit' className='btn'>Login</button>
      </form>

      {/* Register Link */}
      <div className='register-link'>
        <p> Don't have an account? <Link to='/registration'>Register</Link> </p>
      </div>
    </div>
  );
};

export default Login;
