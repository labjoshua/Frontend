import React from 'react'
import './reservation_style.css'

const ReservationPage = () => {
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
                        <input className='input-fields' placeholder='Enter a destination or hotel name' required/>
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