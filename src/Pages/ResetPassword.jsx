import React, { useState } from 'react';
import "./pagesStyle.css";
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleUpdatePassword = async (e) => {
        e.preventDefault();

        // Retrieve guestID from local storage
        const guestID = localStorage.getItem('userID');

        try {
            const response = await fetch('/Components/UpdatePassword', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userPass: newPassword, guestID }),
            });

            const data = await response.json();
            if (response.ok) {
                // Password updated successfully, you might want to handle this in your UI
                console.log(data.message);
                navigate('/'); // Redirect to login page after successful password update
            } else {
                // Password update failed, handle error or show a message to the user
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle network or other errors here
        }
    };

    return (
        <main className='verification-container '>
            <div className='d-flex align-items-start flex-column w-100 px-5'>
                <h3>Reset password</h3>
                <figcaption>Input and confirm new password</figcaption>
            </div>
            <form className='mt-4' onSubmit={handleUpdatePassword}>
                <input
                    className='input-field'
                    type='password'
                    placeholder='Enter new password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                    className='input-field'
                    type='password'
                    placeholder='Confirm new password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
