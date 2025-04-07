import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostEvent, PostNotifier } from '../uploadpost/postNotifier';
import './uploadpost.css';

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

    // all is well, time to notify of a new post:
    PostNotifier.broadcastEvent(blogPost.author, PostEvent.Post, blogPost.title);
  };



  return (
    <main>
      <div className="upload-container">
        <h1>Upload New Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
              className="upload-input"
            />
          </div>
          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              required
              className="upload-textarea"
            />
          </div>
          <button type="submit" className="upload-button">Upload Post</button>
        </form>
      </div>
    </main>
  );
}