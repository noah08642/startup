import React, { useState } from 'react';
import './subscribe.css';

const Subscribe = ({ showPopup, togglePopup }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle subscribe logic here
    alert('Subscribed with email: ' + email);
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    // if (response.ok) {
    //   alert('all is well')
    // } else {
    //   alert('Failed to upload post');
    // }
    setEmail('');
    togglePopup();

    // all is well, time to notify of a new post:
    // PostNotifier.broadcastEvent(blogPost.author, PostEvent.Post, blogPost.title);
  };

  return (
    showPopup && (
      <div className="popup-overlay">
        <div className="popup-content">
          <button onClick={togglePopup} className="close-btn">
            x
          </button>
          <div className="popup-header">
            <h2>Subscribe to My Newsletter</h2>
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
          </form>
        </div>
      </div>
    )
  );
};

export default Subscribe;