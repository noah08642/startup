import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./blog.css"

export function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <main>
      <div className="blogs">
        {posts.map(post => (
          <NavLink key={post._id} to={`/post/${post._id}`} className="blog-link">
            <div className="blog-item">
              <p>{post.title}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </main>
  );
}