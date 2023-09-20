import React, { useState } from 'react';
import './style.css';
import loginImage from './Assests/arthurs-place-anilao.png';

function Login() {
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
      <div>
        <img src={loginImage} alt='Arthur Logo'></img>
      </div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className='input-box'>
          <input
            type='text'
            placeholder='Username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className='input-box'>
          <input
            type='password'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className='remember-forgot'>
          <a href='#'>Forgot Password</a>
        </div>
        <button type='submit' className='btn'>
          Login
        </button>
      </form>
      <div className='register-link'>
        <p>
          Don't have an account? <a href='#'>Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
