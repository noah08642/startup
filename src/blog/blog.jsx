import React from 'react';

export function Blog() {
  return (
    <main>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        <div class="blogs">
          <a href="post1.html" class="blog-link"> /* Change this to NavLink */
            <div class="blog-item">
              <p>Ken Wilber and Guitar</p>
            </div>
          </a>
          <a href="post2.html" class="blog-link">
            <div class="blog-item">
              <p>Ken Wilber and the Iron Baby</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}