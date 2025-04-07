import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { PostEvent, PostNotifier } from './postNotifier';
import './post.css';

export function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${postId}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          setError('Post not found');
        }
      } catch (error) {
        setError('Error fetching post');
      }
    };
    fetchPost();
  }, [postId]);

  if (error) {
    return <main><div className="container"><p>{error}</p></div></main>;
  }

  if (!post) {
    return <main><div className="container"><p>Loading...</p></div></main>;
  }

  // all is well, time to notify of a new post:
  PostNotifier.broadcastEvent(post.author, PostEvent.Post, post.title);

  return (
    <main>
      <div className="container">
        <h1>{post.title}</h1>
        <p className="meta">
          Posted on <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time> by {post.author}
        </p>
        <div className="content">
          <p className="post-content">{post.content}</p>
        </div>
        <div className="footer">
          <p>&copy; 2025 Luke D. Richards. All rights reserved. <NavLink to="/blog">Back to Blog</NavLink></p>
        </div>
      </div>
    </main>
  );
}