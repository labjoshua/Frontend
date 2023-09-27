import React, { useState } from 'react';
import './style.css';
import loginImage from '../Assests/arthurs-place-anilao.png';
import { Link } from 'react-router-dom';

const  Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const serverUrl = 'http://localhost:5000/';

    try {
      const response = await fetch(`${serverUrl}/Components/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.token) {
        const token = data.token;
        makeAuthenticatedRequest(token);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const makeAuthenticatedRequest = async (token) => {
    const serverUrl = 'http://localhost:5000';

    try {
      const response = await fetch(`${serverUrl}/protected`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(error);
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
}

export default Login;
