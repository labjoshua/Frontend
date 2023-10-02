import React, {useState} from 'react'
import "./pagesStyle.css"
import { Link } from 'react-router-dom';

const VerifyOTP = () => {
    const [otp, setOTP] = useState(''); // State to store the user's email

    return (
        <main className='verification-container '>
            <div className='d-flex align-items-start flex-column w-100 px-5'>
                <h3>OTP Verification</h3>
                <figcaption>Verify otp code to reset password</figcaption>
            </div>
            <form className='mt-4' >
                <input className='input-field' type='number' name='otp' value={otp} placeholder='Enter OTP Code' onChange={(e) => setOTP(e.target.value)} />
                <button type='submit' className='form-btn' style={{width: '80%'}}>Verify OTP</button>
            </form>
            <span className='pt-3 d-flex align-items-center gap-2 w-100 px-5'>Want to go back?<Link to='/' className='text-decoration-none'>Click here</Link></span>
        </main>
    )
}

export default VerifyOTP