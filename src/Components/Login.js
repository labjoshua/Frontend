import React from 'react';
import './style.css';

function Login() {
  return(
    <div className='wrapper'>
      <h1>Login</h1>
      <div className='input-box'>
        <input type='text' placeholder='Username' required></input>
        <i className='bx bxs-user'></i>
      </div>
      <div className='input-box'>
        <input type='password' placeholder='Password' required></input>
        <i className='bx bxs-lock-alt password-icon'></i>
      </div>
      <div className='remember-forgot'>
        <a href='#'>Forgot Password</a>
      </div>
      <button type='submit' className='btn'>Login</button>
      <div className='register-link'>
        <p>Don't have an account? <a href='#'>Register</a></p>
      </div>
    </div>
  )
}

export default Login;
