import React from 'react';
import './style.css';

function Login() {
  return (
    <div className='background-image'>
      <div className='overlay'>
        <h1 className='Login-Form'>Login</h1>

        <div className='Login-Form'>
        <div className='input-box'>
          <input type='text' placeholder='Username' required></input>
          <i class='bx bxs-user'></i>
        </div>

        <div className='input-box'>
          <input type='password' placeholder='Password' required></input>
          <i class='bx bxs-lock-alt'></i>
        </div>

        <div className='remember-forgot'>
          <label>
            <input type='checkbox' />
            Remember me
          </label>
          <a href='#'>Forgot Password</a>
        </div>

        <button type='submit' className='btn'>
          Login
        </button>

        <div className='register-link'>
          <p>Don't have an account?
            <a href='#'>Register</a>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
