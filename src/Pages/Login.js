import React, { useState } from 'react';
import './style.css';
import loginImage from '../Assests/arthurs-place-anilao.png';
import { Link, useNavigate } from 'react-router-dom';

// Function to get the value of a cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://134.209.98.49:5000/Components/Login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const responseData = await response.json();
                const token = responseData.accessToken
                const usr = responseData.uId
                const usID = responseData.user
                const expiresAtt = responseData.expiresAt

                localStorage.setItem('access_token', token);
                localStorage.setItem('userID', usr)
                localStorage.setItem('username', usID)
                localStorage.setItem('expires_at', expiresAtt);
                navigate('/reservation');
            } else {
                alert('Incorrect username or password!')
                const errorData = await response.json();
                console.error('Authentication failed:', errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='wrapper'>
            <div> <img src={loginImage} alt='Arthur Logo' /> </div>
            <h1>Login</h1>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} ></input>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>

                {/* Forgot Password */}
                <div className='remember-forgot'> <Link to='/forgot-password'>Forgot Password</Link> </div>

                {/* Login Button */}
                <button type='submit' className='btn'>Login</button>
            </form>

            {/* Register Link */}
            <div className='register-link'>
                <p> Don't have an account? <Link to='/registration'>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;
