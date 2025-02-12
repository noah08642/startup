import React from 'react';

export function Blog() {
  return (
    <main>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        <div className="blogs">
          <a href="post1.html" className="blog-link">
            <div className="blog-item">
              <p>Ken Wilber and Guitar</p>
            </div>
          </a>
          <a href="post2.html" className="blog-link">
            <div className="blog-item">
              <p>Ken Wilber and the Iron Baby</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}