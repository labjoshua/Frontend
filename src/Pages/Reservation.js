import React from 'react';
import './styletemp.css' 

class Reservation extends React.Component {
  render() {
    return (
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-md-push-5">
                <div className="booking-cta">
                  <h1>Make your reservation</h1>
                  <p>
                  Embark on an unforgettable journey with us at Arthur's Place Anilao Resort. 
                  Dive into the crystal-clear waters of Anilao's renowned dive spots, 
                  explore the vibrant marine life, and experience the ultimate relaxation amidst stunning natural beauty. 
                  Your underwater adventure begins here – where every moment is a dive, and every dive is a delight.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-md-pull-7">
                <div className="booking-form">
                  <form>
                    <div className="form-group">
                      <span className="form-label">Choose your Room</span>
                      <input className="form-control" type="text" placeholder="Enter a destination or hotel name" />
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check In</span>
                          <input className="form-control" type="date" required />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check out</span>
                          <input className="form-control" type="date" required />
                        </div>
                      </div>
                    </div>
                    <div className="form-btn">
                      <button className="submit-btn">Place Reservation</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
