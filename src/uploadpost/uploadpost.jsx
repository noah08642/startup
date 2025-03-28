import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './post.css';

export function UploadPost({ userName }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  if (userName !== 'lukerichards8') {
    return <main><div className="container"><p>Access Denied</p></div></main>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogPost = { title, content, author: userName, date: new Date() };
    const token = localStorage.getItem('userToken'); // Assuming token is stored during login
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(blogPost),
    });
    if (response.ok) {
      navigate('/blog');
    } else {
      alert('Failed to upload post');
    }
  };

  return (
    <main>
      <div className="container">
        <h1>Upload New Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
              style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
            />
          </div>
          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              required
              style={{ width: '100%', height: '200px', marginBottom: '10px', padding: '5px' }}
            />
          </div>
          <button type="submit" style={{ padding: '5px 10px' }}>Upload Post</button>
        </form>
      </div>
    </main>
  );
}