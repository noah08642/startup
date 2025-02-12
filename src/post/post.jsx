import React from 'react';
import { NavLink } from 'react-router-dom';
import './post.css';

export function Post() {
  return (
    <main>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div className="container">
        <h1>Ken Wilber and Guitar</h1>
        <p className="meta">Posted on <time dateTime="2025-01-21">January 21, 2025</time> </p>
    
        <div className="content">
          <p>of pure Emptiness that you deeply and truly are.</p>
    
          <img src="profile.JPG" width={400} alt="This is me" />
    
          <p>So what do I see? If I contract as ego, it appears that I am confined 
            in the body, which is confined in the house, which is confined in the 
            large universe around it. But if I rest as Witness—the vast, open, 
            empty consciousness—it becomes obvious that I am not in the body, the 
            body is in me; I am not in this house, the house is in me; I am not in 
            the universe, the universe is in me. All of them are arising in the 
            vast, open, empty, pure, luminous Space of primordial Consciousness, 
            right now and right now and forever right now. Therefore, be 
            Consciousness.</p>
    
          <blockquote>"you must become the consciousness of life"</blockquote>
    
          <p>“It is true that the physical matter of your body is 
            inside the matter of the house, and the matter of the house is 
            inside the matter of the universe. But you are not merely matter or 
            physicality. You are also Consciousness as Such, of which matter is 
            merely the outer skin. The ego adopts the viewpoint of matter, and 
            therefore is constantly trapped by matter—trapped and tortured by the 
            physics of pain. But pain, too, arises in your consciousness, and you 
            can either be in pain, or find pain in you, so that you surround pain, 
            are bigger than pain, transcend pain, as you rest in the vast expanse 
            of pure Emptiness that you deeply and truly are.</p>
        </div>
    
        <div className="footer">
          <p>&copy; 2025 Luke D. Richards. All rights reserved. <NavLink to="/blog">Back to Blog</NavLink></p>
        </div>
      </div>
    </main>
  );
}