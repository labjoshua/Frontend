import React, {useState} from 'react'
import "./pagesStyle.css"
import { Link } from 'react-router-dom';

const EmailVerification = () => {
    const [userEmail, setUserEmail] = useState(''); // State to store the user's email

    return (
        <main className='verification-container '>
            <div className='d-flex align-items-start flex-column w-100 px-5'>
                <h3>Forgot password</h3>
                <figcaption>Verify email to reset password</figcaption>
            </div>
            <form className='mt-4' >
                <input className='input-field' type='email' name='email' value={userEmail} placeholder='Enter you email here' onChange={(e) => setUserEmail(e.target.value)} />
                <button type='submit' className='form-btn' style={{width: '80%'}}>Verify Email</button>
            </form>
            <span className='pt-3 d-flex align-items-center gap-2 w-100 px-5'>Want to go back?<Link to='/' className='text-decoration-none'>Click here</Link></span>
        </main>
    )
}

export default EmailVerification