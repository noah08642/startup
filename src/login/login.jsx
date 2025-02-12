import React from 'react';
import './login.css';

export function Login() {
  return (
    <main className="login-main">
      <form className="login" method="get" action="play.html">
        <div>
          <span>@</span>
          <input type="text" placeholder="your@email.com" />
        </div>
        <div>
          <span>🔒</span>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
        <button type="submit">Create</button>
      </form>
    </main>
  );
}