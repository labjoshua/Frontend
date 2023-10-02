import React, { useState } from 'react';
import "./pagesStyle.css";
import { Link, useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
    const [otp, setOTP] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://134.209.98.49:5000/Components/verifying-OTP', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp: otp }),
            });

            const data = await response.json();
            if (response.ok) {
                navigate('/reset-password')
                console.log(data.message); // Handle success, for example, show a success message to the user
                
            } else {
                console.error(data.error); // Handle error, for example, display an error message to the user
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <main className='verification-container '>
            <div className='d-flex align-items-start flex-column w-100 px-5'>
                <h3>OTP Verification</h3>
                <figcaption>Verify OTP code to reset password</figcaption>
            </div>
            <form className='mt-4' onSubmit={handleSubmit}>
                <input
                    className='input-field'
                    type='number'
                    name='otp'
                    value={otp}
                    placeholder='Enter OTP Code'
                    onChange={(e) => setOTP(e.target.value)}
                    required
                />
                <button type='submit' className='form-btn' style={{ width: '80%' }}>
                    Verify OTP
                </button>
            </form>
            <span className='pt-3 d-flex align-items-center gap-2 w-100 px-5'>
                Want to go back?<Link to='/' className='text-decoration-none'>
                    Click here
                </Link>
            </span>
        </main>
    );
};

export default VerifyOTP;
