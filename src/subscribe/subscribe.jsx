import React from 'react';

export function Subscribe() {
  return (
    <main classNameName='container-fluid bg-secondary text-center'>
        <div className="overlay" id="overlay"></div>
        <div className="popup" id="popup">
        <h2>Subscribe to My Newsletter</h2>
        <form>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
        </form>
        <button id="closePopup">Close</button>
        <li><a href="index.html">Home</a></li>
        </div>
    </main>
  );
}