import React, { useState, useEffect } from 'react';
import './reservation_style.css';
import { Link } from 'react-router-dom';

const ReservationPage = () => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [selectedHotel, setSelectedHotel] = useState('');
    const [isValid, setIsValid] = useState(true);

    // Define states for each input field
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // State to store room options
    const [roomOptions, setRoomOptions] = useState([]);

    // Function to fetch room options from the API
    useEffect(() => {
        fetchRoomOptions();
    }, []);


    const [modalUserData, setModalUserData] = useState({
        guestName: '',
        guestContactInfo: '',
        guestEmail: '',
        userName: '',
        userPass: ''
    });

    const handleUpdateUserInfo = async () => {
        const accessToken = localStorage.getItem('access_token');
        const guestID = localStorage.getItem('userID');
    
        try {
            const response = await fetch('http://localhost:5000/Components/UpdateInfo', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    guestID,
                    guestName: name || modalUserData.guestName,
                    guestContactInfo: phone || modalUserData.guestContactInfo,
                    guestEmail: email || modalUserData.guestEmail,
                    userName: username || modalUserData.userName,
                    userPass: password || modalUserData.userPass
                }),
            });
    
            if (response.ok) {
                const responseData = await response.json();
                alert('User information updated successfully:', responseData.message);
                // Handle success, e.g., show a success message to the user
            } else {
                const errorData = await response.json();
                console.error('Error updating user information:', errorData.message);
                // Handle error, e.g., show an error message to the user
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error, e.g., show an error message to the user
        }
    };

    // Function to fetch user data for modal inputs
    useEffect(() => {
        const usrID = localStorage.getItem('userID');
        const accessToken = localStorage.getItem('access_token');
    
        fetch(`http://localhost:5000/Components/FetchAccountInfo?usrID=${usrID}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // Set the modalUserData state with the fetched data
            setModalUserData(data[0]); // Assuming the API returns an array with a single user object
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
    }, []);


    const fetchRoomOptions = async () => {
        try {
            const response = await fetch('http://localhost:5000/Components/RoomInfo', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
            });
            if (response.ok) {
                const roomData = await response.json();
                setRoomOptions(roomData);
            } else {
                console.error('Failed to fetch room options');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Function to handle the "Save changes" button click
    const handleSaveChanges = () => {
        // You can perform actions here, such as sending the data to a server or updating a database
    };

    // Function to handle the check-out date change
    const handleCheckOutDateChange = (event) => {
        const newCheckOutDate = event.target.value;
        setCheckOutDate(newCheckOutDate);
        setIsValid(newCheckOutDate >= checkInDate);
    };

    // Function to handle the check-in date change
    const handleCheckInDateChange = (event) => {
        const newCheckInDate = event.target.value;
        setCheckInDate(newCheckInDate);
        setIsValid(checkOutDate >= newCheckInDate);
    };

    // Function to handle hotel selection
    const handleHotelChange = (selectedRoomName) => {
        console.log("Selected Room Name:", selectedRoomName);
        const selectedRoom = roomOptions.find(room => room.roomName === selectedRoomName);
        console.log("Selected Room:", selectedRoom);
        if (selectedRoom) {
            setSelectedHotel(selectedRoom.roomID);
        } else {
            // Handle the case when the selected room is not found
            setSelectedHotel(''); // Reset selectedHotel to empty string
        }
    };
    
    // Function to get the value of a cookie by name
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    };
    
    

    // Function to handle form submission
    const handleSubmit = async (event) => {
        console.log(roomOptions)
        event.preventDefault();
    
        // Get data from cookies
        const guestID = localStorage.getItem('userID')// Assuming 'userID' is the name of the cookie storing guestID
        const roomID = selectedHotel; // Assuming selectedHotel is the room ID selected from the dropdown
        const reservationDateFrom = checkInDate;
        const reservationDateTo = checkOutDate;
        const reservationStatus = 'Online'; // Assuming reservationStatus is always 'Online'
    
        try {
            const response = await fetch('http://localhost:5000/Components/Reservation', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify({
                    guestID,
                    roomID,
                    reservationDateFrom,
                    reservationDateTo,
                    reservationStatus
                }),
            });
    
            if (response.ok) {
                const responseData = await response.json();
                alert('Reservation successful:', responseData.message);
                // Handle success, e.g., show a success message to the user
                setCheckInDate('');
                setCheckOutDate('');
                setSelectedHotel('');
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData.message);
                // Handle error, e.g., show an error message to the user
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error, e.g., show an error message to the user
        }
    };
        

    return (
        <section className='section-container z-0'>
            <nav className='z-0'>
                <button id="dropdown-btn" className='btn btn-primary'>Action</button>
                <ul id="dropdown-menu" className='z-3'>
                    <li ><button type='button' className='edit' data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Profile</button></li>
                    <li><Link to="/" style={{textDecoration: 'none', color: 'black'}}>Logout</Link></li>
                </ul>
            </nav>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Information</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name || modalUserData.guestName} name='name' type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username || modalUserData.userName} name='username' type="text" className="form-control" id="username" placeholder="Enter your User Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Mobile Number</label>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone || modalUserData.guestContactInfo} name='phone' type="telephone" className="form-control" id="phone" placeholder="Enter your Mobile number" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email || modalUserData.guestEmail} name='email' type="email" className="form-control" id="email" placeholder="Enter your email address" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password || modalUserData.userPass} name='password' type="password" className="form-control" id="password" placeholder="Enter your new Password" />
                </div>
            </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleUpdateUserInfo}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 reserve-container z-1'>
                <h1>Make your Reservation</h1>
                <p>Embark on an unforgettable journey with us at Arthur's Place Anilao Resort. 
                  Dive into the crystal-clear waters of Anilao's renowned dive spots, 
                  explore the vibrant marine life, and experience the ultimate relaxation amidst stunning natural beauty. 
                  Your underwater adventure begins here – where every moment is a dive, and every dive is a delight.</p>
                <form className='w-100' onSubmit={handleSubmit}>
                    <div className='input-groups w-100 d-flex justify-content-between pb-3'>
                        <h4>Choose your Room</h4>
                        <select className='reserve-select-field' required onChange={(e) => handleHotelChange(e.target.value)}>
                        <option value="" hidden>Choose a room</option>
                        {roomOptions.map((room, indx) => (
                            <option key={indx} value={room.roomName}>{room.roomName}</option>
                        ))}
                    </select>
                    </div>
                    <div className='input-groups w-100 d-flex justify-content-between pb-3'>
                        <h4>Check In</h4>
                        <input className='reserve-input-fields' type='date' required onChange={handleCheckInDateChange} />
                    </div>
                    <div className='input-groups w-100 d-flex justify-content-between pb-3'>
                        <h4>Check Out</h4>
                        <input className='reserve-input-fields' type='date' required onChange={handleCheckOutDateChange} />
                    </div>
                    {!isValid && <p className="error-message">Check-out date must be later than check-in date</p>}
                    <div className='w-100'>
                        <button className='form-btn w-100' type="submit">Place Reservation</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ReservationPage;
