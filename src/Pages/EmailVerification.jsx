import React, {useState} from 'react'
import "./pagesStyle.css"
import { Link, useNavigate } from 'react-router-dom';

const EmailVerification = () => {
    const [userEmail, setUserEmail] = useState('');
    const Navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:5000/Components/forgotpassword', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ email: userEmail }),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData)
            const uID = responseData.userID
            localStorage.setItem('userID', uID)
            alert(responseData.message)
            Navigate('/otp-verification')
          } 
        } catch (error) {
          alert(error)
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
                type='email' name='email' 
                value={userEmail} 
                placeholder='Enter you email here' 
                onChange={(e) => setUserEmail(e.target.value)} />
                <button type='submit' className='form-btn' style={{width: '80%'}}>Verify Email</button>
            </form>
            <span className='pt-3 d-flex align-items-center gap-2 w-100 px-5'>Want to go back?<Link to='/' className='text-decoration-none'>Click here</Link></span>
        </main>
    )
}

export default EmailVerification