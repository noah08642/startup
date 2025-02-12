import React, { useState } from 'react';
import './subscribe.css';

const Subscribe = ({ showPopup, togglePopup }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscribe logic here
    alert('Subscribed with email: ' + email);
    setEmail('');
    togglePopup();
  };

  return (
    showPopup && (
      <div className="popup-overlay">
        <div className="popup-content">
          <div className="popup-header">
            <h2>Subscribe to My Newsletter</h2>
            <button onClick={togglePopup} className="close-btn">
              ×
            </button>
          </div>
          <form onSubmit={handleSubmit} className="subscribe-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
            <button type="button" onClick={togglePopup} className="cancel-btn">Cancel</button>
          </form>
        </div>
      </div>
    )
  );
};

export default Subscribe;