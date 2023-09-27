import React from 'react'
import "./pagesStyle.css"
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <main className='verification-container '>
            <div className='d-flex align-items-start flex-column w-100 px-5'>
                <h3>Reset password</h3>
                <figcaption>Input and confirm new password</figcaption>
            </div>
            <form className='mt-4'>
                <input className='input-field' type='password' placeholder='Enter new password' />
                <input className='input-field' type='password' placeholder='Confirm new password' />
                <button className='form-btn' style={{width: '80%'}}>Update password</button>
            </form>
            <div className='pt-3 d-flex w-100 align-items-start px-5'>
                <Link to="/">Click here to go back</Link>
            </div>
        </main>
    )
}

export default ResetPassword