import React from 'react';
import './style.css';
import loginImage from './Assests/arthurs-place-anilao.png';

function Login() {
  return(
    <div className='wrapper'>
      <div>
        <img src ={loginImage} alt='Arthur Logo'></img>
      </div>
      <h1>Login</h1>
      <div className='input-box'>
        <input type='text' placeholder='Username' required></input>
      </div>
      <div className='input-box'>
        <input type='password' placeholder='Password' required></input>
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
