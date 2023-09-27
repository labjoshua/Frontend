import React from 'react'
import './reservation_style.css'

const ReservationPage = () => {
    const hotels = [
        { name: "Grand Hotel Riviera" },
        { name: "Sunset Paradise Resort" },
        { name: "Ocean View Inn" },
        { name: "Mountain Retreat Lodge" },
        { name: "Royal Palace Hotel" },
        { name: "Cozy Cabin Retreat" },
        { name: "Beachfront Breeze Hotel" },
        { name: "Wilderness Lodge" },
        { name: "Urban Oasis Suites" },
        { name: "Serenity Resort & Spa" }
    ];

    return (
        <section className='section-container'>
            <div className='container'>
                <h1>Make your Reservation</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi facere, soluta magnam consectetur molestias itaque ad
                        sint fugit architecto incidunt iste culpa perspiciatis
                        possimus voluptates aliquid consequuntur cumque quasi.
                        Perspiciatis.</p>
                <form>
                    <div className='input-group'>
                        <h4>Choose your Room</h4>
                        <select className='input-fields' placeholder='Enter a destination or hotel name' required>
                            <option value={""}>Enter a destination or hotel name</option>
                        {hotels.map((hotel, indx) => (
                            <option key={indx} value={hotel}>{hotel}</option>
                        ))}
                        </select>
                    </div>
                    <div className='input-group'>
                        <h4>Check In</h4>
                        <input className='input-fields' type='date' required/>
                    </div>
                    <div className='input-group'>
                        <h4>Check Out</h4>
                        <input className='input-fields' type='date' required/>
                    </div>
                    <div>
                        <button className='form-btn'>Place Reservation</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ReservationPage