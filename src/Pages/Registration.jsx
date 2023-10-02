import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = (value) => {
        setPassword(value);
        setPasswordsMatch(value === confirmPassword);
    };


    function isTokenExpired (){
        const expiresAt = localStorage.getItem('expires_at')
        return expiresAt && Date.now() > parseInt(expiresAt)
    }
    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
        setPasswordsMatch(value === password);
    };

    const handleRegistrationSubmit = async (event) => {
        event.preventDefault();

        if (passwordsMatch) {
            try {
                const response = await fetch('http://134.209.98.49:5000/Components/Registration', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        guestName: name,
                        guestContactInfo: phone,
                        guestEmail: email,
                        userName: username,
                        userPass: password,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    alert(data.message); // Handle success response
                    window.location.href = '/';
                } else {
                    const errorData = await response.json();
                    alert(errorData.message); // Handle error response
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle network errors or other issues
            }
        } else {
            // Handle password mismatch error (display error message, prevent API request, etc.)
            alert('Passwords do not match.');
        }
    };

    return (
        <main className='registration-container'>
            <h3>Create a User Account</h3>
            <form onSubmit={handleRegistrationSubmit}>
                <input className='input-field' type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='input-field' type='telephone' placeholder='Enter your Mobile number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input className='input-field' type='text' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className='input-field' type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='input-field' type='password' placeholder='Enter Password' value={password} onChange={(e) => handlePasswordChange(e.target.value)} />
                <input className='input-field' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => handleConfirmPasswordChange(e.target.value)} />
                {!passwordsMatch && <p>Passwords do not match.</p>}
                <button className='form-btn' type='submit'>Create Account</button>
            </form>
            <div className='d-flex w-100 ps-5 pt-3 align-items-start'>
                <span>Already have an account? <Link to='/' className='text-decoration-none'>Sign In</Link> instead</span>
            </div>
        </main>
    );
}

export default Registration;
