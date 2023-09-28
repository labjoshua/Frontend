import React from 'react'
import "./pagesStyle.css"
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <main className='registration-container'>
            <h3>Create a User Account</h3>
            <form>
                <input className='input-field' type='text' placeholder='Enter your name' />
                <input className='input-field' type ='telephone' placeholder='Enter you Mobile number' />
                <input className='input-field' type='text' placeholder='Enter Username'/>
                <input className='input-field' type='email' placeholder='Enter Email'/>
                <input className='input-field' type='password' placeholder='Enter Password'/>
                <input className='input-field' type='password' placeholder='Confirm Password'/>
                <button className='form-btn'>Create Account</button>
            </form>
            <div className='d-flex w-100 ps-5 pt-3 align-items-start'>
                <span>Already have an account? <Link to='/' className='text-decoration-none'>Sign In</Link> instead</span>
            </div>
        </main>
    )
}

export default Registration