import React from 'react'
import './style.css'

function Login() {
  return (
    <div className='background-image'>
      <div className='overlay'>
        <h1>Login</h1>

        <div className='input-box'>
          <input type='text' placeholder='Username' required></input>
        </div>

        <div className='input-box'>
          <input type='password' placeholder='Password' required></input>
        </div>

        <div className='remember-forgot'>
          <label><input type='checkbox'>Rememebr me</input></label>
          
        </div>

        <button type='submit' class='btn'>Login</button>
      </div>
      </div>
  )
}

export default Login