import React from 'react';
import { NavLink } from 'react-router-dom';

export function Blog() {
  return (
    <main>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        <div className="blogs">
          <NavLink to="/post1" className="blog-link">
            <div className="blog-item">
              <p>Ken Wilber and Guitar</p>
            </div>
          </NavLink>
          <NavLink to="/post1" className="blog-link">
            <div className="blog-item">
              <p>Ken Wilber and Guitar</p>
            </div>
          </NavLink>
        </div>
      </div>
    </main>
  );
}