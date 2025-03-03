import React, { useState } from 'react';
import './login.css';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    // Handle create logic here
    alert('Created account with Username: ' + username);
    setUsername('');
    setPassword('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert('Logged in with Username: ' + username);
    setUsername('');
    setPassword('');
  };

  return (
    <main className="login-main">
      <form className="login">
        <div>
          <span>@</span>
          <input
            type="text"
            placeholder="your@email.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <span>🔒</span>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} type="submit">Login</button>
        <button onClick={handleCreate} type="button">Create</button>
      </form>
    </main>
  );
}