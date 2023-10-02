import React, { useState } from 'react';
import "./pagesStyle.css";
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const gueID = localStorage.getItem('userID')

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://134.209.98.49:5000/Components/UpdatePassword', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userPass: newPassword, guestID: gueID }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Password Reset Successfully!')
                navigate('/')
                console.log(data.message); // Handle success, for example, show a success message to the user
            } else {
                console.error(data.message); // Handle error, for example, display an error message to the user
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <main className='verification-container '>
            <div className='d-flex align-items-start flex-column w-100 px-5'>
                <h3>Reset password</h3>
                <figcaption>Input and confirm new password</figcaption>
            </div>
            <form className='mt-4' onSubmit={handleSubmit}>
                <input
                    className='input-field'
                    type='password'
                    placeholder='Enter new password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <input
                    className='input-field'
                    type='password'
                    placeholder='Confirm new password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button className='form-btn' style={{ width: '80%' }} type='submit'>
                    Update password
                </button>
            </form>
            <div className='pt-3 d-flex w-100 align-items-start px-5'>
                <Link to="/">Click here to go back</Link>
            </div>
        </main>
    );
};

export default ResetPassword;
