import React, { useState } from 'react';
import "./pagesStyle.css";
import { Link, useNavigate } from 'react-router-dom';

const EmailVerification = () => {
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/Components/forgotpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userEmail }),
            });

            
            if (response.ok) {
                const data = await response.json();
                alert("OTP sent to Email!")
                const usID = data.UID
                localStorage.setItem('userID', usID)
                navigate('/otp-verification') // Handle success, for example, show a success message to the user
            } else {
                const errorData = await response.json();
                console.error(errorData.message); // Handle error, for example, display an error message to the user
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <main className='verification-container '>
            <div className='d-flex align-items-start flex-column w-100 px-5'>
                <h3>Forgot password</h3>
                <figcaption>Verify email to reset password</figcaption>
            </div>
            <form className='mt-4' onSubmit={handleSubmit}>
                <input
                    className='input-field'
                    type='email'
                    name='email'
                    value={userEmail}
                    placeholder='Enter your email here'
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                />
                <button type='submit' className='form-btn' style={{ width: '80%' }}>
                    Verify Email
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

export default EmailVerification;
